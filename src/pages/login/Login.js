import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { loginUserAPI } from "../../api/loginApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme();

export default function Login() {
  const [form, setForm] = React.useState({email:'',password:''});
  const [handleRequiredState, setHandleRequiredState] = React.useState(false);
  
  
  const handleApi=(form)=>{
    loginUserAPI(form,(succes,data)=>{
      if(succes){
        localStorage.setItem("my-auth-token" , data.accessToken)
        window.location.reload()
      }else{
        toast.error(data)
      }
    })
  }

  React.useEffect(()=>{
    if(form.email !='' &&form.password !='' )
    setHandleRequiredState(true)
    else
    setHandleRequiredState(false)
  },[form])


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login in
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="نام‌ کاربری"
              name="email"
              autoComplete="email"
              autoFocus
              value={form.email}
              onChange={(e)=>setForm({...form , email : e.target.value})}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="رمز عبور"
              type="password"
              id="password"
              autoComplete="current-password"
              value={form.password}
              onChange={(e)=>setForm({...form , password : e.target.value})}
            />
            <Link to='/register'>
                <Typography 
                sx={{
                    fontSize :'0.7em'
                }}>
                    ثبت‌نام
                </Typography>
            </Link>

            {handleRequiredState ?
            <Button
              
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>handleApi(form)}
              
            >               ثبت نام
            </Button>
            :
            <Button
            
            disabled
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            
          >
                          ثبت نام
            </Button>}
          </Box>
        </Box>
      </Container>
      <ToastContainer />

    </ThemeProvider>
  );
}
