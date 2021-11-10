const getUsers = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const users = await res.json();
	return users;
}

const getUserPosts = async (userID) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`);
	const userPosts = await res.json();
	return userPosts;
}

const setLoading = (state) => {
	const loadingSkeleton = document.getElementById('loadingSkeleton');

	if(state === false){
		setTimeout(() => {
			loadingSkeleton.remove();
		}, 2000);
	}
}

const generateUsers = (users) => {
	const table = document.getElementById('userTable');

	users.forEach(user => {
		const tr = document.createElement('tr');
		const html = `<td>${user.name}</td>
		<td>${user.username}</td>
		<td>${user.email}</td>
		<td>${user.phone}</td>
		<td>${user.website}</td>
		<td>${user.address.street} ${user.address.suite}, ${user.address.city} ${user.address.zipcode}</td>
		<td>${user.company.name}</td>`;
		tr.innerHTML = html;

		table.appendChild(tr);
	});
	
}

getUsers()
	.then(users => {
		generateUsers(users);
	})
	.catch(error => {
		console.log(error)
	})
	.finally(() => {
		setLoading(false);
	})

const showError = (error) => {

}
