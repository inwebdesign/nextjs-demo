import LoginForm from '@/components/LoginForm'
import styles from './Login.module.css'
import { loginWithCredentials, loginWithGitHub } from '../lib/actions'
import LoginCredentials from '@/components/loginCredentials/LoginCredentials'

const Login = async () => {

 
  return (
    <div className={styles.formWrapper}>
      <h2>Login with GITHUB</h2>
      <LoginForm formAction={loginWithGitHub} text="Login"/>
      <h2>Login with Credentials</h2>
      <LoginCredentials loginWC={loginWithCredentials}/>
      </div>
  )
}

export default Login