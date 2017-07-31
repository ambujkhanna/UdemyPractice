import { UdemyPracticePage } from './app.po';

describe('udemy-practice App', function() {
  let page: UdemyPracticePage;

  beforeEach(() => {
    page = new UdemyPracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
