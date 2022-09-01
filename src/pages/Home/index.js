import { useEffect, useState} from 'react'
import api from '../../services/api'
import {Link} from 'react-router-dom'
import './index.css'
//URL API: /movie/now_playing?api_key=7bb83699ab21dc2845538ee6f897e19b&language=pt-BR


function Home() {

    const[filmes, setFilmes] = useState([]);
    const[loading, setLoading] = useState(true);

    

    useEffect(()=>{

        async function loadFromApi(){
            const response = await api.get("/movie/now_playing",{
                params:{
                    api_key:"7bb83699ab21dc2845538ee6f897e19b",
                    language:"pt-BR",
                    page:1
                }
            })
            setFilmes(response.data.results.slice(0, 10));
            setLoading(false);

        }

        loadFromApi();
        
        

    },[])

    if(loading) {
        return(
            <div className='loading' >
                <h1>Carregando filmes...</h1>
            </div>
        )
    }

    return(
        <div className='container'>
            <div className='lista-filmes'>
                {filmes.map((filme)=>{
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;