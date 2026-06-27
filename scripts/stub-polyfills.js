const fs = require("node:fs");
const path = require("node:path");

const chunksDir = path.join(process.cwd(), ".next/static/chunks");

if (!fs.existsSync(chunksDir)) {
  process.exit(0);
}

for (const file of fs.readdirSync(chunksDir)) {
  if (file.startsWith("polyfills-") && file.endsWith(".js")) {
    fs.writeFileSync(path.join(chunksDir, file), "/* modern browsers */");
  }
}
