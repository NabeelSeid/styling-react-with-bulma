import React, { Component } from 'react'

// Components
import { Navbar, SidebarMenu, Books } from './children'

export default class Home extends Component {
  render() {
    return (
      <section>
        <Navbar />
        {/* Home body content  */}
        <section className="section">
          {/* Sidebar Menu and Detail Body */}
          <div className="columns">
            {/* Sidebar Menu */}
            <div className="column is-4-tablet is-3-desktop is-2-widescreen">
              <SidebarMenu />
            </div>

            {/* Detail Body */}
            <div className="column">
              <Books />
            </div>
          </div>
        </section>
      </section>
    )
  }
}
