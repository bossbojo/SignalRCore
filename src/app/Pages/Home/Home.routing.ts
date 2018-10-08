import { HomeComponent } from './Home.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'',component:HomeComponent },
];

export const HomeRoutes = RouterModule.forChild(routes);
