document = "/spotify.html";

var loginButton = document.getElementById('button-login');

loginButton.addEventListener('click', function() {
	alert("step 1")
	login(function(accessToken) {
		alert("step 2")
		getUserData(accessToken)
			.then(function(response) {
				alert(response);
				// loginButton.style.display = 'none';
				// resultsPlaceholder.innerHTML = template(response);
		});
	});
}, passiveSupported ? { passive: true } : false);

function getUserData(accessToken) {
  return $.ajax({
	  url: 'https://api.spotify.com/v1/me',
	  headers: {
		 'Authorization': 'Bearer ' + accessToken
	  }
  });
}
