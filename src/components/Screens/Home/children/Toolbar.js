import React from 'react'

export default () => (
  <nav className="level">
    <div className="level-left">
      <div className="level-item">
        <p className="subtitle is-5">
          <strong>6</strong> books
        </p>
      </div>
      <div className="level-item">
        <a href="#self" className="button is-success">
          New
        </a>
      </div>
      <div className="level-item is-hidden-tablet-only">
        <div className="field has-addons">
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="Book name, ISBN..."
            />
          </div>
          <div className="control">
            <button className="button">Search</button>
          </div>
        </div>
      </div>
    </div>
    <div className="level-right">
      <div className="level-item">
        <p>Order by</p>
      </div>
      <div className="level-item">
        <div className="select">
          <select>
            <option>Publish date</option>
            <option>Price</option>
            <option>Page count</option>
          </select>
        </div>
      </div>
    </div>
  </nav>
)
