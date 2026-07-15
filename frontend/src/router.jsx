import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainLayout, AuthLayout } from "@/layouts";
import {
  HomePage,
  AboutPage,
  ContactsPage,
  ComingSoonPage,
  MembershipPage,
  QAPage,
  TermsPrivacyPage,
  ToursPage,
  MoroccoPage,
  OmanPage,
  JordanPage,
  LoginPage,
  RegistrationPage,
  NotFoundPage,
  BlogPage,
} from "@/pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="coming-soon" element={<ComingSoonPage />} />
          <Route path="membership" element={<MembershipPage />} />
          <Route path="q&a" element={<QAPage />} />
          <Route path="terms-and-privacy" element={<TermsPrivacyPage />} />
          <Route path="morocco" element={<MoroccoPage />} />
          <Route path="jordan" element={<JordanPage />} />
          <Route path="oman" element={<OmanPage />} />
          <Route path="tours" element={<ToursPage />} />
          <Route path="blog" element={<BlogPage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<RegistrationPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
