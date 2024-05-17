function Button({label, handleClick, type}) {
  return(
    <button
      type="button"
      className={`btn ${type === 'warning' ? "btn-warning" : "btn-primary"}`}
      onClick={handleClick}
    >{label}</button>
  )
}

export default Button
