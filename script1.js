// script.js
let posts = [];

function submitPost() {
    const postContent = document.getElementById('post-content').value.trim();
    if (postContent) {
        const post = {
            id: Date.now(),
            content: postContent,
            timestamp: new Date().toLocaleString()
        };
        posts.push(post);
        displayPosts();
        document.getElementById('post-content').value = '';
    } else {
        alert('Please enter some content for your post.');
    }
}

function displayPosts() {
    const postList = document.getElementById('post-list');
    postList.innerHTML = '';
    posts.forEach(post => {
        const li = document.createElement('li');
        li.classList.add('post');
        li.innerHTML = `
            <p class="post-content">${post.content}</p>
            <small>${post.timestamp}</small>
        `;
        postList.appendChild(li);
    });
}

// Initial display of posts
displayPosts();
