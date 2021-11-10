import './Landing.css';
import './App.css';
import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <div className="App">

            <body>
                <h1 id="LandingTitle">THERA</h1>
                <div id="siteDescriptionDiv">
                    <p id="siteDescriptionText">A social networking site dedicated to creating a safe space for you to share your mental health experiences and learn from mental health professionals. Just a small step toward bridging the mental health access gap.</p>
                </div>
                <div id="signupDiv">
                    <p>Sign up now to start interacting!</p>
                    <Link to="/signup">
                    <button type="button" className="signupButton">Create Account</button>
                    </Link>
                </div>

            </body>        
        </div>

    );
  
}

export default LandingPage;