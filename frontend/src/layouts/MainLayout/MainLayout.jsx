import { Outlet } from "react-router-dom"
import { Header } from "@/components"
import './MainLayout.scss'

export default function MainLayout() {
  return (
    <div className="mainLayoutWrapper">
      <Header />
      <main className="mainLayoutContentWrapper">
        <Outlet />
      </main>
    </div>
  )
}