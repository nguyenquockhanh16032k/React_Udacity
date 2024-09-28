import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/searchComponent.css';
import { search } from '../utils/BooksAPI';
import { BookShelfComponent } from './bookShelfComponent';

export function Search({ updateShelf, allBooks }) {
    const [query, setQuery] = useState('');
    const [searchedBooks, setSearchedBooks] = useState([]);

    const handleSearch = (query) => {
        setQuery(query);
        if (query.trim()) {
            search(query).then((books) => {
                if (books && !books.error) {
                    const updatedBooks = books.map((book) => {
                        const existingBook = allBooks.find((b) => b.id === book.id);
                        if (existingBook) {
                            book.shelf = existingBook.shelf;
                        }
                        return book;
                    });
                    setSearchedBooks(updatedBooks);
                } else {
                    setSearchedBooks([]);
                }
            });
        } else {
            setSearchedBooks([]);
        }
    };

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search">
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        value={query}
                        onChange={(event) => handleSearch(event.target.value)}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <BookShelfComponent allBooks={searchedBooks} shelf="search" updateShelf={updateShelf} />
            </div>
        </div>
    );
}
