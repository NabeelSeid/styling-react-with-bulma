import React from 'react'

import { BulmaFAIcon } from '../../../utils'

import {
  faUserCircle,
  faBug,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons'

export default () => (
  <nav className="navbar has-shadow">
    <div className="navbar-brand">
      <a href="#self" className="navbar-item">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          alt="Bulma Icon"
        />
      </a>

      {/* Navbar burger button */}
      <div className="navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div className="navbar-menu">
      <div className="navbar-start">
        <div className="navbar-item">
          <small>Publishing at the speed of technology</small>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item has-dropdown is-hoverable">
          <div className="navbar-link">Nabil Seid</div>
          <div className="navbar-dropdown">
            <a href="#self" className="navbar-item">
              <div>
                <span className="icon">
                  <BulmaFAIcon icon={faUserCircle} />
                </span>{' '}
                Profile
              </div>
            </a>
            <a href="#self" className="navbar-item">
              <span>
                <span className="icon">
                  <BulmaFAIcon icon={faBug} />
                </span>{' '}
                Report Bug
              </span>
            </a>
            <a href="#self" className="navbar-item">
              <div>
                <span className="icon">
                  <BulmaFAIcon icon={faSignOutAlt} />
                </span>{' '}
                Sign Out
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
)
