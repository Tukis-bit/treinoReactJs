import './index.css'
import {Link} from "react-router-dom"

export default function contato(){


    return (
    <div className='Pagina de contato'>
    <h1> Bem vindo a página de contato</h1>
<img className= "ctt" src="/assets/images/images.png" alt="Imagem de contato" />
        
        <Link to ="/"> Ir para a Home </Link>

    </div>

    )
} 