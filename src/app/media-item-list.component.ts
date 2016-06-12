import {Component} from '@angular/core';
import {MediaItemComponent} from './media-item.component';
import {CategoryListPipe} from './category-list.pipe';
import {MediaItemService} from './media-item.service';

@Component({
    moduleId: module.id,
    selector: 'media-item-list',
    directives: [MediaItemComponent],
    pipes: [CategoryListPipe],
    templateUrl: 'media-item-list.component.html',
    styleUrls: ['media-item-list.component.css']
})
export class MediaItemListComponent {
    mediaItems;
    constructor (private mediaItemService: MediaItemService) {}

    ngOnInit() {
        this.mediaItems = this.mediaItemService.get();
    }
    onMediaItemDeleted(mediaItem) {
        this.mediaItemService.delete(mediaItem);
    }
}
