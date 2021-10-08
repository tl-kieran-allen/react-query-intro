import clsx from 'clsx'
import { useState } from 'react'
import { Form } from './components/Form'
import type { FormData } from './types/FormData'

export function App() {
  const [formData, setFormData] = useState<FormData>({ maxAbv: 4 })

  return (
    <div className={clsx('card', 'flex', 'flex-col', 'gap-4')}>
      <header>
        <h1 className={clsx('text-4xl', 'underline')}>🍺 Beerz</h1>
      </header>
      <Form formData={formData} setFormData={setFormData} />
    </div>
  )
}
