# Forkify

Forkify is a fully-featured web application built with **JavaScript**, **HTML**, and **CSS**. It allows users to search for recipes via the [Forkify API](https://forkify-api.herokuapp.com/api/v2/recipes/), bookmark their favorite recipes, adjust servings and ingredient quantities in real-time, and view detailed preparation instructions.

## Features

- **Recipe Search**: Search for recipes based on ingredients or specific dishes using the Forkify API.
- **Recipe Details**: View detailed recipe information, including ingredients, preparation time, and number of servings.
- **Bookmarking**: Save your favorite recipes for easy access later.
- **Adjustable Servings**: Dynamically adjust the number of servings, and the ingredient quantities will update automatically.
- **Preparation Instructions**: Each recipe includes a link to full instructions on how to prepare the dish.

## How to Use

1. **Search for Recipes**:
   - Use the search bar to enter keywords like "pizza," "pasta," etc.
   - Browse through the search results and select a recipe to view details.

2. **View Recipe Details**:
   - Click on a recipe to see its details, including ingredients, preparation time, and serving size.

3. **Bookmark Recipes**:
   - Use the bookmark icon to save recipes to your personal list, which can be accessed anytime from the bookmarks section.

4. **Adjust Servings and Ingredient Quantities**:
   - Modify the number of servings using the controls, and the quantities of ingredients will update in real-time.

5. **Preparation Instructions**:
   - Each recipe includes a link to full preparation instructions, available at the bottom of the recipe details.

## API Reference

Forkify uses the [Forkify API](https://forkify-api.herokuapp.com/api/v2/recipes/) to retrieve recipe data.

### Example API Request

```bash
GET https://forkify-api.herokuapp.com/api/v2/recipes/?search=pizza


## Clone the Repository:

git clone https://github.com/Gouthamreddy034/forkify.git

cd forkify

### Install dependencies and start the application:

npm install
npm start

## Technologies Used
Frontend: HTML, CSS, JavaScript

API: Forkify API

Build Tools: parcel, npm
