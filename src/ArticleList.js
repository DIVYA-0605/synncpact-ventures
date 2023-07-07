import React from "react";
import Article from "./Article";


const truncateTitle = (title, maxLength) => {
    if (title.length <= maxLength) {
      return title;
    }
  
    return `${title.slice(0, maxLength)}...`;
  };

const ArticleList = ({ articles }) => (
  <div className="article-list">
    {articles.map((article) => (
      <Article
        key={article.nid}
        title={truncateTitle(article.title, 70)}
        image={article.field_photo_image_section}
        path={article.path}
      />
    ))}
  </div>
);

export default ArticleList;
