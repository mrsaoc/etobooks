export type Post = {
  slug: string;
  title: string;
  date: string;
  displayDate: string;
  excerpt: string;
  paragraphs: string[];
};

export const posts: Post[] = [
  {
    slug: "o-silencio-entre-as-paginas",
    title: "O silêncio entre as páginas",
    date: "2026-07-28",
    displayDate: "28 de julho, 2026",
    excerpt:
      "Escrever é aprender a habitar o intervalo. Há um tipo de silêncio que só existe entre duas frases — e é ali que a literatura acontece.",
    paragraphs: [
      "Escrever é aprender a habitar o intervalo. Há um tipo de silêncio que só existe entre duas frases, um espaço que não é vazio, mas suspensão: o leitor respira, o texto espera.",
      "Durante anos acreditei que a força de um parágrafo estava naquilo que ele afirmava. Hoje desconfio do contrário. O que permanece é o que foi deixado de fora, a palavra que decidimos não escrever e que, por isso mesmo, ecoa mais alto.",
      "Talvez seja essa a disciplina do ofício: cortar até que reste apenas o essencial, e então cortar uma vez mais. O que sobrevive a esse corte é o livro.",
      "Escrevo devagar por convicção. A pressa produz frases corretas; o tempo produz frases verdadeiras.",
    ],
  },
  {
    slug: "cadernos-de-uma-cidade-cinza",
    title: "Cadernos de uma cidade cinza",
    date: "2026-06-14",
    displayDate: "14 de junho, 2026",
    excerpt:
      "Anotações de rua sobre janelas acesas, vizinhos anônimos e a estranha intimidade de quem escreve olhando para fora.",
    paragraphs: [
      "A cidade me ensinou a olhar de esguelha. Quem escreve em apartamentos altos aprende cedo que a vida acontece em janelas alheias, sempre pela metade.",
      "Anotei durante meses o que via da minha: o homem que rega plantas às seis, a mulher que lê em pé, a criança que desenha no vidro embaçado. Nada disso é enredo, e ainda assim é tudo.",
      "A ficção não inventa pessoas. Ela apenas insiste em olhar para as que já estavam ali, até que se tornem inevitáveis.",
    ],
  },
  {
    slug: "sobre-reler",
    title: "Sobre reler",
    date: "2026-05-02",
    displayDate: "2 de maio, 2026",
    excerpt:
      "Nenhum livro é lido duas vezes. Muda o leitor, muda a página — e a releitura é a forma mais honesta de autobiografia.",
    paragraphs: [
      "Nenhum livro é lido duas vezes. O objeto é o mesmo, as frases estão no lugar, mas o leitor chegou diferente — e é ele quem escreve, de novo, o que está ali.",
      "Guardo edições sublinhadas de épocas distintas. São mapas de quem eu era: o que me comoveu aos vinte anos hoje me parece decorativo; o que ignorei agora me atravessa.",
      "Reler é, no fim, a forma mais honesta de autobiografia. Não conto minha vida: mostro onde marquei as margens.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
