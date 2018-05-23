var canvas = document.getElementById('myChart');
var data = {
    labels: ["Favorable M-Factor", "Female", "Non-Smoker"],
    datasets: [
        {
            label: "Increased Annual Life Policy1",
            backgroundColor: ["#5590cc", "#ec2a90", "#4d4d4d"],
            borderWidth: 2,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [650, 580, 310],
        }
    ]
};
var option = {
	scales: {
  	yAxes:[{
    		stacked:true,
        gridLines: {
        	display:true,
          color:"rgba(255,99,132,0.2)"
        }
    }],
    xAxes:[{
    		gridLines: {
        	display:false
        }
    }]
  }
};

var myBarChart = Chart.Bar(canvas,{
	data:data,
  options:option
});




