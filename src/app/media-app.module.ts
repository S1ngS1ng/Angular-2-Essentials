import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MediaItemFormModule } from './media-item-form/media-item-form.module';
import { MediaItemListModule } from './media-item-list/media-item-list.module';

import { MediaAppComponent } from './media-app.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';

@NgModule({
    declarations: [
        MediaAppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        MediaItemFormModule,
        MediaItemListModule
    ],
    providers: [],
    bootstrap: [MediaAppComponent]
})
export class MediaAppModule {
}
