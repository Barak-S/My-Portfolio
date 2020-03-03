import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="App">
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#" style={{fontSize: 18}}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{fontSize: 18}}>Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{fontSize: 18}}>About</a>
              </li>
              </ul>
              <ul className="navbar-nav">
              <li className="pull-right linkedIn">
                <img src="https://www.sharethis.com/wp-content/uploads/2017/05/LinkedIn.png" style={{height: 65, padding:10}} onClick={()=> window.open("https://www.linkedin.com/in/barak-saidoff-3a2a36b2/", "_blank")}></img>
              </li>
              <li className="pull-right">
                <img src="https://nashvillefilmfestival.org/wp-content/uploads/2018/03/Instagram-Button.png" style={{height: 65, padding:10}} onClick={()=> window.open("https://www.instagram.com/barak_saidoff/?hl=en", "_blank")}></img>
              </li>
              <li className="pull-right">
                <img src="https://i.ya-webdesign.com/images/github-icon-png-7.png" style={{height: 65, padding:10}} onClick={()=> window.open("https://github.com/Barak-S", "_blank")}></img>
              </li>
            </ul>
          </div>
        </nav>
      <h1 style={{paddingTop: 180, fontSize: 65, paddingBottom: 10}}>Barak Saidoff</h1>
      <p style={{fontSize: 28}}>Full Stack Software Engineer</p>
    </div>
  );
}

export default App;
