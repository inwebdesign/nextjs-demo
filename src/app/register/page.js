import RegistrationForm from "@/components/RegistrationForm"
import { registerNewUser } from "../lib/actions"

const Register = () => {
  return (
    <RegistrationForm text="Register" registerUser={registerNewUser}/>
  )
}

export default Register