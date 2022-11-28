import { Grid, Pagination, PaginationItem } from "@mui/material";
import * as React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import BasicCard from "../../../components/advertiseCard/advertiseCard";
import myStyles from './style'
import { allAdvertiseAPI } from "../../../api/allAdsApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllAdvertise = () => {
    const classes = myStyles()
  const [advertise, setAdvertise] = React.useState();

  const getAllAds=(pageNum)=>{
    allAdvertiseAPI(pageNum,(succes,data)=>{
      if(succes){
        setAdvertise(data)
      }else{
        toast.error(data)
      }
    })
  }
    React.useEffect(()=>{
      getAllAds(1)
    },[])


  return (
    <div className={classes.homePage}>
      <Grid className={classes.advertise} container spacing={3}>
        {advertise&&advertise.map((item)=>
        <Grid item xs={12} sm={6} md={4}>
          <BasicCard address={item.address} cardId={item.id}/>
        </Grid> )}
        
      </Grid>
      <ToastContainer />

      <div className={classes.paginationIcon} >
          <Pagination
            count={10}
            variant="outlined"
            color="primary"
            onChange={(e,v)=>{
              console.log(v)
              getAllAds(v)
            }}
            renderItem={(item) => (
              <PaginationItem
                components={{
                  previous: NavigateNextIcon,
                  next: NavigateBeforeIcon,
                }}
                {...item}
              />
            )}
          />
        </div>
    </div>
  );
};

export default AllAdvertise;
