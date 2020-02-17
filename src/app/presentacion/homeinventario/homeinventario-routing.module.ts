import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeinventarioPage } from './homeinventario.page';

const routes: Routes = [
  {
    path: '',
    component: HomeinventarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeinventarioPageRoutingModule {}
