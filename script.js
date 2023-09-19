const wrapper = document.querySelector('.wrapper');
const qrInput = document.querySelector('.form input');
const generateBtn = document.querySelector('.form button');
const qrImg = document.querySelector('.qr-code img');
const btnDowland = document.querySelector('.btn-dowland');

generateBtn.addEventListener('click', async () => {
    let qrValue = qrInput.value;
    if (!qrValue) {
        alert('Place Enter text or url !');
        return; // Input boşsa işlemi durdur
    }

    generateBtn.innerText = 'Generating QR Code...'

    // QR kodunun içeriğini encode ederek yükle
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${encodeURIComponent(qrValue)}`;

    qrImg.addEventListener('load', () => {
        wrapper.classList.add('active');
        generateBtn.innerText = ' Generating QR Code';
        btnDowland.innerText = ' Download';
    });

    btnDowland.addEventListener('click', async () => {
        if (!qrValue) {
            alert('Place Enter text or url !');
            return; // Input boşsa işlemi durdur
        }

        btnDowland.innerText = ' Download...'

        const response = await fetch(qrImg.src);
        const blob = await response.blob();
        const documentLink = document.createElement('a');
        documentLink.href = URL.createObjectURL(blob);
        documentLink.download = 'qrcode.jpg';
        documentLink.click();
        btnDowland.innerText = ' Download';
    });

    qrImg.addEventListener('click', () => {
        window.location.href = qrValue;
    });
});
