import {useState} from "react";
import axios from "axios";

export  default ()=>{
    const [email,setEmail] = useState();
    const [password, setPassword] = useState();
    const onSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post('/api/users/signup', {email, password})

    }
    return (<div className="container">
        <form onSubmit={onSubmit}>
            <h1>
                sign up
            </h1>
            <div className="form-group p-2">
                <label/> Email  <label/>
                <input  className="form-control" type="text" name="email" value={email} onChange={setEmail}/>
            </div>
            <div className="form-group p-2">
                <label/> Password  <label/>
                <input  className="form-control" type="password" name="password" value={password} onChange={setPassword}/>
            </div>
            <button className="btn btn-primary align-content-center">Sign up</button>
        </form>
    </div>)
}