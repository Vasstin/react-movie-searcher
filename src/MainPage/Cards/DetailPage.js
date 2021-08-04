import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import tmdbUrl from '../../utility/axios'
const useStyles = makeStyles({
  root: {
    maxWidth: 325,
    margin: 15
  },
  cardArea: {
    display: "flex",
    flexDirection: 'column',
  }
});



const DetailPage = props => {
  const classes = useStyles();

  return ( 
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          // alt={props.name}
          height="400"
          // image={'https://image.tmdb.org/t/p/w500/' + props.cardImage}
          // title={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {/* {props.name} */}
          </Typography>
          <Typography variant="body2" color="inherit" component="p">
            {/* {props.bio} */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
};

export default DetailPage;
