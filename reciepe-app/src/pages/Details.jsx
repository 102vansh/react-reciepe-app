import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { Globalcontext } from '../context/Index'
const Details = () => {
    const { id } = useParams()
    const[reciepeitems,setreciepeitems]=useState(null)
const{loading,setloading,addtofav,favorateitem} = useContext(Globalcontext)

if(loading){
    return <h1>Loading</h1>
}console.log(id)
const reciepedetail = async()=>{
    try{
    
const response = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
console.log(response)
console.log(response.data.data)
setreciepeitems(response?.data?.data)
    }catch(error){
console.log(error)
    }

    
}

useEffect(() => {
    reciepedetail()
}, [id])
console.log(reciepeitems)

  return (
    
    <div className='details'>
{console.log(reciepeitems?.recipe)}    

<h1>{reciepeitems?.recipe?.title}</h1>
<img src={reciepeitems?.recipe?.image_url} alt="" />
<p>{reciepeitems?.recipe?.cooking_time}</p>
<p>{reciepeitems?.recipe?.servings}</p>
<p>{reciepeitems?.recipe?.publisher}</p>
<div>

<span>
    <h3>Ingredients</h3>
    <ul>
        {
            reciepeitems?.recipe?.ingredients.map((item)=>{
                return <>
                <li>{item.quantity}</li>
                <li>{item.unit}</li>
                <li>{item.description}</li>

                </>
                
            })
        }
    </ul>
</span>

<button onClick={() => addtofav(reciepeitems?.recipe)}>{
    
favorateitem && favorateitem.findIndex((item)=>item?.id===reciepeitems?.recipe?.id)!== -1 ?"Remove from favourate":"Add to favourate"
}
    </button>
    
</div>




    </div>
  )
}

export default Details