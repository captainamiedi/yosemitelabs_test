import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import Home from '../Pages/Home';
import PokemonDetails from '../Pages/PokemonDetails';
import MyPokemon from '../Pages/MyPokemon';

export default function Routes() {
    return (
        <Router>
          <Switch>
              <Route path='/' exact>
                  <Home />
              </Route>
              <Route exact path='/details/:name' children={<PokemonDetails />} />
                  {/* <PokemonDetails />
              </Route> */}
              <Route path='/my_pokemon' exact>
                  <MyPokemon />
              </Route>
            </Switch>  
        </Router>
    )
}
