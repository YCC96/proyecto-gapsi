
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

//components
import MenuSuperior from '../components/MenuSuperior';

//materia-ui
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

//service
import * as usuarioService from '../services/usuario.service'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
      fontSize: 14,
      flexGrow: 1,
    },
    pos: {
      marginBottom: 12,
    },
    paper: {
        maxWidth: '90%',
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
        textAlign: 'right'
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
      },
  }));


export default function Principal(){

    const classes = useStyles();
    let history = useHistory();
    const [ texto, setText] = useState('');
    const [ version, setVersion] = useState('');

    useEffect(() => {
        init();
      });

    function redirect() {
        history.push('/lista-proveedores');
    }

    function init(){
        usuarioService._consultaPersonas().then(data => {
            setText(data.nombre);
            setVersion(data.version)
        })
      }
    
    return (
        <div>
            <MenuSuperior />{init}
            <Grid container
             direction="row"
             justify="center"
             alignItems="center"
             style={{ minHeight: '80vh' }}>
                <Grid item xs></Grid>
                <Grid item xs={6}>
                    <Card className={classes.root} variant="outlined">
                        
                        <CardContent>
                        <Grid container>
                            <Grid item xs></Grid>
                            <Grid item xs={6}container
                                direction="column"
                                justify="center"
                                alignItems="center"
                                >
                                <Avatar alt="Remy Sharp" src="/statics/img/avatar.png" className={classes.large} />
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    {texto}
                                </Typography>
                            </Grid>
                            <Grid item xs></Grid>
                        </Grid>
                        </CardContent>
                        <CardActions
                            style={{display: 'flex', justifyContent: 'center'}}
                        >
                            <Button variant="contained" color="primary" onClick={redirect}>
                                Continuar
                            </Button>
                        </CardActions>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                                {version}
                            </Grid>
                        </Paper>
                    </Card>
                </Grid>
                <Grid item xs></Grid>
            </Grid>
        </div>
    )
}