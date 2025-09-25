document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.getElementById('copy-email-btn');
    const emailToCopy = document.getElementById('email-to-copy');

    if (copyButton && emailToCopy) {
        copyButton.addEventListener('click', function() {
            // Se usa el API de portapapeles moderno para copiar texto
            navigator.clipboard.writeText(emailToCopy.textContent)
                .then(() => {
                    // Feedback visual o de texto para el usuario
                    
                })
                .catch(err => {
                    console.error('Error al copiar el correo: ', err);
                });
        });
    }
});