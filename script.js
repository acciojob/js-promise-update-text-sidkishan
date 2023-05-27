//your JS code here. If required.
function updateHTML(){
	let prom = new Promise((resolve) => {
		setTimeout(() =>{
			resolve("Hello, world!");
		}, 1000)
	});
	prom.then((data) => {
		const div = document.getElementById("output");
		div.innerText = data;
	})
}
updateHTML();