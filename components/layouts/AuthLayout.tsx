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

      <main className='flex center-content container'>
        <div className="container-form p-30 border-radius-ex">
          <div className="container-from-title mb-15 txt-center">
            <h1 className="dark-color">{ title }</h1>
          </div>
          { children }
        </div>
      </main>
    </>
  )
}
