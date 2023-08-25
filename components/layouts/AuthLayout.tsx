import { FC, ReactNode } from "react"
import Head from "next/head"
import Image from "next/image"

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

      <div className="container-img-wm flex center-content">
        <Image
          src='/images/wm-logo3.png'
          alt="WM - Logo"
          width={300}
          height={300}
        />
      </div>

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
