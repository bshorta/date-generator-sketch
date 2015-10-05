var loadText = function(){
	for (var i = 0, l = [selection count]; i < l; i++) {
		var layer = selection[i];
		var start=new Date(2014, 0, 1);
		var end=new Date();
		var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		
		var randomNum = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
		
		var dia = randomNum.getDate();
			if (dia.toString().length == 1)
			dia = "0"+dia;
			
		var mes = randomNum.getMonth()+1;
			mes = monthNames[randomNum.getMonth()]
		  
		var ano = randomNum.getFullYear();  
			randomNum = dia+" "+mes+" "+ano;
			
		[layer setStringValue: "" + randomNum];
		[layer setName: "" + randomNum];
		[layer adjustFrameToFit];	
	}
};