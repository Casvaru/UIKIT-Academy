import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, '../dist');

function getAllCssFiles(dir, files = []) {
  const items = readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = join(dir, item.name);
    if (item.isDirectory()) {
      getAllCssFiles(fullPath, files);
    } else if (item.name.endsWith('.css')) {
      files.push(fullPath);
    }
  }
  return files;
}

if (!existsSync(distDir)) mkdirSync(distDir, { recursive: true });

const global = readFileSync(resolve(__dirname, '../styles/global.css'), 'utf-8');

const componentsDir = resolve(__dirname, '../src/components');
const cssFiles = existsSync(componentsDir) ? getAllCssFiles(componentsDir) : [];

const componentCss = cssFiles
  .map(path => readFileSync(path, 'utf-8'))
  .join('\n\n');

writeFileSync(
  resolve(distDir, 'styles.css'),
  `${global}\n\n/* Component Tokens */\n\n${componentCss}`
);

console.log('✓ styles.css generado en dist/');
