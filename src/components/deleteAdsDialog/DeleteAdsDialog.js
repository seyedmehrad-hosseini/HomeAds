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

export default function DeleteAdsDialog({adsId ,hanleUnmontCopm}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deleteAds=(adsId)=>{
    console.log(adsId)
    deleteAdaApi(adsId,(succes,data)=>{
        if(succes){
          toast.success('آگهی شما با موفقیت حذف شد',{
            // onClose: () => hanleUnmontCopm(false)
          })
          

        }else{
          toast.error(data)
        }
      })
    handleClose()
  }

  return (
    <div >

        <Button
            onClick={handleClickOpen}
            variant="outlined" 
            startIcon={<DeleteIcon />}
            sx={{width:'100%',mt: 3, mb: 2 }}
            
                                       
        >  حذف آگهی
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

        <DialogActions>
          <Button onClick={handleClose}>خیر</Button>
          <Button onClick={()=>deleteAds(adsId)} autoFocus>
            بله
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer />

    </div>
  );
}