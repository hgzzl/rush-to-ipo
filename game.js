const STAT_META = {
  brand: { label: "Brand", color: "#dc6f8e" },
  fulfillment: { label: "Fulfillment", color: "#5d84e6" },
  production: { label: "Production", color: "#e7b84a" },
  staffing: { label: "Staffing", color: "#8a72ce" },
  operations: { label: "Operations", color: "#4f9a70" },
};

const talentDeck = [
  ["Launch Lab", "Agency", "agency", { brand: 2, production: 1 }, "#f0aac2"],
  ["Northstar Creative", "Agency", "agency", { brand: 2, operations: 1 }, "#efb6ca"],
  ["Conversion Studio", "Agency", "agency", { brand: 1, fulfillment: 1, operations: 1 }, "#e6a5bc"],
  ["Supply Chain Partners", "Agency", "agency", { production: 2, fulfillment: 1 }, "#eac578"],
  ["Growth Collective", "Agency", "agency", { brand: 2, staffing: 1 }, "#e9afcc"],
  ["Product Design House", "Agency", "agency", { production: 2, brand: 1 }, "#efbd8f"],
  ["Operations Consultancy", "Agency", "agency", { operations: 2, staffing: 1 }, "#9fcbb0"],
  ["Logistics Network", "Agency", "agency", { fulfillment: 2, operations: 1 }, "#a7c7ea"],
  ["Brand Director", "Staff", "staffing", { brand: 3 }, "#dc83a4"],
  ["Fulfillment Lead", "Staff", "staffing", { fulfillment: 3 }, "#729be6"],
  ["Production Manager", "Staff", "staffing", { production: 3 }, "#e2b44e"],
  ["People Lead", "Staff", "staffing", { staffing: 3 }, "#9679cf"],
  ["Operations Manager", "Staff", "staffing", { operations: 3 }, "#63a57c"],
  ["Customer Success Rep", "Staff", "staffing", { brand: 1, fulfillment: 2 }, "#d99db6"],
  ["Inventory Planner", "Staff", "staffing", { production: 1, operations: 2 }, "#bfca8d"],
  ["Warehouse Crew", "Staff", "staffing", { fulfillment: 2, staffing: 1 }, "#9abbe3"],
  ["Shopify Flow", "Shopify Tool", "tool", { operations: 1 }, "#95d5ae"],
  ["Shopify Sidekick", "Shopify Tool", "tool", { staffing: 1 }, "#b8a2e4"],
  ["Shopify Markets", "Shopify Tool", "tool", { brand: 1 }, "#e8a6be"],
  ["Shopify Shipping", "Shopify Tool", "tool", { fulfillment: 1 }, "#9fbfea"],
  ["Shopify Bundles", "Shopify Tool", "tool", { production: 1 }, "#e8c66e"],
  ["Shopify Collabs", "Shopify Tool", "tool", { brand: 1 }, "#e7abc3"],
  ["Shopify POS", "Shopify Tool", "tool", { operations: 1 }, "#8cc9a4"],
  ["Shopify Collective", "Shopify Tool", "tool", { production: 1 }, "#e4c276"],
].map(([name, kind, type, stats, color], id) => ({ id: `t${id}`, name, kind, type, stats, color }));

const milestoneDeck = [
  ["First profitable order", "Order", { brand: 2, production: 1 }, { cash: 2 }, 1, "#dbeaa2"],
  ["Weekend market sellout", "Order", { brand: 1, fulfillment: 2 }, { cash: 2 }, 1, "#f2c0a7"],
  ["Reliable supplier network", "Milestone", { production: 2, operations: 2 }, { cash: 3 }, 2, "#efd48e"],
  ["A team that scales", "Milestone", { staffing: 2, operations: 2 }, { cash: 3 }, 2, "#cdbbe8"],
  ["Retailer pilot", "Order", { production: 2, fulfillment: 3 }, { cash: 4 }, 2, "#afd0ed"],
  ["Repeat customer engine", "Milestone", { brand: 3, fulfillment: 2 }, { cash: 4 }, 2, "#eeb6ca"],
  ["Two-day dispatch", "Milestone", { fulfillment: 3, operations: 3 }, { cash: 6 }, 3, "#b6d2ef"],
  ["Operational excellence", "Milestone", { operations: 3, staffing: 3 }, { cash: 6 }, 3, "#add8bf"],
  ["Holiday rush", "Order", { production: 2, fulfillment: 2, staffing: 2 }, { cash: 6 }, 3, "#f0c891"],
  ["National press feature", "Order", { brand: 4, production: 3 }, { cash: 7 }, 3, "#f0b2c1"],
  ["10,000th order", "Milestone", { brand: 2, fulfillment: 3, operations: 2 }, { cash: 7 }, 4, "#cae49c"],
  ["Flagship collaboration", "Order", { brand: 3, production: 2, staffing: 2 }, { cash: 7 }, 4, "#efb99f"],
  ["International launch", "Milestone", { brand: 3, fulfillment: 2, operations: 3 }, { cash: 9 }, 4, "#b5d7cf"],
  ["BFCM record", "Order", { production: 3, fulfillment: 3, staffing: 2 }, { cash: 10 }, 5, "#e7c37b"],
  ["Category leader", "Milestone", { brand: 3, production: 2, operations: 3 }, { cash: 10 }, 5, "#d4b1df"],
].map(([name, kind, requirements, reward, points, color], id) => ({ id: `m${id}`, name, kind, requirements, reward, points, color }));

const WIN_SCORE = 20;
const PLAYER_COLORS = ["#c8f04b", "#f3a986", "#8fb4ef", "#d39bdd"];
const FOUNDER_ARCHETYPES = [
  { name: "The Storyteller", stat: "brand" },
  { name: "The Logistics Pro", stat: "fulfillment" },
  { name: "The Maker", stat: "production" },
  { name: "The People Builder", stat: "staffing" },
  { name: "The Systems Thinker", stat: "operations" },
];
const CHAOS_CARDS = [
  { id: "c1", name: "Brand tax", title: "The algorithm changed again", description: "Brand requirements increase by 1 on every Order and Milestone until the next Chaos Monkey.", effect: "skill", stat: "brand", delta: 1 },
  { id: "c2", name: "Ops breakthrough", title: "Someone finally read the spreadsheet", description: "Operations requirements decrease by 1 on every Order and Milestone until the next Chaos Monkey.", effect: "skill", stat: "operations", delta: -1 },
  { id: "c3", name: "Talent shuffle", title: "Unexpected re-org", description: "Every founder with Agency or Staff cards must choose one to discard.", effect: "discard" },
  { id: "c4", name: "New priorities", title: "The roadmap has changed", description: "Replace all five open Orders and Milestones.", effect: "refresh" },
  { id: "c5", name: "Hiring rebate", title: "A little free money", description: "Drafting from the Talent Market earns $1 until the next Chaos Monkey.", effect: "cashback" },
];
const state = { players: [], currentPlayerIndex: 0, turn: 1, market: [], milestones: [], talentDraw: [], milestoneDraw: [], activeObjective: null, selected: new Set(), sound: true, chaosEnabled: true, activeChaos: null, pendingDiscards: [], endgame: null, upkeepPending: false, leaderboardSaved: false };
const network = { mode: "local", clientId: sessionStorage.getItem("first-order-client") || crypto.randomUUID(), gameId: null, gameCode: null, games: null, unsubscribe: null, hostId: null };
sessionStorage.setItem("first-order-client", network.clientId);
const $ = (selector) => document.querySelector(selector);
const STAT_ORDER = Object.keys(STAT_META);
const shuffle = (items) => [...items].sort(() => Math.random() - 0.5);
const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", "\"": "&quot;" })[character]);
const skillIcon = (stat, className = "") => `<svg class="skill-icon ${className}" aria-hidden="true"><use href="#icon-${stat}"></use></svg>`;
const primaryStat = (stats) => Object.entries(stats).sort((a, b) => b[1] - a[1])[0]?.[0] || "operations";
const cardArtwork = (stats) => {
  const primary = primaryStat(stats);
  const supporting = Object.keys(stats).filter(stat => stat !== primary);
  return `<div class="card-art" style="--art-color:${STAT_META[primary].color}">
    <span class="art-sun"></span>${skillIcon(primary, "art-main")}
    <div class="art-support">${supporting.map(stat => `<span style="--art-color:${STAT_META[stat].color}">${skillIcon(stat)}</span>`).join("")}</div>
  </div>`;
};
const statGrid = (stats, compact = false) => `<div class="stat-grid${compact ? " compact" : ""}">${STAT_ORDER.map(key => {
  const value = stats[key] || 0;
  return `<span class="stat-slot ${value ? "active" : "empty"}" style="--stat-color:${STAT_META[key].color}" title="${STAT_META[key].label}: ${value}">${skillIcon(key)}<em>${STAT_META[key].label}</em><strong>${value || "—"}</strong></span>`;
}).join("")}</div>`;

const currentPlayer = () => state.players[state.currentPlayerIndex];
const localPlayer = () => network.mode === "online" ? state.players.find(player => player.clientId === network.clientId) : currentPlayer();
const isMyTurn = () => !state.upkeepPending && state.endgame?.turnsRemaining !== 0 && (network.mode !== "online" || currentPlayer()?.clientId === network.clientId);

function newGame(names = state.players.map(player => player.name), options = {}) {
  const safeNames = names.length >= 1 ? names : ["Day One Goods"];
  const founders = shuffle(FOUNDER_ARCHETYPES).slice(0, safeNames.length);
  Object.assign(state, {
    players: safeNames.map((name, index) => ({ id: crypto.randomUUID(), name, founder: founders[index], founderName: options.founderNames?.[index] || founders[index].name, score: 0, cash: 5 + index, debt: 0, hand: [], tools: [], strengths: { [founders[index].stat]: 1 }, color: PLAYER_COLORS[index], clientId: options.clientIds?.[index] || null })),
    currentPlayerIndex: 0, turn: 1, activeObjective: null, selected: new Set(), chaosEnabled: options.chaosEnabled ?? true, activeChaos: null, pendingDiscards: [], endgame: null, upkeepPending: false, leaderboardSaved: false,
    talentDraw: buildTalentDraw(options.chaosEnabled ?? true), milestoneDraw: buildMilestoneDraw(),
  });
  state.market = state.talentDraw.splice(0, 5);
  state.milestones = state.milestoneDraw.splice(0, 5);
  render();
}

function render() {
  const player = currentPlayer();
  $("#companyName").textContent = player.name;
  $("#founderLabel").textContent = `${player.founderName || player.founder?.name} · +1 permanent ${STAT_META[player.founder?.stat || Object.keys(player.strengths)[0]].label}`;
  $("#turnPrompt").textContent = isMyTurn() ? `${player.name}, choose one action.` : `Waiting for ${player.name} to take their turn.`;
  $("#score").textContent = player.score;
  $("#goal").textContent = WIN_SCORE;
  $("#cash").textContent = player.cash;
  $("#debt").textContent = player.debt;
  $("#turn").textContent = state.turn;
  $("#scoreProgress").style.width = `${Math.min(100, player.score / WIN_SCORE * 100)}%`;
  $("#refreshMarketButton").disabled = player.cash < 1 || !isMyTurn() || state.pendingDiscards.length > 0 || state.upkeepPending;
  $("#takeLoanButton").disabled = network.mode === "online" && player.clientId !== network.clientId;
  $("#repayLoanButton").disabled = player.cash < 8 || player.debt < 8 || !isMyTurn() || state.upkeepPending;
  const chaosBanner = $("#chaosBanner");
  chaosBanner.hidden = !state.activeChaos;
  if (state.activeChaos) chaosBanner.innerHTML = `<b>🙈 ${escapeHtml(state.activeChaos.name)}</b><span>${escapeHtml(state.activeChaos.description)}</span>`;
  const endgameBanner = $("#endgameBanner");
  endgameBanner.hidden = !state.endgame;
  if (state.endgame) endgameBanner.innerHTML = `<b>FINAL STRETCH</b><span>${state.endgame.turnsRemaining} turn${state.endgame.turnsRemaining === 1 ? "" : "s"} remain · most reputation wins</span>`;
  renderPlayers();
  renderMarket();
  renderMilestones();
  renderHand();
  renderSkillBank();
  renderStrengths();
  queueMicrotask(maybeShowPendingDiscard);
  queueMicrotask(maybeShowUpkeep);
}

function totalSkills(player) {
  const totals = { ...player.strengths };
  player.hand.forEach(card => Object.entries(card.stats).forEach(([stat, amount]) => totals[stat] = (totals[stat] || 0) + amount));
  return totals;
}

function renderPlayers() {
  const founders = state.players.map((player, index) => {
    const totals = totalSkills(player);
    return `<div class="player-chip ${index === state.currentPlayerIndex ? "active" : ""}" style="--player-color:${player.color}">
      <span class="player-dot">${index + 1}</span><p><b>${escapeHtml(player.name)}</b><small>${escapeHtml(player.founderName || player.founder?.name || "Founder")} · +1 ${STAT_META[player.founder?.stat || Object.keys(player.strengths)[0]]?.label}</small></p>
      <div class="player-skills">${STAT_ORDER.map(stat => `<span style="--stat-color:${STAT_META[stat].color}" title="${STAT_META[stat].label}" aria-label="${STAT_META[stat].label}: ${totals[stat] || 0}">${skillIcon(stat)}<small>${STAT_META[stat].label[0]}</small>${totals[stat] || 0}</span>`).join("")}</div>
      ${index === state.currentPlayerIndex ? "<em>PLAYING</em>" : ""}<strong class="player-score">${player.score} rep · $${player.cash}${player.debt ? ` · owes $${player.debt}` : ""}</strong>
    </div>`;
  }).join("");
  const monkey = state.players.length === 1 ? `<div class="player-chip monkey-chip" style="--player-color:#ef9b61"><span class="player-dot">🙈</span><p><b>Chaos Monkey</b><small>Takes a Talent Market card after every turn</small></p><strong>1 IN 5</strong><small>chance to remove an Order or Milestone</small></div>` : "";
  $("#playerStrip").innerHTML = founders + monkey;
}

function renderMarket() {
  $("#marketRow").innerHTML = state.market.map((card, index) => `
    <button class="game-card market-card" data-market="${index}" aria-label="Draft ${card.name}" ${!isMyTurn() || state.pendingDiscards.length ? "disabled" : ""}>
      <div class="card-top" style="background:${card.color}">
        <p class="card-kind">${card.kind}</p><span class="card-number">0${index + 1}</span><h3>${card.name}</h3>${cardArtwork(card.stats)}
      </div>
      <div class="card-body">${statGrid(card.stats)}<div class="card-economy ${card.type}">${card.type === "tool" ? "Permanent +1 · no upkeep" : "$1 Upkeep each turn"}</div></div>
    </button>`).join("");
  document.querySelectorAll("[data-market]").forEach(button => button.addEventListener("click", () => draft(Number(button.dataset.market))));
}

function renderMilestones() {
  $("#milestoneRow").innerHTML = state.milestones.map((card, index) => {
    const requirements = effectiveRequirements(card);
    const requirementTotal = Object.values(requirements).reduce((sum, value) => sum + value, 0);
    const reward = card.reward.cash ? `$${card.reward.cash} cash` : `+1 permanent ${STAT_META[card.reward.permanent].label}`;
    return `<button class="game-card milestone-card" data-milestone="${index}" aria-label="Open ${card.kind} ${card.name}, ${requirementTotal} total skill" ${!isMyTurn() || state.pendingDiscards.length ? "disabled" : ""}>
      <div class="card-top" style="background:${card.color}"><p class="card-kind">${card.kind} · ${requirementTotal} skill</p><span class="card-number">B${String(index + 1).padStart(2, "0")}</span><h3>${card.name}</h3>${cardArtwork(effectiveRequirements(card))}</div>
      <div class="card-body">${statGrid(effectiveRequirements(card))}
      <div class="reward"><p>REWARD<strong>${reward}</strong></p><span class="points">+${card.points}</span></div></div>
    </button>`;
  }).join("");
  document.querySelectorAll("[data-milestone]").forEach(button => button.addEventListener("click", () => openObjective(Number(button.dataset.milestone))));
}

function renderHand() {
  const player = localPlayer() || currentPlayer();
  $("#handCount").textContent = `${player.hand.length} card${player.hand.length === 1 ? "" : "s"}`;
  $("#handHint").textContent = player.hand.length ? `${player.name}'s engine · $${player.hand.length} upkeep next turn.` : `${player.name} has no Agency or Staff cards yet. Shopify Tool cards appear under Permanent Skills.`;
  $("#hand").innerHTML = player.hand.length ? player.hand.map(card => `
    <article class="hand-card" style="--card-color:${card.color}"><div class="hand-card-title">${skillIcon(primaryStat(card.stats))}<b>${card.name}</b></div>${statGrid(card.stats, true)}<small class="upkeep-label">$1 upkeep</small></article>`).join("") : `<div class="empty-hand">This workspace is empty — draft some time or talent.</div>`;
}

function renderSkillBank() {
  const player = localPlayer() || currentPlayer();
  const cardTotals = {};
  player.hand.forEach(card => Object.entries(card.stats).forEach(([stat, amount]) => cardTotals[stat] = (cardTotals[stat] || 0) + amount));
  $("#skillBank").innerHTML = `<div class="skill-bank-title"><p class="eyebrow">${escapeHtml(player.name)}</p><b>Skills available for your next Order or Milestone</b><div class="bank-economy"><span>CASH <strong>$${player.cash}</strong></span><span>CURRENT UPKEEP <strong>$${upkeepCost(player)}</strong></span></div></div>${STAT_ORDER.map(key => {
    const cards = cardTotals[key] || 0;
    const permanent = player.strengths[key] || 0;
    return `<div class="skill-total" style="--stat-color:${STAT_META[key].color}"><span>${skillIcon(key)}${STAT_META[key].label}</span><strong>${cards + permanent}</strong><small>${cards} from cards${permanent ? ` + ${permanent} permanent` : ""}</small></div>`;
  }).join("")}`;
}

function renderStrengths() {
  $("#strengthList").innerHTML = statGrid((localPlayer() || currentPlayer()).strengths, true);
}

function buildTalentDraw(chaosEnabled) {
  const agencies = shuffle(talentDeck.filter(card => card.type === "agency"));
  const staffing = shuffle(talentDeck.filter(card => card.type === "staffing"));
  const tools = shuffle(talentDeck.filter(card => card.type === "tool"));
  const opening = [agencies.shift(), staffing.shift(), tools.shift()];
  const remainder = shuffle([...agencies, ...staffing, ...tools]);
  opening.push(remainder.shift(), remainder.shift());
  if (!chaosEnabled) return [...shuffle(opening), ...remainder];
  const chaos = CHAOS_CARDS.map(card => ({ ...card, chaos: true, kind: "Chaos Monkey" }));
  return [...shuffle(opening), ...shuffle([...remainder, ...chaos])];
}

function buildMilestoneDraw() {
  const totalRequirement = card => Object.values(card.requirements).reduce((sum, value) => sum + value, 0);
  const easy = shuffle(milestoneDeck.filter(card => totalRequirement(card) <= 4));
  const medium = shuffle(milestoneDeck.filter(card => totalRequirement(card) >= 5 && totalRequirement(card) <= 6));
  const hard = shuffle(milestoneDeck.filter(card => totalRequirement(card) >= 7));
  const opening = [easy.shift(), easy.shift(), medium.shift(), medium.shift(), hard.shift()];
  return [...shuffle(opening), ...shuffle([...easy, ...medium, ...hard])];
}

function draft(index) {
  if (!isMyTurn() || state.pendingDiscards.length || state.upkeepPending) return;
  const player = currentPlayer();
  const [card] = state.market.splice(index, 1);
  if (card.type === "tool") {
    const stat = Object.keys(card.stats)[0];
    player.strengths[stat] = (player.strengths[stat] || 0) + 1;
    player.tools.push(card);
  } else {
    player.hand.push(card);
  }
  const earnedCashback = state.activeChaos?.effect === "cashback";
  if (earnedCashback) player.cash += 1;
  const chaos = replenishTalent();
  playTone(360);
  const toolNote = card.type === "tool" ? " · permanent +1" : "";
  advanceTurn(`${player.name} drafted ${card.name}${toolNote}${earnedCashback ? " · +$1" : ""}`);
  if (chaos) showChaos(chaos);
}

function replenish(row, deck, source) {
  if (!deck.length) deck.push(...shuffle(source));
  row.unshift(deck.shift());
}

function replenishTalent() {
  if (!state.talentDraw.length) state.talentDraw.push(...buildTalentDraw(state.chaosEnabled));
  let next = state.talentDraw.shift();
  let resolved = null;
  while (next?.chaos) {
    resolved = next;
    resolveChaos(next);
    if (!state.talentDraw.length) state.talentDraw.push(...buildTalentDraw(state.chaosEnabled));
    next = state.talentDraw.shift();
  }
  state.market.unshift(next);
  return resolved;
}

function effectiveRequirements(card) {
  const requirements = { ...card.requirements };
  if (state.activeChaos?.effect === "skill") {
    const stat = state.activeChaos.stat;
    if (requirements[stat]) requirements[stat] = Math.max(1, requirements[stat] + state.activeChaos.delta);
  }
  return requirements;
}

function resolveChaos(chaos) {
  state.activeChaos = { ...chaos };
  if (chaos.effect === "refresh") {
    state.milestoneDraw.push(...state.milestones);
    state.milestones = [];
    for (let index = 0; index < 5; index++) replenish(state.milestones, state.milestoneDraw, milestoneDeck);
  }
  if (chaos.effect === "discard") state.pendingDiscards = state.players.filter(player => player.hand.length).map(player => player.id);
} 

function openObjective(index) {
  if (!isMyTurn() || state.pendingDiscards.length || state.upkeepPending) return;
  state.activeObjective = index;
  updateObjectiveDialog();
  $("#objectiveDialog").showModal();
}

function selectedTotals() {
  return totalSkills(currentPlayer());
}

function canComplete(card, totals = selectedTotals()) {
  return Object.entries(effectiveRequirements(card)).every(([stat, amount]) => (totals[stat] || 0) >= amount);
}

function updateObjectiveDialog() {
  const card = state.milestones[state.activeObjective];
  if (!card) return;
  const totals = selectedTotals();
  const requirements = effectiveRequirements(card);
  const requirementTotal = Object.values(requirements).reduce((sum, value) => sum + value, 0);
  const reward = `$${card.reward.cash} cash`;
  $("#objectiveContent").innerHTML = `
    <header class="objective-header" style="background:${card.color}"><p class="eyebrow">${card.kind} · ${requirementTotal} total skill · +${card.points} reputation</p><h2>${card.name}</h2><p>Reward: ${reward}</p></header>
    <div class="objective-progress"><h3>Your engine vs. the requirements</h3>${Object.entries(requirements).map(([stat, required]) => {
      const have = totals[stat] || 0;
      return `<div class="requirement-line" style="--stat-color:${STAT_META[stat].color}"><span>${skillIcon(stat)} ${STAT_META[stat].label}</span><div class="bar"><i style="width:${Math.min(100, have / required * 100)}%"></i></div><strong>${have} / ${required}</strong></div>`;
    }).join("")}</div>
    <div class="engine-note"><b>Your engine stays intact.</b><p>Agency, Staff, and Shopify Tool cards are not discarded when this ${card.kind} is completed.</p></div>
    <div class="dialog-actions"><small>All of your current skills count automatically.</small><button class="primary-button" id="completeObjective" ${canComplete(card, totals) ? "" : "disabled"}>Complete ${card.kind}</button></div>`;
  $("#completeObjective").addEventListener("click", completeObjective);
}

function completeObjective() {
  if (!isMyTurn() || state.pendingDiscards.length) return;
  const player = currentPlayer();
  const card = state.milestones[state.activeObjective];
  if (!canComplete(card)) return;
  player.score += card.points;
  if (card.reward.cash) player.cash += card.reward.cash;
  if (card.reward.permanent) player.strengths[card.reward.permanent] = (player.strengths[card.reward.permanent] || 0) + 1;
  state.milestones.splice(state.activeObjective, 1);
  replenish(state.milestones, state.milestoneDraw, milestoneDeck);
  $("#objectiveDialog").close();
  playTone(620, 0.12);
  const triggeredEndgame = triggerEndgameIfNeeded(player);
  advanceTurn(`${player.name} completed ${card.name} · +${card.points} reputation`, triggeredEndgame);
}

function refreshMarket() {
  if (!isMyTurn() || state.pendingDiscards.length) return;
  const player = currentPlayer();
  if (player.cash < 1) return;
  player.cash -= 1;
  const combinedDeck = shuffle([...state.talentDraw, ...state.market]);
  const deferredChaos = [];
  state.market = [];
  while (state.market.length < 5 && combinedDeck.length) {
    const card = combinedDeck.shift();
    if (card.chaos) deferredChaos.push(card);
    else state.market.push(card);
  }
  state.talentDraw = shuffle([...combinedDeck, ...deferredChaos]);
  render();
  commitNetworkState();
  notify(`${player.name} refreshed only the talent market · turn continues`);
}

function takeLoan() {
  const player = currentPlayer();
  if (network.mode === "online" && player.clientId !== network.clientId) return;
  player.cash += 5;
  player.debt += 8;
  render();
  commitNetworkState();
  notify(`${player.name} borrowed $5 and now owes $${player.debt}`);
}

function repayLoan() {
  if (!isMyTurn()) return;
  const player = currentPlayer();
  if (player.cash < 8 || player.debt < 8) return;
  player.cash -= 8;
  player.debt -= 8;
  const triggeredEndgame = triggerEndgameIfNeeded(player);
  advanceTurn(`${player.name} repaid $8 of loan debt`, triggeredEndgame);
}

function upkeepCost(player = currentPlayer()) {
  return player.hand.length;
}

function beginUpkeep() {
  state.upkeepPending = upkeepCost() > 0;
}

function maybeShowUpkeep() {
  if (!state.upkeepPending || state.pendingDiscards.length || $("#chaosDialog").open) return;
  const player = currentPlayer();
  if (network.mode === "online" && player.clientId !== network.clientId) return;
  const cost = upkeepCost(player);
  $("#upkeepTitle").textContent = `${player.name}, pay your team`;
  $("#upkeepSummary").textContent = `Agency and Staff cards cost $1 Upkeep each. Your Upkeep is $${cost}; you have $${player.cash}. Discard any cards you do not want to keep.`;
  $("#upkeepCards").innerHTML = player.hand.map((card, index) => `<button data-upkeep-discard="${index}" style="--card-color:${card.color}"><span>${card.kind}</span><b>${escapeHtml(card.name)}</b><small>Discard · save $1</small></button>`).join("");
  $("#payUpkeepButton").textContent = `Pay $${cost} upkeep`;
  $("#payUpkeepButton").disabled = player.cash < cost;
  document.querySelectorAll("[data-upkeep-discard]").forEach(button => button.addEventListener("click", () => {
    const [card] = player.hand.splice(Number(button.dataset.upkeepDiscard), 1);
    notify(`${card.name} left the team`);
    render();
    commitNetworkState();
  }));
  if (!$("#upkeepDialog").open) $("#upkeepDialog").showModal();
}

function payUpkeep() {
  const player = currentPlayer();
  const cost = upkeepCost(player);
  if (player.cash < cost) return;
  player.cash -= cost;
  state.upkeepPending = false;
  if ($("#upkeepDialog").open) $("#upkeepDialog").close();
  render();
  commitNetworkState();
  notify(`${player.name} paid $${cost} upkeep · choose an action`);
}

function triggerEndgameIfNeeded(player) {
  if (state.endgame || player.score < WIN_SCORE || player.debt > 0) return false;
  state.endgame = {
    triggeredBy: player.name,
    turnsRemaining: state.players.length === 1 ? 0 : (state.players.length - 1 - state.currentPlayerIndex) + state.players.length,
  };
  return true;
}

function runSoloMonkeyTurn() {
  if (Math.floor(Math.random() * 5) === 0) {
    const index = Math.floor(Math.random() * state.milestones.length);
    const [card] = state.milestones.splice(index, 1);
    replenish(state.milestones, state.milestoneDraw, milestoneDeck);
    return { message: `Chaos Monkey removed ${card.kind} “${card.name}”` };
  }
  const index = Math.floor(Math.random() * state.market.length);
  const [card] = state.market.splice(index, 1);
  const chaos = replenishTalent();
  return { message: `Chaos Monkey took ${card.name} from the market`, chaos };
}

function advanceTurn(message, justTriggeredEndgame = false) {
  if (state.endgame && !justTriggeredEndgame) state.endgame.turnsRemaining -= 1;
  const gameEnded = state.endgame?.turnsRemaining === 0;
  const monkeyTurn = !gameEnded && state.players.length === 1 ? runSoloMonkeyTurn() : null;
  state.turn += 1;
  if (!gameEnded) {
    state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.players.length;
    beginUpkeep();
  }
  render();
  commitNetworkState();
  if (monkeyTurn?.chaos) showChaos(monkeyTurn.chaos);
  if (gameEnded) {
    notify(`${message} · Final scores are in`);
    setTimeout(showFinalResults, 450);
  } else {
    const finalNotice = justTriggeredEndgame ? " · final stretch begins" : "";
    const monkeyNotice = monkeyTurn ? ` · ${monkeyTurn.message}` : ` · Next: ${currentPlayer().name}`;
    notify(`${message}${finalNotice}${monkeyNotice}`);
  }
}

function showFinalResults() {
  const eligiblePlayers = state.players.filter(player => player.debt === 0);
  const highScore = Math.max(...eligiblePlayers.map(player => player.score));
  const winners = eligiblePlayers.filter(player => player.score === highScore);
  const names = winners.map(player => player.name);
  const winnerText = names.length === 1 ? names[0] : `${names.slice(0, -1).join(", ")} & ${names.at(-1)}`;
  $("#winnerName").textContent = winnerText;
  $("#winnerHeading").lastChild.textContent = names.length === 1 ? " wins!" : " tie!";
  $("#finalScore").textContent = `${highScore} reputation`;
  $("#finalTurns").textContent = `${state.turn - 1} total turns`;
  if (!$("#winDialog").open) $("#winDialog").showModal();
  recordSoloResult();
}

async function recordSoloResult() {
  if (state.players.length !== 1 || state.leaderboardSaved || currentPlayer().debt > 0) return;
  if (!await window.quickReady || !window.quick?.db) return;
  state.leaderboardSaved = true;
  const player = state.players[0];
  try {
    await quick.db.collection("first_order_engine_leaderboard").create({
      company: player.name,
      founder: player.founderName,
      score: player.score,
      turns: state.turn - 1,
      completed_at: new Date().toISOString(),
    });
  } catch { state.leaderboardSaved = false; }
}

async function showLeaderboard() {
  $("#leaderboardList").innerHTML = `<p class="leaderboard-loading">Loading the fewest-turn wins…</p>`;
  if (!$("#leaderboardDialog").open) $("#leaderboardDialog").showModal();
  if (!await window.quickReady || !window.quick?.db) {
    $("#leaderboardList").innerHTML = `<p class="leaderboard-loading">The live leaderboard is available on the Quick deployment.</p>`;
    return;
  }
  try {
    const results = await quick.db.collection("first_order_engine_leaderboard").orderBy("turns", "asc").limit(10).find();
    $("#leaderboardList").innerHTML = results.length ? results.map((entry, index) => `<div class="leaderboard-row"><b>${index + 1}</b><p><strong>${escapeHtml(entry.company)}</strong><small>${escapeHtml(entry.founder || "Founder")}</small></p><span>${entry.turns} turn${Number(entry.turns) === 1 ? "" : "s"}</span></div>`).join("") : `<p class="leaderboard-loading">No solo wins yet. Be the first.</p>`;
  } catch {
    $("#leaderboardList").innerHTML = `<p class="leaderboard-loading">Leaderboard unavailable. Try again shortly.</p>`;
  }
}

function playTone(frequency, duration = 0.07) {
  if (!state.sound) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const context = new AudioContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.frequency.value = frequency;
  oscillator.type = "sine";
  gain.gain.setValueAtTime(0.035, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + duration);
  oscillator.connect(gain).connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + duration);
  oscillator.addEventListener("ended", () => context.close());
}

const COMPANY_NAMES = [
  "Day One Goods", "Bright Side Co.", "Good Enough Studio", "Tiny Giant Supply",
  "Sunday Standard", "North Star Works", "Lucky Cart", "Common Thread Co.",
  "Soft Launch Supply", "New Leaf Goods", "Corner Office Club", "Fresh Batch Studio",
];

function suggestedNames(count) {
  return shuffle(COMPANY_NAMES).slice(0, count);
}

function renderPlayerInputs(useSuggestions = false) {
  const count = Number($("#playerCount").value);
  const existing = [...document.querySelectorAll(".player-name-input")].map(input => input.value);
  const suggestions = suggestedNames(count);
  $("#playerInputs").innerHTML = Array.from({ length: count }, (_, index) => `<label>
    <span style="--player-color:${PLAYER_COLORS[index]}">${index + 1}</span>
    <input class="player-name-input" maxlength="28" value="${escapeHtml(useSuggestions || !existing[index] ? suggestions[index] : existing[index])}" aria-label="Player ${index + 1} company name" />
  </label>`).join("");
}

function openSetup() {
  $("#playerCount").value = "2";
  $("#onlinePlayerCount").value = "2";
  renderPlayerInputs(true);
  $("#onlineCompanyName").value = suggestedNames(1)[0];
  const invitedCode = new URLSearchParams(location.search).get("game");
  if (invitedCode) $("#joinCodeInput").value = invitedCode.toUpperCase();
  setSetupMode(invitedCode || location.hostname.endsWith(".quick.shopify.io") ? "online" : "local");
  if (!$("#setupDialog").open) $("#setupDialog").showModal();
}

function startConfiguredGame() {
  network.unsubscribe?.();
  Object.assign(network, { mode: "local", gameId: null, gameCode: null, unsubscribe: null });
  const names = [...document.querySelectorAll(".player-name-input")].map((input, index) => input.value.trim() || `Company ${index + 1}`);
  newGame(names, { chaosEnabled: $("#localChaosToggle").checked });
  $("#setupDialog").close();
  notify(`${names[0]} goes first`);
}

function gameSnapshot() {
  return {
    players: state.players, currentPlayerIndex: state.currentPlayerIndex, turn: state.turn,
    market: state.market, milestones: state.milestones, talentDraw: state.talentDraw,
    milestoneDraw: state.milestoneDraw, chaosEnabled: state.chaosEnabled,
    activeChaos: state.activeChaos, pendingDiscards: state.pendingDiscards, endgame: state.endgame,
    upkeepPending: state.upkeepPending, leaderboardSaved: state.leaderboardSaved,
  };
}

function applySnapshot(snapshot) {
  if (!snapshot) return;
  const previousChaosId = state.activeChaos?.id;
  const gameJustEnded = snapshot.endgame?.turnsRemaining === 0 && state.endgame?.turnsRemaining !== 0;
  Object.assign(state, snapshot, { activeObjective: null, selected: new Set() });
  render();
  if (snapshot.activeChaos?.id && snapshot.activeChaos.id !== previousChaosId) showChaos(snapshot.activeChaos);
  if (gameJustEnded) setTimeout(showFinalResults, 450);
}

async function ensureQuick() {
  const loaded = await window.quickReady;
  if (!loaded || !window.quick?.db) {
    $("#quickNote").textContent = "Online play needs the Shopify Quick deployment. Open this game on its quick.shopify.io URL.";
    return false;
  }
  network.games ||= quick.db.collection("first_order_engine_games");
  return true;
}

async function quickFounderName() {
  try { return (await quick.id.waitForUser())?.fullName || quick.id.displayName || "Founder"; }
  catch { return "Founder"; }
}

function generateCode() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ";
  return Array.from({ length: 5 }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join("");
}

function setSetupMode(mode) {
  const online = mode === "online";
  $("#localModeButton").classList.toggle("active", !online);
  $("#onlineModeButton").classList.toggle("active", online);
  $("#localModeButton").setAttribute("aria-selected", String(!online));
  $("#onlineModeButton").setAttribute("aria-selected", String(online));
  $("#localSetupPanel").hidden = online;
  $("#onlineSetupPanel").hidden = !online;
  if (online && !$("#onlineCompanyName").value) $("#onlineCompanyName").value = suggestedNames(1)[0];
}

async function createOnlineGame() {
  if (!await ensureQuick()) return;
  const name = $("#onlineCompanyName").value.trim() || suggestedNames(1)[0];
  const code = generateCode();
  const founderName = await quickFounderName();
  const doc = await network.games.create({
    code, status: "lobby", hostId: network.clientId,
    maxPlayers: Number($("#onlinePlayerCount").value),
    chaosEnabled: $("#onlineChaosToggle").checked,
    players: [{ clientId: network.clientId, name, founderName }],
  });
  network.mode = "online";
  network.gameId = doc.id;
  network.gameCode = code;
  network.hostId = network.clientId;
  history.replaceState(null, "", `${location.pathname}?game=${code}`);
  subscribeToGame();
  showLobby(doc);
}

async function joinOnlineGame() {
  if (!await ensureQuick()) return;
  const code = $("#joinCodeInput").value.trim().toUpperCase();
  if (code.length !== 5) return notify("Enter a five-letter game code");
  const matches = await network.games.where({ code }).limit(1).find();
  const doc = matches[0];
  if (!doc) return notify("That game could not be found");
  if (doc.status === "playing") {
    if (!doc.game?.players.some(player => player.clientId === network.clientId)) return notify("That game has already started");
    Object.assign(network, { mode: "online", gameId: doc.id, gameCode: code, hostId: doc.hostId });
    subscribeToGame();
    $("#setupDialog").close();
    applySnapshot(doc.game);
    return;
  }
  if (doc.status !== "lobby") return notify("That lobby is no longer open");
  if (doc.players.some(player => player.clientId === network.clientId)) return notify("This browser already joined that game");
  if (doc.players.length >= doc.maxPlayers) return notify("That lobby is already full");
  const name = $("#onlineCompanyName").value.trim() || suggestedNames(1)[0];
  const founderName = await quickFounderName();
  const players = [...doc.players, { clientId: network.clientId, name, founderName }];
  await network.games.update(doc.id, { players });
  network.mode = "online";
  network.gameId = doc.id;
  network.gameCode = code;
  network.hostId = doc.hostId;
  history.replaceState(null, "", `${location.pathname}?game=${code}`);
  subscribeToGame();
  showLobby({ ...doc, players });
}

function subscribeToGame() {
  network.unsubscribe?.();
  network.unsubscribe = network.games.subscribe({
    onUpdate: (doc) => {
      if (doc.id !== network.gameId) return;
      network.hostId = doc.hostId;
      if (doc.status === "lobby") showLobby(doc);
      if (doc.status === "playing" && doc.game) {
        if ($("#setupDialog").open) $("#setupDialog").close();
        if ($("#lobbyDialog").open) $("#lobbyDialog").close();
        applySnapshot(doc.game);
      }
    },
    onDelete: (id) => { if (id === network.gameId) notify("The game was closed"); },
    onError: () => notify("Connection interrupted — trying again"),
  });
}

function showLobby(doc) {
  $("#lobbyCode").textContent = doc.code;
  $("#lobbyPlayers").innerHTML = Array.from({ length: doc.maxPlayers }, (_, index) => {
    const player = doc.players[index];
    return `<div class="lobby-seat ${player ? "filled" : ""}"><span style="--player-color:${PLAYER_COLORS[index]}">${index + 1}</span><b>${player ? escapeHtml(player.name) : "Waiting for founder…"}</b></div>`;
  }).join("");
  const isHost = network.clientId === doc.hostId;
  $("#lobbyStatus").textContent = isHost ? `${doc.players.length} of ${doc.maxPlayers} founders joined` : "Waiting for the host to start the game…";
  $("#launchOnlineButton").hidden = !isHost;
  $("#launchOnlineButton").disabled = doc.maxPlayers > 1 && doc.players.length < 2;
  $("#launchOnlineButton").dataset.players = JSON.stringify(doc.players);
  $("#launchOnlineButton").dataset.chaos = String(doc.chaosEnabled);
  if ($("#setupDialog").open) $("#setupDialog").close();
  if (!$("#lobbyDialog").open) $("#lobbyDialog").showModal();
}

async function launchOnlineGame() {
  const players = JSON.parse($("#launchOnlineButton").dataset.players || "[]");
  if (players.length < 1) return;
  newGame(players.map(player => player.name), { clientIds: players.map(player => player.clientId), founderNames: players.map(player => player.founderName), chaosEnabled: $("#launchOnlineButton").dataset.chaos === "true" });
  await network.games.update(network.gameId, { status: "playing", game: gameSnapshot() });
  if ($("#lobbyDialog").open) $("#lobbyDialog").close();
}

async function commitNetworkState() {
  if (network.mode !== "online" || !network.gameId || !network.games) return;
  try { await network.games.update(network.gameId, { status: "playing", game: gameSnapshot() }); }
  catch { notify("Couldn't sync that move. Check your connection."); }
}

function showChaos(chaos) {
  $("#chaosTitle").textContent = chaos.title;
  $("#chaosDescription").textContent = chaos.description;
  $("#discardChoices").innerHTML = "";
  $("#chaosContinueButton").hidden = false;
  if (!$("#chaosDialog").open) $("#chaosDialog").showModal();
  maybeShowPendingDiscard();
}

function pendingPlayer() {
  if (!state.pendingDiscards.length) return null;
  if (network.mode === "online") {
    const player = localPlayer();
    return player && state.pendingDiscards.includes(player.id) ? player : null;
  }
  const key = state.pendingDiscards[0];
  return state.players.find(player => player.id === key);
}

function maybeShowPendingDiscard() {
  const player = pendingPlayer();
  if (!player) return;
  $("#chaosTitle").textContent = `${player.name}, choose one card to lose`;
  $("#chaosDescription").textContent = "The re-org is here. Your other cards are safe.";
  $("#chaosContinueButton").hidden = true;
  $("#discardChoices").innerHTML = `<div class="discard-grid">${player.hand.map((card, index) => `<button data-discard="${index}"><b>${escapeHtml(card.name)}</b>${statGrid(card.stats, true)}</button>`).join("")}</div>`;
  document.querySelectorAll("[data-discard]").forEach(button => button.addEventListener("click", () => discardCard(player, Number(button.dataset.discard))));
  if (!$("#chaosDialog").open) $("#chaosDialog").showModal();
}

function discardCard(player, index) {
  const [card] = player.hand.splice(index, 1);
  state.pendingDiscards = state.pendingDiscards.filter(value => value !== player.id);
  render();
  commitNetworkState();
  notify(`${player.name} discarded ${card.name}`);
  if (state.pendingDiscards.length && network.mode === "local") maybeShowPendingDiscard();
  else if ($("#chaosDialog").open) $("#chaosDialog").close();
}

let toastTimer;
function notify(message) {
  const toast = $("#toast"); toast.textContent = message; toast.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

$("#objectiveClose").addEventListener("click", () => $("#objectiveDialog").close());
$("#rulesClose").addEventListener("click", () => $("#rulesDialog").close());
$("#rulesStart").addEventListener("click", () => $("#rulesDialog").close());
$("#howToPlayButton").addEventListener("click", () => $("#rulesDialog").showModal());
$("#leaderboardButton").addEventListener("click", showLeaderboard);
$("#viewLeaderboardButton").addEventListener("click", () => { if ($("#winDialog").open) $("#winDialog").close(); showLeaderboard(); });
$("#leaderboardClose").addEventListener("click", () => $("#leaderboardDialog").close());
$("#newGameButton").addEventListener("click", () => { if (confirm("Set up a new game? Current progress will be lost.")) openSetup(); });
$("#playAgainButton").addEventListener("click", () => { $("#winDialog").close(); openSetup(); });
$("#playerCount").addEventListener("change", () => renderPlayerInputs());
$("#shuffleNamesButton").addEventListener("click", () => renderPlayerInputs(true));
$("#localModeButton").addEventListener("click", () => setSetupMode("local"));
$("#onlineModeButton").addEventListener("click", () => setSetupMode("online"));
$("#startGameButton").addEventListener("click", startConfiguredGame);
$("#createOnlineButton").addEventListener("click", createOnlineGame);
$("#joinOnlineButton").addEventListener("click", joinOnlineGame);
$("#launchOnlineButton").addEventListener("click", launchOnlineGame);
$("#copyInviteButton").addEventListener("click", async () => {
  const url = `${location.origin}${location.pathname}?game=${network.gameCode}`;
  await navigator.clipboard.writeText(url);
  notify("Invite link copied");
});
$("#chaosContinueButton").addEventListener("click", () => { $("#chaosDialog").close(); maybeShowUpkeep(); });
$("#refreshMarketButton").addEventListener("click", refreshMarket);
$("#takeLoanButton").addEventListener("click", takeLoan);
$("#repayLoanButton").addEventListener("click", repayLoan);
$("#upkeepLoanButton").addEventListener("click", takeLoan);
$("#payUpkeepButton").addEventListener("click", payUpkeep);
$("#soundButton").addEventListener("click", (event) => { state.sound = !state.sound; event.currentTarget.textContent = state.sound ? "◖))" : "◖×"; notify(`Sound ${state.sound ? "on" : "off"}`); });
newGame(["Day One Goods", "Bright Side Co."]);
openSetup();
