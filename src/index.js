import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/css/global.css'
import './pages/About/css/aboutpage.css'
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from './store'
import {router} from "./router";
import {RouterProvider} from "react-router";
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
       <RouterProvider router={router} />
        <ToastContainer
            position="top-right"
            autoClose={1200}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    </Provider>
);

reportWebVitals();

