import React, { useContext } from 'react'
import { Globalcontext } from '../context/Index'
import { Link } from 'react-router-dom'

const Home = () => {
    const{reciepelist} = useContext(Globalcontext)
  return (
    <div className='container'>
   { reciepelist && reciepelist.length >0 ? reciepelist.map((item)=>{

        return(
            <div key={item.id} className='recipe-card'>
            <img src={item.image_url} alt=""/>
                <h1>{item.title}</h1>
             <Link to={`/recipes/${item.id}`}>See Reciepe</Link>   
            </div>
        )
    }) : <h1>No reciepe found</h1>
   }
    </div>
  )
}

export default Home