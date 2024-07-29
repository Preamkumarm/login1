import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Signup(props)
{
    const navigate=useNavigate()
    const user=props.user
    const setuser=props.setuser

    const[euser,seteuser]=useState()
    const[epass,setepass]=useState()
    const handlefirst=(evt)=>
    {
        seteuser(evt.target.value)

    }

    const handlesecond=(evt)=>
    {
        setepass(evt.target.value)

    }

    const addcheckuser=()=>
    {
        setuser([...user,{username:euser,password:epass}])
        navigate("/login")

    }
    return(
        <div className="bg-black p-10">
        <div className="bg-white p-10 border rounded-md">
            <h1 className="text-3xl font-medium gap-3">Hey Hi!👋</h1>
            <p>Signup here</p>
            <div className="flex flex-col w-52 gap-1 my-2">
            <input
             type="text" 
             className=" border rounded-md border-black p-1 " 
             placeholder="username" 
             onChange={handlefirst}/>


            <input 
            type="text" 
            className=" border rounded-md border-black p-1" 
            placeholder="password"
            onChange={handlesecond}/>

<input 
            type="text" 
            className=" border rounded-md border-black p-1" 
            placeholder="confirm password"/>


            
            <button className="w-24 border rounded-md bg-[#936DD4] ml-0 p-1 my-1"onClick={addcheckuser}>Signup</button>
            </div>
            <p>Already have an account? <Link to={"/login"}>Login</Link></p>

        </div>
        
    </div>
    )
}

export default Signup