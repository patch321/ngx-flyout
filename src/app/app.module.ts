import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlyoutModule } from './../../projects/flyout/src/lib/flyout.module';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		CommonModule,
		FlyoutModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
