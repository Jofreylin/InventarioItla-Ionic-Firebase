import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./presentacion/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'homeinventario',
    loadChildren: () => import('./presentacion/homeinventario/homeinventario.module').then( m => m.HomeinventarioPageModule)
  },
  {
    path: 'lista-inventario',
    loadChildren: () => import('./presentacion/lista-inventario/lista-inventario.module').then( m => m.ListaInventarioPageModule)
  },
  {
    path: 'agregar-inventario',
    loadChildren: () => import('./presentacion/agregar-inventario/agregar-inventario.module').then( m => m.AgregarInventarioPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
