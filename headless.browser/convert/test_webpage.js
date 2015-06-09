(function(){

	var system= require('system');
	var fs= require('fs');

	try{
		var page= require('webpage').create();
		page.onConsoleMessage= function(msg){
			console.log(msg);
		};
		page.onAlert= function(msg){
			console.log(msg);
		};
		page.open("about:blank", function(status){
			// console.log("status:" + JSON.stringify(status));
			if(status == "success"){
				page.viewportSize= {
					width:1024,
					height:768
				};
				page.injectJs("plugins/jquery.js");
				page.injectJs("plugins/echarts-all.js");
				page.evaluate(function(){
					var container= $("<div></div>").appendTo(document.body);
					container.attr('id', 'container');
					container.css({
						width:1024,
						height:768
					});

					var myChart= echarts.init(container[0]);
					myChart.setOption({
						animation:false,
						title:{
							text:'世界人口总量',
							subtext:'数据来自网络'
						},
						tooltip:{
							trigger:'axis'
						},
						legend:{
							data:['2011年', '2012年']
						},
						calculable:true,
						xAxis:[{
							type:'value',
							boundaryGap:[0, 0.01]
						}],
						yAxis:[{
							type:'category',
							data:['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
						}],
						series:[{
							name:'2011年',
							type:'bar',
							data:[18203, 23489, 29034, 104970, 131744, 630230]
						}, {
							name:'2012年',
							type:'bar',
							data:[19325, 23438, 31000, 121594, 134141, 681807]
						}]
					});
				});
			}else{
				console.log("Sorry, the page is not loaded");
			}
			page.render('page.png', {
				onlyViewport:true
			});
			page.close();
			phantom.exit();
		});
	}catch(e){
		console.log(e.stack);
	}
}());
