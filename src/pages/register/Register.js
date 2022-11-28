import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
import {useFormik} from 'formik';
import { RejisterUserAPI } from '../../api/registerApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const theme = createTheme();

export default function Register() {

  const [form, setForm] = React.useState({firstName:'',lastName:'',email:'',password:''});
  const [handleRequiredState, setHandleRequiredState] = React.useState(false);
  
  
  const handleApi=(form)=>{
    RejisterUserAPI(form,(succes,data)=>{
      if(succes){
        localStorage.setItem("my-auth-token" , data.accessToken)
        window.location.reload()

      }else{
        toast.error(data)
      }
    })
  }

  React.useEffect(()=>{
    if(form.firstName !='' &&form.lastName !='' &&form.email !='' &&form.password !='' )
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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate 
                
                sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="نام"
                  autoFocus
                  value={form.firstName}
                  onChange={(e)=>setForm({...form , firstName : e.target.value})}

                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="نام خانوادگی"
                  name="lastName"
                  autoComplete="family-name"
                  value={form.lastName}
                  onChange={(e)=>setForm({...form , lastName : e.target.value})}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="آدرس ایمیل"
                  name="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e)=>setForm({...form , email : e.target.value})}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="رمز عبور"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={form.password}
                  onChange={(e)=>setForm({...form , password : e.target.value})}
                  
                />
              </Grid>

            </Grid>

            <Link to='/login'>
                <Typography 
                sx={{
                    fontSize :'0.7em'
                }}>
                    ورود
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