import React from 'react';
import '../css/bookShelf.css';
import '../css/bookShelfComponent.css';

export function BookShelfComponent({ allBooks, shelf, updateShelf }) {
    const booksOnShelf = shelf != 'search' ? allBooks.filter(book => book.shelf === shelf) : allBooks;

    return (
        <div className="bookshelf-books">
            <ol className="books-grid">
                {booksOnShelf.map(book => (
                    <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div
                                    className="book-cover"
                                    style={{
                                        width: 128,
                                        height: 193,
                                        backgroundImage: `url(${book.imageLinks?.thumbnail || 'default-image-url'})`
                                    }}
                                />
                                <div className="book-shelf-changer">
                                    <select
                                        value={book.shelf}
                                        onChange={event => updateShelf(book, event)}
                                    >
                                        <option value="move" disabled>
                                            Move to...
                                        </option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors?.join(', ')}</div>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}
