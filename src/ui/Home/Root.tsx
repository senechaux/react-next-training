import React from 'react'
import { GlobalStyles } from '../_styles'
import { ComicsList } from './ComicsList'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export const Root = () => (
  <QueryClientProvider client={queryClient}>
    <div>
      <GlobalStyles />
      <ComicsList />
    </div>
  </QueryClientProvider>
)
