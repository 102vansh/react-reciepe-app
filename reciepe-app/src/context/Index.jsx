import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
export  const Globalcontext = createContext(null)

    export default function GlobalState({ children }) {
const[searcparams,setsearchparams]=useState('')
const[reciepelist,setreciepelist]=useState([])
const[favorateitem,setfavourateitem] = useState([])
const[loading,setloading] = useState(false)


 async function handlesub (e){
e.preventDefault()
    
    try{
        setloading(true)
const response = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searcparams}`)
 console.log(response.data)
setreciepelist(response.data.data.recipes)
setloading(false)
setsearchparams('')
Navigate('/')


    }catch(err){
    
    }

}

const addtofav = (getcurritem)=>{
    
    console.log(getcurritem)
    const cpyfav = [...favorateitem]
   const index =  cpyfav.findIndex((item)=>item?.id === getcurritem?.id)
   if (index == -1){
cpyfav.push(getcurritem)
   }else{
cpyfav.splice(index,1)
   }
   setfavourateitem(cpyfav)
   

}
console.log(favorateitem)

        return (
            <Globalcontext.Provider value={{searcparams,setsearchparams,reciepelist,setreciepelist,addtofav,favorateitem,loading,setloading,handlesub}}   >
                {children}
            </Globalcontext.Provider>
        )
    }