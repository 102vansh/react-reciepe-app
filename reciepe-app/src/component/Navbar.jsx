import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Globalcontext } from '../context/Index'

const Navbar = () => {

    const{searchparams,setsearchparams,handlesub} = useContext(Globalcontext)
  return (
    <div className='navbar'>
<h1>Reciepe App</h1>
<form onSubmit={handlesub}>
<div className='search'>
<input type="text" placeholder='search reciepe' value={searchparams} onChange={(e)=>setsearchparams(e.target.value)}/>
</div>
</form>

<div className='list'>
    <ul>
  <Link to={'/'}><li>Home</li></Link>  
  <Link to={'/favourate'}><li>Favorate</li></Link>
    </ul>
    
</div>

    </div>
  )
}

export default Navbar