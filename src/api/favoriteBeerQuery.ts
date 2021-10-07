import { FavoriteResponse } from '../types/FavoriteResponse'

export async function favoriteBeerQuery() {
  const res = await fetch(`/favorite`)

  if (!res.ok) throw res

  const data: FavoriteResponse = await res.json()
  return data
}
