function createDate(context, myCase){

var selectedLayers = context.selection;
var selectedCount = selectedLayers.count();

if (selectedCount == 0) {
  		log('No layers are selected.');
	} 
	else { 
	for (var i = 0; i < selectedCount; i++) {
        var layer = selectedLayers[i];
	
		var startD = new Date(2012, 0, 1);
		var endD = new Date();
		
		var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        
        randomNum =  (new Date(startD.getTime() + Math.random() * (endD.getTime() - startD.getTime())));
        var dia = randomNum.getDate();
		if (dia.toString().length == 1) {
			dia = "0"+dia;
		}
        var mes = randomNum.getMonth()+1
		var ano = randomNum.getFullYear();
		
		var finalText = "";
			
		switch (myCase)

 		{
     		case "A":
				if (mes < 10) {
        			mes = "0"+mes;
        		}
        		finalText = dia+"/"+mes;
		        break;
          		
		     case "B":
				if (mes < 10) {
        			mes = "0"+mes;
        		}
        		finalText = dia+"/"+mes+"/"+ano;
		        break;
		        
		    case "C":
		       	mes = monthNames[randomNum.getMonth()];
				finalText = dia+" "+mes;
          		break;
 
		
		 	case "D":
		        	mes = monthNames[randomNum.getMonth()];
				finalText = dia+" "+mes+" "+ano;
          		break;
 
		        
		    case "E":
		         if (mes < 10) {
        			mes = "0"+mes;
        		}
				finalText = dia+"-"+mes+"-"+ano;
          		break;
		        
		    case "F":
		       	mes = monthNames[randomNum.getMonth()];
				finalText = mes+" "+dia;
          		break;
		        
		    case "G":
		       	mes = monthNames[randomNum.getMonth()];
				finalText = mes+" "+dia+", "+ano;
          		break;

			default:
          		mes = mes;
				break;

 		}
		
		layer.setStringValue(finalText+"");

		}
	}
}

function format_1(context, identifier) {
	myCase = "A";
	createDate(context, myCase);
}
function format_2(context, identifier) {
	myCase = "B";
	createDate(context, myCase);
}
function format_3(context, identifier) {
	myCase = "C";
	createDate(context, myCase);
}
function format_4(context, identifier) {
	myCase = "D";
	createDate(context, myCase);
}
function format_5(context, identifier) {
	myCase = "E";
	createDate(context, myCase);
}
function format_6(context, identifier) {
	myCase = "F";
	createDate(context, myCase);
}
function format_7(context, identifier) {
	myCase = "G";
	createDate(context, myCase);
}

