'use client'

import Button from "@/components/button/Button"
import { useRouter } from "next/navigation"

const About = () => {
  const router = useRouter()
  const handleClickRedirect = () => router.push('/')
  return (
    <div>
      {'About'} 
      <Button text='Go Home' className='btn-cta' handleClick={handleClickRedirect}/>
    </div>
  )
}

export default About