import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-18dmnhy4lqwt4j04.us.auth0.com"
    clientId="aYaO6LUvNYxjNBOeLlqDUbDxtG9Nql7s"
    redirectUri="http://localhost:3000" 
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);
