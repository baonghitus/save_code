import type { FC } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '@/components/shared/Header'

const Layout: FC = () => {
  return (
    <div className="text-center">
      <Header />
      <main className="">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
