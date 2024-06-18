import { useState } from "react";

import "./App.css";

import SearchForm from "./components/SearchForm";
import ArticleList from "./components/ArticleList";
import Loading from "./components/Loading";

export const baseUrl =
  "https://article-scrapper-backend.onrender.com" || "http://localhost:8080";
function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (data) => {
    setArticles(data);
  };
  return (
    <>
      <div>
        <h1>Medium Article Scraper</h1>
        <SearchForm onSearch={handleSearch} setLoading={setLoading} />
        {loading ? <Loading /> : <ArticleList articles={articles} />}
      </div>
    </>
  );
}

export default App;
