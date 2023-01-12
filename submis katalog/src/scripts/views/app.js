import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routers/url-parser';
import routes from '../routers/routes';

class App {
  constructor({
    button, drawer, content, heroImage,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._heroImage = heroImage;

    this._initialAppSell();
  }

  _initialAppSell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      heroImage: this._heroImage,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#maincontent').focus();
    });
  }
}

export default App;
