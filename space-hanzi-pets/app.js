const lessonLevels = [
  [
    { char: "你", pinyin: "nǐ", meaning: "你 / you", word: "你好" },
    { char: "好", pinyin: "hǎo", meaning: "好 / good", word: "你好" },
    { char: "人", pinyin: "rén", meaning: "人 / person", word: "人民" },
    { char: "口", pinyin: "kǒu", meaning: "口 / mouth", word: "入口" },
    { char: "日", pinyin: "rì", meaning: "日 / sun", word: "日子" },
    { char: "月", pinyin: "yuè", meaning: "月 / moon", word: "月亮" },
  ],
  [
    { char: "大", pinyin: "dà", meaning: "大 / big", word: "大家" },
    { char: "小", pinyin: "xiǎo", meaning: "小 / small", word: "小手" },
    { char: "中", pinyin: "zhōng", meaning: "中 / middle", word: "中国" },
    { char: "上", pinyin: "shàng", meaning: "上 / up", word: "上学" },
    { char: "下", pinyin: "xià", meaning: "下 / down", word: "下来" },
    { char: "天", pinyin: "tiān", meaning: "天 / sky", word: "天空" },
  ],
];

const pets = [
  { id: "fox", name: "Nova Fox", className: "pet-fox", tag: "Fast pilot" },
  { id: "bunny", name: "Luna Bunny", className: "pet-bunny", tag: "Moon jumper" },
  { id: "panda", name: "Orbit Panda", className: "pet-panda", tag: "Calm engineer" },
  { id: "cat", name: "Comet Cat", className: "pet-cat", tag: "Star scout" },
];

const gearSlots = [
  { id: "helmet", icon: "◐", className: "has-helmet", art: "helmet", type: "head" },
  { id: "jetpack", icon: "⇧", className: "has-jetpack", art: "jetpack", type: "back" },
  { id: "badge", icon: "★", className: "has-badge", art: "badge", type: "badge" },
  { id: "boots", icon: "▰", className: "has-boots", art: "boots", type: "feet" },
  { id: "cape", icon: "◢", className: "has-cape", art: "cape", type: "cloak" },
  { id: "shield", icon: "⬡", className: "has-shield", art: "shield", type: "guard" },
  { id: "orb", icon: "✦", className: "has-orb", art: "orb", type: "pet" },
  { id: "gloves", icon: "◆", className: "has-gloves", art: "gloves", type: "hands" },
];

const petGearSets = {
  fox: {
    helmet: { name: "Solar Scout Visor", colors: ["#ffb15f", "#61e7ff", "#ff74d4", "#5d2e00"] },
    jetpack: { name: "Comet Tail Pack", colors: ["#ff8a4c", "#ffd166", "#61e7ff", "#5d2e00"] },
    badge: { name: "Brave Sun Badge", colors: ["#ffd166", "#ff8a4c", "#fff1b8", "#6a3200"] },
    boots: { name: "Flash Paw Boots", colors: ["#ff9c56", "#61e7ff", "#ffd166", "#5d2e00"] },
    cape: { name: "Aurora Flame Cape", colors: ["#ff74d4", "#ff8a4c", "#61e7ff", "#561a4b"] },
    shield: { name: "Sunburst Shield", colors: ["#ffd166", "#ff8a4c", "#61e7ff", "#5d2e00"] },
    orb: { name: "Ember Orbit Spark", colors: ["#ff74d4", "#ffd166", "#61e7ff", "#5d2e00"] },
    gloves: { name: "Meteor Paw Gloves", colors: ["#ffd166", "#ff74d4", "#61e7ff", "#5d2e00"] },
  },
  bunny: {
    helmet: { name: "Moon Petal Helmet", colors: ["#f2f6ff", "#ffb7df", "#bcd3ff", "#4d5080"] },
    jetpack: { name: "Lunar Hop Pack", colors: ["#bcd3ff", "#f2f6ff", "#ffb7df", "#4d5080"] },
    badge: { name: "Crescent Charm Badge", colors: ["#fff1b8", "#bcd3ff", "#ffb7df", "#4d5080"] },
    boots: { name: "Soft Moon Boots", colors: ["#f2f6ff", "#bcd3ff", "#ffb7df", "#4d5080"] },
    cape: { name: "Starlace Ribbon Cape", colors: ["#ffb7df", "#bcd3ff", "#f2f6ff", "#4d5080"] },
    shield: { name: "Moonbeam Shield", colors: ["#bcd3ff", "#f2f6ff", "#ffb7df", "#4d5080"] },
    orb: { name: "Dream Orbit Pearl", colors: ["#ffb7df", "#f2f6ff", "#bcd3ff", "#4d5080"] },
    gloves: { name: "Cloud Puff Gloves", colors: ["#f2f6ff", "#ffb7df", "#bcd3ff", "#4d5080"] },
  },
  panda: {
    helmet: { name: "Astro Bamboo Helm", colors: ["#7cffb2", "#f7f8ff", "#161b3d", "#143824"] },
    jetpack: { name: "Bamboo Booster Pack", colors: ["#7cffb2", "#5d8cff", "#f7f8ff", "#143824"] },
    badge: { name: "Zen Star Badge", colors: ["#ffd166", "#7cffb2", "#f7f8ff", "#143824"] },
    boots: { name: "Steady Step Boots", colors: ["#161b3d", "#7cffb2", "#ffd166", "#143824"] },
    cape: { name: "Galaxy Leaf Cape", colors: ["#7cffb2", "#5d8cff", "#f7f8ff", "#143824"] },
    shield: { name: "Bamboo Guard Shield", colors: ["#7cffb2", "#161b3d", "#ffd166", "#143824"] },
    orb: { name: "Calm Orbit Seed", colors: ["#7cffb2", "#f7f8ff", "#5d8cff", "#143824"] },
    gloves: { name: "Engineer Paw Gloves", colors: ["#ffd166", "#161b3d", "#7cffb2", "#143824"] },
  },
  cat: {
    helmet: { name: "Comet Crown Helm", colors: ["#b58cff", "#61e7ff", "#ff74d4", "#3a226f"] },
    jetpack: { name: "Stardust Sneak Pack", colors: ["#b58cff", "#ff74d4", "#61e7ff", "#3a226f"] },
    badge: { name: "Night Scout Badge", colors: ["#ffd166", "#b58cff", "#61e7ff", "#3a226f"] },
    boots: { name: "Silent Star Boots", colors: ["#6f4bd8", "#61e7ff", "#ff74d4", "#3a226f"] },
    cape: { name: "Nebula Whisker Cape", colors: ["#6f4bd8", "#ff74d4", "#61e7ff", "#3a226f"] },
    shield: { name: "Prism Claw Shield", colors: ["#61e7ff", "#b58cff", "#ffd166", "#3a226f"] },
    orb: { name: "Twilight Yarn Orb", colors: ["#ff74d4", "#b58cff", "#61e7ff", "#3a226f"] },
    gloves: { name: "Spark Claw Gloves", colors: ["#ff74d4", "#61e7ff", "#b58cff", "#3a226f"] },
  },
};

let lessons = lessonLevels[0];
let choicePool = lessons.map((item) => item.pinyin);

const state = {
  selectedPet: pets[0],
  index: 0,
  score: 0,
  galaxy: 1,
  petLevel: 1,
  xp: 0,
  xpTarget: 100,
  completed: Object.fromEntries(lessons.map((item) => [item.char, false])),
  traced: Object.fromEntries(lessons.map((item) => [item.char, false])),
  traceStarted: Object.fromEntries(lessons.map((item) => [item.char, false])),
  lessonReadyForNext: false,
  equipped: {},
  writer: null,
  writerReady: false,
  strokeDemoPlaying: false,
  pendingEvolution: false,
  pendingLevelReward: false,
  round: 0,
};

const els = {
  startScreen: document.querySelector("#start-screen"),
  gameScreen: document.querySelector("#game-screen"),
  petSelect: document.querySelector("#pet-select"),
  petAvatar: document.querySelector("#pet-avatar"),
  petName: document.querySelector("#pet-name"),
  evolutionName: document.querySelector("#evolution-name"),
  xpFill: document.querySelector("#xp-fill"),
  xpLabel: document.querySelector("#xp-label"),
  gearSlots: document.querySelector("#gear-slots"),
  gearCount: document.querySelector("#gear-count"),
  score: document.querySelector("#score"),
  petLevel: document.querySelector("#pet-level"),
  galaxy: document.querySelector("#galaxy"),
  taskTitle: document.querySelector("#task-title"),
  currentChar: document.querySelector("#current-char"),
  pinyinCard: document.querySelector("#pinyin-card"),
  pinyin: document.querySelector("#pinyin"),
  pinyinCover: document.querySelector("#pinyin-cover"),
  meaning: document.querySelector("#meaning"),
  choices: document.querySelector("#choices"),
  coach: document.querySelector("#coach-message"),
  progress: document.querySelector("#progress"),
  writerTarget: document.querySelector("#writer-target"),
  writerFrame: document.querySelector(".writer-frame"),
  fallbackCharacter: document.querySelector("#fallback-character"),
  writerStatus: document.querySelector("#writer-status"),
  soundButton: document.querySelector("#sound-button"),
  demoButton: document.querySelector("#demo-button"),
  hintButton: document.querySelector("#hint-button"),
  nextButton: document.querySelector("#next-button"),
  rewardModal: document.querySelector("#reward-modal"),
  rewardOptions: document.querySelector("#reward-options"),
  evolutionModal: document.querySelector("#evolution-modal"),
  evolutionMessage: document.querySelector("#evolution-message"),
  evolutionClose: document.querySelector("#evolution-close"),
  fxLayer: document.querySelector("#fx-layer"),
};

function currentLesson() {
  return lessons[state.index];
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function completedCount() {
  return lessons.filter((item) => state.completed[item.char]).length;
}

function isGalaxyComplete() {
  return completedCount() === lessons.length;
}

function evolutionStage() {
  if (state.petLevel >= 5) return 3;
  if (state.petLevel >= 3) return 2;
  return 1;
}

function evolutionName() {
  if (state.petLevel >= 5) return "Legendary Star Guardian";
  if (state.petLevel >= 3) return "Cosmic Ranger";
  return "Rookie Explorer";
}

function currentGearPool() {
  const gearSet = petGearSets[state.selectedPet.id] || petGearSets.fox;
  return gearSlots.map((slot) => ({
    ...slot,
    ...gearSet[slot.id],
  }));
}

function renderPetChoices() {
  els.petSelect.innerHTML = "";
  pets.forEach((pet) => {
    const button = document.createElement("button");
    button.className = "pet-option";
    button.type = "button";
    button.innerHTML = `
      <div class="pet-avatar ${pet.className} evo-1" aria-hidden="true">
        <span class="ear left-ear"></span>
        <span class="ear right-ear"></span>
        <span class="face"><span class="eye left-eye"></span><span class="eye right-eye"></span><span class="nose"></span><span class="smile"></span></span>
        <span class="body"></span>
        <span class="tail"></span>
      </div>
      <strong>${pet.name}</strong>
      <span>${pet.tag}</span>
    `;
    button.addEventListener("click", () => startGame(pet));
    els.petSelect.appendChild(button);
  });
}

function startGame(pet) {
  state.selectedPet = pet;
  state.equipped = {};
  els.startScreen.hidden = true;
  els.gameScreen.hidden = false;
  window.scrollTo(0, 0);
  updatePetVisual();
  renderGearSlots();
  loadLesson("Welcome aboard. Choose the correct pinyin to earn star gear.");
}

function updatePetVisual() {
  const stage = evolutionStage();
  els.petAvatar.className = [
    "pet-avatar",
    state.selectedPet.className,
    `evo-${stage}`,
    ...Object.values(state.equipped).map((item) => item.className),
  ].join(" ");
  els.petName.textContent = state.selectedPet.name;
  els.evolutionName.textContent = evolutionName();
}

function renderGearSlots() {
  const gearPool = currentGearPool();
  els.gearSlots.innerHTML = "";
  gearPool.forEach((gear) => {
    const slot = document.createElement("div");
    const owned = Boolean(state.equipped[gear.id]);
    slot.className = `gear-slot ${owned ? "unlocked" : "locked"}`;
    slot.innerHTML = `
      ${gearArt(gear)}
      <span>
        <strong>${owned ? "Equipped" : "Locked"}</strong>
        ${gear.name}
      </span>
    `;
    els.gearSlots.appendChild(slot);
  });
  const equippedCount = Object.keys(state.equipped).length;
  els.gearCount.textContent = `${equippedCount} / ${gearPool.length} equipped`;
}

function gearArt(gear) {
  const [primary, secondary, accent, dark] = gear.colors || ["#61e7ff", "#5d8cff", "#ffd166", "#17367c"];
  const art = {
    helmet: `
      <svg class="gear-art" viewBox="0 0 120 92" aria-hidden="true">
        <path d="M17 70c3-39 22-58 43-58s40 19 43 58H17Z" fill="${primary}"/>
        <path d="M30 62c7-23 18-34 35-34 13 0 23 8 30 25" fill="none" stroke="${secondary}" stroke-width="8" stroke-linecap="round"/>
        <path d="M22 70h76l-9 12H31Z" fill="${accent}"/>
        <circle cx="88" cy="37" r="8" fill="${secondary}"/>
        <circle cx="91" cy="34" r="3" fill="#fff"/>
      </svg>`,
    jetpack: `
      <svg class="gear-art" viewBox="0 0 120 92" aria-hidden="true">
        <rect x="25" y="14" width="25" height="52" rx="10" fill="${primary}"/>
        <rect x="70" y="14" width="25" height="52" rx="10" fill="${primary}"/>
        <rect x="47" y="28" width="26" height="26" rx="7" fill="${secondary}"/>
        <path d="M32 66 24 88l16-7 14 7-9-22ZM76 66l-8 22 16-7 14 7-9-22Z" fill="${accent}"/>
        <path d="M37 28h2M82 28h2" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
      </svg>`,
    badge: `
      <svg class="gear-art" viewBox="0 0 120 92" aria-hidden="true">
        <path d="M60 12 94 30v30L60 82 26 60V30Z" fill="${primary}"/>
        <path d="M60 21 84 34v21L60 72 36 55V34Z" fill="#fff1b8" opacity=".55"/>
        <path d="m60 24 7 15 17 2-12 12 3 17-15-8-15 8 3-17-12-12 17-2Z" fill="${dark}"/>
      </svg>`,
    boots: `
      <svg class="gear-art" viewBox="0 0 120 92" aria-hidden="true">
        <path d="M22 31h31v30c0 10-8 18-19 18H20c-8 0-12-8-7-14l9-10Z" fill="${primary}"/>
        <path d="M68 31h31v30c0 10-8 18-19 18H66c-8 0-12-8-7-14l9-10Z" fill="${secondary}"/>
        <path d="M26 77h31M72 77h31" stroke="${accent}" stroke-width="6" stroke-linecap="round"/>
        <path d="M31 42h15M77 42h15" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".7"/>
      </svg>`,
    cape: `
      <svg class="gear-art" viewBox="0 0 120 92" aria-hidden="true">
        <path d="M37 14h46l16 65c-21-8-34 7-52 0L21 79Z" fill="${primary}"/>
        <path d="M37 14h46l-8 18H45Z" fill="${secondary}"/>
        <path d="M47 36c13 7 21 6 31 0M41 51c18 8 31 6 43-1" stroke="#ffffff" stroke-width="4" opacity=".65"/>
      </svg>`,
    shield: `
      <svg class="gear-art" viewBox="0 0 120 92" aria-hidden="true">
        <path d="M60 10 96 24v25c0 22-15 35-36 43-21-8-36-21-36-43V24Z" fill="${primary}"/>
        <path d="M60 20 84 30v18c0 14-9 24-24 31-15-7-24-17-24-31V30Z" fill="${dark}" opacity=".86"/>
        <path d="m60 29 6 13 15 2-11 10 3 15-13-7-13 7 3-15-11-10 15-2Z" fill="${accent}"/>
      </svg>`,
    orb: `
      <svg class="gear-art" viewBox="0 0 120 92" aria-hidden="true">
        <circle cx="60" cy="46" r="24" fill="${primary}"/>
        <circle cx="51" cy="38" r="10" fill="#ffffff" opacity=".62"/>
        <path d="M24 46c20-18 52-18 72 0M24 46c20 18 52 18 72 0" fill="none" stroke="${secondary}" stroke-width="5" stroke-linecap="round"/>
        <circle cx="28" cy="46" r="5" fill="${accent}"/>
        <circle cx="92" cy="46" r="5" fill="${accent}"/>
      </svg>`,
    gloves: `
      <svg class="gear-art" viewBox="0 0 120 92" aria-hidden="true">
        <path d="M32 24c13 0 22 10 22 24v20H29c-12 0-21-9-21-20 0-13 10-24 24-24Z" fill="${primary}"/>
        <path d="M88 24c-13 0-22 10-22 24v20h25c12 0 21-9 21-20 0-13-10-24-24-24Z" fill="${secondary}"/>
        <path d="M26 68h31M63 68h31" stroke="${accent}" stroke-width="6" stroke-linecap="round"/>
        <path d="M30 34c-7 5-11 10-12 18M90 34c7 5 11 10 12 18" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".65"/>
      </svg>`,
  };
  return art[gear.art] || `<span class="reward-icon">${gear.icon}</span>`;
}

function flyFxToPet(sourceRect, content, className, options = {}) {
  if (!els.fxLayer || !sourceRect || !els.petAvatar) return;
  const targetRect = els.petAvatar.getBoundingClientRect();
  const sourceX = sourceRect.left + sourceRect.width / 2 + (options.offsetX || 0);
  const sourceY = sourceRect.top + sourceRect.height / 2 + (options.offsetY || 0);
  const targetX = targetRect.left + targetRect.width / 2;
  const targetY = targetRect.top + targetRect.height / 2;
  const fx = document.createElement("span");
  fx.className = className;
  fx.style.left = `${sourceX}px`;
  fx.style.top = `${sourceY}px`;
  fx.style.setProperty("--fly-x", `${targetX - sourceX}px`);
  fx.style.setProperty("--fly-y", `${targetY - sourceY}px`);
  fx.style.setProperty("--fly-delay", `${options.delay || 0}ms`);
  fx.innerHTML = content;
  els.fxLayer.appendChild(fx);
  fx.addEventListener("animationend", () => fx.remove(), { once: true });
}

function flyStarsToPet(sourceElement, label = "+XP") {
  if (!sourceElement) return;
  const rect = sourceElement.getBoundingClientRect();
  const starCount = 7;
  for (let index = 0; index < starCount; index += 1) {
    const offsetX = (Math.random() - 0.5) * rect.width * 0.72;
    const offsetY = (Math.random() - 0.5) * rect.height * 0.72;
    flyFxToPet(
      rect,
      index === 0 ? `<strong>${label}</strong><span>★</span>` : "<span>★</span>",
      "fly-fx fly-star",
      { delay: index * 55, offsetX, offsetY },
    );
  }
}

function flyGearToPet(gear, sourceElement) {
  const rect = sourceElement?.getBoundingClientRect();
  flyFxToPet(rect, gearArt(gear), "fly-fx fly-gear");
}

function updateStats() {
  els.score.textContent = state.score;
  els.petLevel.textContent = state.petLevel;
  els.galaxy.textContent = state.galaxy;
  els.progress.textContent = `${completedCount()} / ${lessons.length}`;
  els.xpFill.style.width = `${Math.min(100, (state.xp / state.xpTarget) * 100)}%`;
  els.xpLabel.textContent = `${state.xp} / ${state.xpTarget} XP`;
  updatePetVisual();
}

function updateTraceVisual() {
  const lesson = currentLesson();
  els.writerFrame.classList.toggle(
    "trace-ready",
    state.traceStarted[lesson.char] && !state.traced[lesson.char] && !state.strokeDemoPlaying,
  );
  els.writerFrame.classList.toggle("trace-complete", Boolean(state.traced[lesson.char]));
}

function setPinyinRevealed(revealed) {
  els.pinyinCard.classList.toggle("revealed", revealed);
  els.pinyin.setAttribute("aria-hidden", String(!revealed));
  els.pinyinCover.setAttribute("aria-hidden", String(revealed));
}

function renderChoices() {
  const lesson = currentLesson();
  const options = shuffle([
    lesson.pinyin,
    ...shuffle(choicePool.filter((item) => item !== lesson.pinyin)).slice(0, 3),
  ]);
  els.choices.innerHTML = "";
  options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(option, button));
    els.choices.appendChild(button);
  });
}

function checkAnswer(answer, button) {
  const lesson = currentLesson();
  const isCorrect = answer === lesson.pinyin;
  const round = state.round;
  els.choices.querySelectorAll("button").forEach((choice) => {
    choice.disabled = true;
    if (choice.textContent === lesson.pinyin) choice.classList.add("correct");
  });

  if (isCorrect) {
    button.classList.add("correct");
    setPinyinRevealed(true);
    state.score += 20;
    state.completed[lesson.char] = true;
    addXp(20, "Correct answer! +20 pet XP.", { deferProgressModal: true });
    flyStarsToPet(button, "+20 XP");
    state.lessonReadyForNext = true;
    els.nextButton.hidden = false;
    playAutoStrokeDemoThenTrace();
  } else {
    button.classList.add("wrong");
    els.coach.textContent = `Almost. ${lesson.char} is pronounced ${lesson.pinyin}.`;
  }

  updateStats();
  window.setTimeout(() => {
    if (round !== state.round || isCorrect) return;
    chooseNextLesson();
    loadLesson("New signal detected. Try this character.");
  }, 1100);
}

function addXp(amount, message, options = {}) {
  state.xp += amount;
  let evolved = false;
  let leveledUp = false;
  while (state.xp >= state.xpTarget) {
    const oldStage = evolutionStage();
    state.xp -= state.xpTarget;
    state.petLevel += 1;
    leveledUp = true;
    state.xpTarget = 100 + (state.petLevel - 1) * 45;
    if (evolutionStage() > oldStage) evolved = true;
  }
  els.coach.textContent = message;
  updateStats();
  if (options.deferProgressModal) {
    if (evolved) state.pendingEvolution = true;
    if (leveledUp) state.pendingLevelReward = true;
    return;
  }
  if (evolved) openEvolutionModal();
  if (leveledUp) {
    window.setTimeout(() => openRewardModal(), evolved ? 550 : 120);
  }
}

function showPendingProgressModals() {
  const shouldShowEvolution = state.pendingEvolution;
  const shouldShowReward = state.pendingLevelReward;
  state.pendingEvolution = false;
  state.pendingLevelReward = false;
  if (shouldShowEvolution) openEvolutionModal();
  if (shouldShowReward) {
    window.setTimeout(() => openRewardModal(), shouldShowEvolution ? 550 : 220);
  }
}

function openRewardModal() {
  const gearPool = currentGearPool();
  const unlocked = Object.keys(state.equipped).length;
  const available = gearPool.filter((gear) => !state.equipped[gear.id]);
  if (!available.length) {
    els.rewardOptions.innerHTML = `
      <div class="reward-complete">
        <strong>Full set complete!</strong>
        <span>Your space buddy already has every upgrade.</span>
        <button type="button" id="reward-close">Keep Flying</button>
      </div>
    `;
    els.rewardModal.hidden = false;
    document.querySelector("#reward-close").addEventListener("click", () => {
      els.rewardModal.hidden = true;
    });
    return;
  }

  const options = shuffle(available).slice(0, 3);
  els.rewardOptions.innerHTML = "";
  options.forEach((gear) => {
    const button = document.createElement("button");
    button.className = "reward-item";
    button.type = "button";
    button.innerHTML = `
      <span class="reward-rank">Upgrade ${unlocked + 1}</span>
      ${gearArt(gear)}
      <strong>${gear.name}</strong>
      <small>${gear.type || "gear"}</small>
    `;
    button.addEventListener("click", () => equipGear(gear, button));
    els.rewardOptions.appendChild(button);
  });
  els.rewardModal.hidden = false;
}

function equipGear(gear, sourceElement) {
  flyGearToPet(gear, sourceElement);
  state.equipped[gear.id] = gear;
  els.rewardModal.hidden = true;
  window.setTimeout(() => {
    renderGearSlots();
    updatePetVisual();
    els.coach.textContent = `${gear.name} equipped. Keep learning to unlock more upgrades.`;
  }, 640);
}

function openEvolutionModal() {
  els.evolutionMessage.textContent = `${state.selectedPet.name} became a ${evolutionName()}!`;
  els.evolutionModal.hidden = false;
}

function finishGalaxy() {
  els.coach.textContent = `Galaxy ${state.galaxy} complete! Your pet gained a cosmic boost.`;
  addXp(60, "Galaxy complete! +60 pet XP.");
  window.setTimeout(() => {
    state.galaxy += 1;
    const levelIndex = (state.galaxy - 1) % lessonLevels.length;
    lessons = lessonLevels[levelIndex];
    choicePool = lessons.map((item) => item.pinyin);
    state.completed = Object.fromEntries(lessons.map((item) => [item.char, false]));
    state.traced = Object.fromEntries(lessons.map((item) => [item.char, false]));
    state.traceStarted = Object.fromEntries(lessons.map((item) => [item.char, false]));
    state.index = 0;
    loadLesson(`Galaxy ${state.galaxy} begins. New characters are online.`);
  }, 900);
}

function goToNextLesson() {
  if (!state.lessonReadyForNext) {
    els.writerStatus.textContent = "Answer correctly before moving to the next character.";
    return;
  }
  if (isGalaxyComplete()) {
    finishGalaxy();
    return;
  }
  chooseNextLesson();
  loadLesson("Next character locked in. Choose the right pinyin.");
}

function chooseNextLesson() {
  const remaining = lessons
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => !state.completed[item.char]);
  if (!remaining.length) return;
  state.index = shuffle(remaining)[0].index;
}

function loadLesson(message = "") {
  const lesson = currentLesson();
  state.round += 1;
  state.strokeDemoPlaying = false;
  state.lessonReadyForNext = Boolean(state.completed[lesson.char]);
  els.nextButton.disabled = false;
  els.nextButton.hidden = !state.lessonReadyForNext;
  els.taskTitle.textContent = `Choose the pinyin for "${lesson.char}"`;
  els.currentChar.textContent = lesson.char;
  els.pinyin.textContent = lesson.pinyin;
  els.meaning.textContent = `${lesson.meaning} · ${lesson.word}`;
  els.fallbackCharacter.textContent = lesson.char;
  setPinyinRevealed(Boolean(state.completed[lesson.char]));
  buildWriter(lesson.char);
  renderChoices();
  updateStats();
  updateTraceVisual();
  els.coach.textContent = message || "Pick the right pinyin to power the rocket.";
  els.writerStatus.textContent = state.traced[lesson.char]
    ? "Trace bonus collected for this character. Tap Next."
    : state.completed[lesson.char]
      ? "Stroke demo plays first. Then trace directly in the grid."
    : "Answer first, then trace to gain bonus pet XP.";
  if (state.completed[lesson.char] && !state.traced[lesson.char]) {
    window.setTimeout(() => playAutoStrokeDemoThenTrace(), 80);
  }
}

function buildWriter(character) {
  els.writerTarget.classList.remove("writer-loaded");
  if (!window.HanziWriter) {
    state.writerReady = false;
    els.writerStatus.textContent = "Stroke tool is loading. Pinyin Quest still works.";
    return;
  }

  state.writerReady = true;
  els.writerTarget.classList.add("writer-loaded");
  if (state.writer) {
    state.writer.cancelQuiz();
    state.writer.setCharacter(character);
    state.writer.showOutline();
    state.writer.hideCharacter();
    return;
  }

  state.writer = HanziWriter.create("writer-target", character, {
    width: 320,
    height: 320,
    padding: 24,
    showCharacter: false,
    showOutline: true,
    strokeColor: "#10163f",
    outlineColor: "#bcc4d6",
    drawingColor: "#5d8cff",
    radicalColor: "#ff74d4",
    strokeAnimationSpeed: 1.2,
    delayBetweenStrokes: 150,
    showHintAfterMisses: 1,
    highlightOnComplete: true,
    onLoadCharDataError() {
      state.writerReady = false;
      els.writerTarget.classList.remove("writer-loaded");
      els.writerStatus.textContent = "Stroke data did not load. Keep playing Pinyin Quest.";
    },
  });
}

function playStrokeDemo({ auto = false, onComplete } = {}) {
  const lesson = currentLesson();
  const round = state.round;
  if (state.traceStarted[lesson.char] && !state.traced[lesson.char]) {
    els.writerStatus.textContent = "Finish this trace first, then try the stroke demo on the next character.";
    return false;
  }
  if (state.strokeDemoPlaying) {
    els.writerStatus.textContent = "Stroke demo is already playing.";
    return false;
  }
  if (!state.writerReady || !state.writer) {
    els.writerStatus.textContent = auto
      ? "Stroke demo is still loading. Trace will unlock as soon as it is ready."
      : "The stroke demo is still loading.";
    if (auto) {
      startTraceWhenWriterReady(round);
    }
    return false;
  }
  state.strokeDemoPlaying = true;
  updateTraceVisual();
  els.nextButton.disabled = true;
  state.writer.cancelQuiz();
  els.writerStatus.textContent = auto
    ? "Great! Watch the stroke order first."
    : "Playing stroke demo.";
  state.writer.animateCharacter({
    onComplete() {
      if (round !== state.round) return;
      state.strokeDemoPlaying = false;
      els.nextButton.disabled = false;
      updateTraceVisual();
      els.writerStatus.textContent = auto
        ? "Stroke demo done. Now trace directly in the grid."
        : "Demo done. Trace for bonus XP.";
      if (onComplete) onComplete();
    },
  });
  return true;
}

function animateCharacter() {
  playStrokeDemo();
}

function playAutoStrokeDemoThenTrace() {
  const round = state.round;
  const started = playStrokeDemo({
    auto: true,
    onComplete() {
      startTraceWhenWriterReady(round);
      window.setTimeout(() => showPendingProgressModals(), 300);
    },
  });
  if (!started) {
    updateTraceVisual();
    window.setTimeout(() => showPendingProgressModals(), 700);
  }
}

function startTraceWhenWriterReady(round, attempts = 0) {
  if (round !== state.round) return;
  if (state.writerReady && state.writer) {
    startTrace();
    return;
  }
  if (attempts >= 20) {
    els.writerStatus.textContent = "Trace mode is still loading. Tap the grid once it is ready.";
    updateTraceVisual();
    return;
  }
  window.setTimeout(() => startTraceWhenWriterReady(round, attempts + 1), 180);
}

function startTrace() {
  const lesson = currentLesson();
  if (!state.completed[lesson.char]) {
    els.writerStatus.textContent = "Choose the correct pinyin first to unlock tracing XP.";
    return;
  }
  if (state.traced[lesson.char]) {
    els.writerStatus.textContent = "Bonus XP for this character has already been collected. Tap Next.";
    updateTraceVisual();
    return;
  }
  if (state.traceStarted[lesson.char]) {
    els.writerStatus.textContent = "Tracing is already active. Draw inside the grid.";
    return;
  }
  if (state.strokeDemoPlaying) {
    els.writerStatus.textContent = "Watch the stroke order first, then trace in the grid.";
    return;
  }
  if (!state.writerReady || !state.writer) {
    els.writerStatus.textContent = "Trace mode is still loading.";
    return;
  }
  state.traceStarted[lesson.char] = true;
  updateTraceVisual();
  state.writer.cancelQuiz();
  state.writer.hideCharacter();
  state.writer.showOutline();
  els.writerStatus.textContent = "Trace the strokes in order for bonus pet XP.";
  state.writer.quiz({
    onLoadCharDataSuccess() {
      updateTraceVisual();
    },
    onCorrectStroke(strokeData) {
      els.writerStatus.textContent = `Good stroke. ${strokeData.strokesRemaining} left.`;
    },
    onMistake() {
      els.writerStatus.textContent = "Follow the glowing hint and try that stroke again.";
    },
    onComplete(summary) {
      const bonus = summary.totalMistakes === 0 ? 45 : 30;
      state.traced[lesson.char] = true;
      updateTraceVisual();
      addXp(bonus, `Trace complete! +${bonus} bonus pet XP.`);
      flyStarsToPet(els.writerFrame, `+${bonus} XP`);
      els.writerStatus.textContent = `Trace complete. Mistakes: ${summary.totalMistakes}. Tap Next when ready.`;
    },
  });
}

function sayCurrent() {
  const lesson = currentLesson();
  if (!("speechSynthesis" in window)) {
    els.coach.textContent = `The pinyin is ${lesson.pinyin}.`;
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(lesson.char);
  utterance.lang = "zh-CN";
  utterance.rate = 0.78;
  window.speechSynthesis.speak(utterance);
  els.coach.textContent = `Listen: ${lesson.char}, ${lesson.pinyin}.`;
}

function giveHint() {
  const lesson = currentLesson();
  const hints = [
    `${lesson.char} is pronounced ${lesson.pinyin}. Remember it with "${lesson.word}".`,
    "The Tianzi grid helps your space buddy keep the character balanced.",
    "Look for the first stroke before you trace.",
    "Correct answers give XP. Leveling up unlocks gear rewards.",
  ];
  els.coach.textContent = shuffle(hints)[0];
}

els.soundButton.addEventListener("click", sayCurrent);
els.demoButton.addEventListener("click", animateCharacter);
els.writerFrame.addEventListener("pointerdown", () => {
  const lesson = currentLesson();
  if (
    state.completed[lesson.char] &&
    !state.traced[lesson.char] &&
    !state.traceStarted[lesson.char] &&
    !state.strokeDemoPlaying
  ) {
    startTrace();
  }
});
els.hintButton.addEventListener("click", giveHint);
els.nextButton.addEventListener("click", goToNextLesson);
els.evolutionClose.addEventListener("click", () => {
  els.evolutionModal.hidden = true;
});

window.addEventListener("load", () => {
  renderPetChoices();
  updateStats();
});
