import * as React from "react";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import "../Styles/Login.css";
import image from "../Utils/login_image.png";
import { useState } from "react";
import axios from "axios";

import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleClick = () => {
    const info = {
      email: { email }.email,
      password: { password }.password,
    };

    axios
      .post("http://localhost:3200/users/login", info)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.response.data.error);
      });
  };

  return (
    <div className='page'>
      <div className='box'>
        <div className='child'>
          <img src={image} alt='login' className='image' />
          <Link href='/signup' style={{ color: "black" }}>
            Create an account
          </Link>
        </div>
        <div className='child'>
          <p className='title'>Log In</p>
          <TextField
            id='standard-basic'
            onChange={handleName}
            label='Your Name'
            variant='standard'
            InputProps={{
                startAdornment: (
                    <InputAdornment position='start'>
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
          <br />
          <TextField
            id='standard-basic'
            label='Password'
            variant='standard'
            onChange={handlePassword}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <LockIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position='end'>
                  <VisibilityOffIcon />
                </InputAdornment>
              ),
            }}
          />
          <br />
          <FormControlLabel control={<Checkbox />} label='Remember me' />
          <Button
            variant='contained'
            className='button'
            onClick={() => handleClick()}
          >
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
