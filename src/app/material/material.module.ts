import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
const Material = [
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatSidenavModule,
  MatToolbarModule
];

@NgModule({
  
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
