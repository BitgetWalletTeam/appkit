const fs = require('fs');
const path = require('path');

// 确保目标目录存在
const wellKnownDir = path.join(__dirname, 'out', '.well-known');
if (!fs.existsSync(wellKnownDir)) {
  fs.mkdirSync(wellKnownDir, { recursive: true });
}

// 复制文件
const sourceFile = path.join(__dirname, 'scripts', 'walletconnect.txt');
const targetFile = path.join(wellKnownDir, 'walletconnect.txt');

try {
  fs.copyFileSync(sourceFile, targetFile);
  console.log('文件成功复制到 .well-known 目录');
} catch (err) {
  console.error('复制文件时出错:', err);
}