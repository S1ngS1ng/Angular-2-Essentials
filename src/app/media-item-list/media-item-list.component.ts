import { Component } from '@angular/core';
import { MediaItemService } from '../media-item.service';

@Component({
    selector: 'media-item-list',
    templateUrl: './media-item-list.component.html',
    styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent {
    mediaItems;

    constructor(private mediaItemService: MediaItemService) {
    }

    ngOnInit() {
        this.mediaItems = this.mediaItemService.get();
    }

    onMediaItemDeleted(mediaItem) {
        this.mediaItemService.delete(mediaItem);
    }
}
