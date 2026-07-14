export default function Button({ variant, children, ...props }) {
  return (
    <button 
      className={variant}
      {...props}
    >
      {children}
    </button>
  )
}