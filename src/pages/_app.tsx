import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import '@/styles/sass/main.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider attribute="class">
    <Component {...pageProps} />
    <ToastContainer />
  </ThemeProvider>
}
