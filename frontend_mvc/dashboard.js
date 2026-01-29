let serverBaseUrl = "";
let refreshInterval = null;

const serverInput = document.getElementById("serverInput");
const connectBtn = document.getElementById("connectBtn");
const playerSelect = document.getElementById("playerSelect");
const playerStatsDiv = document.getElementById("playerStats");
const rankingTable = document.getElementById("rankingTable");

connectBtn.addEventListener("click", async () => {
    serverBaseUrl = serverInput.value.trim();
    if (!serverBaseUrl) return alert("Adresse serveur invalide");

    await refreshAll();

    // Auto-refresh toutes les 5 secondes
    if (refreshInterval) clearInterval(refreshInterval);
    refreshInterval = setInterval(refreshAll, 5000);
});

playerSelect.addEventListener("change", async () => {
    const name = playerSelect.value;
    if (!name) return;
    await loadPlayerStats(name);
});

async function refreshAll() {
    await loadPlayers();
    await loadRanking();

    const selected = playerSelect.value;
    if (selected) {
        await loadPlayerStats(selected);
    }
}

async function loadPlayers() {
    const res = await fetch(`${serverBaseUrl}/api/listPlayers`);
    const players = await res.json();

    playerSelect.innerHTML =
        `<option value="">-- Sélectionner un joueur --</option>`;

    for (const p of players) {
        const opt = document.createElement("option");
        opt.value = p.name;
        opt.textContent = p.name;
        playerSelect.appendChild(opt);
    }
}

async function loadPlayerStats(name) {
    const res = await fetch(
        `${serverBaseUrl}/api/stats?name=${encodeURIComponent(name)}`
    );
    const stats = await res.json();

    if (stats.error) {
        playerStatsDiv.textContent = stats.error;
        return;
    }

    playerStatsDiv.innerHTML = `
        <p><strong>Parties jouées :</strong> ${stats.gamesPlayed}</p>
        <p><strong>Kills :</strong> ${stats.totalKills}</p>
        <p><strong>Morts :</strong> ${stats.totalDeaths}</p>
        <p><strong>K/D :</strong> ${stats.kdRatio}</p>
        <p><strong>Dernier classement :</strong> ${stats.lastGameRank}</p>
        <p><strong>Classement moyen :</strong> ${stats.overallRanking}</p>
    `;
}

async function loadRanking() {
    const res = await fetch(`${serverBaseUrl}/api/listPlayers`);
    const players = await res.json();

    rankingTable.innerHTML = "";

    let i = 0;
    for (const p of players) {
        i += 1;
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${i}</td>
            <td>${p.name}</td>
            <td>${p.gamesPlayed}</td>
            <td>${p.totalKills}</td>
            <td>${p.totalDeaths}</td>
            <td>${p.kdRatio}</td>
        `;
        rankingTable.appendChild(tr);
    }
}
