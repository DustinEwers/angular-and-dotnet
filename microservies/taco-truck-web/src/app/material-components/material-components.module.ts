import { NgModule } from '@angular/core';

import {MdButtonModule, MdIconModule, MdToolbarModule, MdTableModule, MdPaginatorModule} from '@angular/material';


@NgModule({
  imports: [MdButtonModule, MdIconModule, MdToolbarModule, MdTableModule, MdPaginatorModule],
  exports: [MdButtonModule, MdIconModule, MdToolbarModule, MdTableModule, MdPaginatorModule],
})
export class MaterialComponentsModule { }
