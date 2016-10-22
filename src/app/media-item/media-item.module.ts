import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FavoriteDirective } from '../favorite.directive';
import { MediaItemComponent } from './media-item.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        FavoriteDirective,
        MediaItemComponent
    ]
})
export class MediaItemModule {

}
