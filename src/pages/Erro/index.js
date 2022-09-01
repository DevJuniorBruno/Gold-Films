import {Link} from 'react-router-dom'
import "./style.css"


function Erro() {
    return(
             <div className="not-found">
            <h1>404</h1>
            <p>Página não encontrada...</p>
            <Link to="/">Acesso aos filmes!</Link>
        </div>
        
    )
}

export default Erro;