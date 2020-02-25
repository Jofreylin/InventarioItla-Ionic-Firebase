import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './datos/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./presentacion/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./presentacion/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'homeinventario',
    loadChildren: () => import('./presentacion/homeinventario/homeinventario.module').then( m => m.HomeinventarioPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'lista-inventario',
    loadChildren: () => import('./presentacion/lista-inventario/lista-inventario.module').then( m => m.ListaInventarioPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'agregar-inventario',
    loadChildren: () => import('./presentacion/agregar-inventario/agregar-inventario.module').then( m => m.AgregarInventarioPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'modificar-inventario/:id',
    loadChildren: () => import('./presentacion/modificar-inventario/modificar-inventario.module').then( m => m.ModificarInventarioPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'modificar-inventario',
    loadChildren: () => import('./presentacion/modificar-inventario/modificar-inventario.module').then( m => m.ModificarInventarioPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./presentacion/register/register.module').then( m => m.RegisterPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
