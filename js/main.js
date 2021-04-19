$(document).ready(function() {
	let arr = ['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','r','s','t','u','v','w','x','y','z'];
	let itemArray = new Array(5).fill().map(el => arr[Math.floor(Math.random() * arr.length)]);
	console.log(itemArray);
	let ddlItems = document.getElementById("letters");
	for (let i = 0; i < itemArray.length; i++) {
	      let opt = itemArray[i];
	      let el = document.createElement("option");
	      el.textContent = opt;
	      el.value = opt;
	      ddlItems.appendChild(el);
	};
	// function update(e, targetId) {
	//   let target = document.getElementById(targetId);
	//   let ob = e.options[e.selectedIndex]
	//   target.value = `${ob.text}`
	// }
})