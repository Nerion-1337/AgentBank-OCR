//
// HOOKS
import { useState } from "react";
//
// DATA
import { Links } from "#data/links";


export default function Signin() {
//
// VARIABLE
//
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
//
// REQUETE SERVER
//
const handleLogin = (e) =>{
  e.preventDefault();
  const emailError = document.querySelector(".error_email");
  const passwordError = document.querySelector(".error_password");

fetch(`${Links[3].url}/login`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: email,
    password: password,
  }),
})
  .then((res) => res.json())
  .then((res) => {
    
    if (res.message === "Error: User not found!") {
      passwordError.innerHTML = "";
      emailError.innerHTML = "Email non valide";
    } else if(res.message === "Error: Password is invalid"){
      emailError.innerHTML = "";
      passwordError.innerHTML = "Password non valide";
    } else {
      localStorage.setItem("token", `${res.body.token}`);
      window.location = `${Links[2].url}`;
    }
  })
  .catch((err) => {
    console.log(err);
  }); 
}
//
//
//
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleLogin}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input 
            type="text" 
            id="email" 
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}/>
            <small className="error_email"/>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input 
            type="password" 
            name="password" 
            id="password" 
            onChange={(e) => setPassword(e.target.value)}
            value={password}/>
            <small className="error_password"/>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <input type="submit" value="Sign In" className="sign-in-button"/>
        </form>
      </section>
    </main>
  );
}
