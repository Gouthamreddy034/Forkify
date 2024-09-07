import * as model from './model';
import paginationView from './views/paginationView';
import recipeView from './views/recipeView';
import resultsView from './views/resultsView';
import searchView from './views/searchView';
import bookmarksView from './views/bookmarksView';

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if(!id)return;
    recipeView.renderSpinner();

    resultsView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks);

    await model.loadRecipe(id);

    const { recipe } = model.state;

    recipeView.render(recipe);

  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function(){
  try{
    resultsView.renderSpinner();
    const query = searchView.getQuery();

    if(!query) return;
    await model.loadSearchResults(query);

    resultsView.render(model.getSearchResultsPage());
    paginationView.render(model.state.search);
  }catch(err){
    console.log(err);
  }
}

const controlPagination = function(goToPage){
  resultsView.render(model.getSearchResultsPage(goToPage));
  paginationView.render(model.state.search);
}

const controlServings = function(newServings){
  model.updateServings(newServings);
  recipeView.update(model.state.recipe);
}

const controlAddBookmark = function(){

  if(!model.state.recipe.bookmarked)model.addBookmark(model.state.recipe);
  else model.deleteBookMark(model.state.recipe.id);

  recipeView.update(model.state.recipe);

  bookmarksView.render(model.state.bookmarks);
}

const controlBookmarks = function(){
  bookmarksView.render(model.state.bookmarks);
}

const init = function(){
  bookmarksView.addBookmarksHandler(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  recipeView.addHandlerUpdateServings(controlServings);
}

init();
