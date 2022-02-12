import React,{useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

function Blogitem() {
    
    let navigate = useNavigate();
    let {id} = useParams();

    useEffect(() => {
        console.log(id)
    }, []);
    const style = {
        color: '#fff'
    }  

    return (
        <div style = {style}>
            <h1>
                blogItem with id : {id}
            </h1>

            <button onClick={ () => navigate('/blog')}>Navigate to blogs page</button>
        </div>
    )
}

export default Blogitem