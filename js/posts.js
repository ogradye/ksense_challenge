const getUserPosts = async (userID) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`);
	const userPosts = await res.json();
	return userPosts;
}

const getPoster = async (userID) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
	const user = await res.json();
	return user;
}

const url = window.location.search;

const params = new URLSearchParams(url);

const generatePost = (post) => {
	const postContainer = document.getElementById('postsContainer');
	const postEl = document.createElement('div');
	const postHtml = `<h1>${post.title}</h1><p>${post.body}</p>`;

	postEl.classList.add('post');

	postEl.innerHTML = postHtml;

	postContainer.appendChild(postEl);
}

const generateUser = (user) => {
	const userContainer = document.getElementById('user');
	const userHtml = `${user.name} Posts`;

	userContainer.innerHTML = userHtml;
}

const showError = (error) => {
	const errorEl = document.getElementById('error');

	error.innerHTML = error;
}

if(params.has('user')){
	getPoster(params.get('user'))
	.then(user => {
		generateUser(user);
	})
	.catch(error => {
		showError(error);
	});

	getUserPosts(params.get('user'))
	.then(posts => {
		posts.forEach(post => {
			generatePost(post);
		})
	})
	.catch(error => {
		showError(error);
	});
}