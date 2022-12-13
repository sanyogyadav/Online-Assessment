import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponentComponent } from './form-component/form-component.component';
import { OnlineTestComponent } from './online-test/online-test.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path:'form-component',component : FormComponentComponent },
  { path:'',redirectTo:'form-component',pathMatch:'full' },
  { path:'online-test',component : OnlineTestComponent },
  {path:'**',component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
