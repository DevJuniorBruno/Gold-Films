import { useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom' 
import api from '../../services/api'
import './index.css'
import { toast } from 'react-toastify';


function Filme() {
    const {id} = useParams(); 
    const navigate = useNavigate();

    const[filme, setFilme] = useState([]);
    const[loading, setLoading] = useState(true)

    useEffect(()=>{


        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key:"7bb83699ab21dc2845538ee6f897e19b",
                    language:"pt-BR",
                }
            })
            .then((response)=>{
                setFilme(response.data);
                setLoading(false);
            })
            .catch(()=>{
                navigate("/", {replace:true});
            })
        }

    
        loadFilme();

        return()=>{
            console.log("componente desmontado");
        }

    },[navigate, id]);


    function salvarFilme() {

        const listaFilmes = localStorage.getItem("@primeflix");

        const filmesSalvos = JSON.parse(listaFilmes) || [];

        const hasFilme = filmesSalvos.some( (filmeSalvo) => filmeSalvo.id === filme.id)

        if(hasFilme){
            toast.warn("Esse filme já esta na lista")
            return;
        }

        filmesSalvos.push(filme)
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos))
        toast.success("Filme salvo com sucesso")
    }


    if(loading){
        return(
            <div className='filme-info' >
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    return(
        <div className='filme-info'>
            <h1>{filme.title}</h1>

            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>            
            <strong>Avaliação:{filme.vote_average} / 10</strong>

        <div className='buttons'>
            <button onClick={salvarFilme}>Salvar</button>
            <button>
                <a target="blank" rel='external' href={`https://www.youtube.com/results?search_query=${filme.title} trailer`}>
                    Trailer
                </a>
            </button>
        </div>

        </div>
    )

}

export default Filme;