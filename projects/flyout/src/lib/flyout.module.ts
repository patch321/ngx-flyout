import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlyoutComponent } from './flyout.component';

@NgModule({
  imports: [
	CommonModule
  ],
  declarations: [FlyoutComponent],
  exports: [FlyoutComponent]
})
export class FlyoutModule { }
