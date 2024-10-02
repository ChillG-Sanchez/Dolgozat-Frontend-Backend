import './style.css';


document.getElementById('imageUrl')?.addEventListener('input', updateImage);
document.getElementById('imageWidth')?.addEventListener('input', updateImage);
document.getElementById('frameThickness')?.addEventListener('input', updateImage);
document.getElementById('frameColor')?.addEventListener('input', updateImage);
document.getElementById('toggleMode')?.addEventListener('click', toggleDarkMode);

function updateImage() {
    const imageUrlInput = document.getElementById('imageUrl') as HTMLInputElement;
    const imageWidthInput = document.getElementById('imageWidth') as HTMLInputElement;
    const frameThicknessInput = document.getElementById('frameThickness') as HTMLInputElement;
    const frameColorInput = document.getElementById('frameColor') as HTMLInputElement;

    const imagePreview = document.getElementById('imagePreview') as HTMLImageElement;

    if (imageUrlInput.value) {
        imagePreview.src = imageUrlInput.value;
    }
    if (imageWidthInput.value) {
        imagePreview.style.width = `${imageWidthInput.value}px`;
    }
    if (frameThicknessInput.value) {
        imagePreview.style.borderWidth = `${frameThicknessInput.value}px`;
    }
    if (frameColorInput.value) {
        imagePreview.style.borderColor = frameColorInput.value;
    }
    imagePreview.style.borderStyle = 'solid';
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}