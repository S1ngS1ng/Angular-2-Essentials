import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2EssentialsAppComponent } from '../app/angular-2-essentials.component';

beforeEachProviders(() => [Angular2EssentialsAppComponent]);

describe('App: Angular2Essentials', () => {
  it('should create the app',
      inject([Angular2EssentialsAppComponent], (app: Angular2EssentialsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular-2-essentials works!\'',
      inject([Angular2EssentialsAppComponent], (app: Angular2EssentialsAppComponent) => {
    expect(app.title).toEqual('angular-2-essentials works!');
  }));
});
