import { Button } from '@/components';
import './CTAButtons.scss'

function CTAButton({ className, children, ...props }) {
  return (
    <Button {...props} className={`ctaButton ${className}`}>
      {children}
    </Button>
  )
}



export function CTAButtonDanger({ children, ...props }) {
  return (
    <CTAButton {...props} className='danger'>
      {children}
    </CTAButton>
  )
}
