import {
    MatButtonModule, MatCheckboxModule, MatCardModule, 
    MatFormFieldModule, MatSelectModule, MatOptionModule,
    MatInputModule, MatTableModule, MatChipsModule
} from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [
      MatButtonModule, 
      MatCheckboxModule, 
      MatCardModule, 
      MatFormFieldModule, 
      MatSelectModule,
      MatOptionModule,
      MatInputModule,
      MatTableModule,
      MatChipsModule
    ],
  exports: [MatButtonModule, MatChipsModule, MatTableModule, MatCheckboxModule, MatCardModule,MatFormFieldModule,MatSelectModule,MatOptionModule, MatInputModule],
})
export class MaterialModule { }