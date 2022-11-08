// RecipeCard.js

class RecipeCard extends HTMLElement {
  // Called once when document.createElement('recipe-card') is called, or
  // the element is written into the DOM directly as <recipe-card>
  constructor() {
    super(); // Inheret everything from HTMLElement

    // EXPOSE - START (All expose numbers start with A)
    // A1. TODO - Attach the shadow DOM to this Web Component (leave the mode open)
    let shadowEl = this.attachShadow({mode: 'open'});
    // A2. TODO - Create an <article> element - This will hold our markup once our data is set
    let article = document.createElement('article');
    // A3. TODO - Create a style element - This will hold all of the styles for the Web Component
    let style = document.createElement('style');
    // A4. TODO - Insert all of the styles from cardTemplate.html into the <style> element you just made
    style = `* {
  font-family: sans-serif;
}

body {
  height: 100%;
  width: 100%;
}

fieldset {
  border: 2px solid rgb(214, 214, 214);
  box-sizing: border-box;
  display: block;
  width: max-content;
}

form button {
  display: block;
  margin-top: 5px;
}

label[for="ingredients"] p {
  margin: 0;
}

label[for="numRatings"] {
  margin: 10px 0 0 0;
}

label[for^="rating"] {
  padding-right: 10px;
}

label:not([for^="rating"]) {
  display: block;
  margin-bottom: 5px;
}

main {
  column-gap: 10px;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  max-width: 660px;
  row-gap: 10px;
  width: 100%;
}

.danger {
  background-color: rgb(254, 171, 171);
  border-color: red;
}

.hidden {
  display: none;
}`;
    // A5. TODO - Append the <style> and <article> elements to the Shadow DOM
  shadowEl.append(article);
  shadowEl.append(style);
  }
  
  
  /**
   * Called when the .data property is set on this element.
   *
   * For Example:
   * let recipeCard = document.createElement('recipe-card'); // Calls constructor()
   * recipeCard.data = { foo: 'bar' } // Calls set data({ foo: 'bar' })
   *
   * @param {Object} data - The data to pass into the <recipe-card>, must be of the
   *                        following format:
   *                        {
   *                          "imgSrc": "string",
   *                          "imgAlt": "string",
   *                          "titleLnk": "string",
   *                          "titleTxt": "string",
   *                          "organization": "string",
   *                          "rating": number,
   *                          "numRatings": number,
   *                          "lengthTime": "string",
   *                          "ingredients": "string"
   *                        }
   */
  set data(data) {
    // If nothing was passed in, return
    if (!data) return;

    // A6. TODO - Select the <article> we added to the Shadow DOM in the constructor
    let article2 = this.shadowRoot.querySelector('article');
    // A7. TODO - Set the contents of the <article> with the <article> template given in
    //           cardTemplate.html and the data passed in (You should only have one <article>,
    //           do not nest an <article> inside another <article>). You should use Template
    //           literals (tempalte strings) and element.innerHTML for this.
    article2 = `<img src="${data.imgSrc}" alt="Recipe Title">
    <p class="title"><a href="${data.titleLnk}">${data.titleTxt}</a></p>
    <p class="organization">${data.organization}</p>
    <div class="rating">
      <span>${data.rating}</span>
      <img src="./assets/images/icons/${data.rating}-star.svg" alt="${data.rating} stars">
      <span>(${data.numRatings})</span>
    </div>
    <time>${data.lengthTime}</time>
    <p class="ingredients">${data.ingredients}</p>`
  }
}

// A8. TODO - Define the Class as a customElement so that you can create
//           'recipe-card' elements
customElements.define('recipe-card', RecipeCard);
