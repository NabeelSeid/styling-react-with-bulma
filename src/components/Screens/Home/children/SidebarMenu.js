import React from 'react'
import classNames from 'classnames'
import { BulmaFAIcon } from '../../../utils'

// FontAwesome Icons
import {
  faTachometerAlt,
  faBook,
  faAddressBook,
  faFile,
} from '@fortawesome/free-solid-svg-icons'

const MenuItem = props => {
  const { menuTitle, menuIcon, activeMenu, onMenuItemChange } = props

  const menuItemClass = classNames({
    'is-active': activeMenu === menuTitle,
  })

  const onClickListener = () => onMenuItemChange(menuTitle)

  return (
    <li>
      <a
        href="#self"
        className={menuItemClass}
        onClick={onClickListener}>
        <span className="icon">
          <BulmaFAIcon icon={menuIcon} />
        </span>
        {menuTitle}
      </a>
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

  const { activeMenu, onMenuItemChange } = props

  return (
    <nav className="menu">
      <p className="menu-label">Menu</p>
      <ul className="menu-list">
        {menus.map(item => (
          <MenuItem
            key={item.title}
            menuTitle={item.title}
            menuIcon={item.icon}
            activeMenu={activeMenu}
            onMenuItemChange={onMenuItemChange}
          />
        ))}
      </ul>
    </nav>
  )
}
