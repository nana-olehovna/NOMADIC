import { SubscriptionCTA, LogoFullSize } from "@/components";
import './Footer.scss'


export default function Footer() {
  return (
    <footer>
      <SubscriptionCTA />
      <div className="footerLogoPart">
        <LogoFullSize />
      </div>
      <div className="footerBrandPart">
        2017
      </div>
    </footer>
  );
}