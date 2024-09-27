# MyReads Project

This application containing bookshelfs, that allows you to select and categorize books you have reads, currently reading or want to read

## TL;DR

To get started developing right away:

- go to the main source: `cd starter`
- install all project dependencies with `npm install`
- start the development server with `npm start`

## What You're Getting

```bash
├── package.json                  # npm package manager file. It's unlikely that you'll need to modify this.
├── public                        # Public directory containing static files
│   ├── favicon.ico               # React Icon, you may change it if you wish.
│   └── index.html                # Main HTML template for the app. DO NOT MODIFY.
└── src                           # Source directory containing the main app code
    ├── Components                # Directory for React components
    │   ├── App.js                # Root component of the app, contains the main structure and logic.
    │   ├── book.js               # Component responsible for displaying a single book.
    │   ├── bookShelfComponent.js # Component for displaying a bookshelf with multiple books.
    │   └── searchComponent.js    # Component for handling the search functionality.
    ├── css                       # Directory for CSS styles
    │   ├── App.css               # Global styles for the entire app.
    │   ├── book.css              # Styles specific to the book component.
    │   ├── bookShelfComponent.css # Styles for the bookshelf component.
    │   └── searchComponent.css   # Styles for the search component.
    ├── icons                     # Directory containing helpful images/icons for the app
    │   ├── add.svg               # Icon for adding a new item.
    │   ├── arrow-back.svg        # Icon for navigating back.
    │   └── arrow-drop-down.svg   # Icon for dropdown menus.
    ├── utils                     # Utility functions and helper modules
    │   └── BooksAPI.js           # JavaScript API for interacting with the Udacity backend.
    ├── index.css                 # Global styles for the entire app, probably won't need modifications.
    └── index.js                  # Main entry point for React DOM rendering. You should not need to modify this.
```

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).
