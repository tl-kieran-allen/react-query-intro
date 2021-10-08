import { useQuery } from 'react-query'
import { favoriteBeerQuery } from '../api/favoriteBeerQuery'

export function useFavoriteBeerQuery() {
  return useQuery('favorite', favoriteBeerQuery)
}
