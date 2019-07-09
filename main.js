function IsArrayValid (arr) {
    var message=[
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
];
   var result;
   for(let i=0;i<message.length;i++){
	 for (let j=0; j<arr.length;j++){
		if(arr[j]!=(message[i].id)){
			result="[ERROR]:";
			break;
		}	
	 } 
   }
   return result;   
}
function printReceiptMsg(arr){
	 var message=[
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
];
   var array=new Array();
   var arrays=new Array();
   for(var k=0;k<message.length;k++){
	   for(var m=0;m<arr.length;m++){
		 if(arr[m]==(message[k].id)){		
			 //if(arr[m]){
			 //arrays.push({"id":arr[m],"count":2});
			  array.push(message[k]);
			// }
			//else{
			 arrays.push({"id":arr[m],"count":1});
			// }
		 }
	   }
   }
   var result="";
  result+="Receipts" +
  "------------------------------------------------------------";
   for(var n=0;n<array.length;n++){
	for(var a=0;a<arrays.length;a++){
	  var TotalMoney=0;
	  if(array[n].id==arrays[a].id){
       result+=array[n].name+" "+array[n].price;
	   result+=" "+arrays[a].count;
	  }
	}  
   }
   result+="------------------------------------------------------------";
   var TotalMoney=0;
   for(let n=0;n<array.length;n++){
	for(let a=0;a<arrays.length;a++){
	if(array[n].id==arrays[a].id){
	TotalMoney+=array[n].price * arrays[a].count;
    }
   }
  }
   result+="Price:"+TotalMoney;
   return result;
}
module.exports ={IsArrayValid,printReceiptMsg}