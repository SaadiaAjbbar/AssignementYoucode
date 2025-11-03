const animal_image = document.getElementById("animal-image");
const animal_description = document.getElementById("animal-description");
const like = document.getElementById("like");
const dislike = document.getElementById("dislike");
let i = 0;

function fetching() {
  fetch("https://api.api-ninjas.com/v1/dogs?shedding=1", {
    headers: { "X-Api-Key": "INNa/HEA9YjTmZ5z9OXFeA==jvXoUsac4M201zNv" }
  })
    .then(res => res.json())//transforme la réponse en JSON (lit la réponse sous forme JSON)
    .then(data => {
      console.log(data);// ici tu as tes données(peut utiliser les donnees)
      if (i <= data.length) {
        let dog = data[i];
        animal_image.src = dog.image_link;
        animal_description.innerText = dog.name;
      }
      else {
        animal_description.innerText = "vous avez vu tous les animaux ";
        animal_image.style.display = "none";
      }
    })
    .catch(error => {
      console.log("Erreur :", error);//pour gérer les erreurs
    });
}
fetching();

dislike.addEventListener('click', () => {
  i++;
  fetching();
})
