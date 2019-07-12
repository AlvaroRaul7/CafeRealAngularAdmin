import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { IngresarItemComponent } from './ingresar-item/ingresar-item.component';
import { ModificarItemComponent } from './modificar-item/modificar-item.component';
import { PanelCentralComponent } from './panel-central/panel-central.component';
import { EliminarItemComponent } from './eliminar-item/eliminar-item.component';

const routes: Routes= [
  {path:'ingresar-item', component: IngresarItemComponent},
  {path:'modificar-item', component: ModificarItemComponent},
  {path:'eliminar-item', component: EliminarItemComponent},
  {path: 'panel-central', component: PanelCentralComponent }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [PanelCentralComponent, EliminarItemComponent]
})

export class AdminModule { }
export const routesComponent=[IngresarItemComponent, ModificarItemComponent]