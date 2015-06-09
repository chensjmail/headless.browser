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
			if(status == "success"){
				page.viewportSize= {
					width:1024,
					height:768
				};
				console.log("status:" + JSON.stringify(status));
				page.injectJs("plugins/jquery.js");
				page.injectJs("plugins/echarts-all.js");
				console.log("1");
				var charts_= page.evaluateAsync(function(){

					console.log("2");

					$(document.body).css('backgroundColor', 'white');
					var container= $("<div>我是中国人</div>").appendTo(document.body);
					container.attr('id', 'container');
					container.css({
						width:1024,
						height:768
					});
					var myChart= echarts.init(container[0]);
					myChart.setOption({
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

					console.log("3");

					return myChart;
				});
				console.log("4");
				console.log(charts_);
				// setTimeout(function(){
				// try{
				// page.render('page.png', {
				// onlyViewport:true
				// });
				// }catch(e){
				// console.log(e);
				// }
				// }, 2200);

			}else{
				console.log("Sorry, the page is not loaded");
			}

			// page.close();
			// slimer.exit();
		});
	}catch(e){
		console.log(e.stack);
	}
}());
