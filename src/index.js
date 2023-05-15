import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const domain=process.env.REACT_APP_AUTH0_DOMAIN
const clientid=process.env.REACT_APP_AUTH0_CLIENT_ID

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain={domain}
    clientId={clientid}
    redirectUri={window.location.origin}
    useRefreshTokens
    
    cacheLocation="localstorage"
    >
      <BrowserRouter>
      <Routes>
      <Route path="/*" element={<App/>}/>
    </Routes>
    </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);


