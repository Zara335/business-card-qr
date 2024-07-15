$(document).ready(function() {
    const qrData = "https://your-website.com"; // Change this to your contact info or link
    $('#qr-code').qrcode({
        text: qrData,
        width: 100,
        height: 100
    });
});
