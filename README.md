# BLACK FLAME

Site conceitual para uma steakhouse premium inteiramente fictícia. **O fogo transforma tudo.**

## Tecnologia

O projeto usa HTML, CSS e JavaScript nativos para carregar rápido e manter a implementação simples de hospedar. As animações usam IntersectionObserver e CSS, sem dependências de runtime.

## Executar localmente

Requer Node.js 18 ou superior. Não há dependências npm para instalar.

```bash
npm run dev
```

Abra [http://localhost:4173](http://localhost:4173). Para validar os arquivos e o conteúdo:

```bash
npm run build
npm test
```

## Recursos

- Menu responsivo com navegação por teclado e estado acessível.
- Cardápio demonstrativo com filtros por categoria.
- Galeria editorial em cinco posições, com fotos originais em alta resolução.
- Depoimentos rotativos, todos identificados como personagens fictícios.
- FAQ expansível com elementos nativos acessíveis.
- Formulário de reserva local com validação. A confirmação é exibida na página; nenhum dado é enviado ou salvo.
- Hero fotográfico em tela ampla, zoom lento, parallax discreto, revelações no scroll e suporte a `prefers-reduced-motion`.
- Missão, diferenciais e equipe com personagens claramente identificados como fictícios.
- Metadados SEO/Open Graph, favicon local, textos alternativos, lazy loading e foco visível.

## Imagens

As fotografias em `public/images/` vieram das imagens fornecidas pelo usuário. Foram convertidas de PNG para JPEG de alta qualidade, sem reduzir a resolução original (1.536–1.672 px de largura), para diminuir o peso de carregamento:

| Arquivo | Uso |
| --- | --- |
| `hero-steak.jpg` | Steak na brasa, em tela ampla no hero |
| `steak-detail.jpg` | Corte de carne na galeria |
| `facade.jpg` | Fachada noturna na galeria |
| `interior.jpg` | Salão no manifesto, galeria e reserva |
| `cocktails.jpg` | Carta de drinks na galeria |
| `dessert.jpg` | Sobremesa na galeria |

As miniaturas originais de `imagens-referencia/` foram preservadas. A imagem do hambúrguer não aparece no site porque esse item não pertence ao cardápio demonstrativo definido para o projeto.

## Publicação na Vercel

1. Envie a pasta para um repositório GitHub.
2. Na Vercel, escolha **Add New → Project** e importe o repositório.
3. Selecione **Other** como framework. Não é necessário comando de build nem pasta de saída: o projeto é estático.
4. Publique. Selecione a pasta raiz do projeto; a página e os assets são servidos como arquivos estáticos.

## Ficção e configuração

BLACK FLAME não é uma empresa real. Endereço, telefone, cardápio, preços e todas as falas de clientes são ilustrativos. Nenhuma avaliação ou credencial real é alegada. O formulário não envia nem persiste informações. Substitua `[Nome / estúdio]` no rodapé pelo crédito de portfólio desejado antes de publicar.
