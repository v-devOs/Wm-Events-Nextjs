import '@/assets/styles/globals.css'
import { CodeProvider } from '@/context/codes'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CodeProvider>
      <Component {...pageProps} />
    </CodeProvider>
  )
}
