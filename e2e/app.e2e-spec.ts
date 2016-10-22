import { MigratingProjectPage } from './app.po';

describe('migrating-project App', function() {
  let page: MigratingProjectPage;

  beforeEach(() => {
    page = new MigratingProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
