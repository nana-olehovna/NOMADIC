import { Outlet } from "react-router-dom"
import { Header, Footer } from "@/components"
import './MainLayout.scss'

export default function MainLayout() {
  return (
    <div className="mainLayoutWrapper">
      <Header />
      <main className="mainLayoutContentWrapper">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}