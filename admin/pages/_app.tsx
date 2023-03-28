import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    if (sessionStorage.getItem('admin') === null || sessionStorage.getItem('admin') === undefined) {
      router.push('/')
    }
  }, [])
  return (
    <>
      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
      <Component {...pageProps} />
    </>
  )
}
