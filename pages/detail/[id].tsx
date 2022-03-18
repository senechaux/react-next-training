import { Comic } from '../../src/core/domain/model/Comic/Comic'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

interface Props {
  comic: Comic
}

interface Paths extends ParsedUrlQuery {
  id: string
}

const Detail = ({ comic }: Props) => (
  <div></div>
)

export const getStaticPaths: GetStaticPaths<Paths> = () => {
  // Obtener los paths
}

export const getStaticProps: GetStaticProps<Comic, Paths> = ({ params }) => {
  // Obtener los datos del comic con el id
}

export default Detail
