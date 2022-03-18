import { Character } from '../domain/model/Character/Character'
import { Comic } from '../domain/model/Comic/Comic'

export const api = {
  characters: async () => {
    const response = await fetch('http://localhost:3000/characters.json')
    return await response.json() as Character[]
  },

  comic: async (comicID: number) => {
    const comics = await api.allComics()
    const comic = comics.find(comic => comic.id === comicID)

    return comic!
  },

  allComics: async () => {
    const response = await fetch('http://localhost:3000/comics.json')
    return await response.json() as Comic[]
  }
}
