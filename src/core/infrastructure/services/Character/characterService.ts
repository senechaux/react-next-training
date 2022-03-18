import { apiCharacterRepository } from '../../domain/model/Character/apiCharacterRepository'

export const characterService = {
  all: apiCharacterRepository.all
}
