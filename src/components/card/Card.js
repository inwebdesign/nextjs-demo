'use client'
import Image from 'next/image'
import Button from '../button/Button'
import styles from './Card.module.css'
import { useRouter } from 'next/navigation'

const Card = ({title, desc, image, slug}) => {

  const router = useRouter()

  const handleRedirection = () => router.push(`/blog/${slug}`)

  return (
    <div className={styles.card}>
    <h2>{title}</h2>
    <div className={styles.imgWrapper}>
      {image ? <Image src={image} alt='image alt' fill/> : ''}
    </div>
    <p>{desc}</p>
      {slug && <Button text='See more...' className='btn-cta' handleClick={handleRedirection}/>}
    </div>
  )
}

export default Card