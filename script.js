function addStyle() {
	document.body.style.backgroundColor = "rgb(129, 13, 145)";

	document.getElementById('item1').style.boxShadow = '0px 0px 20px 0px rgb(0, 0, 0)';
	document.getElementById('item2').style.boxShadow = '0px 0px 20px 0px rgb(0, 0, 0)';
	document.getElementById('item3').style.boxShadow = '0px 0px 20px 0px rgb(0, 0, 0)';
	
	document.getElementById('item1').style.backgroundColor = 'rgb(51, 2, 61)';
	document.getElementById('item2').style.backgroundColor = 'rgb(51, 2, 61)';
	document.getElementById('item3').style.backgroundColor = 'rgb(51, 2, 61)';

	document.getElementById('item1').style.border = '3px solid rgb(0, 0, 0)';
	document.getElementById('item2').style.border = '3px solid rgb(0, 0, 0)';
	document.getElementById('item3').style.border = '3px solid rgb(0, 0, 0)';


}

var block = document.getElementById("block1");
var blockNone = document.getElementById("block2");


function addBlock(){
    if(block.style.display == "flex"){
		block.style.display = "none";
		blockNone.style.display = "block";
    }
}

var temp = {Belarus: 6, Poland: 7, Ukraine: 6, Canada: 19, Germany: 14, Russia: 5, Spain:20};
var tempsum = 0;


for (var key in temp) {
    var tempsum = temp[key]+tempsum;
    var result = tempsum / (Object.keys(temp).length);
}

function tempMax(temp) {
  return Math.max(temp['Belarus'], temp['Poland'], temp['Ukraine'], temp['Canada'], temp['Germany'], temp['Russia'], temp['Spain']);
}





alert(result + '°C - средняя температура');
alert(tempMax(temp) + '°C - максимальная температура');