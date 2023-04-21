import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase-config';
import { doc, getDoc } from 'firebase/firestore';

function IndividualArticlePage() {
  const routingData = useParams();
  const [article, setArticle] = useState([]);
  const articleDocRef = doc(db, "articles", routingData.articleTitle);

  useEffect(() => {
    const getArticle = async () => {
      const data = await getDoc(articleDocRef);
      setArticle(data.data());
      console.log(data.data());
    };

    getArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h3>{article.title}</h3>
      <h4>{article.author}</h4>
      <h4>{article.timestamp?.seconds}</h4>
      <p>{article.body}</p>
    </div>
  )
};

export default IndividualArticlePage;