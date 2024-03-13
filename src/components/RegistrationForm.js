'use client'
import Link from 'next/link'
import styles from './RegistrationForm.module.css'
import Button from './button/Button'
import {useFormState} from 'react-dom'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const RegistrationForm = ({text, registerUser}) => {
  const [state, formAction] = useFormState(registerUser, undefined)
  const router = useRouter()

  useEffect(() => {
    state?.success && router.push('/login')
  }, [state?.success])

  return (
    <div className={styles.formGroup}>
    <div className={styles.formWrapper}>
    <h2>Register as an user</h2>
    <form action={formAction}>
      <input name="username" placeholder='Enter post username'/>
      <input name="email" placeholder='Enter post email'/>
      <input name="password" placeholder='Enter post password'/>
      <input name="password_verify" placeholder='Repeat your password'/>
      <Button className='btn-form' text={text} type="submit" /> 
    </form>
    {state?.error && <span>{state.error}</span>}
    {state?.success && <span>New user saved to db!</span>}
    <p>Already have an account? <b><Link href='/login'>Login</Link></b> please</p>
    
    </div>
    </div>
  )
}

export default RegistrationForm