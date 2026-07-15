import { Logo, LinkToLoginButton } from "@/components";
import './Footer.scss'

export default function Footer() {
  return (
    <footer>
      <div className="footerLogoPart">
        <Logo />
      </div>
      {/* <div className="footerLinksPart">Links</div>
      <div className="footerSubscriptionPart">Subscribe</div>
      <div className="footerBrandPart">c Nomadic. sinse 2017</div> */}
    </footer>
  )
}