const getUsers = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const users = await res.json();
	return users;
}

const generateUser = (user) => {
	const table = document.getElementById('userTable');
	const tr = document.createElement('tr');
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

	const userRows = document.querySelectorAll('.user');
	userRows.forEach(user => {
		user.addEventListener('click', () => {
			window.location.href = `/posts.html?user=${user.dataset.user}`;
		});
	});
}

const showError = (error) => {
	const errorEl = document.getElementById('error');

	error.innerHTML = `<td>${error}</td>`;
}

getUsers()
	.then(users => {
		users.forEach(user => {
			generateUser(user);
		});
	})
	.catch(error => {
		showError(error);
	});


