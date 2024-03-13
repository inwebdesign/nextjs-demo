'use client'

import Button from "@/components/button/Button"
import { useRouter } from "next/navigation"


const ErrorPage = () => {
  const router = useRouter()
  const handleClickRedirect = () => router.push('/register')
  return (
    <div>
      {'There is a problem!'}
      <Button text='Go back to registration' className='btn-cta' handleClick={handleClickRedirect}/>
    </div>
  )
}

export default ErrorPage