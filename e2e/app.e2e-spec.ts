import { MovieprojectPage } from './app.po';

describe('movieproject App', function() {
  let page: MovieprojectPage;

  beforeEach(() => {
    page = new MovieprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
