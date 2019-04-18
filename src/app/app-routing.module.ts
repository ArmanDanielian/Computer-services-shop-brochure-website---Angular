import {NgModule} from '@angular/core';
import {HomePageComponent} from './home-page/home-page.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {RouterModule, Routes} from '@angular/router';
import {ServicePageComponent} from './service-page/service-page.component';
import {TopArajarkComponent} from './top-arajark/top-arajark.component';
import {PartnersComponent} from './partners/partners.component';

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'services', component: ServicePageComponent},
  {path: 'toparajark', component: TopArajarkComponent},
  {path: 'partners', component: PartnersComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

