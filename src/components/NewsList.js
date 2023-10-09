import React, { useState, useEffect } from "react";
import axios from "axios";
import { NewsItem } from "./NewsItem"; // Adjust the path accordingly
require("dotenv").config({ path: "../../.env" });

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const apiKey = process.env.API_KEY; // Access your API key from environment variables
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=football&apiKey=${apiKey}`
      );
      setArticles(response.data.articles);
      console.log(response);
    };

    getArticles();
  }, []);

  return (
    <div>
      {articles.map((article) => (
        <NewsItem
          key={article.title} // Make sure to provide a unique key for each item in a list
          title={article.title}
          description={article.description}
          url={article.url}
          urlToImage={article.urlToImage}
        />
      ))}
    </div>
  );
};

export default NewsList;
