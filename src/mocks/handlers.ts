import { rest } from 'msw'

let favorites: number[] = []

const storedFavorites = sessionStorage.getItem('favorites')

if (storedFavorites) {
  favorites = (JSON.parse(storedFavorites) as number[]) ?? []
}

export const handlers = [
  rest.post<{ beerId: number }>('/favorite', (req, res, ctx) => {
    favorites = favorites.some(f => f === req.body.beerId)
      ? favorites.filter(f => f !== req.body.beerId)
      : [...favorites, req.body.beerId]

    sessionStorage.setItem('favorites', JSON.stringify(favorites))

    return res(ctx.status(200), ctx.delay(1000), ctx.json(favorites))
  }),
  rest.get('/favorite', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(favorites))
  }),
]
