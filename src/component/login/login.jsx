import React , {useState , useEffect} from "react";
import { useNavigate  } from "react-router-dom";

const Login = () => {
    const [email , setemail] = useState("")
    const [password , setpassword] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        let user = localStorage.getItem('user')
        if(user){
            navigate("/")
        }
    })
    function signupRedirect(){
        navigate("/signup")
    }

    async function Userlogin(){
        let data = {email : email , password : password}
        let res = await fetch("http://localhost:5000/user/login" , {method:'post' , body: JSON.stringify(data) , headers: {'Content-type' : 'application/json'}});
        res = await res.json()
        if(res.status === true){
            localStorage.setItem('user' , JSON.stringify(res.data.user))
            localStorage.setItem('token' , JSON.stringify(res.data.token))
            navigate("/")
        }
        else{
            alert(res.message)
        }
    }
    return (
        <div className="container" style={{width: "600px" , height:"300px", background:"brown" , color:"white"}}>
        <form className=" align-self-center">
            <h1>Login User</h1>
            <div className="form-group row">
                <label  className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control"  placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)}/>
                </div>
            </div>
            <div className="form-group row">
                <label  className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control"  placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)}/>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-7">
                    <button type="button" className="btn btn-primary" onClick={Userlogin}>Log In</button>
                </div>
                <div className="col-sm-4">
                
                    <button type="button" className="btn btn-primary" onClick={signupRedirect}>Sign Up</button>
                </div>
                
            </div>
            <small>If Not Registerd User SignUp First</small>
            
        </form>
        </div>
    )
}

export default Login