console.log('object');

// 1 - fetch, Load and Show Categories on html

// create load categories
const loadCategories = () => {
    // fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(Response => Response.json())
        .then(data => displayCategories(data.categories))
        .catch(err => console.log(err))
    
}
// create display categories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("category");
    categories.forEach(item => {
        console.log(item);
        // create a button
        const button = document.createElement('button');
        button.classList = 'btn';
        button.innerText = item.category;
        // add button to category container
        categoryContainer.append(button);
  })
};


loadCategories()
// displayCategories()