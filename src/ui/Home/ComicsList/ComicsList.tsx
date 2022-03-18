import React from 'react'
import styled from 'styled-components'
import { Button } from '../../_components/Button'
import { Input } from '../../_components/Input'
import { Text } from '../../_components/Text'
import { sizes } from '../../_styles'

interface Comic {
  id: number
  title: string
  characters: string[]
}

const comics: Comic[] = [
  {
    id: 45977,
    title: 'Captain America (2012) #11',
    characters: ['Captain America']
  },
  {
    id: 43722,
    title: 'Captain America (2012) #1',
    characters: ['Captain America']
  },
  {
    id: 40391,
    title: 'Captain America (2011) #18',
    characters: ['Captain America']
  },
  {
    id: 43339,
    title: 'Uncanny Avengers (2012) #1',
    characters: ['Captain America', 'Havok', 'Rogue', 'Scarlet Witch', 'Thor', 'Wolverine']
  }
]

export const ComicsList = () => {
  const [filter, setFilter] = React.useState('')
  const filteredComics = comics.filter(comic => comic.title.toLowerCase().includes(filter.toLowerCase()))

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
      <Header onFilter={setFilter} onClear={() => setFilter('')} filter={filter} />
      <List comics={filteredComics} />
      <Footer comicCount={filteredComics.length} />
    </Layout>
  )
}

interface HeaderProps {
  onFilter: (text: string) => void
  onClear: () => void
  filter: string
}

const Header = ({ onFilter, onClear, filter }: HeaderProps) => (
  <>
    <ComicInput onChange={event => onFilter(event.target.value)} value={filter} />
    <Button marginLeft="base" onClick={onClear}>
      Limpiar búsqueda
    </Button>
  </>
)

interface ListProps {
  comics: Comic[]
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

const ComicInput = styled(Input)`
  margin-bottom: ${sizes.base};
`

const Comic = styled.div`
  margin-bottom: ${sizes.base};
`
