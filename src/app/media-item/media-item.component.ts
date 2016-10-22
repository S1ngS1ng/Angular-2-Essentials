import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'media-item',
    templateUrl: './media-item.component.html',
    styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
    @Input('mediaItemToWatch') mediaItem;
    @Output('deleted') delete = new EventEmitter();

    onDelete() {
        this.delete.emit(this.mediaItem);
    }
}
