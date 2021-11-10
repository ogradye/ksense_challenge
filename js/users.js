const getUsers = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const users = await res.json();
	return users;
}

const setLoading = (state) => {
	const loadingSkeleton = document.getElementById('loadingSkeleton');

	if (state === false) {
		setTimeout(() => {
			loadingSkeleton.remove();
		}, 2000);
	}
}

const generateUser = (user) => {
	const table = document.getElementById('userTable');
	const tr = document.createElement('tr');
	const userRows = document.querySelectorAll('.user');
	const userHtml = `<td>${user.name}</td>
	<td>${user.username}</td>
	<td>${user.email}</td>
	<td>${user.phone}</td>
	<td>${user.website}</td>
	<td>${user.address.street} ${user.address.suite}, ${user.address.city} ${user.address.zipcode}</td>
	<td>${user.company.name}</td>`;

	tr.classList.add('user');
	tr.dataset.user = user.id;
	tr.innerHTML = userHtml;
	table.appendChild(tr);

	userRows.forEach(user => {
		user.addEventListener('click', () => {
			window.location.href = `/posts.html?user=${user.dataset.user}`;
		});
	})
}

getUsers()
	.then(users => {
		users.forEach(user => {
			generateUser(user);
		});
	})
	.catch(error => {
		console.log(error)
	})
	.finally(() => {
		setLoading(false);
	})

const showError = (error) => {

}
