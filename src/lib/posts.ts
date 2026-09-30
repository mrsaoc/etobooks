export type Post = {
  slug: string;
  title: string;
  category: "Miniconto" | "Leitura";
  displayDate?: string;
  subtitle?: string;
  excerpt: string;
  image?: { src: string; alt: string; credit?: string };
  paragraphs: string[];
  sections?: { title: string; paragraphs: string[] }[];
  credits?: string[];
  rights?: string;
};

const rights =
  "© Todos direitos reservados à Ewerthon Tobace. Este material não pode ser publicado, transmitido por broadcast, reescrito ou redistribuído sem autorização. © All rights reserved to Ewerthon Tobace. This material can not be published, broadcast, rewritten or redistributed without permission.";
const credits = [
  "©Ewerthon Tobace, da série minicontos de amor, Dezembro/2021",
  "Arte/Illustration: ©ETo2021",
];

export const posts: Post[] = [
  {
    slug: "se-ela-danca",
    title: "Se ela dança…",
    category: "Miniconto",
    displayDate: "Dezembro/2021",
    excerpt:
      "Desengonçada, ela adentrou a classe. Não tinha dois meses que ia àquela academia, quase que diariamente, em busca de uma silhueta que combinasse com suas roupas justas.",
    image: {
      src: "/images/textos/se-ela-danca.png",
      alt: "Arte de Se ela dança…, com sapatilhas de balé e laço rosa",
    },
    paragraphs: [
      "Desengonçada, ela adentrou a classe. Não tinha dois meses que ia àquela academia, quase que diariamente, em busca de uma silhueta que combinasse com suas roupas justas. Queria ganhar mais flexibilidade também. Quem sabe poder cortar a unha do pé sem tanto malabarismo e sofrimento. Só se deu conta de que a aula não era de alongamento quando viu as colegas de sapatilha. Balé! “Vixi, dancei, literalmente”. Ela parecia uma marionete descontrolada na aula. As colegas riam. A professora ria. A academia toda ria. E não lhe restou alternativa, senão rir de si mesma. E depois daquele vexame todo, ela desistiu da silhueta e se conformou em gastar com a pedicura.",
    ],
    credits,
    rights,
  },
  {
    slug: "a-viagem",
    title: "A viagem",
    category: "Miniconto",
    displayDate: "Dezembro/2021",
    excerpt:
      "Uma lágrima escorre. E outra. E mais outra. Enquanto o avião ganha altura, um último olhar para a cidade.",
    image: {
      src: "/images/textos/a-viagem.png",
      alt: "Arte de A viagem, sobre um fundo de folhas verdes",
    },
    paragraphs: [
      "Uma lágrima escorre. E outra. E mais outra. Enquanto o avião ganha altura, um último olhar para a cidade. Na mente, subitamente, vem a imagem de uma cena de Peter Pan: a da viagem à Terra do Nunca, quando a cidade vai ficando pequena, distante…",
      "Rostos queridos aparecem entre as estrelas coladas no céu escuro. A saudade, sempre impetuosa, aperta sem dó a alma. Não há volta. A próxima via de retorno só daqui a 12 horas – ou uma década, como planejado. Então, outra lágrima desliza pelo rosto, já visivelmente abatido pelo tempo…",
    ],
    credits,
    rights,
  },
  {
    slug: "drinks-beijos-e-cia",
    title: "Drinks, beijos & cia.",
    category: "Miniconto",
    displayDate: "Dezembro/2021",
    excerpt:
      "A acidez do suco de laranja misturada com o adocicado do licor de cassis tomava conta de suas papilas gustativas enquanto uma música irritante invadia seus ouvidos.",
    image: {
      src: "/images/textos/drinks-beijos-e-cia.png",
      alt: "Arte de Drinks, beijos & cia., com um regador espalhando corações",
    },
    paragraphs: [
      "A acidez do suco de laranja misturada com o adocicado do licor de cassis tomava conta de suas papilas gustativas enquanto uma música irritante invadia seus ouvidos. Às vezes, não entendia uma só palavra do que o outro dizia. Mas gostava de ver seus lábios se movimentando rápido, deixando escapar um suave perfume de cerveja. Desejava aquela boca, mas não queria pular as etapas. O máximo que conseguiu naquela noite foi um beijo de despedida nas bochechas. E quando se deu conta, já ganhava a rua, apressada, para pegar a última condução de volta para casa.",
    ],
    credits,
    rights,
  },
  {
    slug: "para-sempre",
    title: "Para sempre",
    category: "Miniconto",
    displayDate: "1 de dezembro de 2021",
    excerpt:
      "“Eu te amo”, ouvi-a dizer ao telefone. Sabia que não era uma declaração de amor. Ela estava se despedindo.",
    paragraphs: [
      "“Eu te amo”, ouvi-a dizer ao telefone. Sabia que não era uma declaração de amor. Ela estava se despedindo. Quando desliguei o celular, um aperto tomou conta do meu peito e chorei feito uma criança. Sabia que nunca mais iria vê-la. Até hoje seu corpo não foi encontrado e, às vezes, acordo no meio da noite com uma lágrima presa nos olhos. Faria qualquer coisa só para vê-la mais uma vez e beijar seus lábios.",
    ],
    credits: [
      "(©Ewerthon Tobace, da série de minicontos, 1/Dezembro/2021, baseado em depoimentos de parentes das vítimas do ataque às torres do World Trade Center)",
      "Arte/Illustration: ©ETo/2021",
    ],
    rights,
  },
  {
    slug: "misterio-para-todas-as-idades",
    title: "Mistério para todas as idades",
    category: "Leitura",
    subtitle:
      "Um trio de detetives marcou minha infância. Leo, Gino e Ângela, criados pelo brilhante Marcos Rey, ajudaram-me a fazer deliciosas viagens literárias em busca de soluções para os mais variados crimes",
    excerpt:
      "Um trio de detetives marcou minha infância. Leo, Gino e Ângela, criados pelo brilhante Marcos Rey, ajudaram-me a fazer deliciosas viagens literárias em busca de soluções para os mais variados crimes.",
    image: {
      src: "/images/textos/um-rosto-no-computador.jpeg",
      alt: "Capa de Um Rosto no Computador, de Marcos Rey, com ilustrações de Luciano Tasso",
      credit: "Foto: Divulgação",
    },
    paragraphs: [
      "Sempre gostei de livros de mistérios. Lembro-me de ter “devorado” quase todos os livros da série Vaga-Lume que tratavam do tema. Mas meu primeiro contato com esse gênero foi O Gênio do Crime, de J.C. Marinho.",
      "Depois, foi a vez da série A Inspetora, de Santos de Oliveira. Mais tarde, já adolescente, mergulhei em obras mais complexas, como as de Agatha Christie e Stephen King.",
      "Mas um trio de detetives marcou bastante minha infância. Leo, Gino e Ângela, criados pelo brilhante Marcos Rey, ajudaram-me a fazer deliciosas viagens literárias em busca de soluções para os mais variados crimes. O primeiro da série é O Mistério do 5 Estrelas. Depois o trio volta à ação em O Rapto do Garoto de Ouro e em Um Cadáver Ouve Rádio.",
      "A última aventura dos amigos foi em Um Rosto no Computador, lançado em 1993. Foi justamente este livro que resolvi reler para reviver o clima de mistério – que há muito tempo não fazia parte do meu universo literário atual (tenho preferido biografias e romances).",
      "Para começar, um dos detalhes que me chamou a atenção (e que não lembrava mais) foi o fato do autor citar o computador como algo novo, quase que um “bicho de sete cabeças”, que começou a fazer parte do cotidiano dos brasileiros realmente no começo dos anos 90. Quem não viveu a época, não imagina o quanto era difícil fazer trabalhos escolares. Sou ainda do tempo da máquina de escrever e do mimeógrafo.",
      "Bem, mas vamos ao enredo do livro. Ele conta a história de Camélia, uma jovem que sai da Bahia escondida dos tios (ela é órfã de pai e mãe) e vai participar de um concurso de beleza em São Paulo.",
      "Ingênua e bela, a moça desaparece misteriosamente na capital paulista. Para resolver o caso, entra em cena o trio de amigos Leo, Gino e Ângela.",
      "O que mais gosto nas tramas de Marcos Rey é a descrição que ele faz dos detalhes e das pistas que deixa, mesmo que num simples diálogo. Os mais atentos poderão solucionar o mistério rapidinho. Mas mesmo sabendo quem é o culpado, o escritor nos prende até o final, pois é somente nos capítulos derradeiros que se entende os reais motivos do criminoso.",
      "Um Rosto no Computador é um livro infanto-juvenil, super fácil de ler, mas eu recomendo para todas as idades. Relê-lo agora me fez recordar uma porção de coisas da minha infância e me instigou a querer ler outras obras de mistério.",
    ],
    sections: [
      {
        title: "Sobre o autor",
        paragraphs: [
          "Marcos Rey é, na verdade, pseudônimo de Edmundo Donato. Ele nasceu em São Paulo em 17 de fevereiro de 1925 e morreu no dia 1 de abril de 1999. Além de escritor, foi tradutor e cineasta brasileiro.",
          "Ele publicou toda sua obra em vida – são mais de cinquenta livros entre romances, contos, novelas e ensaios. O primeiro trabalho com o nome Marcos Rey, aos 16 anos, foi o conto Ninguém Entende Wiu Li, no suplemento literário de domingo da Folha da Manhã (atual Folha de S.Paulo), em 1942.",
        ],
      },
    ],
  },
  {
    slug: "o-poder-da-palavra",
    title: "O poder da palavra",
    category: "Leitura",
    subtitle:
      "Quando fui escolher uma publicação para ler e fazer comentários, dei de cara com esse livro da Valéria Piassa Polizzi de novo e não pensei duas vezes. Reler foi a melhor coisa que já fiz",
    excerpt:
      "Quando fui escolher uma publicação para ler e fazer comentários, dei de cara com esse livro da Valéria Piassa Polizzi de novo e não pensei duas vezes. Reler foi a melhor coisa que já fiz.",
    image: {
      src: "/images/textos/depois-daquela-viagem.jpeg",
      alt: "Capa de Depois daquela viagem, de Valéria Piassa Polizzi",
    },
    paragraphs: [
      "A primeira vez que li Depois Daquela Viagem, de Valéria Piassa Polizzi, foi logo depois que terminei a faculdade. Lembro-me que fiquei impressionado com a história dessa jovem e indiquei para várias pessoas. É daqueles livros difíceis de parar de ler e que te marcam para toda vida.",
      "Bem, Depois Daquela Viagem conta a história de Valéria (é uma autobiografia), que contraiu o HIV, causador da aids, com seu primeiro namorado. Na época com 16 anos, a garota conta como foi traumático esse seu primeiro amor.",
      "Recheado de humor, a obra fala dos medos, angústias, dúvidas, relação com pais e amigos e o mais importante para mim: fala de vida e de como é importante agradecermos sempre por estarmos vivos e com saúde. “A vida é uma daquelas coisas tão presentes que passa despercebida. Às vezes nós precisamos quase perdê-la, ou achar que está por se perder, para lhe darmos o devido valor e dimensão. A vida está aqui e é para ser vivida”, insiste.",
      "Filha de família rica, Valéria relata no livro sua experiência de vida nos Estados Unidos. As descobertas e aprendizados da jovem, muito bem descritas, nos dá uma visão mais ampla de como nós seres humanos somos absurdamente complicados e cheios de juízos de valores.",
      "Foi através da palavra escrita que Valéria descobriu uma forma de passar sua mensagem e tentar acabar com o preconceito. “A palavra liberta. Ela pode até derrubar (pré)conceitos, como aconteceu no meu caso”, diz Valéria. “A palavra escrita, então, é mais forte. Quando escrevemos, pensamos e repensamos e, por mais avançada que seja uma idéia ou mais profunda que seja a reflexão, escrita ela amadurece e toma outras dimensões. A palavra comunica, emociona, fere. A palavra é uma das coisas mais humanas que nós possuímos. E foi ela que me ajudou a resgatar outra coisa tipicamente humana que eu, por ter me contaminado com o vírus da AIDS, havia perdido: a arte de projetar, de fazer planos”, ensina.",
      "O livro foi lançado em 1997 e já foram publicadas 19 edições e vendidos mais de 200 mil cópias só no Brasil. A vida de Valéria também sofreu transformações importantes. A jovem escritora ganhou destaque na mídia e se tornou um dos símbolos de luta contra o preconceito em torno da aids.",
      "A obra já ganhou versões em italiano, alemão e espanhol. “Quando comecei a escrever esse livro, eu só tinha um lápis, um caderno e a vontade de explicar muitas coisas”, conta Valéria. “Passei três anos pensando e repensando em cima do papel. Se isso já tinha sido para mim um grande aprendizado, publicar o livro e vê-lo tão bem aceito pelo público e pela mídia, depois de anos de tabu, só me deu mais forças para continuar o trabalho.”",
      "O trabalho a que ela se refere é a série de palestras para jovens sobre a importância do uso da camisinha e sobre a doença. “Certa vez, cheguei a conversar com mais de 800 jovens num cinema municipal superlotado”, orgulha-se.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((post) => post.slug === slug);
