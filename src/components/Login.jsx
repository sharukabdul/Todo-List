import React, { useState } from 'react'


function Login(props) {

    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(name!==''){
            props.history.push(`/addtodo/${name}`)
        }

    }


    return (
        <div className= 'container'>
            <div className= 'login'>
                <form onSubmit={(e) => handleSubmit(e)}><br />
                    <h3 className= 'logintodo'>Log in to your account</h3>
                    <div className="form-group">
                        <label className= 'username' >User Name</label>
                        <input className="form-control" name="username" onChange={(e) => setName(e.target.value)} placeholder="User Name" type="text" required/>
                    </div>
                    <div className="form-group">
                        <label className= 'password' >Password</label>
                        <input className="form-control" name="password" placeholder="Password" type="password" required/>
                        <a className= 'forgot' href="">Forgot your password?</a>
                    </div><br />
                    <button className="btn btn-success" type="submit" >Log In</button><br />
                    New to Todo App? <a href="">Sign Up</a>
                </form>
            </div>
        </div>
    )
}

export default Login