import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const outDir = path.join(root, 'dist');
const files = [
  'index.html',
  'styles.css',
  'app.js',
  '_headers',
  '_redirects',
  'robots.txt',
  'sitemap.xml',
  'site.webmanifest'
];

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

for (const file of files) {
  const source = path.join(root, file);
  if (!fs.existsSync(source)) throw new Error(`Missing required file: ${file}`);
  fs.copyFileSync(source, path.join(outDir, file));
}

fs.cpSync(path.join(root, 'assets'), path.join(outDir, 'assets'), { recursive: true });

const html = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8');
if (!html.includes('id="app"')) throw new Error('Build sanity check failed: app mount missing.');

console.log(`Entity Ethereal site built to ${path.relative(root, outDir)}`);
