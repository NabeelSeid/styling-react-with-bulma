import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div class="new-book">
    <nav className="breadcrumb">
      <ul>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li className="is-active">
          <Link to="/books/new">New Books</Link>
        </li>
      </ul>
    </nav>
  </div>
)
