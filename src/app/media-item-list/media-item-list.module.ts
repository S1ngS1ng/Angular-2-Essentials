import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MediaItemService } from '../media-item.service';
import { MediaItemListComponent } from './media-item-list.component';
import { MediaItemComponent } from '../media-item/media-item.component';
import { FavoriteDirective } from '../favorite.directive';
import { CategoryListPipe } from '../category-list.pipe';

@NgModule({
    declarations: [
        MediaItemComponent,
        MediaItemListComponent,
        FavoriteDirective,
        CategoryListPipe
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        MediaItemService
    ],
    exports: [
        MediaItemListComponent
    ]
})
export class MediaItemListModule {
}
