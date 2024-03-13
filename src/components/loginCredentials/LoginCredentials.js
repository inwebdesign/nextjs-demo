'use client'
import { useRouter } from 'next/navigation'
import Button from '../button/Button'
import styles from './LoginCredentials.module.css'
import {useFormState} from 'react-dom'
import { useEffect } from 'react'
import Link from 'next/link'

const LoginCredentials = ({loginWC}) => {

  const router = useRouter()
  const [state, formAction] = useFormState(loginWC, undefined)


  return (
    <div className={styles.formGroup}>
        <form action={formAction}>
          <input name="username" placeholder='Enter user username'/>
          <input name="password" placeholder='Enter user password'/>
          <Button className='btn-form' text="Submit" type="submit" /> 
        </form>
        {state?.error && <span>{state.error}</span>}
        <p>Do not have an account? <b><Link href='/register'>Register here</Link></b> please</p>
      </div>
  )
}

export default LoginCredentials