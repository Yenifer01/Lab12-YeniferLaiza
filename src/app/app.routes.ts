
import { Routes } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { HomeComponent } from './componentes/home/home.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { TourComponent } from './componentes/tour/tour.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { NotfoundComponent } from './componentes/notfound/notfound.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { CardComponent } from './componentes/card/card.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path:'card', component:CardComponent},
    {path:'', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'services', component:ServiciosComponent},
    {path:'tour',component:TourComponent},
    {path:'contact', component:ContactComponent},
    {path: 'perfil', component: PerfilComponent, canActivate:[authGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: NotfoundComponent }
];
