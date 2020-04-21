import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// Components
import { Navbar, SidebarMenu, Books, NewBook } from './children'

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
              <Switch>
                <Route exact path="/books">
                  <Books />
                </Route>
                <Route exact path="/books/new">
                  <NewBook />
                </Route>
              </Switch>
            </div>
          </div>
        </section>
      </section>
    )
  }
}
