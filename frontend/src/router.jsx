import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainLayout, AuthLayout } from "@/layouts";
import { HomePage, AboutPage, LoginPage, RegistrationPage, NotFoundPage } from "@/pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
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
