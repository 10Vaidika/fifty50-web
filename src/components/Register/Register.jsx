import React, {useState} from 'react'
import './Register.css'

const Register = () => {

  const [userRegistration, setUserRegistration] = useState({
    name: "",
    phone: "",
    email: "",
    upi: "",
  });

  const [registration, setRegistration] = useState([])

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegistration({...userRegistration, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRegistration = {...userRegistration, id: new Date().getTime().toString()}
    console.log(registration)

    setRegistration([...registration, newRegistration])
    console.log(registration)

    setUserRegistration({name:"", phone:"", email:"", upi:""})
  }

  return (
    <>
    <div className='center'>
     <div className="register-container">
      <div className="register-header">
        <h1>fifty50</h1>
        <p>"pretty bill splitting app"</p>
      </div>
    <form className="register-form" action="" onSubmit={handleSubmit}>

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" autoComplete="off" 
        value={userRegistration.name}
        onChange={handleInput}
        name="name" 
        id="name"/>
      </div>

      <div className="form-group"> 
        <label htmlFor="phone">Mobile Number</label>
        <input type="text" autoComplete="off" 
        value={userRegistration.phone}
        onChange={handleInput}
        name="phone" 
        id="phone"/>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Id</label>
        <input type="text" autoComplete="off" 
        value={userRegistration.email}
        onChange={handleInput}
        name="email" 
        id="email"/>
      </div>

      <div className="form-group">
        <label htmlFor="Name">UPI ID</label>
        <input type="text" autoComplete="off" 
        value={userRegistration.upi}
        onChange={handleInput}
        name="upi" 
        id="upi"/>
      </div>

      <button type="submit"className="create-button">create account</button>

      <div className="login-link">
      already have an account ? <a href="/login">Login in</a>
        </div>
    </form>
    </div>
    </div>
 
    </>
  )
}

export default Register