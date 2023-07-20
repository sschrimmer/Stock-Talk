const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'stocktalk',
  });

  async function signupFormHandler(event) {
  
    if (username && password) {
      try {
        // Insert user data into the 'users' table
        const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
        await connection.query(query, [username, password]);
  
        document.location.replace('/dashboard');
      } catch (error) {
        console.error(error);
        alert('An error occurred during signup. Please try again.');
      }
    }
  
  }

async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);