import { React } from 'react';
import ArticleListComponent from '../Components/articleListComponent';
import '../css/AllArticlesPage.css'

function AllArticlesPage() {
  return (
    <div className='articleList'>
      <ArticleListComponent />
    </div>
  )
};

export default AllArticlesPage;