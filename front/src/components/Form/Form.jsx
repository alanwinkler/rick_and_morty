import { useState } from "react";
import style from "./Form.module.css";
import validation from './validation.js';
// import { useEffect } from 'react';

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (evento) => {
    setUserData({
      ...userData,
      [evento.target.name]: evento.target.value,
    });
    setErrors(
        validation({
            ...userData,
            [evento.target.name]: evento.target.value,
        })
    )
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
        />
        <p className={style.error}>
            {errors.username && errors.username}
        </p>
        <br />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <p className={style.error}>
            {errors.password && errors.password}
        </p>
        <hr />
        <button>LOGIN</button>
      </form>
    </div>
  );
};

export default Form;
