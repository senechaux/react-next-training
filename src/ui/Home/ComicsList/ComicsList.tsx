import React from 'react'
import styled from 'styled-components'
import { Button } from '../../_components/Button'
import { Text } from '../../_components/Text'
import { sizes } from '../../_styles'
import { Select } from '../../_components/Select'
import { Comic as ComicModel } from '../../../core/domain/model/Comic/Comic'
import { Character } from '../../../core/domain/model/Character/Character'
import { characterService } from '../../../core/infrastructure/services/Character/characterService'
import { comicService } from '../../../core/infrastructure/services/Comic/comicService'
import { useQuery } from 'react-query'

export const ComicsList = () => {
  const [firstCharacterFilter, setFirstCharacterFilter] = React.useState<string | undefined>(undefined)
  const [secondCharacterFilter, setSecondCharacterFilter] = React.useState<string | undefined>(undefined)

  const { data: characters } = useQuery('characters', characterService.all)
  const { data: comics, remove } = useQuery(
    [firstCharacterFilter, secondCharacterFilter],
    () => comicService.commonComics(firstCharacterFilter, secondCharacterFilter)
  )

  return (
    <Layout>
      <Text as="h1" weight="black" size="h1" marginBottom="small">
        Buscador de cómics de Marvel
      </Text>
      <Text as="p" size="large" marginBottom="large">
        Este buscador encontrará los cómics en los que aparezcan los dos personajes que selecciones en el formulario
      </Text>
      <Text as="p" size="medium" marginBottom="base">
        Escribe un personaje en la lista
      </Text>
      <Header
        characters={characters ?? []}
        firstCharacterFilter={firstCharacterFilter}
        secondCharacterFilter={secondCharacterFilter}
        onChangeFirstCharacter={setFirstCharacterFilter}
        onChangeSecondCharacter={setSecondCharacterFilter}
        onClear={() => {
          remove()
          setFirstCharacterFilter(undefined)
          setSecondCharacterFilter(undefined)
        }}
      />
      <List comics={comics ?? []} />
      <Footer comicCount={comics?.length ?? 0} />
    </Layout>
  )
}

interface HeaderProps {
  characters: Character[]
  firstCharacterFilter?: string
  secondCharacterFilter?: string
  onChangeFirstCharacter: (value: string) => void
  onChangeSecondCharacter: (value: string) => void
  onClear: () => void
}

const Header = ({
  characters,
  firstCharacterFilter,
  secondCharacterFilter,
  onChangeFirstCharacter,
  onChangeSecondCharacter,
  onClear
}: HeaderProps) => {
  const options = characters.map(character => ({ value: character.id, label: character.name }))

  return (
    <>
      <CharacterSelect
        options={options}
        value={firstCharacterFilter}
        onSelect={value => onChangeFirstCharacter(value)}
      />
      <CharacterSelect
        options={options}
        value={secondCharacterFilter}
        onSelect={value => onChangeSecondCharacter(value)}
      />
      <Button onClick={onClear}>Limpiar búsqueda</Button>
    </>
  )
}

interface ListProps {
  comics: ComicModel[]
}

const List = ({ comics }: ListProps) => {
  return (
    <>
      {
        comics.map(comic => (
          <Comic key={comic.id}>
            <Text as="p" weight="bold">
              {comic.title}
            </Text>
            <Text as="p">{comic.characters.join(', ')}</Text>
          </Comic>
        ))
      }
    </>
  )
}

interface FooterProps {
  comicCount: number
}

const Footer = ({ comicCount }: FooterProps) => (
  <div>
    <Text>Elementos en la lista: {comicCount}</Text>
  </div>
)

const Layout = styled.div`
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
`

const CharacterSelect = styled(Select)`
  margin-bottom: ${sizes.base};
  margin-right: ${sizes.large};
`

const Comic = styled.div`
  margin-bottom: ${sizes.base};
`
