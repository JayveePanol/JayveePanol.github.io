function openPopup(title, imgSrc) {
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-img").src = imgSrc;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
