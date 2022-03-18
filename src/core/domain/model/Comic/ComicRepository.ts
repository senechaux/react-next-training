import { Comic } from './Comic'

export interface ComicRepository {
  findBy: (comicId: string) => Promise<Comic>
  all: () => Promise<Comic[]>
}
