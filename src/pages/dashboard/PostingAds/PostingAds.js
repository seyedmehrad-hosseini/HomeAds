import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MyPicker from "../../../components/picker/Picker";
import myStyles from "./style";
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { newAdsAPI } from "../../../api/newAdsApi";

const theme = createTheme();

export default function PostingAds() {

  const [form, setForm] = React.useState({phoneNumber : '' , address :'' , desc:'' , location:''});
  const [handleRequiredState, setHandleRequiredState] = React.useState(false);

  const handleLocationValue=(location)=>{
    setForm({...form , location})

  }

  const handleApi=(form)=>{
    newAdsAPI(form,(succes,data)=>{
      if(succes){
        toast.success('آگهی شما با موفقیت ثبت شد')
        setForm({phoneNumber : '' , address :'' , desc:'' , location:''})
      }else{
        toast.error(data)
      }
    })
  }


  React.useEffect(()=>{
    if(form.phoneNumber !='' &&form.address !='' &&form.desc !='' &&form.location !='' )
    setHandleRequiredState(true)
    else
    setHandleRequiredState(false)
  },[form])

  const classes = myStyles();
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" >
        <CssBaseline />
        <div className={classes.PostingAds}>
            <div className={classes.map}>
              <MyPicker handleLocationValue={handleLocationValue} selectLoc={[]} />
            </div>
            <div className={classes.infoForm}>
              <Grid
                item
                sx={{
                  height : '100%'
                }}
                component={Paper}
                elevation={6}
                square
              >
                <Box
                  sx={{
                  //   my: 8,
                    mx: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <AddHomeWorkIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    ثبت آگهی
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
                      id="number"
                      label="شماره‌ی تلفن"
                      name="number"
                      autoComplete="number"
                      autoFocus
                      value={form.phoneNumber}
                      onChange={(e)=>setForm({...form , phoneNumber : e.target.value})}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="address"
                      label="آدرس"
                      type="address"
                      id="address"
                      autoComplete="address"
                      value={form.address}
                      onChange={(e)=>setForm({...form , address : e.target.value})}
                    />
                      <TextField
                          sx={{
                              width:'100%'
                          }}
                          id="outlined-multiline-static"
                          label="توضیحات"
                          multiline
                          rows={4}
                          value={form.desc}
                          onChange={(e)=>setForm({...form , desc : e.target.value})}
                      />
              {handleRequiredState ?
              <Button
                
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={()=>handleApi(form)}
                
              >               ثبت آگهی
              </Button>
              :
              <Button
              
              disabled
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              
            >
                            ثبت آگهی
              </Button>}
                  </Box>
                </Box>
              </Grid>
            </div>
        </div>
      </Grid>
      <ToastContainer />
    </ThemeProvider>
  );
}
