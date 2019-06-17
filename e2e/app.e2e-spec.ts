import { ExploreImaginationPage } from './app.po';

describe('explore-imagination App', function() {
  let page: ExploreImaginationPage;

  beforeEach(() => {
    page = new ExploreImaginationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
