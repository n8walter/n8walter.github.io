import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase-config';
import { doc, getDoc } from 'firebase/firestore';
import '../css/IndividualArticlePage.css';
import Moment from 'react-moment';



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
    <div className="container">
      {article.image ? <img src={article.image} alt="articleImage" className='image' /> : null}
      <h3 className="title">{article.title}</h3>
      <h4 className="author">{article.author}</h4>
      <Moment className="timestamp" unix>{article.timestamp?.seconds}</Moment>
      <p className="body">{article.body}</p>
    </div>
  )
};

export default IndividualArticlePage;