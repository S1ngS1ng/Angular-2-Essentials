import {Component} from '@angular/core';
import {MediaItemListComponent} from './media-item-list.component';
import {MediaItemFormComponent} from './media-item-form.component';
// import {RouteConfig} from '@angular/router';

// @RouteConfig([
//     {path:'/:medium', component: MediaItemListComponent, name: 'List'},
//     {path: '/add', component: MediaItemFormComponent, name: 'AddMediaItem'}
// ])
@Component({
    moduleId: module.id,
    selector: 'media-tracker-app',
    directives: [MediaItemListComponent, MediaItemFormComponent],
    templateUrl: 'media-app.component.html',
    styleUrls: ['media-app.component.css']
})
export class MediaAppComponent {
    title:'Media app works';
}
