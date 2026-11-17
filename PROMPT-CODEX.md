# PROJETO 01 — BLACK FLAME

Você é um diretor de arte digital e desenvolvedor front-end sênior. Crie do zero um site cinematográfico de demonstração para a empresa 100% FICTÍCIA **BLACK FLAME**, segmento **Steakhouse premium**. O resultado deve parecer um projeto real de agência premium, e não um template genérico.

## Identidade e conteúdo
- Nome: BLACK FLAME
- Slogan: “O fogo transforma tudo.”
- Segmento: Steakhouse premium
- Paleta: preto carvão, cobre e âmbar. Defina tokens CSS consistentes.
- Produtos, serviços e preços EXCLUSIVAMENTE demonstrativos: Tomahawk na brasa; ancho premium; costela 12 horas; carta de drinks; reservas.
- Escreva todos os textos finais em português brasileiro, com copy original, sem lorem ipsum.
- Crie história de marca plausível, missão, diferenciais, equipe e 3 depoimentos claramente identificados como fictícios. Não invente avaliações reais nem credenciais.
- Endereço e telefone devem ser rotulados como ilustrativos. Prefira contato por formulário de demonstração sem enviar dados.

## Direção cinematográfica
- Hero fullscreen com título grande, imagem de fundo com sobreposição gradiente e movimento sutil; call to action forte.
- Composição editorial, hierarquia tipográfica, grid elegante, espaços amplos e contraste legível.
- Animações de entrada no scroll com IntersectionObserver, parallax sutil sem prejudicar desempenho, hover refinado, microinterações e transições entre seções.
- Respeitar prefers-reduced-motion. Evitar scroll-jacking, autoplay com áudio e efeitos excessivos.
- Use as cinco imagens de /imagens-referencia apenas como REFERÊNCIA VISUAL de baixa resolução; elas são recortes de um moodboard, NÃO imagens finais de produção. Caso não haja assets em alta resolução, crie composição CSS bonita e deixe caminhos /public/images/hero.webp, ambiente.webp, destaque-01.webp, destaque-02.webp e detalhe.webp documentados, sem usar links externos quebráveis. NÃO amplie as miniaturas como hero.

## Páginas e seções
1. Menu fixo transparente que muda de estilo ao rolar, navegação mobile acessível.
2. Hero com slogan, subtítulo e CTAs.
3. Sobre a empresa, história fictícia e proposta de valor.
4. Serviços/produtos e diferenciais.
5. Galeria/portfólio editorial com cinco posições de imagens.
6. Experiência e processo de atendimento.
7. Depoimentos explicitamente fictícios.
8. FAQ com accordion acessível.
9. Contato e CTA final.
10. Rodapé com links, aviso 'Projeto conceitual — empresa fictícia' e crédito de portfólio configurável.

## Interações específicas
Implemente: menu com filtros de pratos, galeria, reservas demonstrativas com validação, depoimentos fictícios. As funcionalidades de compra, reserva, orçamento ou agendamento devem ser claramente simuladas, sem backend nem promessa de envio. Persistência local apenas se fizer sentido e sem dados sensíveis.

## Tecnologia e entrega
- Escolha HTML/CSS/JS ou React + Vite, justificando em duas linhas no README. Evite dependências pesadas.
- Projeto executável com comandos npm se aplicáveis, sem API paga e sem segredos.
- Responsividade testada em 360, 768, 1024 e 1440px.
- SEO: title, meta description, Open Graph básico, favicon local e headings semânticos.
- Acessibilidade: alt text, foco visível, contraste WCAG, labels, teclado e aria quando necessário.
- Performance: lazy loading abaixo da dobra, dimensões de imagens, fontes otimizadas e CLS reduzido.
- README com instalação, tecnologias, recursos, estrutura, aviso de ficção e passos para publicar na Vercel.
- Não use marcas de terceiros, conteúdo protegido ou imagens aleatórias.
- Antes de finalizar, execute build/testes disponíveis e corrija erros.

## Critérios de aceite
Site funcional e visualmente único; navegação mobile; CTAs funcionando (ainda que em demo); ausência de console errors; sem lorem ipsum; cinco posições de imagem; todos os dados comerciais marcados como fictícios; pronto para GitHub/Vercel.
