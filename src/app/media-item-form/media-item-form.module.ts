import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { LOOKUP_LISTS, lookupLists } from '../providers';
import { MediaItemService } from "../media-item.service";
import { MediaItemFormComponent } from './media-item-form.component';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule
    ],
    declarations: [
        MediaItemFormComponent
    ],
    providers: [
        { provide: LOOKUP_LISTS, useValue: lookupLists},
        MediaItemService
    ],
    exports: [MediaItemFormComponent]
})
export class MediaItemFormModule {
}
