function getTime(time) {
  const hours = parseInt(time / 3600);
  const minutes = parseInt((time % 3600) / 60);
  const second = time % 60;
  return `${hours} Hour ${minutes} Minute ${second} seconds ago`;
}

// 1 - fetch, Load and Show Categories on html

// create load categories
const loadCategories = () => {
  // fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((Response) => Response.json())
    .then((data) => displayCategories(data.categories))
    .catch((err) => console.log(err));
};
// videos
const loadVideos = () => {
  // fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((Response) => Response.json())
    .then((data) => displayVideos(data.videos))
    .catch((err) => console.log(err));
};

const loadCategoryVideos = (id) => {
  // alert(id);
   fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
     .then((Response) => Response.json())
     .then((data) => displayVideos(data.category))
     .catch((err) => console.log(err));
}

// const cardDemo = {
//   category_id: "1003",
//   video_id: "aaaf",
//   thumbnail: "https://i.ibb.co/5LRQkKF/stick-and-stones.jpg",
//   title: "Sticks & Stones",
//   authors: [
//     {
//       profile_picture: "https://i.ibb.co/rdTZrCM/dev.jpg",
//       profile_name: "Dave Chappelle",
//       verified: true,
//     },
//   ],
//   others: {
//     views: "113K",
//     posted_date: "",
//   },
//   description:
//     "Dave Chappelle's 'Sticks & Stones' has garnered 113K views and remains a controversial yet highly engaging piece of stand-up comedy. Known for his fearless approach, Dave dives into a wide range of topics, delivering his unique perspective with wit and sharp humor. As a verified artist, Dave's comedy is raw, honest, and unapologetically funny.",
// };

// display of videos
const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos");
  videoContainer.innerHTML = '';
  if (videos.length == 0) {
    videoContainer.classList.remove('grid');
    videoContainer.innerHTML = `
    <div class="min-h-[300px] w-full flex flex-col gap-5 justify-center items-center">
    <img src="./assets/Icon.png" />
    <h2 class="text-2xl font-bold text-center">No Content Here in this Category</h2>
    </div>
    `;
    return;
    
  } else {
    videoContainer.classList.add('grid');
  }
  videos.forEach((video) => {
    console.log(video);
    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = `
         <figure class="h-[200px] relative">
    <img
      src=${video.thumbnail}
      alt="Shoes" class="h-full w-full object-cover" />
      ${
        video.others.posted_date?.length == 0
          ? ""
          : `
         <span class="absolute right-2 bottom-2 bg-black text-white text-xs rounded p-1">${getTime(
           video.others.posted_date
         )}</span>
        `
      }
     
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div>
    <img class="h-10 w-10 rounded-full object-cover" src="${
      video.authors[0].profile_picture
    }" />
    
    </div>
    <div>
    <h2 class="font-bold">${video.title}</h2>

    <div class="flex items-center gap-2">
    <p class="text-gray-400">${video.authors[0].profile_name}</p>
    ${
      video.authors[0].verified == true
        ? `<img class="w-5" src="./assets/icons8-verify-48.png" /> `
        : ""
    }
    </div>

    <p></p>
    </div>
  </div>
        `;
    videoContainer.appendChild(card);
  });
};

// create display categories
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("category");
  categories.forEach((item) => {
    console.log(item);
    // create a button
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `
    <button onclick="loadCategoryVideos(${item.category_id})" class="btn">
    ${item.category}
    </button>
    `;
   

    // add button to category container
    categoryContainer.append(buttonContainer);
  });
};

loadCategories();
// displayCategories()

loadVideos();
