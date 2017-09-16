import { NgModule } from '@angular/core';

// tslint:disable-next-line:max-line-length
import {MdButtonModule, MdIconModule, MdToolbarModule, MdTableModule, MdPaginatorModule, MdCardModule, MdGridListModule} from '@angular/material';


@NgModule({
  imports: [MdButtonModule, MdIconModule, MdToolbarModule, MdTableModule, MdPaginatorModule, MdCardModule, MdGridListModule],
  exports: [MdButtonModule, MdIconModule, MdToolbarModule, MdTableModule, MdPaginatorModule, MdCardModule, MdGridListModule],
})
export class MaterialComponentsModule { }
