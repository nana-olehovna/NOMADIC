import { CTAButtonDanger } from '@/components'
import './SubscriptionForm.scss'

export default function  SubscribtionForm() {
  return (
    <form action="" method="post" className="subscriptionForm" noValidate>
      <input type="email" placeholder="your email" className="textInput" />
      <CTAButtonDanger type="submit">Subscribe</CTAButtonDanger>
    </form>
  );
}