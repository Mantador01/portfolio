const output = document.querySelector("#compressionTerminalOutput");
const form = document.querySelector("#compressionTerminalForm");
const input = document.querySelector("#compressionTerminalInput");
const presetButtons = document.querySelectorAll("[data-terminal-command]");

if (output && form && input) {
  const commands = {
    help: [
      "Commandes disponibles :",
      "",
      "  make                  compile les exécutables du pipeline",
      "  compress repetitif    lance BWT → MTF → RLE sur test_repetitif.txt",
      "  compress normal       lance BWT → MTF → RLE sur test_normal.txt",
      "  compress binary       lance BWT → MTF → RLE sur données aléatoires",
      "  decompress            restaure un fichier compressé",
      "  diff                  vérifie que original == reconstruit",
      "  equalizer             analyse la distribution et l'entropie",
      "  order                 compare plusieurs ordres de filtres",
      "  standard              mesure BWT → MTF → RLE",
      "  without-mtf           mesure BWT → RLE",
      "  inverted              mesure RLE → MTF → BWT",
      "  clear                 nettoie le terminal",
    ],

    make: [
      "$ make clean",
      "rm -f bwt ibwt mtf imtf rle irle equalizer *.o",
      "",
      "$ make",
      "cc -O2 -Wall -Wextra -o bwt bwt.c",
      "cc -O2 -Wall -Wextra -o ibwt ibwt.c",
      "cc -O2 -Wall -Wextra -o mtf mtf.c",
      "cc -O2 -Wall -Wextra -o imtf imtf.c",
      "cc -O2 -Wall -Wextra -o rle rle.c",
      "cc -O2 -Wall -Wextra -o irle irle.c",
      "cc -O2 -Wall -Wextra -o equalizer equalizer.c",
      "",
      "Compilation terminée.",
    ],

    "compress repetitif": [
      "$ cat test_repetitif.txt | ./bwt | ./mtf | ./rle > test_repetitif.comp",
      "",
      "Fichier : test_repetitif.txt",
      "Motif : ABCDE répété 2000 fois",
      "",
      "Taille initiale : 10 001 octets",
      "Taille finale   : 26 octets",
      "Compression     : 99,74%",
      "",
      "Résultat : excellent.",
      "La BWT regroupe les caractères similaires, le MTF produit beaucoup de 0, puis le RLE compresse ces suites.",
    ],

    "compress normal": [
      "$ cat test_normal.txt | ./bwt | ./mtf | ./rle > test_normal.comp",
      "",
      "Fichier : test_normal.txt",
      "Contenu : texte/code C",
      "",
      "Taille initiale : 947 octets",
      "Taille finale   : 784 octets",
      "Compression     : 17,21%",
      "",
      "Résultat : correct.",
      "Le fichier contient de la structure, mais beaucoup moins de répétitions directes qu'un motif artificiel.",
    ],

    "compress binary": [
      "$ cat test_binary.bin | ./bwt | ./mtf | ./rle > test_binary.comp",
      "",
      "Fichier : test_binary.bin",
      "Contenu : données aléatoires",
      "",
      "Taille initiale : 10 000 octets",
      "Taille finale   : 10 061 octets",
      "Compression     : -0,61%",
      "",
      "Résultat : expansion légère.",
      "Les données aléatoires n'ont pas de redondance exploitable, donc les métadonnées BWT ajoutent un surcoût.",
    ],

    decompress: [
      "$ cat document.comp | ./irle | ./imtf | ./ibwt > document.res",
      "",
      "Décompression terminée.",
      "Pipeline inverse : IRLE → IMTF → IBWT",
      "Le flux original peut maintenant être comparé avec diff.",
    ],

    diff: [
      "$ diff test_normal.txt test_normal.res",
      "",
      "Aucune différence détectée.",
      "Le fichier reconstruit est identique au bit près à l'original.",
    ],

    equalizer: [
      "$ cat test_repetitif.txt | ./bwt | ./mtf | ./rle | ./equalizer",
      "",
      "--- ANALYSE DE L'ÉGALISATEUR ---",
      "Octet   0 : 26.9% des données",
      "Octet   1 :  7.7% des données",
      "Octet   2 :  7.7% des données",
      "Octet  10 :  3.8% des données",
      "Octet  14 :  3.8% des données",
      "Octet  17 :  3.8% des données",
      "Octet  39 :  3.8% des données",
      "Octet  67 :  3.8% des données",
      "Octet  68 :  3.8% des données",
      "Octet  69 :  3.8% des données",
      "Octet  70 :  7.7% des données",
      "Octet 207 : 19.2% des données",
      "Octet 208 :  3.8% des données",
      "--------------------------------",
      "Entropie : 3.267 bits/octet",
      "Taille théorique minimale : 11 octets",
      "",
      "Conclusion : un codage statistique final, par exemple Huffman, pourrait encore réduire le flux.",
    ],

    order: [
      "Comparaison de l'ordre des filtres sur test_repetitif.txt",
      "",
      "$ cat test_repetitif.txt | ./bwt | ./mtf | ./rle | wc -c",
      "26",
      "",
      "$ cat test_repetitif.txt | ./bwt | ./rle | wc -c",
      "10009",
      "",
      "$ cat test_repetitif.txt | ./rle | ./mtf | ./bwt | wc -c",
      "10009",
      "",
      "Conclusion :",
      "BWT doit passer en premier pour créer la structure.",
      "MTF est indispensable pour transformer cette proximité en suites de zéros.",
      "RLE devient efficace seulement après MTF.",
    ],

    standard: [
      "$ cat document.txt | ./bwt | ./mtf | ./rle | wc -c",
      "26",
      "",
      "Ordre optimal : BWT → MTF → RLE",
    ],

    "without-mtf": [
      "$ cat document.txt | ./bwt | ./rle | wc -c",
      "10009",
      "",
      "Sans MTF, le RLE ne voit pas de longues suites de 0 à compresser.",
    ],

    inverted: [
      "$ cat document.txt | ./rle | ./mtf | ./bwt | wc -c",
      "10009",
      "",
      "Ordre incohérent : la BWT arrive trop tard et ne prépare plus les données pour les filtres suivants.",
    ],

    ls: [
      "bwt  ibwt  mtf  imtf  rle  irle  equalizer",
      "test_repetitif.txt  test_normal.txt  test_binary.bin  Makefile",
    ],
  };

  let terminalBusy = false;
  const commandQueue = [];

  const TYPE_SPEED = 9; // plus petit = plus rapide
  const LINE_DELAY = 45; // pause entre les lignes

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function appendLine(text = "", className = "") {
    const line = document.createElement("div");
    line.className = `terminal-line ${className}`;
    line.textContent = text;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
    return line;
  }

  async function typeIntoLine(line, text) {
    line.textContent = "";

    for (let i = 0; i < text.length; i++) {
      line.textContent += text[i];
      output.scrollTop = output.scrollHeight;

      // Petit boost : les lignes longues s'écrivent un peu plus vite
      const speed = text.length > 70 ? Math.max(2, TYPE_SPEED - 4) : TYPE_SPEED;
      await sleep(speed);
    }
  }

  async function appendLineTyped(text = "", className = "") {
    const line = document.createElement("div");
    line.className = `terminal-line ${className}`;
    output.appendChild(line);

    await typeIntoLine(line, text);
    await sleep(LINE_DELAY);

    output.scrollTop = output.scrollHeight;
    return line;
  }

  async function appendBlockTyped(lines) {
    for (const line of lines) {
      await appendLineTyped(line);
    }
  }

  async function executeCommand(rawCommand) {
    const command = rawCommand.trim().toLowerCase();

    if (!command) return;

    if (command === "clear") {
      output.innerHTML = "";
      return;
    }

    await appendLineTyped(
      `user@portfolio:~/compression$ ${rawCommand}`,
      "terminal-command",
    );

    if (commands[command]) {
      await appendBlockTyped(commands[command]);
    } else if (
      command.includes("./bwt") &&
      command.includes("./mtf") &&
      command.includes("./rle")
    ) {
      await appendBlockTyped(commands["compress repetitif"]);
    } else {
      await appendLineTyped(
        `Commande inconnue : ${rawCommand}`,
        "terminal-error",
      );
      await appendLineTyped("Tape help pour voir les commandes disponibles.");
    }

    appendLine("");
  }

  async function processQueue() {
    if (terminalBusy) return;

    terminalBusy = true;

    while (commandQueue.length > 0) {
      const command = commandQueue.shift();
      await executeCommand(command);
    }

    terminalBusy = false;
  }

  function runCommand(rawCommand) {
    const command = rawCommand.trim();

    if (!command) return;

    // clear doit être immédiat
    if (command.toLowerCase() === "clear") {
      output.innerHTML = "";
      commandQueue.length = 0;
      terminalBusy = false;
      return;
    }

    commandQueue.push(command);
    processQueue();
  }

  async function bootTerminal() {
    await appendLineTyped(
      "Compression Lab — terminal interactif",
      "terminal-success",
    );
    await appendLineTyped("Projet : BWT → MTF → RLE en C");
    await appendLineTyped("Tape help pour voir les commandes disponibles.");
    appendLine("");
    await appendLineTyped(
      "Astuce : essaie compress repetitif, equalizer ou order.",
    );
    appendLine("");
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const value = input.value;
    input.value = "";

    runCommand(value);
  });

  presetButtons.forEach((button) => {
    button.addEventListener("click", () => {
      runCommand(button.dataset.terminalCommand);
      input.focus();
    });
  });

  bootTerminal();
}
