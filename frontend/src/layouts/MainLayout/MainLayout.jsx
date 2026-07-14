import { Outlet } from "react-router-dom"
import { Header } from "@/components"

export default function MainLayout() {
  return (
    <div className="mainLayoutWrapper">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}