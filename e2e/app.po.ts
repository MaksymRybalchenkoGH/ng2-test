import { browser, element, by } from 'protractor';

export class BuddaNg2TestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
