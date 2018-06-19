document = "/spotify.html";

var loginButton = document.getElementById('button-login');

loginButton.addEventListener('click', function() {
	login(function(accessToken) {
		getUserData(accessToken)
			.then(function(response) {
				alert(response);
				// loginButton.style.display = 'none';
				// resultsPlaceholder.innerHTML = template(response);
		});
	});
});

function getUserData(accessToken) {
  return $.ajax({
	  url: 'https://api.spotify.com/v1/me',
	  headers: {
		 'Authorization': 'Bearer ' + accessToken
	  }
  });
}
