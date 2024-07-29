import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props)
{

    const navigate=useNavigate()
    const user=props.user

    const[tuser,settuser]=useState()
    const[tpass,settpass]=useState()
    const[ruser,setruser]=useState(true)
    
    const handleuser=(evt)=>
    {
        settuser(evt.target.value)

    }

    const handlepass=(evt)=>
    {
        settpass(evt.target.value)

    }

    const handlelogin=()=>
    {
        var userfound=false

        user.forEach(function(item){
            if(item.username===tuser && item.password===tpass)
            {
                console.log("Successfull")
                userfound=true
                navigate("/landing")
            }
        })

        if(userfound===false)
            {
                console.log("Failed")
                setruser(false)
            }
    }
    return(<div className="bg-black p-10">
        <div className="bg-white p-10 border rounded-md">
            <h1 className="text-3xl font-medium gap-3">Hey Hi!👋</h1>
            {ruser?<p>I help you manage your Activities :)</p>:<p className="text-red-500">Please signup before you login :)</p>}
            <div className="flex flex-col w-52 gap-1 my-2">
            <input
             type="text" 
             className=" border rounded-md border-black p-1 " 
             placeholder="username"
             onChange={handleuser}/>


            <input 
            type="text" 
            className=" border rounded-md border-black p-1" 
            placeholder="password"
            onChange={handlepass}/>


            <button className="w-24 border rounded-md bg-yellow-400 ml-0 p-1 my-1" onClick={handlelogin}>Login</button>
            </div>
            <p>Don't have an account ? <Link to={'/signup'}>signup</Link></p>

        </div>
        
    </div>)
}

export default Login