import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { GoogleOAuthProvider } from '@react-oauth/google';
// import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';

// const optionalSettings = {"popupWidget":true,"automaticChatOpenOnNavigation":true,"widgetSettings": { "alignment": "right" }}
// Kommunicate.init('AIzaSyBG3_SOhcCCa5Ej0DknXXFiTRJ6yFtoBwg', {...optionalSettings})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </GoogleOAuthProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
