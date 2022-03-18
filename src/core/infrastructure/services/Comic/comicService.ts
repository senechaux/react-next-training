import { apiComicRepository } from '../../domain/model/Comic/apiComicRepository'

export const comicService = {
  findBy: apiComicRepository.findBy,
  all: apiComicRepository.all
}
