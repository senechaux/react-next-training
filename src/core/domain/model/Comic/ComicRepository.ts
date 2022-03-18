import { Comic } from './Comic'

export interface ComicRepository {
  findBy: (comicId: number) => Promise<Comic>
  all: () => Promise<Comic[]>
}
