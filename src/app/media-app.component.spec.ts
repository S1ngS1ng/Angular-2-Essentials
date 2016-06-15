import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MediaAppComponent } from '../app/media-app.component';

beforeEachProviders(() => [MediaAppComponent]);

describe('App: Angular2Essentials', () => {
  it('should create the app',
      inject([MediaAppComponent], (app: MediaAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular-2-essentials works!\'',
      inject([MediaAppComponent], (app: MediaAppComponent) => {
    expect(app.title).toEqual('Media app works!');
  }));
});
