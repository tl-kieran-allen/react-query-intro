import clsx from 'clsx'
import { UseQueryResult } from 'react-query'
import { useFavoriteBeerMutation } from '../hooks/useFavoriteBeerMutation'
import { BeerResponse } from '../types/BeerResponse'
import { FavoriteResponse } from '../types/FavoriteResponse'

type Props = {
  beerQuery: UseQueryResult<BeerResponse, unknown>
  favoriteQuery: UseQueryResult<FavoriteResponse, unknown>
}

export function BeerList({ beerQuery, favoriteQuery }: Props) {
  const { mutate } = useFavoriteBeerMutation()

  if (beerQuery.isLoading || favoriteQuery.isLoading) {
    return <div>...fetching beers</div>
  }

  return beerQuery.data ? (
    <div>
      {beerQuery.data.map(beer => (
        <div
          className={clsx('mt-4', 'shadow', 'p-4', 'flex', 'flex-col')}
          key={beer.id}
        >
          <header>
            <h2>{beer.name}</h2>
          </header>
          <p className={clsx('text-sm')}>{beer.description}</p>
          <span className={clsx('abv-pill')}>{beer.abv}%</span>
          <button
            className={clsx('self-start', 'like-button')}
            onClick={() => mutate(beer.id)}
          >
            {favoriteQuery.data && favoriteQuery.data.some(f => f === beer.id)
              ? 'Un-Like'
              : 'Like'}
          </button>
        </div>
      ))}
    </div>
  ) : null
}
