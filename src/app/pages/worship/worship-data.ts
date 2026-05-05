import { Lang } from '../../services/i18n.service';

export type Instrument = 'piano' | 'guitar' | 'drums';
export type Difficulty = 'easy' | 'normal' | 'hard';

export interface WorshipNote {
  midi: number;
  startBeat: number;
  durationBeats: number;
  hand: 'left' | 'right';
}

export interface ChordLyric {
  chord?: string;
  text: string;
}

export interface GuitarSection {
  label?: string;
  lines: ChordLyric[][];
}

export interface DrumHit {
  instrument: 'kick' | 'snare' | 'hihat';
  step: number;
}

export interface DrumPattern {
  steps: number;
  hits: DrumHit[];
}

export interface WorshipEntry {
  id: number;
  slug: string;
  difficulty: Difficulty;
  key: string;
  bpm: number;
  youtube?: string;
  instruments: Instrument[];
  guidePattern?: string[];
  bassPattern?: string[];
  summary: Partial<Record<Lang, string>>;
  notes?: WorshipNote[];
  guitarSections?: GuitarSection[];
  drumPattern?: DrumPattern;
  pianoSections?: GuitarSection[];
}

function createNote(
  midi: number,
  startBeat: number,
  durationBeats: number,
  hand: 'left' | 'right',
): WorshipNote {
  return { midi, startBeat, durationBeats, hand };
}

function buildNotes(
  rootPattern: number[],
  guidePattern: number[],
  guideSteps: number[],
  guideDurations: number[],
): WorshipNote[] {
  const notes: WorshipNote[] = [];
  for (let cycle = 0; cycle < 2; cycle++) {
    for (let barIndex = 0; barIndex < rootPattern.length; barIndex++) {
      const barStart = (cycle * rootPattern.length + barIndex) * 4;
      notes.push(createNote(rootPattern[barIndex], barStart, 4, 'left'));
      for (let stepIndex = 0; stepIndex < guidePattern.length; stepIndex++) {
        notes.push(
          createNote(
            guidePattern[stepIndex],
            barStart + guideSteps[stepIndex],
            guideDurations[stepIndex],
            'right',
          ),
        );
      }
    }
  }
  return notes;
}

const STANDARD_STEPS = [0, 1, 2, 3, 3.5];
const STANDARD_DURATIONS = [0.75, 0.75, 0.75, 0.4, 0.45];

const YO_NAVEGARE_GUITAR: GuitarSection[] = [
  {
    label: 'Verso 1',
    lines: [
      [{ chord: 'Am', text: 'Yo navegaré' }],
      [{ text: 'En el río de tu ' }, { chord: 'G', text: 'Espíritu' }],
      [{ text: 'Y allí ' }, { chord: 'F', text: 'ado' }, { chord: 'Dm', text: 'raré' }],
      [{ text: 'Al Dios que me ' }, { chord: 'E7', text: 'amo' }],
    ],
  },
  {
    label: 'Verso 2',
    lines: [
      [{ chord: 'Am', text: 'Yo adorare' }],
      [{ text: 'Al Dios que me da ' }, { chord: 'G', text: 'vida' }],
      [{ text: 'Que me ' }, { chord: 'F', text: 'com' }, { chord: 'Dm', text: 'prende' }],
      [{ text: 'Sin ninguna ' }, { chord: 'E7', text: 'explicación' }],
    ],
  },
  {
    label: 'Coro',
    lines: [
      [{ chord: 'Am', text: 'Espíritu, Espíritu' }],
      [{ text: 'Desciende como ' }, { chord: 'G', text: 'fuego' }],
      [{ text: 'Como en ' }, { chord: 'F', text: 'Pente' }, { chord: 'Dm', text: 'costés' }],
      [{ text: 'Y lléname de ' }, { chord: 'E7', text: 'nuevo' }],
    ],
  },
];

const YO_NAVEGARE_PIANO: GuitarSection[] = [
  {
    label: 'Verso',
    lines: [
      [{ chord: 'Em', text: 'E · G · B' }],
      [{ chord: 'Em', text: 'E · E · E · F · G · A' }],
      [{ chord: 'Em', text: 'B · B · A · G · F · E' }],
      [{ chord: 'D', text: 'A · G · F · E' }],
      [{ chord: 'D', text: 'D · F · A' }],
      [{ chord: 'C', text: 'G · E · C' }],
      [{ chord: 'Am', text: 'A · B' }],
      [{ chord: 'B', text: 'D# · E · F#' }],
      [{ chord: 'B', text: 'B' }],
    ],
  },
  {
    label: 'Coro',
    lines: [
      [{ chord: 'Em', text: 'B · E · G' }],
      [{ chord: 'Em', text: 'B · E · G' }],
      [{ chord: 'D', text: 'A · G · F' }],
      [{ chord: 'D', text: 'D · D · E' }],
      [{ chord: 'C', text: 'G · E · C' }],
      [{ chord: 'Am', text: 'A · B · C' }],
      [{ chord: 'B', text: 'D# · E · F#' }],
      [{ chord: 'B', text: 'B' }],
    ],
  },
];

const DRUM_STANDARD: DrumPattern = {
  steps: 8,
  hits: [
    { instrument: 'hihat', step: 0 },
    { instrument: 'hihat', step: 1 },
    { instrument: 'hihat', step: 2 },
    { instrument: 'hihat', step: 3 },
    { instrument: 'hihat', step: 4 },
    { instrument: 'hihat', step: 5 },
    { instrument: 'hihat', step: 6 },
    { instrument: 'hihat', step: 7 },
    { instrument: 'kick', step: 0 },
    { instrument: 'kick', step: 4 },
    { instrument: 'snare', step: 2 },
    { instrument: 'snare', step: 6 },
  ],
};

const DRUM_BALLAD: DrumPattern = {
  steps: 8,
  hits: [
    { instrument: 'hihat', step: 0 },
    { instrument: 'hihat', step: 2 },
    { instrument: 'hihat', step: 4 },
    { instrument: 'hihat', step: 6 },
    { instrument: 'kick', step: 0 },
    { instrument: 'kick', step: 6 },
    { instrument: 'snare', step: 4 },
  ],
};

const DRUM_UPBEAT: DrumPattern = {
  steps: 8,
  hits: [
    { instrument: 'hihat', step: 0 },
    { instrument: 'hihat', step: 1 },
    { instrument: 'hihat', step: 2 },
    { instrument: 'hihat', step: 3 },
    { instrument: 'hihat', step: 4 },
    { instrument: 'hihat', step: 5 },
    { instrument: 'hihat', step: 6 },
    { instrument: 'hihat', step: 7 },
    { instrument: 'kick', step: 0 },
    { instrument: 'kick', step: 3 },
    { instrument: 'kick', step: 4 },
    { instrument: 'snare', step: 2 },
    { instrument: 'snare', step: 6 },
  ],
};

export const WORSHIP_ENTRIES: WorshipEntry[] = [
  {
    id: 1,
    slug: 'quiero-conocer-a-jesus',
    difficulty: 'easy',
    key: 'G',
    bpm: 72,
    instruments: ['drums'],
    summary: {
      es: 'Patrón de batería para practicar esta canción de entrega y devoción.',
      en: 'Drum pattern to practice this song of surrender and devotion.',
      pt: 'Padrão de bateria para praticar esta canção de entrega e devoção.',
    },
    drumPattern: DRUM_STANDARD,
  },
  {
    id: 2,
    slug: 'vine-a-adorarte',
    difficulty: 'easy',
    key: 'E',
    bpm: 75,
    instruments: ['drums'],
    summary: {
      es: 'Patrón de batería para practicar esta canción de alabanza e intimidad.',
      en: 'Drum pattern to practice this praise and intimacy song.',
      pt: 'Padrão de bateria para praticar esta canção de louvor e intimidade.',
    },
    drumPattern: DRUM_BALLAD,
  },
  {
    id: 3,
    slug: 'no-hay-lugar-mas-alto',
    difficulty: 'normal',
    key: 'Bb',
    bpm: 72,
    instruments: ['drums'],
    summary: {
      es: 'Patrón de batería para practicar esta canción de exaltación.',
      en: 'Drum pattern to practice this exaltation song.',
      pt: 'Padrão de bateria para praticar esta canção de exaltação.',
    },
    drumPattern: DRUM_STANDARD,
  },
  {
    id: 4,
    slug: 'como-la-brisa',
    difficulty: 'easy',
    key: 'D',
    bpm: 78,
    instruments: ['drums'],
    summary: {
      es: 'Patrón de batería para practicar esta canción contemplativa sobre la presencia de Dios.',
      en: 'Drum pattern to practice this contemplative song about God\'s presence.',
      pt: 'Padrão de bateria para praticar esta canção contemplativa sobre a presença de Deus.',
    },
    drumPattern: DRUM_BALLAD,
  },
  {
    id: 5,
    slug: 'es-por-tu-gracia',
    difficulty: 'easy',
    key: 'G',
    bpm: 76,
    instruments: ['drums'],
    summary: {
      es: 'Patrón de batería para practicar esta canción de gratitud y gracia.',
      en: 'Drum pattern to practice this gratitude and grace song.',
      pt: 'Padrão de bateria para praticar esta canção de gratidão e graça.',
    },
    drumPattern: DRUM_BALLAD,
  },
  {
    id: 6,
    slug: 'lo-haras-otra-vez',
    difficulty: 'normal',
    key: 'A',
    bpm: 68,
    instruments: ['drums'],
    summary: {
      es: 'Patrón de batería para practicar esta canción de fe y fidelidad.',
      en: 'Drum pattern to practice this song of faith and faithfulness.',
      pt: 'Padrão de bateria para praticar esta canção de fé e fidelidade.',
    },
    drumPattern: DRUM_STANDARD,
  },
  {
    id: 7,
    slug: 'gracias',
    difficulty: 'easy',
    key: 'G',
    bpm: 80,
    instruments: ['drums'],
    summary: {
      es: 'Patrón de batería para practicar esta canción de agradecimiento.',
      en: 'Drum pattern to practice this song of thankfulness.',
      pt: 'Padrão de bateria para praticar esta canção de agradecimento.',
    },
    drumPattern: DRUM_UPBEAT,
  },
  {
    id: 8,
    slug: 'al-taller-del-maestro',
    difficulty: 'easy',
    key: 'E',
    bpm: 72,
    instruments: ['drums'],
    summary: {
      es: 'Patrón de batería para practicar esta canción de restauración.',
      en: 'Drum pattern to practice this restoration song.',
      pt: 'Padrão de bateria para praticar esta canção de restauração.',
    },
    drumPattern: DRUM_BALLAD,
  },
  {
    id: 9,
    slug: 'yo-navegare',
    difficulty: 'easy',
    key: 'Em',
    bpm: 65,
    instruments: ['piano', 'guitar', 'drums'],
    guidePattern: ['C', 'D', 'F', 'E', 'E'],
    bassPattern: ['A', 'G', 'F', 'D', 'E'],
    summary: {
      es: 'Simulador guiado de piano basado en la figura de introducción para practicar la mano derecha y el bajo del tema.',
      en: 'Guided piano simulator based on the intro figure to practice the right hand and bass line of the song.',
      pt: 'Simulador guiado de piano baseado na figura de introdução para praticar a mão direita e a linha de baixo da música.',
    },
    notes: buildNotes([45, 43, 41, 38, 40], [72, 74, 77, 76, 76], STANDARD_STEPS, STANDARD_DURATIONS),
    guitarSections: YO_NAVEGARE_GUITAR,
    drumPattern: DRUM_UPBEAT,
    pianoSections: YO_NAVEGARE_PIANO,
  },
];
