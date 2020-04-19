import React, { Component } from 'react'

// Components
import {
  Navbar,
  SidebarMenu,
  Toolbar,
  BookItem,
  Pagination,
} from './children'

const books = [
  {
    bookImg: 'https://bulma.io/images/book/book-cover.png',
    bookTitle: 'The official Bulma book!',
    bookPrice: 22.99,
    bookPage: 270,
    bookISBN: '9781939902351',
  },
  {
    bookImg:
      'https://images-na.ssl-images-amazon.com/images/I/31apmbgpwkL._AC_SX184_.jpg',
    bookTitle: 'The Road to React',
    bookPrice: 23.99,
    bookPage: 225,
    bookISBN: '9781939902351',
  },
  {
    bookImg: 'https://m.media-amazon.com/images/I/51PNQd7RIwL.jpg',
    bookTitle: 'React Explained: Your Step-by-Step Guide',
    bookPrice: 19.99,
    bookPage: 305,
    bookISBN: '9781939902351',
  },
  {
    bookImg:
      'https://images-na.ssl-images-amazon.com/images/I/31aX81I6vnL._SX351_BO1,204,203,200_.jpg',
    bookTitle: 'HTML and CSS: Design Websites',
    bookPrice: 16.54,
    bookPage: 490,
    bookISBN: '9781118008188',
  },
  {
    bookImg: 'https://m.media-amazon.com/images/I/613zJ+CZnyL.jpg',
    bookTitle: 'The Last Book on the Left',
    bookPrice: '14.99',
    bookPage: 304,
    bookISBN: '9781939902351',
  },
  {
    bookImg:
      'https://images-na.ssl-images-amazon.com/images/I/51jGFTPIsVL._SX329_BO1,204,203,200_.jpg',
    bookTitle: 'Masked Prey (A Prey Novel)',
    bookPrice: 17.49,
    bookPage: 416,
    bookISBN: '9780525539520',
  },
]

export default class Home extends Component {
  state = { activeMenu: 'Books' }

  onMenuItemChange = menuTitle =>
    this.setState({ activeMenu: menuTitle })

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
              <SidebarMenu
                activeMenu={this.state.activeMenu}
                onMenuItemChange={this.onMenuItemChange}
              />
            </div>

            {/* Detail Body */}
            <div className="column">
              <h1 className="title">Books</h1>

              {/* Toolbar */}
              <Toolbar />

              {/* Book Grid */}
              <div className="columns is-multiline">
                {books.map(book => (
                  <div
                    key={book.bookTitle}
                    className="column is-12-tablet is-6-desktop is-4-widescreen">
                    <BookItem {...book} />
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <Pagination />
            </div>
          </div>
        </section>
      </section>
    )
  }
}
