import clsx from 'clsx'
import { useForm } from 'react-hook-form'
import { FormData } from '../types/FormData'

type Props = {
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
}

export function Form({ formData, setFormData }: Props) {
  const { register, handleSubmit } = useForm<FormData>()

  function onSubmit(value: FormData) {
    setFormData(value)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx('flex', 'flex-col', 'gap-2')}
    >
      <label htmlFor="maximum-abv">Maximum ABV</label>
      <input
        id="maximum-abv"
        className={clsx('border', 'px-4', 'py-2', 'rounded')}
        type="number"
        {...register('maxAbv', { valueAsNumber: true, value: formData.maxAbv })}
      />
      <input className={clsx('submit-button')} type="submit" value="search" />
    </form>
  )
}
