import Button from '@/components/button/Button'
import styles from './Admin.module.css'
import { getPosts, getUsersIDs } from '../lib/data'
import { createPost, createUser, deletePost, deleteUser } from '../lib/actions'

const Admin = async () => {
  const usersIds = await getUsersIDs()
  const posts = await getPosts()
  return (
    <div className={styles.adminPanel}>
      <div className={styles.formWrapper}>
        <h2>Create new Post</h2>
        <div className={styles.formGroup}>
        <form action={createPost}>
          <input name="title" placeholder='Enter post title'/>
          <input name="desc" placeholder='Enter post desc'/>
          <select name="userId">
            <option>Select user ID</option>
            {usersIds?.map(userId => <option value={userId} key={userId}>{userId}</option>)}
          </select>
          <input name="image" placeholder='Enter post image'/>
          <input name="slug" placeholder='Enter post slug'/>
          <Button className='btn-cta' text="Submit" type="submit" /> 
        </form>
        
        </div>
      </div>
      <div className={styles.formWrapper}>
        <h2>Create new User</h2>
        <div className={styles.formGroup}>
        <form action={createUser}>
          <input name="username" placeholder='Enter post username'/>
          <input name="email" placeholder='Enter post email'/>
          <input name="password" placeholder='Enter post password'/>
          <Button className='btn-cta' text="Submit" type="submit" /> 
        </form>
        
        </div>
      </div>
      <div className={styles.formWrapper}>
        <h2>Delete User</h2>
        <div className={styles.formGroup}>
        <form action={deleteUser}>
        <select name="userId">
          <option>Select user ID</option>
          {usersIds?.map(userId => <option value={userId} key={userId}>{userId}</option>)}
        </select>
          <Button className='btn-cta' text="Delete User" type="submit" /> 
        </form>
        
        </div>
      </div>
      <div className={styles.formWrapper}>
        <h2>Delete Post</h2>
        <div className={styles.formGroup}>
        <form action={deletePost}>
        <select name="title">
        <option>Select Post title</option>
        {posts?.map(({title, id}) => <option value={title} key={id}>{title}</option>)}
      </select>
          <Button className='btn-cta' text="Submit" type="submit" /> 
        </form>
        
        </div>
      </div>
    </div>
  )
}

export default Admin