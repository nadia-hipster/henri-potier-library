import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SearchComponent} from './search/components/search.component';
import {SearchPipe} from './search/pipes/search.pipe';


@NgModule({
    declarations: [SearchPipe, SearchComponent],
    imports: [
        CommonModule,
        FormsModule,
        FontAwesomeModule
    ],
    exports: [
        SearchPipe,
        SearchComponent
    ]
})
export class SharedModule {
}
