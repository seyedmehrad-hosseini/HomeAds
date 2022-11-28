import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteAdaApi } from '../../api/deleteAdaApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, Navigate, redirect } from "react-router-dom"
import LocationPicker from "react-leaflet-location-picker";
import { Grid, TextField, Typography } from '@mui/material';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import { Box } from '@mui/system';
import { editAdsAPI } from '../../api/editAdsApi';


export default function EditAdsDialog({info}) {
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState(
      {
      phoneNumber : '' ,
      address :'' ,
      desc:'' ,
      location:[]});
      React.useEffect(()=>{
        setForm({
          phoneNumber : info.phoneNumber ,
          address :info.address ,
          desc:info.desc ,
          location:info.location})
      },[info])
  const [handleRequiredState, setHandleRequiredState] = React.useState(false);
  
  React.useEffect(()=>{
    if(form.phoneNumber !='' &&form.address !='' &&form.desc !='' &&form.location !='' )
    setHandleRequiredState(true)
    else
    setHandleRequiredState(false)
  },[form])


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const editAds=(adsId ,form)=>{
    editAdsAPI(adsId,form,(succes,data)=>{
        if(succes){
          toast.success('تغییرات اعمال شد',{
          })
          

        }else{
          toast.error(data)
        }
      })
    handleClose()
  }

  const [loc, setLoc] = React.useState([]);

  const pointMode = {
    banner: false,
    control: {
      values: [form.location],
      onClick: point =>{
          setLoc([point])
          setForm({...form , location:point})
      },

    }
  };
console.log(form)

  return (
    <div>

        <Button
        onClick={handleClickOpen}
        startIcon={<EditLocationAltIcon />}
        variant="contained" 
        sx={{width:'100%',mt: 3, mb: 2 }}                                               
        >  ویرایش آگهی
        </Button>
      <Dialog
        

        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle

        id="alert-dialog-title">
          {"آیا از حذف آگهی مطمئنید؟"}
        </DialogTitle>
        <DialogContentText
        style={{width:'100%',padding:' 0 5%'}}
        id="alert-dialog-description">

        <Grid container>

          <Grid xs={12} sm={6}>  
            <LocationPicker
                mapStyle={ {height: '450px'} }
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "400px" }} />}
                pointMode={pointMode}  
                showInputs={false}
                startPort={{center :form.location,zoom : 15}}/>
          </Grid>
          <Grid xs={12} sm={6}>
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
                onClick={()=>editAds(info.id,form)}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                
              >               اعمال تغییرات
              </Button>
              :
              <Button
              disabled
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              
            >
                            اعمال تغییرات
              </Button>}
                  </Box>
                </Box>
              </Grid>
          </Grid>
        </Grid>
        </DialogContentText>

      </Dialog>
      <ToastContainer />

    </div>
  );
}