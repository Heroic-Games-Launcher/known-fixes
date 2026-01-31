import fs from "fs/promises";

async function generateSingleFile() {
  const folders = ["amazon", "epic", "gog"];

  const allData = {};

  for (const folder of folders) {
    for await (const entry of fs.glob(`${folder}/*.json`)) {
      const appName = entry
        .replaceAll(folder, "")
        .replaceAll("/", "")
        .replace("-.json", "");
      const content = await fs.readFile(entry, "utf-8");

      allData[appName] = JSON.parse(content);
    }
  }

  await fs.writeFile(
    "known_fixes.json",
    JSON.stringify(allData, null, 2),
    "utf-8",
  );

  console.log("known_fixes.json saved");
}

generateSingleFile();
