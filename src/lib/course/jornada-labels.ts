// Texto de exibição das fases — na língua do COMPRADOR (es).
// Dado, não lógica: gerado a partir da tabela i18n do reposicionamento.
// Ver jornada.ts para a estrutura universal (slot → fase).
import type { FaseId } from './jornada';

export const FASE_LABEL: Record<FaseId, { emoji: string; nome: string; descricao: string }> = {
  chegada: { emoji: '🛬', nome: "Llegada", descricao: "Tus primeras 24 horas — del avión a instalarte." },
  diaadia: { emoji: '☀️', nome: "El día a día", descricao: "Comer, comprar, moverte y resolver cosas — como quien ya conoce esto." },
  integrando: { emoji: '🌙', nome: "Integrándote", descricao: "No un turista perdido — alguien que vino para quedarse un rato." }
};

export const FASE_COR: Record<FaseId, string> = {
  chegada: 'terracota',
  diaadia: 'salvia',
  integrando: 'oceano'
};

export const PROMESSA = {
  headline: "El idioma de tu viaje, en el orden en que realmente lo vas a necesitar.",
  subhead: "Del mostrador del aeropuerto al último brindis de la noche.",
  provaLabel: "Un dato que este curso realmente enseña:"
};
