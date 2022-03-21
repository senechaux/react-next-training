import React from 'react'
import styled from 'styled-components'
import { Input } from '../../_components/Input'
import { Text } from '../../_components/Text'
import { sizes } from '../../_styles'

const comics = [
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

export const ComicsList = () => (
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
    <ComicInput />
    {comics.map(comic => (
      <Comic key={comic.id}>
        <Text as="p" weight="bold">
          {comic.title}
        </Text>
        <Text as="p">{comic.characters.join(', ')}</Text>
      </Comic>
    ))}
  </Layout>
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
