import { Lang } from '../../services/i18n.service';

export type Discipline = 'workout' | 'swimming' | 'football';
export type Difficulty = 'easy' | 'normal' | 'hard';

export interface KinestheticEntry {
  id: number;
  slug: string;
  discipline: Discipline;
  difficulty: Difficulty;
  youtube?: string;
  content: Partial<Record<Lang, string>>;
}

export const KINESTHETIC_ENTRIES: KinestheticEntry[] = [
  {
    id: 1,
    slug: '1-freestyle-session',
    discipline: 'football',
    difficulty: 'normal',
    youtube: 'https://www.youtube.com/embed/8449F5VzXy0',
    content: {
      es: `La doble vuelta al mundo es un truco clásico de freestyle en el que la pelota recorre dos veces completas alrededor de la pierna sin tocar el suelo.

Se empieza con la pelota en el empeine. Con un movimiento seco hacia arriba, se lanza la pelota lo suficiente para que la pierna pueda girar dos veces por debajo antes de volver a recibirla. El pie dominante hace los dos círculos rápidos mientras el cuerpo se inclina ligeramente hacia el lado contrario para mantener el equilibrio.

La clave está en el timing del lanzamiento, ni muy alto (se pierde control) ni muy bajo (no da tiempo a las dos vueltas). La pierna debe girar rápido y pegada a la pelota, usando la cadera como eje de rotación.

Para practicar, empieza dominando una sola vuelta al mundo con consistencia antes de intentar la doble.`,

      en: `The double around the world is a classic freestyle trick where the ball travels twice completely around the leg without touching the ground.

It starts with the ball on the instep. With a sharp upward motion, the ball is launched just high enough for the leg to circle twice underneath before catching it again. The dominant foot makes two quick circles while the body leans slightly to the opposite side to maintain balance.

The key is the timing of the launch, not too high (you lose control) and not too low (not enough time for two rotations). The leg must spin fast and close to the ball, using the hip as the axis of rotation.

To practice, start by mastering a single around the world consistently before attempting the double.`,

      pt: `A dupla volta ao mundo é um truque clássico de freestyle onde a bola percorre duas vezes completas ao redor da perna sem tocar o chão.

Começa com a bola no peito do pé. Com um movimento seco para cima, a bola é lançada o suficiente para que a perna possa girar duas vezes por baixo antes de recebê-la novamente. O pé dominante faz os dois círculos rápidos enquanto o corpo se inclina ligeiramente para o lado contrário para manter o equilíbrio.

A chave está no timing do lançamento, nem muito alto (perde-se o controle) nem muito baixo (não dá tempo para as duas voltas). A perna deve girar rápido e próxima à bola, usando o quadril como eixo de rotação.

Para praticar, comece dominando uma única volta ao mundo com consistência antes de tentar a dupla.`,
    },
  },
];
