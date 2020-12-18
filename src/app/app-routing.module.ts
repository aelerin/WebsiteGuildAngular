import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ConnectComponent } from './pages/connect/connect.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RosterComponent } from './pages/roster/roster.component';
import { HurlaileComponent } from './pages/strat/1-hurlaile/hurlaile.component';
import { DenathriusComponent } from './pages/strat/10-denathrius/denathrius.component';
import { AltimorComponent } from './pages/strat/2-altimor/altimor.component';
import { RoiSoleilComponent } from './pages/strat/3-roi-soleil/roi-soleil.component';
import { XyMoxComponent } from './pages/strat/4-xy_mox/xy_mox.component';
import { DestructeurComponent } from './pages/strat/5-destructeur/destructeur.component';
import { InervaComponent } from './pages/strat/6-inerva/inerva.component';
import { ConseilDeSangComponent } from './pages/strat/7-conseil-de-sang/conseil-de-sang.component';
import { FangepoingComponent } from './pages/strat/8-fangepoing/fangepoing.component';
import { GenerauxLegionDePierreComponent } from './pages/strat/9-generaux-legion-de-pierre/generaux-legion-de-pierre.component';
import { StratComponent } from './pages/strat/strat.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "strat", component: StratComponent,
    children: [
      { path: "Hurlaile", component: HurlaileComponent },
      { path: "Altimor", component: AltimorComponent },
      { path: "Roi_soleil", component: RoiSoleilComponent },
      { path: "Xy_mox", component: XyMoxComponent },
      { path: "Destructeur", component: DestructeurComponent },
      { path: "Inerva", component: InervaComponent },
      { path: "Conseil_de_sang", component: ConseilDeSangComponent },
      { path: "Fangepoing", component: FangepoingComponent },
      { path: "Generaux_de_pierre", component: GenerauxLegionDePierreComponent },
      { path: "Denathrius", component: DenathriusComponent },
    ]
  },
  { path: "roster", component: RosterComponent },
  { path: "connect", component: ConnectComponent },
  { path: 'profile', component: ProfileComponent },
  { path: "**", component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
