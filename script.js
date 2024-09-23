document.getElementById('check-btn').addEventListener('click', function() {
    const input = document.getElementById('palindrome-input').value;
    // Clean the input: remove non-alphanumeric characters and convert to lowercase
    const cleanedInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Check if the cleaned input is a palindrome
    const isPalindrome = cleanedInput === cleanedInput.split('').reverse().join('');
    // Display the result
    document.getElementById('result').innerText = isPalindrome ? 'Yes, it is a palindrome!' : 'No, it is not a palindrome.';
});
