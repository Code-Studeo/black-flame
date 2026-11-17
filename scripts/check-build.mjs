import { readFile, access } from 'node:fs/promises';
const required = ['index.html', 'styles.css', 'app.js', 'public/favicon.svg', 'public/images/hero-steak.jpg', 'public/images/interior.jpg', 'public/images/steak-detail.jpg', 'public/images/facade.jpg', 'public/images/cocktails.jpg', 'public/images/dessert.jpg'];
for (const path of required) await access(new URL(`../${path}`, import.meta.url));
const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
if (!/<html lang="pt-BR">/.test(html) || /lorem ipsum/i.test(html) || !html.includes('booking-form')) throw new Error('Validação do conteúdo principal falhou.');
console.log(`Build estático validado: ${required.length} arquivos, metadados pt-BR e formulário demonstrativo presentes.`);
