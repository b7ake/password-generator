// Password generator logic

document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.querySelector('button[type="submit"]');
    const lengthInput = document.getElementById('name');
    const outputDiv = document.getElementById('password-output');
    
    generateButton.addEventListener('click', function() {
        const length = parseInt(lengthInput.value);
        
        // Check if the input is a valid number and between 16 and 32
        if (isNaN(length) || length < 16 || length > 32) {
            outputDiv.textContent = 'Error: Password length must be a number between 16 and 32.';
            return;
        }
        
        // Generate password
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
        let password = '';
        for (let i = 0; i < length; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        
        outputDiv.textContent = 'Generated Password: ' + password;
    });
});