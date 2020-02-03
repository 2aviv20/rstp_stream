
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from '../../services/auth.service'

const PrivateRoute = ({component: Component, ...rest}) => {
    const auth = new Auth();
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            auth.isLoggedIn() ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;