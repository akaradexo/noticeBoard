import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import mern from './images/mern_logo.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

function App() {
  const classes = useStyles();
  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} varient='h2' align='center'>MERN</Typography>
        <img className={classes.image} src={mern} alt='icon' height='60' />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
