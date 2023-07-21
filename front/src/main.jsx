import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '#App.jsx'
import '#css/_map.scss'
//
//REDUX
import { Provider } from 'react-redux'
import { store } from '#/reducers/store'
import { postUser } from '#/actions/user_action'


if(localStorage.getItem("token") != null){
store.dispatch(postUser());    
}


ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <App />
</Provider>
)
