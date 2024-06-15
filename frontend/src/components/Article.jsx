const Article = ({ article }) => {
  return (
    <a className="article" href={article.link}>
      <div className="article-container">
        <div>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
        </div>
        <p>
          <span>Author:</span> {article.author}
        </p>
      </div>
    </a>
  );
};

export default Article;
