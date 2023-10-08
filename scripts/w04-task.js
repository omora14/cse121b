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
myProfile.placesLived.push({
    place: "Perez Zeledon, Costa Rica",
    length: "18 years"
}, {
    place: "Guayaquil, Ecuador",
    length: "6 months"
}, {
    place: "Alajuelita, San Jose",
    length: "1 year"
}, {
    place: "Canas, Guanacaste",
    length: "6 months"
});

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", `Profile image of ${myProfile.name}`);


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li/*html element*/ = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});


/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let ul = document.createElement("ul");
    ul.textContent = hobbie;
    document.querySelector("#hobbies").appendChild(ul);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);

    let dlElement = document.querySelector("#places-lived");
    dlElement.appendChild(dt);
    dlElement.appendChild(dd);

})



