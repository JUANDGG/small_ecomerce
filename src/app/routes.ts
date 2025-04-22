import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

export const routes: Routes = [
    {path: 'home/products' ,component :HomeComponent ,children : [
        {path : 'auth' ,component :AuthComponent , children : [
            {path : 'login' ,component :LoginComponent} ,
            {path : 'register' ,component :RegisterComponent} 
        ]},

        
        { path: 'category', redirectTo: 'category', pathMatch: 'full' },
        

        {path:'cart' , component :ShoppingCartComponent}

    ]} ,
    {path : '' ,redirectTo : 'home/products' , pathMatch:'full'}
];
