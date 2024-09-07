import PreviewView from './previewView'

class ResultsView extends PreviewView {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'We could not find the recipe,Please try another one';
  _message = '';
}

export default new ResultsView();