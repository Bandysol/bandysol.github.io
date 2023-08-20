function GetElementByClass(classname) {
	var end = [];
	var allele = document.getElementsByTagName("*");
	for (var i = 0;i < allele.length;++i) {
		var alr = allele[i].className.split(" ");
		for (var j = 0;j < alr.length;++j) {
			if (alr[j] == classname) {
				end.push(allele[i]);
			}
		}
	}
	return end;
}

function ButtonWorking() {
var allBG = GetElementByClass("button-group");
for (var i = 0;i < allBG.length;++i) {
	var thisHTML = allBG[i].innerHTML;
	thisHTML = thisHTML.replaceAll("<button","<li> <button");
	thisHTML = thisHTML.replaceAll("</button>","</button> </li>");
	allBG[i].innerHTML = thisHTML;
}}