const lessonLevels = [
  [
    { char: "你", pinyin: "nǐ", plain: "ni", meaning: "你 / you", word: "你好" },
    { char: "好", pinyin: "hǎo", plain: "hao", meaning: "好 / good", word: "你好" },
    { char: "人", pinyin: "rén", plain: "ren", meaning: "人 / person", word: "人民" },
    { char: "口", pinyin: "kǒu", plain: "kou", meaning: "口 / mouth", word: "入口" },
    { char: "日", pinyin: "rì", plain: "ri", meaning: "日 / sun", word: "日子" },
    { char: "月", pinyin: "yuè", plain: "yue", meaning: "月 / moon", word: "月亮" },
    { char: "山", pinyin: "shān", plain: "shan", meaning: "山 / mountain", word: "高山" },
    { char: "水", pinyin: "shuǐ", plain: "shui", meaning: "水 / water", word: "喝水" },
    { char: "火", pinyin: "huǒ", plain: "huo", meaning: "火 / fire", word: "火花" },
    { char: "木", pinyin: "mù", plain: "mu", meaning: "木 / wood", word: "木头" },
  ],
  [
    { char: "大", pinyin: "dà", plain: "da", meaning: "大 / big", word: "大家" },
    { char: "小", pinyin: "xiǎo", plain: "xiao", meaning: "小 / small", word: "小手" },
    { char: "中", pinyin: "zhōng", plain: "zhong", meaning: "中 / middle", word: "中国" },
    { char: "上", pinyin: "shàng", plain: "shang", meaning: "上 / up", word: "上学" },
    { char: "下", pinyin: "xià", plain: "xia", meaning: "下 / down", word: "下来" },
    { char: "天", pinyin: "tiān", plain: "tian", meaning: "天 / sky", word: "天空" },
    { char: "地", pinyin: "dì", plain: "di", meaning: "地 / ground", word: "土地" },
    { char: "白", pinyin: "bái", plain: "bai", meaning: "白 / white", word: "白云" },
    { char: "云", pinyin: "yún", plain: "yun", meaning: "云 / cloud", word: "云朵" },
    { char: "雨", pinyin: "yǔ", plain: "yu", meaning: "雨 / rain", word: "下雨" },
  ],
];

let lessons = lessonLevels[0];
let choicePool = lessons.map((item) => item.pinyin);

const state = {
  index: 0,
  score: 0,
  streak: 0,
  level: 1,
  mastery: Object.fromEntries(lessons.map((item) => [item.char, 0])),
  completed: Object.fromEntries(lessons.map((item) => [item.char, false])),
  writer: null,
  writerReady: false,
  quizActive: false,
  round: 0,
};

const els = {
  score: document.querySelector("#score"),
  streak: document.querySelector("#streak"),
  level: document.querySelector("#level"),
  taskTitle: document.querySelector("#task-title"),
  pinyinCard: document.querySelector("#pinyin-card"),
  pinyin: document.querySelector("#pinyin"),
  pinyinCover: document.querySelector("#pinyin-cover"),
  meaning: document.querySelector("#meaning"),
  fallbackCharacter: document.querySelector("#fallback-character"),
  writerTarget: document.querySelector("#writer-target"),
  writerStatus: document.querySelector("#writer-status"),
  coachMessage: document.querySelector("#coach-message"),
  choices: document.querySelector("#choices"),
  feedbackBubble: document.querySelector("#feedback-bubble"),
  miniGame: document.querySelector(".mini-game"),
  mascotStage: document.querySelector(".mascot-stage"),
  characterBank: document.querySelector("#character-bank"),
  progressCount: document.querySelector("#progress-count"),
  nextLevelButton: document.querySelector("#next-level-button"),
  animateButton: document.querySelector("#animate-button"),
  quizButton: document.querySelector("#quiz-button"),
  hintButton: document.querySelector("#hint-button"),
  soundButton: document.querySelector("#sound-button"),
};

function currentLesson() {
  return lessons[state.index];
}

function completedCount() {
  return lessons.filter((item) => state.completed[item.char]).length;
}

function isLevelComplete() {
  return completedCount() === lessons.length;
}

function updateStats() {
  els.score.textContent = state.score;
  els.streak.textContent = state.streak;
  els.level.textContent = state.level;

  const completed = completedCount();
  els.progressCount.textContent = `${completed} / ${lessons.length}`;
  els.nextLevelButton.hidden = !isLevelComplete();
}

function renderBank() {
  els.characterBank.innerHTML = "";
  lessons.forEach((item, index) => {
    const button = document.createElement("button");
    button.className = "char-token";
    button.type = "button";
    button.textContent = item.char;
    button.setAttribute("aria-label", `练习 ${item.char}，拼音 ${item.pinyin}`);
    button.disabled = isLevelComplete();
    if (index === state.index) button.classList.add("current");
    if (state.completed[item.char]) button.classList.add("mastered");
    button.addEventListener("click", () => {
      state.index = index;
      loadLesson("手动切换到了新汉字。");
    });
    els.characterBank.appendChild(button);
  });
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function renderChoices() {
  const lesson = currentLesson();
  const distractors = shuffle(choicePool.filter((item) => item !== lesson.pinyin)).slice(0, 3);
  const options = shuffle([lesson.pinyin, ...distractors]);

  els.choices.innerHTML = "";
  options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => checkPinyin(option, button));
    els.choices.appendChild(button);
  });
}

function checkPinyin(answer, button) {
  const lesson = currentLesson();
  const isCorrect = answer === lesson.pinyin;
  const round = state.round;

  els.choices.querySelectorAll("button").forEach((item) => {
    item.disabled = true;
    if (item.textContent === lesson.pinyin) item.classList.add("correct");
  });

  if (isCorrect) {
    button.classList.add("correct");
    showAnswerFeedback(true, "Great job!");
    state.score += 10 + state.level * 2;
    state.streak += 1;
    state.mastery[lesson.char] += 1;
    state.completed[lesson.char] = true;
    setPinyinRevealed(true);
    coach(`答对了！字芽把 ${lesson.char} 和 ${lesson.pinyin} 连起来了。`);
  } else {
    button.classList.add("wrong");
    showAnswerFeedback(false, "Try again!");
    state.streak = 0;
    state.mastery[lesson.char] = Math.max(0, state.mastery[lesson.char] - 1);
    coach(`差一点。${lesson.char} 读 ${lesson.pinyin}，词语可以记成“${lesson.word}”。`);
  }

  updateStats();
  renderBank();
  window.setTimeout(async () => {
    if (round !== state.round) return;
    if (isCorrect) {
      await playCorrectStrokeDemo(round);
      if (round !== state.round) return;
    }
    if (isLevelComplete()) {
      finishLevel();
      return;
    }
    chooseNextLesson();
    loadLesson(isCorrect ? "Xiaoya picked a character to review." : "Xiaoya picked a fresh character.");
  }, isCorrect ? 420 : 900);
}

function chooseNextLesson() {
  const weakest = lessons
    .map((item, index) => ({ index, mastery: state.mastery[item.char] }))
    .filter((item) => !state.completed[lessons[item.index].char])
    .sort((a, b) => a.mastery - b.mastery || Math.random() - 0.5);

  if (weakest.length === 0) return;
  const candidates = weakest.slice(0, Math.min(4, weakest.length));
  state.index = candidates[Math.floor(Math.random() * candidates.length)].index;
}

function finishLevel() {
  setActionButtonsDisabled(true);
  els.choices.querySelectorAll("button").forEach((button) => {
    button.disabled = true;
  });
  updateStats();
  renderBank();
  showAnswerFeedback(true, "Level clear!");
  els.writerStatus.textContent = "Level complete. Tap Next Level to continue.";
  coach(`Amazing! You completed all ${lessons.length} characters. Next Level is ready.`);
}

function goToNextLevel() {
  const nextLevelIndex = state.level % lessonLevels.length;
  lessons = lessonLevels[nextLevelIndex];
  choicePool = lessons.map((item) => item.pinyin);
  state.level += 1;
  state.index = 0;
  state.streak = 0;
  state.mastery = Object.fromEntries(lessons.map((item) => [item.char, 0]));
  state.completed = Object.fromEntries(lessons.map((item) => [item.char, false]));
  loadLesson(`Welcome to Level ${state.level}! Choose the right pinyin to fill the Word Bank.`);
}

function coach(message) {
  els.coachMessage.textContent = message;
}

function setPinyinRevealed(revealed) {
  els.pinyinCard.classList.toggle("revealed", revealed);
  els.pinyin.setAttribute("aria-hidden", String(!revealed));
  els.pinyinCover.setAttribute("aria-hidden", String(revealed));
}

function showAnswerFeedback(isCorrect, text) {
  els.feedbackBubble.textContent = isCorrect ? `${text} +${10 + state.level * 2}` : text;
  els.feedbackBubble.className = `feedback-bubble show ${isCorrect ? "success" : "error"}`;
  els.miniGame.classList.remove("is-success", "is-error");
  els.mascotStage.classList.remove("celebrate", "encourage");
  void els.miniGame.offsetWidth;
  els.miniGame.classList.add(isCorrect ? "is-success" : "is-error");
  els.mascotStage.classList.add(isCorrect ? "celebrate" : "encourage");

  window.setTimeout(() => {
    els.feedbackBubble.className = "feedback-bubble";
    els.miniGame.classList.remove("is-success", "is-error");
    els.mascotStage.classList.remove("celebrate", "encourage");
  }, 1050);
}

function setActionButtonsDisabled(disabled) {
  els.animateButton.disabled = disabled;
  els.quizButton.disabled = disabled;
  els.hintButton.disabled = disabled;
  els.soundButton.disabled = disabled;
}

function playCorrectStrokeDemo(round) {
  return new Promise((resolve) => {
    if (!state.writerReady || !state.writer) {
      window.setTimeout(resolve, 520);
      return;
    }

    let finished = false;
    const complete = () => {
      if (finished) return;
      finished = true;
      if (round === state.round) {
        state.writer.hideCharacter();
        state.writer.showOutline();
        els.writerStatus.textContent = "Auto demo done. Grid restored.";
        setActionButtonsDisabled(false);
      }
      window.setTimeout(resolve, 360);
    };

    setActionButtonsDisabled(true);
    state.writer.cancelQuiz();
    state.quizActive = false;
    els.writerStatus.textContent = "Correct! Playing one auto stroke demo.";

    try {
      const animation = state.writer.animateCharacter({ onComplete: complete });
      if (animation && typeof animation.then === "function") {
        animation.then(complete).catch(complete);
      }
    } catch (error) {
      complete();
    }
  });
}

function sayCurrent() {
  const lesson = currentLesson();
  if (!("speechSynthesis" in window)) {
    coach(`读音是 ${lesson.pinyin}。这个浏览器暂时不能朗读。`);
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(lesson.char);
  utterance.lang = "zh-CN";
  utterance.rate = 0.78;
  window.speechSynthesis.speak(utterance);
  coach(`听读音：${lesson.char}，${lesson.pinyin}。`);
}

function buildWriter(lesson) {
  els.writerTarget.classList.remove("writer-loaded");
  els.fallbackCharacter.textContent = lesson.char;

  if (!window.HanziWriter) {
    state.writerReady = false;
    els.writerStatus.textContent = "Stroke tool is loading. Try Pinyin Quest first.";
    return;
  }

  state.writerReady = true;
  els.writerTarget.classList.add("writer-loaded");

  if (state.writer) {
    state.writer.cancelQuiz();
    state.writer.setCharacter(lesson.char);
    state.writer.showOutline();
    state.writer.hideCharacter();
    return;
  }

  state.writer = HanziWriter.create("writer-target", lesson.char, {
    width: 320,
    height: 320,
    padding: 24,
    showCharacter: false,
    showOutline: true,
    strokeColor: "#17202a",
    outlineColor: "#d9c7ab",
    drawingColor: "#2f7d6d",
    radicalColor: "#c4552b",
    strokeAnimationSpeed: 1.2,
    delayBetweenStrokes: 180,
    showHintAfterMisses: 1,
    highlightOnComplete: true,
    onLoadCharDataError() {
      state.writerReady = false;
      els.writerTarget.classList.remove("writer-loaded");
      els.writerStatus.textContent = "Stroke data did not load. Pinyin Quest still works.";
    },
  });
}

function loadLesson(reason = "") {
  const lesson = currentLesson();
  state.round += 1;
  state.quizActive = false;
  els.taskTitle.textContent = `Help Xiaoya learn "${lesson.char}"`;
  els.pinyin.textContent = lesson.pinyin;
  els.meaning.textContent = `${lesson.meaning} · ${lesson.word}`;
  setPinyinRevealed(Boolean(state.completed[lesson.char]));
  buildWriter(lesson);
  setActionButtonsDisabled(false);
  renderChoices();
  renderBank();
  updateStats();
  els.writerStatus.textContent = state.writerReady
    ? "Watch the stroke demo, then trace in the grid."
    : "Basic mode: practice pinyin while strokes load.";
  coach(reason || `I am learning "${lesson.char}". Help me choose the right pinyin.`);
}

function animateCurrent() {
  if (!state.writerReady || !state.writer) {
    coach("笔顺动画需要 Hanzi Writer 加载成功；现在先用田字格认形。");
    return;
  }
  state.writer.cancelQuiz();
  state.quizActive = false;
  els.writerStatus.textContent = "Playing the stroke demo.";
  state.writer.animateCharacter({
    onComplete() {
      els.writerStatus.textContent = "Demo done. Ready to trace.";
    },
  });
}

function startStrokeQuiz() {
  const lesson = currentLesson();
  if (!state.writerReady || !state.writer) {
    coach(`描红需要加载笔顺库。先记住：${lesson.char} 读 ${lesson.pinyin}。`);
    return;
  }

  state.writer.cancelQuiz();
  state.writer.hideCharacter();
  state.writer.showOutline();
  state.quizActive = true;
  els.writerStatus.textContent = "Your turn: trace in the correct stroke order.";

  state.writer.quiz({
    onCorrectStroke(strokeData) {
      els.writerStatus.textContent = `Stroke ${strokeData.strokeNum + 1} is correct. ${strokeData.strokesRemaining} left.`;
    },
    onMistake(strokeData) {
      state.streak = 0;
      updateStats();
      els.writerStatus.textContent = "Try that stroke again. Follow the highlight.";
      coach(`小芽发现第 ${strokeData.strokeNum + 1} 笔最容易错，慢一点会更稳。`);
    },
    onComplete(summary) {
      state.quizActive = false;
      state.score += Math.max(8, 24 - summary.totalMistakes * 3);
      state.streak += 1;
      state.mastery[lesson.char] += summary.totalMistakes === 0 ? 2 : 1;
      updateStats();
      renderBank();
      els.writerStatus.textContent = `Trace complete. Mistakes: ${summary.totalMistakes}.`;
      coach(summary.totalMistakes === 0
        ? `漂亮，${lesson.char} 的字形和笔顺都很稳。`
        : `完成了！下次重点留意 ${lesson.char} 的起笔和收笔。`);
    },
  });
}

function giveHint() {
  const lesson = currentLesson();
  const hints = [
    `${lesson.char} 的拼音是 ${lesson.pinyin}，可以和词语“${lesson.word}”一起记。`,
    "田字格中间的横竖线用来帮你判断字的重心。",
    "先看整体结构，再看第一笔从哪里开始，会更容易写准。",
    "读一遍拼音，再描一遍笔顺，记忆会更牢。",
  ];
  coach(hints[Math.floor(Math.random() * hints.length)]);
}

els.animateButton.addEventListener("click", animateCurrent);
els.quizButton.addEventListener("click", startStrokeQuiz);
els.hintButton.addEventListener("click", giveHint);
els.soundButton.addEventListener("click", sayCurrent);
els.nextLevelButton.addEventListener("click", goToNextLevel);

window.addEventListener("load", () => {
  loadLesson();
  window.setTimeout(() => {
    if (!state.writerReady && window.HanziWriter) loadLesson("笔顺库已加载，可以开始描红。");
  }, 500);
});
