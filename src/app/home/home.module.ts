import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatPagesModule} from '@angular-material-extensions/pages';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {DisqusModule} from 'ngx-disqus';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    MatPagesModule.forRoot(),
    DisqusModule.forRoot('@angular-material-extensions/pages'),
    HomeRoutingModule,
    MatCardModule,
    MatTabsModule,
    MatSnackBarModule
  ],
  declarations: [HomeComponent],
})
export class HomeModule {


  constructor() {
  }
}
