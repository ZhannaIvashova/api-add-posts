const btnCreate = document.getElementById('btn-create');
const post = document.querySelector('.post');

function createHtmlString(dataPost) {
    return `
        <br>
        <div>
            <h2>${dataPost.title}</h2>
            <p>${dataPost.body}</p>
        </div>
        `
}

function addToPage(newPostHtml) {
    post.insertAdjacentHTML('afterEnd', newPostHtml);
}

btnCreate.onclick = function(event) {
    event.preventDefault();

    const postTitle = document.getElementById('post-title');
    const postText = document.getElementById('post-text');

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: postTitle.value,
            body: postText.value,
            userId: 1
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
    })

    .then(response => response.json())
    .then(dataPost => {
        const newPostHtml = createHtmlString(dataPost);
        addToPage(newPostHtml);
    })

    postTitle.value = '';
    postText.value = '';
}