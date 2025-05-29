// Form validation
        document.getElementById('myForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            // Validate username
            const username = document.getElementById('username').value;
            const usernameError = document.getElementById('usernameError');
            if (username.length < 2) {
                usernameError.textContent = 'Имя должно содержать минимум 2 символа';
                isValid = false;
            } else {
                usernameError.textContent = '';
            }
            
            // Validate email
            const email = document.getElementById('email').value;
            const emailError = document.getElementById('emailError');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                emailError.textContent = 'Пожалуйста, введите корректный email';
                isValid = false;
            } else {
                emailError.textContent = '';
            }
            
            // Validate password
            const password = document.getElementById('password').value;
            const passwordError = document.getElementById('passwordError');
            if (password.length < 6) {
                passwordError.textContent = 'Пароль должен содержать минимум 6 символов';
                isValid = false;
            } else {
                passwordError.textContent = '';
            }
            
            if (isValid) {
                alert('Форма успешно отправлена!');
                this.reset();
            }
        });
        
        // Get gender button
        document.getElementById('getGenderBtn')?.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedGender = document.querySelector('input[name="gender"]:checked');
            const genderOutput = document.getElementById('genderOutput');
            
            if (selectedGender) {
                genderOutput.textContent = `Выбран пол: ${selectedGender.value === 'male' ? 'Мужчина' : 'Женщина'}`;
            } else {
                genderOutput.textContent = 'Пол не выбран';
            }
        });
        
        // Map markers functionality
        const markers = document.querySelectorAll('.marker');
        const infoBox = document.getElementById('info-box');
        
        markers.forEach(marker => {
            marker.addEventListener('click', function() {
                // Show info box
                infoBox.style.display = 'block';
                
                // For demo purposes, we'll just show a simple message
                // In a real app, you would fetch data based on the marker's data-id
                setTimeout(() => {
                    infoBox.style.display = 'none';
                }, 3000);
            });
        });
        
        // Modal functionality
        function openModal(title, description, imgSrc) {
            document.getElementById('modal-title').textContent = title;
            document.getElementById('modal-description').textContent = description;
            document.getElementById('modal-img').src = imgSrc;
            document.getElementById('modal').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
        
        function closeModal(e) {
            if (e.target === document.getElementById('modal')) {
                document.getElementById('modal').classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        }
        
        // For demo, let's add a click event to the first marker to show the modal
        if (markers.length > 0) {
            markers[0].addEventListener('click', function() {
                openModal(
                    'Наш главный магазин', 
                    'Посетите наш флагманский магазин по адресу ул. Московская, д. 10. У нас представлен полный ассортимент продукции Adidas.', 
                    'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0d1e4c3b5e1c4a3c9a5bad5300e0c1a3_9366/Svitshot_black_GH7309_21_model.jpg'
                );
            });
        }
        
        // Close modal when clicking outside content
        document.getElementById('modal').addEventListener('click', closeModal);