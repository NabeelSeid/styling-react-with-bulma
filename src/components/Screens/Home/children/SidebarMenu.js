import React from 'react'
import { BulmaFAIcon } from '../../../utils'
import { NavLink } from 'react-router-dom'

// FontAwesome Icons
import {
  faTachometerAlt,
  faBook,
  faAddressBook,
  faFile,
} from '@fortawesome/free-solid-svg-icons'

const MenuItem = props => {
  const { menuTitle, menuIcon } = props

  return (
    <li>
      <NavLink
        to={`/${menuTitle.toLowerCase()}`}
        activeClassName="is-active">
        <span className="icon">
          <BulmaFAIcon icon={menuIcon} />
        </span>
        {menuTitle}
      </NavLink>
    </li>
  )
}

export default props => {
  const menus = [
    { title: 'Dashboard', icon: faTachometerAlt },
    { title: 'Books', icon: faBook },
    { title: 'Customers', icon: faAddressBook },
    { title: 'Orders', icon: faFile },
  ]

  return (
    <nav className="menu">
      <p className="menu-label">Menu</p>
      <ul className="menu-list">
        {menus.map(item => (
          <MenuItem
            key={item.title}
            menuTitle={item.title}
            menuIcon={item.icon}
          />
        ))}
      </ul>
    </nav>
  )
}
