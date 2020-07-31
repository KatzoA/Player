const image = document.querySelector('.card-image');
const titre = document.querySelector('.card-content h5');
const artiste = document.querySelector('.artiste');
const audio = document.querySelector('.audio')
const categorie = document.querySelector('.categorie')

const data = {
    titre: "",
    categorie: "ROCK",
    artiste: "Motley Crue",
    image: "https://39s.musify.club/img/70/6482339/19023231.jpg",
    file: "files/file1.mp3"
}
image.style.background = `url('${data.image}') no-repeat center center / cover`;
audio.src = data.file;
categorie.innerText = data.categorie