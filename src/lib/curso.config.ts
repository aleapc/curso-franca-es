// A CONFIG DE CURSO — o que muda entre EN/DE/FR/IT→Espanha (e o futuro →França)
// mora AQUI e só aqui. Componentes agnósticos de língua (busca, tradutor,
// bolso do viajante) leem daqui; nenhum deles tem par de idioma ou moeda
// hard-coded. Derivar um SKU novo = copiar este arquivo e trocar os valores.

export const curso = {
  /**
   * Identidade do SKU, e ela NÃO é cosmética: é o namespace de
   * localStorage. Todos os cursos servem de aleapc.github.io/<curso>/, e
   * localStorage é por ORIGEM, não por caminho — sem isto, os cursos leem e
   * sobrescrevem o progresso uns dos outros.
   */
  sku: 'curso-franca-es',
  /** Idioma do comprador (a voz-guia). */
  buyerLang: 'es',
  /** Idioma do destino (a fala nativa ensinada). */
  targetLang: 'fr',
  /** Par para o link do Google Tradutor: sl = comprador, tl = destino. */
  translatorPair: { sl: 'es', tl: 'fr' },
  /** Moeda do destino. */
  destCurrency: 'EUR',
  /**
   * Moedas de "casa" do comprador que vale converter no bolso do viajante.
   * Vazio quando o comprador já usa a moeda do destino (ex.: DE/FR/IT→Espanha,
   * todos em EUR) — nesse caso o /bolso mostra a nota "mesma moeda", sem conversor.
   */
  homeCurrencies: [] as string[],
  timeZone: 'Europe/Paris',
  cidadeExibicao: 'Paris',
  faixasNow: [
    { de: 0, linha: 'Las cocinas descansan, pero en París siempre hay una brasserie o un bar todavía abierto.' },
    { de: 5 * 60, linha: 'La ciudad aún duerme. Las boulangeries ya están encendiendo los hornos.' },
    { de: 7 * 60, linha: 'Petit-déjeuner: café y un croissant recién hecho o una tartine — la boulangerie acaba de abrir.' },
    { de: 9 * 60 + 30, linha: 'Momento ideal para un café de pie en la barra. Vas temprano, no tarde.' },
    { de: 11 * 60, linha: 'Las cocinas preparan el déjeuner. Coge mesa en la brasserie antes del lleno del mediodía.' },
    { de: 12 * 60, linha: 'El déjeuner ya empieza: aquí el almuerzo se sienta de verdad, con su plat du jour y su entrante.' },
    { de: 14 * 60, linha: 'El almuerzo se calma, pero un café y un postre siguen estando siempre a mano.' },
    { de: 16 * 60, linha: 'Goûter: la merienda francesa con algo dulce — un pain au chocolat o un macaron con el café.' },
    { de: 18 * 60 + 30, linha: 'Hora del apéro: una copa de vino y unas aceitunas antes de cenar. Así arranca la noche parisina.' },
    { de: 20 * 60, linha: 'Dîner: los restaurantes se llenan ahora. Con reserva o sin ella, has llegado en el momento justo.' },
    { de: 22 * 60 + 30, linha: 'Tarde, pero muchas brasseries siguen sirviendo — y los bares apenas empiezan.' }
  ] as { de: number; linha: string }[]
} as const;

export type CursoConfig = typeof curso;
