import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    homePage :{
        display: 'flex',
        alignItems : 'start',
        justifyContent: 'space-between',
        position:'relative',
        flexWrap : 'wrap',
        height:'calc(100vh - 64px)',
        flexDirection:'column'
    },
    advertise:{
      padding: '5% 5%',
      overflowY:'scroll'
    },

    paginationIcon: {
      display: 'flex',
      alignItems : 'center',
      justifyContent: 'center',
      width :'100%',
      position :'absolute',
      bottom :'0px',
      padding : '10px 0',
      backgroundColor : 'white'
    }

  });
  export default useStyles