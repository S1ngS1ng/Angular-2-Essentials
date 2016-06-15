import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {MediaAppComponent} from './app/media-app.component';
import {environment} from './app/environment';
import {MediaItemService} from './app/media-item.service';
import {provide} from '@angular/core';
import {LOOKUP_LISTS, lookupLists} from './app/providers';
import {HTTP_PROVIDERS, XHRBackend} from '@angular/http';
import {MockXHRBackend} from './app/mock-xhr-backend';
import {ROUTER_PROVIDERS} from '@angular/router';

if (environment.production) {
    enableProdMode();
}

bootstrap(MediaAppComponent, [
    MediaItemService,
    provide(LOOKUP_LISTS, { useValue: lookupLists }),
    HTTP_PROVIDERS,
    provide(XHRBackend, { useClass: MockXHRBackend }),
    ROUTER_PROVIDERS
]);

// var lookupLists = {
//     mediums: ['Movies', 'Series']
// };
