import React from 'react';

const Login = () => {
    return (
        <>
       <div className="container d-flex justify-content-center pt-5">
           <div className=" w-50 border rounded shadow-lg p-5">
               <form action="">
                <div className="form-group pt-4">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group pt-4">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="form-check pt-4">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <div className="d-flex justify-content-center pt-4">
                    <button type="submit" className="btn btn-success center">Submit</button>
                </div>
                
           </form>
           </div>
           
       </div>
        </>
    )
}

export default Login;