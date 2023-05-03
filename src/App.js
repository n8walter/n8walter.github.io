import './css/App.css';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage.js';
import AboutPage from './Components/AboutPage';
import AllArticlesPage from './Components/AllArticlesPage';
import IndividualArticlePage from './Components/IndividualArticlePage';

function App() {
  return (
    <section className="App">
      <Router>
        <div className='header'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/articles">Articles</Link>
        </div>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/articles" Component={AllArticlesPage} />
          <Route path="/articles/:articleTitle" Component={IndividualArticlePage} />
        </Routes>
      </Router>
    </section >
  );
};

export default App;
