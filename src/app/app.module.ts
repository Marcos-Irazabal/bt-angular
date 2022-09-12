import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecetasComponent } from './recetas/recetas.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CarroServiceService } from './services/carro-service.service';
import { RecetaDetalleComponent } from './recetas/receta-detalle/receta-detalle.component';
import { FormCarritoTemplateComponent } from './Formularios/form-carrito-template/form-carrito-template.component';
import { FormularioReactivoComponent } from './Formularios/formulario-reactivo/formulario-reactivo.component';
import {HttpClientModule} from "@angular/common/http";
import { CarritoDetalleComponent } from './carrito/carrito-detalle/carrito-detalle.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

const appRouters:Routes=[
  {path: "carrito",component:CarritoComponent,
  children:[{path: "carritoDetalle",component:CarritoDetalleComponent}]
  },
  {path: "recetas",component:RecetasComponent, 
  children:[{path: "detalles",component:RecetaDetalleComponent}]
  },
  {path: "login",component:LoginComponent}
  //{path: "",component:AppComponent} esto me duplica el index
]


@NgModule({
  declarations: [
    AppComponent,
    RecetasComponent,
    CarritoComponent,
    RecetaDetalleComponent,
    FormCarritoTemplateComponent,
    FormularioReactivoComponent,
    CarritoDetalleComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRouters),
    HttpClientModule

  ],
  providers: [CarroServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
