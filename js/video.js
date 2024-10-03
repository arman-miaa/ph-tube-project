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

const cardDemo = {
  category_id: "1003",
  video_id: "aaaf",
  thumbnail: "https://i.ibb.co/5LRQkKF/stick-and-stones.jpg",
  title: "Sticks & Stones",
  authors: [
    {
      profile_picture: "https://i.ibb.co/rdTZrCM/dev.jpg",
      profile_name: "Dave Chappelle",
      verified: true,
    },
  ],
  others: {
    views: "113K",
    posted_date: "",
  },
  description:
    "Dave Chappelle's 'Sticks & Stones' has garnered 113K views and remains a controversial yet highly engaging piece of stand-up comedy. Known for his fearless approach, Dave dives into a wide range of topics, delivering his unique perspective with wit and sharp humor. As a verified artist, Dave's comedy is raw, honest, and unapologetically funny.",
};

// display of videos
const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos");
  videos.forEach((video) => {
    console.log(video);
    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = `
         <figure class="h-[200px]">
    <img
      src=${video.thumbnail}
      alt="Shoes" class="h-full w-full object-cover" />
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div>
    <img class="h-10 w-10 rounded-full object-cover" src="${video.authors[0].profile_picture}" />
    
    </div>
    <div>
    <h2 class="font-bold">${video.title}</h2>

    <div class="flex items-center gap-2">
    <p class="text-gray-400">${video.authors[0].profile_name}</p>
    ${video.authors[0].verified == true ? `<img class="w-5" src="./assets/icons8-verify-48.png" /> `: ''}
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
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;
    // add button to category container
    categoryContainer.append(button);
  });
};

loadCategories();
// displayCategories()

loadVideos();
