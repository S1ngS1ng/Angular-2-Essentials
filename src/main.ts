import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

import { MediaAppModule } from './app/media-app.module';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(MediaAppModule);

// var lookupLists = {
//     mediums: ['Movies', 'Series']
// };
