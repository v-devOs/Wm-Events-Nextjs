import { FC, ReactNode } from "react"
import Head from "next/head"

interface Props{
  children: ReactNode
  title:    string
  desc:     string
} 

export const AuthLayout: FC<Props> = ({ children, desc, title }) => {
  return (
    <>
      <Head>
        <title>{ title }</title>
      </Head>

      <main className='flex jst-content'>
        <div className="container-form">
          <div className="container-from-title">{ title }</div>
          { children }
        </div>
      </main>
    </>
  )
}
