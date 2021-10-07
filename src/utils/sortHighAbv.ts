import { BeerResponse } from '../types/BeerResponse'

export function sortHighAbv(beers: BeerResponse) {
  return beers.sort((a, b) => b.abv - a.abv)
}
