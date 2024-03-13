const Button = ({className, text, handleClick, type}) => {
  return (
    <button className={className} onClick={handleClick} type={type}>{text}</button>
  )
}

export default Button