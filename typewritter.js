const text = "Search Something here..."; // the text you want typed
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("searchInput").setAttribute("placeholder", text.substring(0, i+1));
    i++;
    setTimeout(typeWriter, 200); // speed in ms
  }
}

window.onload = typeWriter; // start when page loads