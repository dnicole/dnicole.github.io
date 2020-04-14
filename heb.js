(function() {
	function getGroceries(address) {
	  return $.post('https://www.heb.com/commerce-api/v1/store/locator/address',
	  {
		"address":address,
		"curbsideOnly":true,
		"radius":20,
		"nextAvailableTimeslot":true,
		"includeMedical":false
	  });
	};
})();
