(function(){
	try{
		var page= require('webpage').create();
		page.onConsoleMessage= function(msg){
			console.log(msg);
		};
		page.onAlert= function(msg){
			console.log(msg);
		};
		console.log(1);
		page.open("file:///home/works/git%E5%BA%93/github/charts/web/test/hello/hello2.html", function(status){
			console.log(2);
			if(status == "success"){
				console.log(3);

			}else{
				console.log("Sorry, the page is not loaded");
			}
			console.log(4);
			// page.close();
			// slimer.exit();
		});
		console.log(5);
		page.evaluate(function(){
			console.log(6);
		});
		console.log(7);
	}catch(e){
		console.log(e.stack);
	}
}());
