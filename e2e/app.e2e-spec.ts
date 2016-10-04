import { PokemonsPage } from './app.po';

describe('pokemons App', function() {
  let page: PokemonsPage;

  beforeEach(() => {
    page = new PokemonsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
