import { NgModule } from '@angular/core';

import {MdButtonModule, MdIconModule, MdToolbarModule} from '@angular/material';


@NgModule({
  imports: [MdButtonModule, MdIconModule, MdToolbarModule],
  exports: [MdButtonModule, MdIconModule, MdToolbarModule],
})
export class MaterialComponentsModule { }
