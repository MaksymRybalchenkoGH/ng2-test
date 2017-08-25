import { BuddaNg2TestPage } from './app.po';

describe('budda-ng2-test App', function() {
  let page: BuddaNg2TestPage;

  beforeEach(() => {
    page = new BuddaNg2TestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
