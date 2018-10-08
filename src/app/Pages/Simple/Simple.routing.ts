import { SimpleComponent } from './Simple.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'',component:SimpleComponent },
];

export const SimpleRoutes = RouterModule.forChild(routes);
