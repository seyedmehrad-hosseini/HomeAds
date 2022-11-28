import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomeLoc from "../../../components/Map/Map";
import DeleteIcon from '@mui/icons-material/Delete';
import myStyles from "./style";
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Navigate, useParams} from 'react-router-dom';
import { adsInfoAPI } from "../../../api/adsInfoApi";
import DeleteAdsDialog from "../../../components/deleteAdsDialog/DeleteAdsDialog";
import LocationInfo from "../../../components/Map/Map";
import EditAdsDialog from "../../../components/editAdsDialog/editAdsDialog";
const theme = createTheme();

export default function AdvertiseInfo() {
  
  const params = useParams();
  const [info, setInfo] = React.useState({id:'',phoneNumber : '' , address :'' , desc:'' , location:null});
  const [unmountingComp, setUnmountingComp] = React.useState(true);

  const handleApi=(adsId)=>{
    adsInfoAPI(adsId,(succes,data)=>{
      if(succes){
        setInfo({
          id:data[0].id,
          phoneNumber : data[0].phoneNumber ,
          address :data[0].address ,
          desc:data[0].desc ,
          location:data[0].location
        })
      }else{
        toast.error(data)
      }
    })
  }


  React.useEffect(()=>{
    handleApi(params.adsId)
  },[])

  console.log(info)
  const classes = myStyles();
  if (!unmountingComp) {
    return <Navigate replace to="/" />;
  }else
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" >
        <CssBaseline />
        <div className={classes.PostingAds}>
            <div className={classes.map}>
             {info.location && <LocationInfo location={info.location}/>}
              {/* <HomeLoc/> */}
            </div>
            <div className={classes.infoForm}>
              <Grid
                item
                sx={{
                  height : '100%',
                  width:'100%'
                }}
                component={Paper}
                elevation={6}
                square
              >
                <Box
                  sx={{
                  //   my: 8,
                    // mx: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width:'100%',
                    padding : '5%'
                  }}
                >
                  <Box className={classes.titleBox} sx={{width:'100%'}}>

                    <Avatar sx={{
                      
                      m: 1,
                      bgcolor: "secondary.main"}}>
                      <MapsHomeWorkIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                      اطلاعات آگهی
                    </Typography>
                  </Box>
                  <Box
                    component="form"
                    noValidate
                    sx={{
                      mt: 1,
                      width:'100%',

                  }}
                  >
                    <Typography sx={{width:'100%'}} variant="h6" component="div"  color="text.secondary" gutterBottom>
                      شماره تلفن:
                    </Typography>
                    <Typography sx={{ fontSize: 14 }}  gutterBottom>
                    {info.phoneNumber}
                    </Typography>
                    <Typography variant="h6" component="div"  color="text.secondary" gutterBottom>
                      آدرس:
                    </Typography>
                    <Typography sx={{ fontSize: 14 }}  gutterBottom>
                    {info.address}
                    </Typography>
                    <Typography variant="h6" component="div"  color="text.secondary" gutterBottom>
                      توضیحات:
                    </Typography>
                    <Typography sx={{ fontSize: 14 }}  gutterBottom>
                    {info.desc}
                    </Typography>
                    <Box
                    sx={{
                      display:'flex',
                      alignItems:'center',
                      justifyContent:'space-around'
                    }}
                    >

                      <EditAdsDialog info={info} sx={{width:'50%',mt: 3, mb: 2 }}/>
                      <DeleteAdsDialog hanleUnmontCopm={setUnmountingComp} adsId={info.id} sx={{width:'50%',mt: 3, mb: 2 }}/>
                    </Box>
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
