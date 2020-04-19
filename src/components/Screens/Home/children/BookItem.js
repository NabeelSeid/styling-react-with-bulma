import React from 'react'

export default props => {
  console.log(props)
  const { bookImg, bookTitle, bookPrice, bookPage, bookISBN } = props

  return (
    <div className="box">
      <article className="media">
        <aside className="media-left">
          <img
            src={bookImg}
            alt="Bulma Cover"
            style={{ height: 105 }}
          />
        </aside>
        <div className="media-content">
          <p className="title is-5 is-spaced is-marginless">
            <a href="#self">{bookTitle}</a>
          </p>
          <p className="subtitle is-marginless">{bookPrice}</p>
          <div className="content is-small">
            {bookPage}
            <br />
            {bookISBN}
            <br />
            <a href="#self">Edit</a>
            <span> · </span>
            <a href="#self">Delete</a>
          </div>
        </div>
      </article>
    </div>
  )
}
