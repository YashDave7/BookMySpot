import React,{useState, useEffect} from 'react'
import './login.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Axios from "axios";

export default function Login() {
    const [email,setEmail] =  useState("");
    const [password,setPassword] =  useState("");
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    
    async function handleLogin (e) {
        e.preventDefault();
        console.log("In Login");
        try {
            var newUser = {
                email:email,
                password:password
            }
            var respo;
            await Axios.post("http://localhost:4000/user/login", 
                newUser
            ).then((response) => {
                console.log(response);
                respo = response;
            })
            console.log("in");
            if(respo.data === "wrongPassword") {
                        // alert("Wrong Password try again link to login");
                        // <Link to="/homepage"></Link>
                        // return <Link to="/homepage"></Link>
                        navigate("/login");
                    } else if (respo.data === "NotUser") {
                        // alert("Wrong Password try again link to login");
                        navigate("/login");
                    } else if (respo.data === "go") {
                        // alert("Right password");
                        // <Link to="/homepage"></Link>
                        navigate("/homepage");
                    }
        } catch (error) {
            console.log(error);
        }
        // var newLogin = {
        //     email: email,
        //     password: password,
        // }
        // try {
        //     console.log("Try");
        //     var response = await Axios.post("http://localhost:4000/user/login",
        //       newLogin
        //     );
        //     console.log(response);
        //     if(response.data === "wrongPassword") {
        //         // alert("Wrong Password try again link to login");
        //         // <Link to="/homepage"></Link>
        //         // return <Link to="/homepage"></Link>
        //         navigate("/homepage");
        //     } else if (response.data === "NotUser") {
        //         // alert("Wrong Password try again link to login");
        //         navigate("/homepage");
        //     } else if (response.data === "go") {
        //         // alert("Right password");
        //         // <Link to="/homepage"></Link>
        //         navigate("/homepage");
        //     }
        //   } catch (error) {
        //     console.log(error);
        // }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios.get("http://localhost:4000/users");
                setUsers(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    },[])

  return (
    <div className='loginpage'>
      <div className="container">
        <h1>Login</h1>
        <form>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            </div>
            <button className="btn btn-outline-primary" type="submit" onClick={handleLogin}>
                Login
                {/* <Link className="nav-link" to="/homepage">
                  To Login                 
              </Link> */}
            </button>
            
        </form>
        <div className="button">
            
                <Link className="my-3 nav-link" to="/Prologin">
                  Are you a professional? --click here--
              </Link>
            
            </div>
    </div>
    
    </div>
  )
}