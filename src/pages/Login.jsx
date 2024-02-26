import { Button, Stack, TextField } from "@mui/material"
import '../../src/App.css'
import Header from "./Header"
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserInformation } from "../context/AuthContext";
import LoginHeader from "./LoginHeader";

const Login = () => {
    const users = useContext(UserInformation)
    const [login, setLogin] = useState({
        name: "", password: "",
      });
      
  const navigate = useNavigate();
  const { error, dispatch } = useContext(UserInformation);
  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }
  const handleClick = async () => {
    if (!login.name || !login.password) {
        alert('Enter User Name And Password')
      } else {
        try {
          // if (validator.isEmail(login.email)) {
            const result = await axios.post('/auth/login', login);
            if (result) {
                console.log(result);
               dispatch({ type: "LOGIN_SUCCESS", payload: result.data.details });
                result.data.details ? navigate("/dashboard") : alert("Invalid Credentials");
            }
          }
        //   else {
        //     alert('Please Check Email ID...')
        //   }
        catch (error) {
          dispatch({
            type: "LOGIN_FAILURE",
            // payload: error.response.data.message,
          });
        }
      }
  }
    return (
        <>
            <div style={{ position: 'relative', width: '100vw' ,  boxShadow: 'black 3px 5px 23px -5px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '-20px' }}>
               <LoginHeader/>
                </div></div>
            <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: "#177bad" }}>
                <h4 style={{ fontSize: '32px', color: '#e3f2fd', marginTop: '-180px', gap: 20 }}>MIS Report Generation</h4>
               
                   
                    <div style={{ backgroundColor: '#ffffff', padding: '50px', border: '1px solid grey', borderRadius: '20px', boxShadow: 'black 5px 7px 25px -3px' }} >
                        <Stack spacing={3} direction={"column"} pb={2} >
                            <h3 style={{ fontSize: '22px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#177bad' }}>Login</h3>
                            <p > Please Enter User Name and Password for Login</p>
                        </Stack>
                        <Stack spacing={2} direction={"column"}  >
                            <TextField name="name" style={{ color: '#177bad' }} label="User Name" variant="outlined" onChange={handleChange} fullWidth />
                            <TextField name="password" style={{ color: '#177bad' }} label="Password" variant="outlined" onChange={handleChange}  type="password" fullWidth />
                           
                            <Button variant="contained" sx={{ height: '54px', backgroundColor: '#177bad' }} onClick={handleClick} > LOGIN </Button>
                        </Stack><br />
                        {/* <h5 >Need To Create Account ?   <Link to='/register'>Register Here!!</Link></h5>        */}
                    </div>
                </div>
            
        </>
    )
}
export default Login