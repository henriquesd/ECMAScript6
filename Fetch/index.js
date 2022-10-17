/**
 * Fetch
 * 
 * RESTFul API - https://jsonplaceholder.typicode.com/
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */

// Fetch made it much easier to do API calls;

// fetch('https://jsonplaceholder.typicode.com/comments/1')
//     .then(response => response.json())
//     .then(data => console.log(data))

fetch('https://jsonplaceholder.typicode.com/comments', {
        method: "POST", // default is "GET"
        body: JSON.stringify({
            postId: 1,
            name: 'Henrique',
            email: 'test@test.com',
            body: 'That was cool!'
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))