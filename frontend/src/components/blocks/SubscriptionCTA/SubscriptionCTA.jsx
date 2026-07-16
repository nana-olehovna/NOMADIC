import { SubscriptionForm } from '@/components'
import "./SubscriptionCTA.scss"

export default function SubscriptionCTA() {
  return (
    <div className="subscriptionCTA">
      <h1 className="ctaHeadliner">Stay close to the next journey.</h1>
      <h3 className="ctaSubtitle">
        Rare routes, quiet places, and new journeys — shared from time to time.
      </h3>
      <SubscriptionForm />
    </div>
  );
}
