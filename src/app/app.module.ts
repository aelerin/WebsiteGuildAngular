import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { RosterComponent } from './pages/roster/roster.component';
import { StratComponent } from './pages/strat/strat.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ConnectComponent } from './pages/connect/connect.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { HurlaileComponent } from './pages/strat/1-hurlaile/hurlaile.component';
import { AltimorComponent } from './pages/strat/2-altimor/altimor.component';
import { RoiSoleilComponent } from './pages/strat/3-roi-soleil/roi-soleil.component';
import { DestructeurComponent } from './pages/strat/5-destructeur/destructeur.component';
import { InervaComponent } from './pages/strat/6-inerva/inerva.component';
import { ConseilDeSangComponent } from './pages/strat/7-conseil-de-sang/conseil-de-sang.component';
import { GenerauxLegionDePierreComponent } from './pages/strat/9-generaux-legion-de-pierre/generaux-legion-de-pierre.component';
import { DenathriusComponent } from './pages/strat/10-denathrius/denathrius.component';
import { XyMoxComponent } from './pages/strat/4-xy_mox/xy_mox.component';
import { FangepoingComponent } from './pages/strat/8-fangepoing/fangepoing.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'

import { InputTextModule } from 'primeng/inputtext';
import { PrimeIcons } from 'primeng/api';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RosterComponent,
    StratComponent,
    ProfileComponent,
    ConnectComponent,
    NotFoundComponent,
    HurlaileComponent,
    AltimorComponent,
    RoiSoleilComponent,
    DestructeurComponent,
    InervaComponent,
    ConseilDeSangComponent,
    GenerauxLegionDePierreComponent,
    DenathriusComponent,
    XyMoxComponent,
    FangepoingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutoCompleteModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    BreadcrumbModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,


  ],
  providers: [],
  bootstrap: [AppComponent,PrimeIcons],

})
export class AppModule { }
