import React from 'react'
import { GlobalStyles } from '../_styles'
import { ComicsList } from './ComicsList'
import { Character } from '../../api'

interface Props {
  characters: Character[]
}

export const Root = ({ characters }: Props) => (
  <div>
    <GlobalStyles />
    <ComicsList characters={characters} />
  </div>
)
