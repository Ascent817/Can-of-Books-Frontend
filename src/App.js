import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import BestBooks from './BestBooks.js';
import About from './About.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<BestBooks />}/>
            <Route exact path="/about" element={<About />}/>
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;