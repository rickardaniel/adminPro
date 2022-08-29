import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages-routing.module';


const routes: Routes = [
// path:'/dashboard' PagesRouting
// path:'/login' AuthRouting
  {
    path:'', pathMatch:'full', redirectTo: '/dashboard'
  },
  {
    path:'**', component: NopagefoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            PagesRoutingModule,
            AuthRoutingModule
           ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
