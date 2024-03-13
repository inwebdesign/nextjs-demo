import styles from './LoginForm.module.css'
import Button from './button/Button'

const LoginForm = ({formAction, text}) => {
  return (
    <div className={styles.formGroup}>
    <form action={formAction}>
      <Button className='btn-form' text={text} type="submit" /> 
    </form>
    </div>
  )
}

export default LoginForm