import { QueryClient, useMutation, useQueryClient } from 'react-query'
import { favoriteBeerMutation } from '../api/favoriteBeerMutation'

export function useFavoriteBeerMutation() {
  const client = useQueryClient()
  return useMutation(async (beerId: number) => favoriteBeerMutation(beerId), {
    onMutate: beerId => {
      const favorite: number[] = client.getQueryData('favorite') ?? []
      client.setQueryData(
        'favorite',
        favorite.some(f => f === beerId)
          ? favorite.filter(f => f !== beerId)
          : [...favorite, beerId],
      )
    },
    onSuccess: favorite => {
      client.setQueryData('favorite', favorite)
    },
    onError: (_, beerId) => {
      const favorite: number[] = client.getQueryData('favorite') ?? []
      client.setQueryData(
        'favorite',
        favorite.some(f => f === beerId)
          ? favorite.filter(f => f !== beerId)
          : [...favorite, beerId],
      )
    }
  })
}
