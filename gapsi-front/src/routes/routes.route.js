import { Route, Switch } from 'react-router-dom';

//pages
import Principal from '../pages/Principal';
import ListaProveedores from '../pages/proveedores/ListaProveedores';

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Principal}/>
            <Route exact path="/lista-proveedores" component={ListaProveedores}/>
        </Switch>
    )
}

export default Routes;