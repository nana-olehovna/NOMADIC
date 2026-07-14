import { Outlet } from "react-router-dom"
import { Header } from "@/components"

export default function AuthLayout() {
  return (
    <div className="authLayoutWrapper">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
