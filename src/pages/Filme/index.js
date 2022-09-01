import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom' 

import api from '../../services/api'

function Filme() {
    const { id } = useParams();
    const[loading, setLoading] = useState(false);

    useEffect(()=>{

        async function loadApi() {
            await api.get(`/movie/${id}`, {
                params:{
                    api_key:"7bb83699ab21dc2845538ee6f897e19b",
                    language:"pt-BR",
                }
            })
            .then((response)=>{
                console.log(response);
            })
            .catch(()=>{
                console.log("filme não encontrado")
            })
        }
        loadApi();

    },[])

    return(
        <div>
            <h1>Filme com ID : {id}</h1>
        </div>
    )
}

export default Filme;