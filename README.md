# Eto Tobace Archive

Atue como um Engenheiro de Front-end Sênior e um UX/UI Designer visionário. Preciso que você crie uma aplicação web moderna, limpa e minimalista para o rebranding de um autor e seus livros. O site consolidará duas plataformas existentes em uma única interface de duas abas (Navegação via Tabs ou um Header simples e elegante).

DIRETRIZES TÉCNICAS E DE DESIGN (ESTRITAMENTE OBRIGATÓRIAS):

1. Estilização CSS: O projeto deve utilizar EXCLUSIVAMENTE o Tailwind CSS. Não crie arquivos CSS personalizados a menos que seja estritamente necessário para animações complexas que o Tailwind não suporte nativamente.

2. Paleta de Cores: Estritamente Preto e Branco (Monocromático). Evite cores de destaque. Utilize variações muito sutis de cinza apenas para divisórias finas (ex: border-gray-200) ou estados de hover para garantir a usabilidade.

3. Tipografia: Fundamental para este design. Utilize uma fonte Serifada clássica e altamente legível para os títulos (para trazer a sensação editorial/literária, como Playfair Display, Lora ou Merriweather) e uma fonte Sans-Serif moderna e limpa para o corpo do texto (como Inter ou Roboto). O contraste entre as duas deve ser evidente.

4. Animações: Implemente transições suaves (utilizando as classes utilitárias do Tailwind ou Framer Motion, se aplicável). Exijo um fade-in elegante ao alternar entre as abas e revelações sutis ao rolar a página (scroll fade-up). Sem movimentos bruscos.

5. UX/UI: Foco extremo no "whitespace" (respiro). O layout não pode parecer aglomerado. Adote uma abordagem editorial.

ESTRUTURA DA APLICAÇÃO (2 ABAS PRINCIPAIS):

ABA 1: EtoBooks (Apresentação dos Livros)

- Objetivo: Landing page principal para exibir as obras (baseado na essência do site etobooks.com).

- Componentes:

  - Hero Section: Um título impactante alinhado ao centro ou à esquerda, um subtítulo elegante sobre as obras e um CTA (Call to Action) minimalista (ex: fundo preto, texto branco, com inversão de cores suave no hover).

  - Seção de Exibição: Layout em grid sofisticado para mostrar as capas dos livros ou representações gráficas em preto e branco.

  - Sinopse: Área de texto bem espaçada (leading-relaxed) para descrever a obra, priorizando o conforto visual da leitura.

ABA 2: Textos / Blog (Ewerthon Tobace)

- Objetivo: Um espaço editorial para publicações e textos do autor (baseado na essência do site ewerthontobace.wordpress.com).

- Componentes:

  - Layout: Um feed de artigos em formato de lista ou grid muito limpo, reminiscente de um jornal moderno de vanguarda.

  - Cards de Artigo: Extremamente minimalistas. Devem conter apenas a Data (em fonte pequena e sans-serif), o Título do Texto (em fonte Serif, tamanho médio/grande) e uma breve prévia de duas linhas. Separados apenas por uma linha fina, sem bordas pesadas (sem caixas fechadas).

  - Leitura: Quando um texto for aberto, o layout deve restringir a largura máxima (max-w-2xl ou max-w-3xl) e centrar o texto na tela para garantir uma experiência de leitura imersiva e sem distrações.

Gere o código completo desta interface, garantindo que a alternância entre as abas seja fluida e que a aplicação seja totalmente responsiva, mantendo a excelência tipográfica tanto no mobile quanto no desktop.

logo anexada na conversa.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://etobooks.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/81badf58-3252-46ce-a74a-267fca51c25f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
