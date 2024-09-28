import "../css/App.css";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { getAll, update } from "../utils/BooksAPI";
import BookShelf from "./bookShelf";
import { Search } from "./searchComponent";
import Header from "./header";

function App() {
  const [allBooks, setAllBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAll().then(data => {
      setAllBooks(data);
    });
  }, []);

  const updateShelf = (book, event) => {
    update(book, event.target.value).then(() => {
      getAll().then(data => {
        setAllBooks(data);
      });
    });
  };

  const OpenSearchOnClick = () => {
    navigate("/search");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="app">
            <Header />
            <BookShelf allBooks={allBooks} updateShelf={updateShelf} />
            <div className="open-search">
              <button onClick={OpenSearchOnClick}>Add a book</button>
            </div>
          </div>
        }
      />
      <Route
        path="/search"
        element={<Search updateShelf={updateShelf} allBooks={allBooks} />}
      />
    </Routes>
  );
}

export default App;
