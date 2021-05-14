import React from 'react';
import { withStyles } from '@material-ui/core/styles';

//services
import * as proveedorService from '../../services/proveedores.service';

//components
import MenuSuperior from '../../components/MenuSuperior';

//material-ui
import Container from '@material-ui/core/Container';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import Input from '@material-ui/core/Input';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);


export default class ListaProveedores extends React.Component {

    constructor(props){
        super(props);
        this.consultaProveedores();
    }

    state = {
        redirect: false,
        rows: [],
        open: false,
        body: '',
        formulario: {
            nombre: '',
            razonSocial: '',
            direccion: ""
        }
    }

    consultaProveedores(){
        proveedorService._consultaProvedores().then(data => {
            this.setState({
                ...this.state,
                rows: data.response
            })
            this.rows = data.response;
        })
    }

    eliminar(id){
        console.log('*_* eliminar', id);
        proveedorService._eliminarProveedor(id).then(
            respuesta => {
               this.consultaProveedores();
            }
        )
    }

    agregar(){
        this.setState({
            redirect: true
        })
    }

    handleInputChange = (event) => {
        this.setState({
            formulario: {
                ...this.state.formulario,
                [event.target.name]: event.target.value
            }
        })
    }

    cargarDatos = (event) => {
        event.preventDefault()
        proveedorService._agregarProvedor(this.state.formulario).then(
            resp => {
                if (resp.cve_Error === 0) {
                    this.consultaProveedores();
                }else{
                    console.log('error al agregar: ', resp.cve_Mensaje);
                }
            }
        )
    }

    render(){
        return (
            <div>
                <MenuSuperior />
                <Container>
                
                <Grid
                    container>
                    <h1 style={{width: '100%'}}>Administrador de proveedores</h1>
                    <form onSubmit={this.cargarDatos}>
                        <Input placeholder="Nombre" inputProps={{ 'aria-label': 'description' }} onChange={this.handleInputChange} name="nombre" />
                        <Input placeholder="Razón social" inputProps={{ 'aria-label': 'description' }} onChange={this.handleInputChange} name="razonSocial" />
                        <Input placeholder="Dirección" inputProps={{ 'aria-label': 'description' }} onChange={this.handleInputChange} name="direccion" />
                        <Button type="submit" variant="contained" color="primary">
                            Agregar
                        </Button>
                    </form>
                    <TableContainer component={Paper}>
                        <Table aria-label="customized table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>Nombre</StyledTableCell>
                                <StyledTableCell align="right">Razon Social</StyledTableCell>
                                <StyledTableCell align="right">Dirección</StyledTableCell>
                                <StyledTableCell align="right">Acciones</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {this.state.rows.map((row) => (
                                <StyledTableRow key={row.id}>
                                <StyledTableCell component="th" scope="row">
                                    {row.nombre}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.razonSocial}</StyledTableCell>
                                <StyledTableCell align="right">{row.direccion}</StyledTableCell>
                                <StyledTableCell align="right"><DeleteIcon onClick={(e) => this.eliminar(row.id, e)} /></StyledTableCell>
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                </Container>
              
            </div>
        )
    }
}