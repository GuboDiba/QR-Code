 function generateQRCode() {
     const qr = new QRious({
        element: document.getElementById('qr'),
        size: 200,
        });
    const input = document.getElementById('input').value;
    qr.value = input.length ? input : ' ';
      }
generateQRCode();
    