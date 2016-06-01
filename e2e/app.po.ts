export class Angular2EssentialsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular-2-essentials-app h1')).getText();
  }
}
