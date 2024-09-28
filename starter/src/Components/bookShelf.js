// src/components/BookShelf.js

import React from 'react';
import { BookShelfComponent } from './bookShelfComponent';
import '../css/bookShelf.css';

function BookShelf({ allBooks, updateShelf }) {
    return (
        <div className="list-books">
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <BookShelfComponent
                            allBooks={allBooks}
                            shelf="currentlyReading"
                            updateShelf={updateShelf}
                        />
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <BookShelfComponent
                            allBooks={allBooks}
                            shelf="wantToRead"
                            updateShelf={updateShelf}
                        />
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <BookShelfComponent
                            allBooks={allBooks}
                            shelf="read"
                            updateShelf={updateShelf}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookShelf;
