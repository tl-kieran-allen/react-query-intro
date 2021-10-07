import { BeerResponse } from '../types/BeerResponse'

export async function getBeerQuery(maxAbv: number) {
  const res = await fetch(`https://api.punkapi.com/v2/beers?abv_lt=${maxAbv}`)

  if (!res.ok) throw res

  const data: BeerResponse = await res.json()
  return data
}
