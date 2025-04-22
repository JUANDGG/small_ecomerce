import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductContainerComponent } from './components/product/product-container/product-container.component';
import { RequestErrorComponent } from './components/request-error/request-error.component';

export const routes: Routes = [
    {
        path: 'home' 
        ,component :
        HomeComponent ,
        children : [
        
        { 
            path: 'products', 
            component: ProductContainerComponent,        
            children: [
              //{ path: '', redirectTo: 'default-category', pathMatch: 'full' },
              //{ path: 'default-category', component: CategoryComponent }
            ]
        },
          
        
        {
            path : 'auth' ,
            component :AuthComponent ,
            children : [
            {path : 'login' ,component :LoginComponent} ,
            {path : 'register' ,component :RegisterComponent} 
            ]
        },

        {
            path:'cart' , component :ShoppingCartComponent
        }

        ]
    } ,

    {
        path: '', 
        redirectTo: 'home/products',
        pathMatch: 'full' 
    },

    {
        path:'**',
        component:RequestErrorComponent 
    }


];
