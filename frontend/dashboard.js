const playerSelect = document.getElementById("playerSelect");
const playerStats = document.getElementById("playerStats");
const rankingList = document.getElementById("rankingList");

let serverBase = ""; // will store "http://IP:PORT"

const serverInput = document.getElementById("serverInput");
const connectBtn = document.getElementById("connectBtn");

connectBtn.addEventListener("click", async () => {
  const val = serverInput.value.trim();
  if (!val) return alert("Enter server IP:PORT (e.g. http://localhost:8000)");
  serverBase = val;

  await updatePlayerList();
  await updateRanking();
});

/* ------------------ API CALLS ------------------ */

async function fetchPlayers() {
  const res = await fetch(`${serverBase}/api/listPlayers`);
  console.log(res);
  return res.json();
}

async function fetchPlayerStats(name) {
  const res = await fetch(`${serverBase}/api/stats?name=${encodeURIComponent(name)}`);
  console.log(res);
  return res.json();
}

/* ------------------ UI UPDATE ------------------ */

async function updatePlayerList() {
  const players = await fetchPlayers();

  playerSelect.innerHTML = `<option value="">-- Select a player --</option>`;

  for (const p of players) {
    const option = document.createElement("option");
    option.value = p.name;
    option.textContent = p.name;
    playerSelect.appendChild(option);
  }
}

async function updateRanking() {
  const players = await fetchPlayers();

  rankingList.innerHTML = "";

  players.forEach((p, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${p.name}`;
    
    const span = document.createElement("span");
    span.textContent = `K/D ${p.kdRatio}`;
    
    li.appendChild(span);
    rankingList.appendChild(li);
  });
}

async function updateSelectedPlayer(name) {
  if (!name) {
    playerStats.innerHTML = "<p>Select a player to see stats</p>";
    return;
  }

  const stats = await fetchPlayerStats(name);

  if (stats.error) {
    playerStats.innerHTML = `<p>${stats.error}</p>`;
    return;
  }

  playerStats.innerHTML = `
    <p><strong>Games played:</strong> ${stats.gamesPlayed}</p>
    <p><strong>Total kills:</strong> ${stats.totalKills}</p>
    <p><strong>Total deaths:</strong> ${stats.totalDeaths}</p>
    <p><strong>K/D ratio:</strong> ${stats.kdRatio}</p>
    <p><strong>Last game rank:</strong> ${stats.lastGameRank}</p>
    <p><strong>Overall ranking:</strong> ${stats.overallRanking}</p>
  `;
}

/* ------------------ EVENTS ------------------ */

playerSelect.addEventListener("change", async (e) => {
  await updateSelectedPlayer(e.target.value);
});

/* ------------------ LOOP ------------------ */

// Initial load
await updatePlayerList();
await updateRanking();

// Refresh ranking every 3 seconds
setInterval(updateRanking, 3000);
