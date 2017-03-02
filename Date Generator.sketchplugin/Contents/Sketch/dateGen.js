function createDate(context, myCase){

var selectedLayers = context.selection;
var selectedCount = selectedLayers.count();

if (selectedCount == 0) {
  		log('No layers are selected.');
	} 
	else { 
	for (var i = 0; i < selectedCount; i++) {
        var layer = selectedLayers[i];
        log(layer);
		var start=new Date(2014, 0, 1);
		var end=new Date();
		var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var field_a = start.getTime();
        var field_b = end.getTime();
        
        var end_start = field_b - field_a;    
        var randomized = Math.random() * end_start;
        log('field a log start gettime = ' + field_a);
        log('field b log end gettime = ' + field_b);
        log('randomized = ' + randomized);

        randomNum = field_a + randomized;
        log('randomDate = ' + randomNum);
        
       	/*offset_e = ("2012-01-01 00:00:00").getTime();
		end_e = ("2013-01-01 00:00:00").getTime();
		diff_e = end_e - offset_e + 1;
		
		rand_e = (offset_e + (Math.random() * diff_e));
		var randomNum = new Date(rand_e);
		*/
		
		
        var randomNum = new Date(randomized);
        
        var dia = randomNum.getDate();
		if (dia.toString().length == 1) {
			dia = "0"+dia;
		}
        
        var mes = randomNum.getMonth()+1
		var ano = randomNum.getFullYear() 
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
		
		layer.setStringValue(finalText);

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

