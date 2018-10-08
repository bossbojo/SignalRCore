import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { SimpleRoutes } from './Simple.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleComponent } from './Simple.component';

@NgModule({
  imports: [
    CommonModule,
    SimpleRoutes,
    NgxJsonViewerModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [SimpleComponent]
})
export class SimpleModule { }
