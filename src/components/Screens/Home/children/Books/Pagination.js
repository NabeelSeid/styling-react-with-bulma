import React from 'react'

export default () => (
  <nav
    className="pagination"
    role="navigation"
    aria-label="pagination">
    <div className="pagination-previous">Previous</div>
    <div className="pagination-next">Next page</div>

    <ul className="pagination-list">
      <li>
        <a href="#self" className="pagination-link">
          1
        </a>
      </li>
      <li>
        <span className="pagination-ellipsis">&hellip;</span>
      </li>
      <li>
        <a href="#self" className="pagination-link">
          45
        </a>
      </li>
      <li>
        <a href="#self" className="pagination-link is-current">
          46
        </a>
      </li>
      <li>
        <a href="#self" className="pagination-link">
          47
        </a>
      </li>
      <li>
        <span className="pagination-ellipsis">&hellip;</span>
      </li>
      <li>
        <a href="#self" className="pagination-link">
          86
        </a>
      </li>
    </ul>
  </nav>
)
