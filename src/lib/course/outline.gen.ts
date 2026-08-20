import type { ModuloOutline } from '../types';

// ┌──────────────────────────────────────────────────────────────────────────┐
// │  ARQUIVO GERADO — não edite à mão.                                       │
// │  Fonte: os ep-*.json (título) + slots.json (ordem e módulo).             │
// │  Regenerar: npm run outline   ·   Conferir: npm run outline:conferir     │
// │                                                                          │
// │  O título vivia aqui E no episódio. Duas canônicas para a mesma string   │
// │  é o defeito que fez duas partes reescritas aparecerem na tela com o     │
// │  título antigo e duas partes novas não aparecerem. Agora deriva.         │
// └──────────────────────────────────────────────────────────────────────────┘

export const outline: ModuloOutline[] = [
  {
    nivel: 'basico',
    nome: 'Basic · Get by',
    descricao: 'The French that gets the day done: arriving, ordering, paying, moving, and getting help.',
    cor: 'terracota',
    licoes: [
      { id: 'b01', titulo: 'Di menos de lo que ves', pronta: true },
      { id: 'b02', titulo: 'Bonjour primero, todo lo demás después', pronta: true },
      { id: 'b03', titulo: 'Pardon, y luego lo que necesitas', pronta: true },
      { id: 'b04', titulo: 'Cuatro cosas que caducan antes de volar', pronta: true },
      { id: 'b05', titulo: 'Motif, durée, adresse: tres respuestas y estás dentro', pronta: true },
      { id: 'b06', titulo: 'Vous avez, y luego lo que necesites', pronta: true },
      { id: 'b07', titulo: 'Je peux, y luego lo que necesites hacer', pronta: true },
      { id: 'b08', titulo: 'Où est: la pregunta cuya respuesta cabe en tu cabeza', pronta: true },
      { id: 'b09', titulo: 'El billete, y si este hay que validarlo', pronta: true },
      { id: 'b10', titulo: 'Las palabras que parecen españolas — librairie, monnaie, actuellement', pronta: true },
      { id: 'b11', titulo: 'Je voudrais — los cuatro sonidos que piden la primera ronda', pronta: true },
      { id: 'b12', titulo: 'Sans — la palabra que hace la carta editable', pronta: true },
      { id: 'b13', titulo: 'Je suis allergique — la frase que dices antes que nada', pronta: true },
      { id: 'b14', titulo: 'L\'addition — el número que oyes ya es el número entero', pronta: true },
      { id: 'b15', titulo: 'C\'est combien, en terrasse — las tres palabras que sirven en todas partes', pronta: true },
      { id: 'b16', titulo: 'Je cherche — y la persona tras el mostrador se pone a buscar contigo', pronta: true },
      { id: 'b17', titulo: 'Farmacia, dolor y el número que funciona desde cualquier teléfono', pronta: true },
      { id: 'b18', titulo: 'El último día — paga, deja la maleta y di la frase que recuerdan', pronta: true },
    ]
  },
  {
    nivel: 'intermediario',
    nome: 'Intermediate · Get the good stuff',
    descricao: 'Eat where they eat, when they eat, at the price they pay.',
    cor: 'oliva',
    licoes: [
      { id: 'i01', titulo: 'Su reloj, y la hora en que se llena la sala', pronta: true },
      { id: 'i02', titulo: 'Primero bonjour, y el mostrador se abre', pronta: true },
      { id: 'i03', titulo: 'El plato que no ibas a pedir', pronta: true },
      { id: 'i04', titulo: 'Una ronda, y el precio estuvo en la puerta todo el tiempo', pronta: true },
      { id: 'i05', titulo: 'Las cinco preguntas que te harán toda la semana', pronta: true },
      { id: 'i06', titulo: 'El día de ayer, contado en voz alta', pronta: true },
      { id: 'i07', titulo: 'El elogio que llega a la cocina, y la frase plana que hace que te lo cambien', pronta: true },
      { id: 'i08', titulo: 'Que te inviten a la mesa de alguien', pronta: true },
      { id: 'i09', titulo: 'Domingo, y las doce zonas donde las persianas siguen subidas', pronta: true },
      { id: 'i10', titulo: 'El dinero aquí: el efectivo siempre funciona, la tarjeta es la que tiene condiciones', pronta: true },
    ]
  },
  {
    nivel: 'avancado',
    nome: 'Advanced · Read the room',
    descricao: 'The humour, the pride, the old argument, and what their silence means.',
    cor: 'indigo',
    licoes: [
      { id: 'a01', titulo: 'Cómo hablan cuando no es contigo', pronta: true },
      { id: 'a02', titulo: 'De qué se ríen, y la única broma que es tuya', pronta: true },
      { id: 'a03', titulo: 'Quiénes creen que son', pronta: true },
      { id: 'a04', titulo: 'La vieja discusión', pronta: true },
      { id: 'a05', titulo: 'El otro idioma', pronta: true },
      { id: 'a06', titulo: 'Once festivos, y el único que de verdad vacía la calle', pronta: true },
      { id: 'a07', titulo: 'Allez-y, tu, non, bon — las cuatro señales que llegan antes de la frase', pronta: true },
      { id: 'a08', titulo: 'El último minuto ante cada uno, y la tarjeta del bolsillo', pronta: true },
    ]
  },
];

// Gerado de static/img/ — a home só pede imagem que existe.
export const COM_IMAGEM = new Set(["a01","a02","a03","a04","a05","a06","a07","a08","b01","b02","b03","b04","b05","b06","b07","b08","b09","b10","b11","b12","b13","b14","b15","b16","b17","b18","i01","i02","i03","i04","i05","i06","i07","i08","i09","i10"]);
