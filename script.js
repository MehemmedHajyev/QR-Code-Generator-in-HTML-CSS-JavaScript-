const wrapper = document.querySelector('.wrapper');
qrInput = document.querySelector('.form input');

generateBtn = document.querySelector('.form button');
qrImg = document.querySelector('.qr-code img');


generateBtn.addEventListener('click', () => {
    let qrValue = qrInput.value;
    if (!qrValue) {
        alert('Place Enter text or url !')
        return;// Input boşsa işlemi durdur
    }

    generateBtn.innerText = 'Generating QR Code...'


    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;

    qrImg.addEventListener('load', () => {
        wrapper.classList.add('active');
        generateBtn.innerText = ' Generating QR Code';
    });
    qrImg.addEventListener('click', () => {
        window.location.href = qrValue;
    })
});

// 
