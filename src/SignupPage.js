import { Link } from "react-router-dom";
import './App.css';

function signup() {
  return (
    <div>
    <header className="App-header">
        <h1 className="Welcome">
          Thera
        </h1>
        <Link to="/signup">
        <button type="button" className="ProfileButton" onClick="Landing.js">Profile</button>
        </Link>
        
    </header>
    <body>

        <div className="Feed">
        
        
        </div>

    </body>
    <footer>

    </footer>
    </div>

  );
  
}

export default signup;   