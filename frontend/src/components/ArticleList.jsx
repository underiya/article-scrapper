import Article from "./Article";

const ArticleList = ({ articles }) => {
  return (
    <div>
      {articles.map((article, index) => (
        <Article key={index} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
