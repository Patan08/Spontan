
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.querySelector('form');
        form.addEventListener('submit', function(event) {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (!username || !password || !confirmPassword) {
                alert('Semua field harus diisi!');
                event.preventDefault();
                return;
            }

            if (password !== confirmPassword) {
                alert('Password dan konfirmasi password tidak cocok!');
                event.preventDefault();
                return;
            }

            if (password.length < 8) {
                alert('Password harus memiliki minimal 8 karakter!');
                event.preventDefault();
                return;
            }
        });
    });

