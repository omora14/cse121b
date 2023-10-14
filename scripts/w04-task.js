/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Owen Morales",
    photo: "images/profile.png",
    favoriteFoods: [
        "Casado",
        "Hot Dog",
        "Rice",
        "Pinto"
    ],
    hobbies: [
        "Read",
        "Serve",
        "Play",
        "Watch TV Shows"
    ],
    placesLived: [

    ],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "🏡Perez Zeledon, Costa Rica",
        length: "18 years"
    },
    {
        place: "🏡Guayaquil, Ecuador",
        length: "6 months"
    },
    {
        place: "🏡Alajuelita, San Jose",
        length: "1 year"
    },
    {
        place: "🏡Canas, Guanacaste",
        length: "6 months"
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", `Profile image of ${myProfile.name}`);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
let hobbiesList = document.querySelector("#hobbies");
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    hobbiesList.appendChild(li);
});

/* Places Lived DataList */
let placesLivedList = document.querySelector("#places-lived");
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    dt.textContent = place.place;
    dd.textContent = place.length;
    placesLivedList.appendChild(dt);
    placesLivedList.appendChild(dd);
});

