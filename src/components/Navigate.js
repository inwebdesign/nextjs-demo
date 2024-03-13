import Link from 'next/link';
import styles from './Navigate.module.css'
import { auth } from '@/app/lib/auth';
import { logoutFromGitHub } from '@/app/lib/actions';
import LoginForm from './LoginForm';

const Navigate = async () => {
  const session = await auth()
  const links = [
    {
      path: "/",
      pathName: "Home",
    },
    {
      path: "/about",
      pathName: "About",
    },
    {
      path: "/blog",
      pathName: "Blog",
    },
    {
      path: "/register  ",
      pathName: "Register",
    }
  ];
  return (
    <div className={styles.navbar}>
          {links.map(({path, pathName}) => <Link href={path} key={path}>{pathName}</Link>)}
          
          {session ? <>
            <Link href='/admin'>Admin</Link>
            <LoginForm formAction={logoutFromGitHub} text="Logout"/>
            </>
            :
            <Link href='login'>Login</Link>
            }
    </div>
  )
}

export default Navigate