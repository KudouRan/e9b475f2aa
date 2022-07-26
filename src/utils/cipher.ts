require('dotenv').config();
import * as crypto from 'crypto';
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

function cipher(str: string) {
  const cipher = crypto.createCipheriv('aes-256-cbc', process.env.KEY, process.env.IV);
  return cipher.update(str, 'utf8', 'hex') + cipher.final('hex');
}

function decipher(str: string) {
  const decipher = crypto.createDecipheriv('aes-256-cbc', process.env.KEY, process.env.IV);
  return decipher.update(str, 'hex', 'utf8') + decipher.final('utf8');
}

export function encrypt() {
  writeFileSync(
    resolve(__dirname, './data.txt'),
    cipher(readFileSync(resolve(__dirname, '../index.local.ts')).toString('utf-8')),
  );
}

export function decrypt() {
  writeFileSync(
    resolve(__dirname, '../index.ts'),
    decipher(readFileSync(resolve(__dirname, './data.txt')).toString('utf-8')),
  );
}
