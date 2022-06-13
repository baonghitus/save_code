import type { FC } from 'react'
import { NavLink } from 'react-router-dom'

let linkClass = 'px-3 py-1 rounded'
let activeLinkClass = `${linkClass} bg-slate-600`

const Header: FC = () => {
  return (
    <header>
      <div className="p-3 text-left bg-slate-800 text-stone-50 text-2xl">
        <NavLink className={({ isActive }) => (isActive ? activeLinkClass : linkClass)} to="/">
          Task
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? activeLinkClass : linkClass)} to="/post">
          Post
        </NavLink>
      </div>
    </header>
  )
}

export default Header
