
//material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
      fontSize: 14,
      flexGrow: 1,
    },
  }));

function MenuSuperior() {
    const classes = useStyles();

    return(
        <AppBar position="static">
            <Toolbar>
            
            <Typography variant="h6" className={classes.title}>
                e-Commerce GAPSI
            </Typography>
            <IconButton edge="start" color="inherit" aria-label="menu">
                <MoreVertIcon  />
            </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default MenuSuperior;