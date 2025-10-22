import fs from 'fs';
import path from 'path';

fs.readdirSync(__dirname)
  .filter(f => f !== 'index.ts')
  .forEach(f => import(path.join(__dirname, f)));
