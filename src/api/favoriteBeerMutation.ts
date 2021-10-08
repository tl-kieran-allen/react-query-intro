import { FavoriteResponse } from '../types/FavoriteResponse'

export async function favoriteBeerMutation(beerId: number) {
  const res = await fetch('/favorite', {
    method: 'POST',
    body: JSON.stringify({ beerId }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) throw res

  const data: FavoriteResponse = await res.json()
  return data
}
