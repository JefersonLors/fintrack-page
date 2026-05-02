async function loadVersionInfo() {
  try {
    const response = await fetch("./versions.json");

    if (!response.ok) {
      throw new Error("Erro ao carregar versions.json");
    }

    const data = await response.json();
    const latest = data.latest;

    document.getElementById("latest-version-title").textContent =
      `FinTrack ${latest.version} — Android`;

    document.getElementById("apk-date").textContent = latest.date;

    const downloadButton = document.getElementById("apk-download");
    downloadButton.href = latest.apk_url;

    document.getElementById("download-status").textContent =
      latest.restricted
        ? "Download restrito a usuários autorizados."
        : latest.status;
  } catch (error) {
    console.error(error);

    document.getElementById("apk-date").textContent = "Indisponível";
    document.getElementById("apk-download").href = "#";
    document.getElementById("download-status").textContent =
      "Não foi possível carregar as informações da versão.";
  }
}

loadVersionInfo();