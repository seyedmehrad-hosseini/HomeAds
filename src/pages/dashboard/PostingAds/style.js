import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  PostingAds :{
        display: 'flex',
        justifyContent: 'center',
        flexWrap : 'wrap',
        width : '100%',
        height:'100%',
        height:'calc(100vh - 64px)',
        padding: '5% 5%',
        boxShadow :'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'
    },

    map: {

      width :'40%',

    },
    infoForm:{
      width :'60%',
      display: 'flex',
      // height :'450px',
      overflow:'hidden'

    }

  });
  export default useStyles