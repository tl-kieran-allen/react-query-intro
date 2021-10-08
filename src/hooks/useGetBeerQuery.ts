import { useQuery } from 'react-query'
import { getBeerQuery } from '../api/getBeerQuery'
import { sortHighAbv } from '../utils/sortHighAbv'

export function useGetBeerQuery(maxAbv: number) {
  return useQuery(`beer-${maxAbv}`, () => getBeerQuery(maxAbv), {
    select: sortHighAbv,
  })
}
