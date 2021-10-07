import { render } from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { App } from './App'

import './style.css'

const anchor = document.getElementById('app')

const queryClient = new QueryClient()

render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools />
  </QueryClientProvider>,
  anchor,
)
