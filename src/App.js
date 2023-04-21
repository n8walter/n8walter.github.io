import './css/App.css';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/homePage.js';
import aboutPage from './Components/aboutPage';
import AllArticlesPage from './Components/allArticlesPage';
import IndividualArticlePage from './Components/individualArticlePage';

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
          <Route path="/about" Component={aboutPage} />
          <Route path="/articles" Component={AllArticlesPage} />
          <Route path="/articles/:articleTitle" Component={IndividualArticlePage} />
        </Routes>
      </Router>
    </section >
  );
};

export default App;
