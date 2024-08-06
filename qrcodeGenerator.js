const btnBaixar = document.getElementById('download');
const downloadLink = document.getElementById('downloadLink');

function generateQRCode() {
    const url = document.getElementById('url').value;

    const urlRegex = /^(https?|ftp):\/\/(([a-z\d]([a-z\d-]*[a-z\d])?\.)+[a-z]{2,}|localhost)(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;

    if (urlRegex.test(url)) {
        const qrCodeContainer = document.getElementById('qrcode');
        qrCodeContainer.innerHTML = "";
        btnBaixar.style.display = 'block';
        const qrCode = new QRCode(qrCodeContainer, url);

        setTimeout(() => {
            const qrCanvas = qrCodeContainer.querySelector('canvas');
            const qrDataUrl = qrCanvas.toDataURL('image/png');
            downloadLink.href = qrDataUrl;
        }, 500);

    } else {
        const qrCodeContainer = document.getElementById('qrcode');
        qrCodeContainer.innerHTML = "Inválido";
        btnBaixar.style.display = 'none';
    }
}

function limparURL() {
    document.getElementById('url').value = "";
    const qrCodeContainer = document.getElementById('qrcode');
    qrCodeContainer.innerHTML = "";
    btnBaixar.style.display = 'none';
}
