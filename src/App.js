import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

import UploadImage from "./component/UploadImage";
import { GalleryHeader } from "./component/Header";
import { Footer } from "./component/Footer";
import HomePage from "./component/HomePage";
function App() {
  return (
    <Router>
      <AmplifyAuthenticator>
        <GalleryHeader />
        <nav
          className="navbar App-header"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-end">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/" className="navbar-item">
              Gallery
            </Link>
            <Link to="/upload" className="navbar-item">
              Upload Image
            </Link>
          </div>
        </nav>
        <Route exact path="/" component={HomePage} />
        <Route path="/upload" component={UploadImage} />
        <AmplifySignOut />
        <Footer />
      </AmplifyAuthenticator>
    </Router>
  );
}

export default App;
