import { NgModule } from '@angular/core';
import { HeaderMenuComponent } from './header-menu/header-menu';
import { SingleIncidentComponent } from './single-incident/single-incident';
import { CustomLoaderComponent } from './custom-loader/custom-loader';
@NgModule({
	declarations: [HeaderMenuComponent,
    SingleIncidentComponent,
    CustomLoaderComponent],
	imports: [],
	exports: [HeaderMenuComponent,
    SingleIncidentComponent,
    CustomLoaderComponent
]
})
export class ComponentsModule {}
