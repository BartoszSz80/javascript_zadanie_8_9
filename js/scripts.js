// plik scripts.js
	function drawTree(ile) {
		var star = "";
		for (var w = 0; w < ile; w++) {
			for (var s = 0; s < (w + 1); s++) {
				star += "*";
			}
			star += "\n";
		}
		return(star);
	}
	
console.log(drawTree(10));