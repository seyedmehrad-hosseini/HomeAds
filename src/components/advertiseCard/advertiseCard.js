import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({address ,cardId}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h6" component="div"  color="text.secondary" gutterBottom>
          آدرس:
        </Typography>
        <Typography sx={{ fontSize: 14 }}  gutterBottom>
        {address}
        </Typography>
        <Typography >
        </Typography>

      </CardContent>
      <CardActions>
        <Link to={`/advertis/${cardId}`} >
          <Button size="small">اطلاعات بیشتر</Button>
        </Link>
      </CardActions>
    </Card>
  );
}