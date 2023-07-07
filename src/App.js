import React, { useEffect, useState } from "react";
import axios from "axios";
import ArticleList from "./ArticleList";
const API_URL = 'http://localhost:3001/api/photo-gallery-feed-page/page';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/${page}`);
        
        const { data } = response;
        const newArticles = data.nodes.map((node) => ({
          title: node.node.title,
          field_photo_image_section: node.node.field_photo_image_section,
          path: node.node.path,
          nid: node.node.nid,
        }));
        setArticles((prevArticles) => [...prevArticles, ...newArticles]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page]);
  console.log(articles);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
};

export default App;
