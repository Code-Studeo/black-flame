import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
test('documento usa português, copy original e explicita a natureza fictícia', async () => {
  const html = await readFile(new URL('index.html', root), 'utf8');
  assert.match(html, /lang="pt-BR"/);
  assert.doesNotMatch(html, /lorem ipsum/i);
  assert.match(html, /empresa fictícia/);
  assert.match(html, /Personagem fictícia/);
  assert.match(html, /O que orienta a casa/);
  assert.match(html, /EQUIPE DA CASA · FICTÍCIA/);
  const gallery = html.split('class="gallery-grid"')[1].split('class="gallery-caption"')[0];
  assert.equal([...gallery.matchAll(/class="gallery-cell/g)].length, 5);
});
test('fotografias em alta resolução estão publicadas localmente', async () => {
  for (const file of ['hero-steak.jpg','interior.jpg','steak-detail.jpg','facade.jpg','cocktails.jpg','dessert.jpg']) await access(new URL(`public/images/${file}`, root));
});
test('recursos interativos e opção de movimento reduzido estão implementados', async () => {
  const js = await readFile(new URL('app.js', root), 'utf8');
  const css = await readFile(new URL('styles.css', root), 'utf8');
  assert.match(js, /IntersectionObserver/);
  assert.match(js, /bookingForm\.addEventListener/);
  assert.match(js, /filter-button/);
  assert.match(css, /prefers-reduced-motion/);
});
