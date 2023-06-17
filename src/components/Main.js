import { Link } from "react-router-dom"


const linkStyle = {
  textDecoration: "none",
  color: "white",
  marginTop: "46px",
  marginWidth: "400px"
};
    

function Main() {
    document.body.style.backgroundColor = "#272b34";
    return (
       <main>
            <h1 className="main--title">Fun facts about React</h1>
            <ul className="main--facts">
                <li>Topic 1</li>
                <li>Topic 2</li>
                <li>Topic 3</li>
                <li>Topic 4</li>
                <li><Link to="/About" style={linkStyle}>About page</Link></li>
                <li><Link to="/AirBnb" style={linkStyle}>AirBnb project</Link></li>
                
            </ul>
            
       </main>
    )
}

export default Main;
