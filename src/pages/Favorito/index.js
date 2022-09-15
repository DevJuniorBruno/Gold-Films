import { useEffect, useState} from "react"
import { Link } from 'react-router-dom'
import "./style.css"
import { toast } from 'react-toastify'


function Favoritos(){

    const[filmes,setFilmes] = useState([]);

    useEffect(()=>{
        const minhaLista = localStorage.getItem("@primeflix");

        setFilmes(JSON.parse(minhaLista) || []);
    },[])

    function onDeleteFilm(id) {
        let listaMeusFilmes = filmes.filter((item)=>{
            return (item.id !== id);
        })

        setFilmes(listaMeusFilmes);
        localStorage.setItem("@primeflix", JSON.stringify(listaMeusFilmes));
        toast.success("Filme removido com sucesso!")
    }

return(
    <div className="meus-filmes">
        <h1>Filmes Favoritos</h1>

        {filmes.length === 0 && <span>Nenhum filme favorito na lista :(</span>}
        

        <ul>
            {filmes.map((item)=>{
                return(
                    <li key={item.id}>
                        <span>{item.title}</span>

                        <div>
                            <Link to={`/filme/${item.id}`} >Ver detalhes</Link>
                            <button onClick={ () => onDeleteFilm(item.id) } >Excluir</button>
                        </div>
                    </li>

                   
                )
            })}
        </ul>
    </div>
  )

}

export default Favoritos;