/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { MediaAppComponent } from './media-app.component';

describe('App: MediaApp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MediaAppComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(MediaAppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(MediaAppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Media app works');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(MediaAppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Media app works');
  }));
});
