function showOptions() {
    var artType = document.getElementById("artType").value;
    var visualArtOptions = document.getElementById("visualArtOptions");
    var musicOptions = document.getElementById("musicOptions");
    var newMediaOptions = document.getElementById("newMediaOptions");
    var filmOptions = document.getElementById("filmOptions");
    var digitalArtOptions = document.getElementById("digitalArtOptions");

    visualArtOptions.style.display = "none";
    musicOptions.style.display = "none";
    newMediaOptions.style.display = "none";
    filmOptions.style.display = "none";
    digitalArtOptions.style.display = "none";

    if (artType === "visual") {
        visualArtOptions.style.display = "block";
    } else if (artType === "music") {
        musicOptions.style.display = "block";
    } else if (artType === "newMedia") {
        newMediaOptions.style.display = "block";
    }
}

// Optional: You can add form submission handling here if needed.
document.getElementById("uploadForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Handle form submission logic here
});
