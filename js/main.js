async function loadVersionInfo() {
  try {
    const response = await fetch("./versions.json");

    if (!response.ok) {
      throw new Error("Não foi possível carregar versions.json");
    }

    const data = await response.json();
    const latest = data.latest;

    document.getElementById("latest-version-title").textContent =
      `FinTrack ${latest.version} — versão teste`;

    document.getElementById("apk-download").href = latest.apk_url;
    document.getElementById("apk-date").textContent = latest.date;

    document.getElementById("notes-version").textContent = `v${latest.version}`;
    document.getElementById("notes-link").href = latest.notes_url || "#";
  } catch (error) {
    console.warn("Erro ao carregar informações da versão:", error);
  }
}

loadVersionInfo();