import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
//dev--0cuuh5g.us.auth0.com
//e0lrwkBqUsfxRWUVOV4QjBUzzsqeC21a
ReactDOM.render(
    <Auth0Provider
        domain="dev--0cuuh5g.us.auth0.com"
        clientId="e0lrwkBqUsfxRWUVOV4QjBUzzsqeC21a"
        redirectUri={window.location.origin}
        cacheLocation = 'localstorage'
    >
        <UserProvider>
            <ProductsProvider>
                <FilterProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </FilterProvider>
            </ProductsProvider>
        </UserProvider>
    </Auth0Provider>
    , document.getElementById('root')
)
