import View from "./View";
import icons from 'url:../../img/icons.svg';

export default class PreviewView extends View {
  _parentElement = '';

  _generateMarkup() {
    return this._data.map(data=>`<li class="preview">
      <a class="preview__link preview__link--active" href="#${data.id}">
        <figure class="preview__fig">
          <img src="${data.image}" alt="Test" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${data.title}</h4>
          <p class="preview__publisher">${data.publisher}</p>
          <div class="preview__user-generated">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
          </div>
        </div>
      </a>
    </li>`).join('');
  }
}