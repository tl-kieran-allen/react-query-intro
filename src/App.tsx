import clsx from 'clsx'
import { useState } from 'react'
import { BeerList } from './components/BeerList'
import { Form } from './components/Form'
import { useFavoriteBeerQuery } from './hooks/useFavoriteBeerQuery'
import { useGetBeerQuery } from './hooks/useGetBeerQuery'
import type { FormData } from './types/FormData'

export function App() {
  const [formData, setFormData] = useState<FormData>({ maxAbv: 4 })
  const favoriteQuery = useFavoriteBeerQuery()
  const beerQuery = useGetBeerQuery(formData.maxAbv, favoriteQuery.isSuccess)

  return (
    <div className={clsx('card', 'flex', 'flex-col', 'gap-4')}>
      <header>
        <h1 className={clsx('text-4xl', 'underline')}>🍺 Beerz</h1>
      </header>
      <Form formData={formData} setFormData={setFormData} />
      <BeerList beerQuery={beerQuery} favoriteQuery={favoriteQuery}/>
    </div>
  )
}
