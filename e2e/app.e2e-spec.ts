import { ChatNg2Page } from './app.po';

describe('chat-ng2 App', function() {
  let page: ChatNg2Page;

  beforeEach(() => {
    page = new ChatNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
