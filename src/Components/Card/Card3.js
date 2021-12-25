import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Card3 = (props) => {
    return (
    <Card sx={{ maxWidth: 345 }} Style = {props.imageStyle} elevation="4">
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={props.imgsrc}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ₹ {props.price} for one
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Card3
