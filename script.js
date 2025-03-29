function playScream() {
    const screamSound = document.getElementById('scream-sound');

    if (screamSound) {
        screamSound.play().catch(error => {
            console.error('Ошибка воспроизведения звука:', error);
        });
    }

    // Переключаем картинки через 5 секунд
    setTimeout(() => {
        const normalImage = document.getElementById('normal');
        const screamerImage = document.getElementById('screamer');

        if (normalImage && screamerImage) {
            normalImage.style.display = 'none';
            screamerImage.style.display = 'block';
        } else {
            console.error('Не удалось найти картинки');
        }
    }, 5000);
}
