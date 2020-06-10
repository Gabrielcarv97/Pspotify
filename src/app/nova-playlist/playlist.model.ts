import { Musica } from '../musicas';

export interface PlaylistNew{
  id?: number;
  nome: string;
  img: string;
  Musica: Musica[];
}
