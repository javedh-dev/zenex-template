const kursor_1 = new kursor({
    type: 1,
    color: '#FFF'
})

const toggleDarkMode = () => {
    const body = document.getElementById("body");
    body.classList.toggle("dark");
    kursor_1.color( body.classList.contains('dark') ? "#FFF" : "#000");
}

const els = document.querySelectorAll(".k-hover");

els.forEach(item => {
    item.addEventListener('mouseover',() => {
        console.log("Bhai me aa Gaya");
      })
});
