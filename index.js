#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const fse = require("fs-extra");

const args = process.argv.slice(2);
const targetDir = args[0] || ".";
const cwd = process.cwd();

const destPath = path.resolve(cwd, targetDir === "." ? "." : targetDir);
const templatePath = path.resolve(__dirname, "template");

(async () => {
  try {
    if (targetDir !== ".") {
      fs.mkdirSync(destPath, { recursive: true });
    }

    console.log(`🚀 Copiando arquivos para ${destPath}`);
    await fse.copy(templatePath, destPath, {
      overwrite: true,
      errorOnExist: false,
    });

    console.log("✅ Projeto criado com sucesso!");
  } catch (e) {
    console.error("❌ Erro ao criar projeto:", e);
    process.exit(1);
  }
})();
