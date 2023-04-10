import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App';
//STEP 20
import { Provider } from 'react-redux'; 
import store from './redux/store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//STEP 21
<Provider store={store}>
<App />

</Provider>
);


//"App" inke bich me dalne ka matlab redux sara data "<App />" access kr sakta hai.
// Abhi sara data redux se aa rha hai.