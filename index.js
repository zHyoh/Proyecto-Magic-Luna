function openModal(src) {
    const modal = document.getElementById("modal");
    const img = document.getElementById("modal-img");

    img.src = src;
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

document.getElementById("modal").addEventListener("click", function(e) {
    if (e.target === this) {
        closeModal();
    }
});