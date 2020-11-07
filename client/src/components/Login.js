import React, {useState, useEffect} from "react";
import Axios from "axios";

function Login() {
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    Axios.defaults.withCredentials = true;

    const register = () => {
        Axios.post("/register", {
            username: usernameReg,
            password: passwordReg
        }).then((response) => {
            console.log(response);
        });
    };

    const login = () => {
        Axios.post("/login", {
            username: username,
            password: password
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0].username);
            }
        });
    };

    useEffect(() => {
        Axios.get("/login").then((response) => {
            if (response.data.loggedIn == true) {
                setLoginStatus(response.data.user[0].username);
            }
        });
    }, []);

    return (

        <div className="register">

          <div className="registration">

            <div class="ui middle aligned center aligned grid">
          
              <div className="login">
                <div class="collumn">
                    <div class="column">
                        <form class="ui large form">
                            <div class="ui stacked segment">
                            <h1 className="ui header"><div className="content">Existing User<div className="sub header">If you have an account Login</div></div></h1>
                                <div class="field">
                                    <div class="ui left icon input">
                                        <i class="user icon"></i>
                                        <input 
                                        type="text" 
                                        onChange={(e) => {setUsername(e.target.value);}} 
                                        placeholder="Username"></input>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="ui left icon input">
                                        <i class="lock icon"></i>
                                        <input 
                                        type="text" 
                                        onChange={(e) => {setPassword(e.target.value);}} 
                                        placeholder="Password"></input>
                                    </div>
                                    <div class="ui fluid large yellow submit button" onClick={login}>Login</div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
                </div>

                    <div class="collumn">
                        <div class="column">
                            <form class="ui large form">
                                <div class="ui stacked segment">
                                <h1 className="ui header"><div className="content">New User<div className="sub header">Register for an account then Login</div></div></h1>
                                    <div class="field">
                                        <div class="ui left icon input">
                                            <i class="user icon"></i>
                                            <input type="text" 
                                            onChange={ (e) => {setUsernameReg(e.target.value);} } 
                                            placeholder="Username"></input>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <div class="ui left icon input">
                                            <i class="lock icon"></i>
                                            <input 
                                                type="text"
                                                onChange={ (e) => {setPasswordReg(e.target.value);} }
                                                placeholder="Password"></input>
                                    </div>
                                    <div class="ui fluid large yellow submit button" onClick={register}>Register</div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


        {/* <div className="register">
            <div className="registration">
                <h1>Registration</h1>
                <label>Username</label>
                <input type="text"
                    onChange={
                        (e) => {
                            setUsernameReg(e.target.value);
                        }
                    }/>
                <label>Password</label>
                <input type="text"
                    onChange={
                        (e) => {
                            setPasswordReg(e.target.value);
                        }
                    }/>
                <button onClick={register}>Register</button>
            </div>

            <div className="login">
                <h1>Login</h1>
                <input type="text" placeholder="Username..."
                    onChange={
                        (e) => {
                            setUsername(e.target.value);
                        }
                    }/>
                <input type="password" placeholder="Password..."
                    onChange={
                        (e) => {
                            setPassword(e.target.value);
                        }
                    }/>
                <button onClick={login}>Login</button>
            </div>
            <h1>{loginStatus}</h1>
        </div> */}

        <h1>{loginStatus}</h1>
    </div>
    );
}

export default Login;
