import '../css/ArticleList.css';
import { Link } from 'react-router-dom'
import { React, useEffect, useState } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore'
import '../css/AllArticlesPage.css'

//Get all articles on every reload of page. Create a link to each.
function ArticleListComponent() {
  const [articles, setArticles] = useState([]);
  const articlesCollectionRef = collection(db, "articles");

  useEffect(() => {
    const getArticles = async () => {
      const data = await getDocs(articlesCollectionRef);
      setArticles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul>
      {articles.map((article) =>
        <li key={article.id}>
          <Link to={`/articles/${article.id}`}>{article.id}</Link>
        </li>
      )}
    </ul>
  )
};

export default ArticleListComponent;