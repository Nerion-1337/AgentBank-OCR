//
// BUILDER
import Signin from "#/page/sign_in";
import isEmpty from "#/components/build/global/isEMpty";
//
// HOOKS
import { useRef } from "react";
//
// REDUX
import { useSelector } from "react-redux";
import { store } from "#/reducers/store";
import { putUser } from '#/actions/user_action'
//
//
//
export default function User() {
//
// VARIABLE
//
const user = useSelector((state) => state.userReducer);
const form = useRef();
const changeName = useRef();
//
// REQUETE SERVER
//
const handleChange = (e) =>{
//  
  e.preventDefault();
//  
  const dataForm = {
    firstName: form.current[0].value,
    lastName: form.current[1].value,
}
//
store.dispatch(putUser(dataForm));
//
form.current.reset();
// 
changeName.current.style.display = "none";
}
//
// FORMULAIRE
//
const handleOpen = () =>{ 
  changeName.current.style.display = "block";
}
const handleClose = () =>{
  changeName.current.style.display = "none";
  form.current.reset();
}
//
//
//
    return (
<>
{isEmpty(user.firstName) ? (
<Signin/>
      ):(
        
        <main className="main bg-dark">
        <div className="header">
      <h1>Welcome back<br />{user.firstName} {user.lastName}</h1>
      <button className="edit-button" onClick={handleOpen}>Edit Name</button>

      <div ref={changeName} className="change_name">
      <small className="error_name"/>  
      <form ref={form} onSubmit={handleChange}>
      <div className="input-wrapper">  
        <label htmlFor="firstName">First Name</label>
        <input 
        type="text" 
        id="firstName" 
        name="firstName"
        defaultValue={user.firstName}
        />  
      </div>
      <div className="input-wrapper">
        <label htmlFor="lastName">Last Name</label>
        <input 
        type="lastName" 
        name="lastName" 
        id="lastName"
        defaultValue={user.lastName} 
        />
      </div>
      <input type="submit" value="Send" className="sign-in-button"/>
      </form>
    <button className="sign-in-button" onClick={handleClose}>Cancel</button>
      </div>
    </div>


    <h2 className="sr-only">Accounts</h2>
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
        <p className="account-amount">$2,082.79</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
        <p className="account-amount">$10,928.42</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
        <p className="account-amount">$184.30</p>
        <p className="account-amount-description">Current Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
</main>
      )}
</>
    );
  }
