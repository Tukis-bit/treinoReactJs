
import './index.css';
import {Link} from "react-router-dom";


export default function App() {
  return (
    <div className="App">
    <h1> estudos de ReactJS </h1>
    
    <ul>
      <li>
        <Link to= "/contato">Ir para a pagina de contatos</Link>
      </li>
    </ul>
    </div>
  );
}
