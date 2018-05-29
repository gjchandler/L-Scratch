    Chart.types.Doughnut.extend({
        name: "DoughnutTextInside",
        showTooltip: function() {
            this.chart.ctx.save();
            Chart.types.Doughnut.prototype.showTooltip.apply(this, arguments);
            this.chart.ctx.restore();
        },
        draw: function() {
            Chart.types.Doughnut.prototype.draw.apply(this, arguments);

            var width = this.chart.width,
                height = this.chart.height;

            var fontSize = (height / 114).toFixed(2);
            this.chart.ctx.font = fontSize + "em Verdana";
            this.chart.ctx.textBaseline = "middle";

            var text = "82%",
                textX = Math.round((width - this.chart.ctx.measureText(text).width) / 2),
                textY = height / 2;

            this.chart.ctx.fillText(text, textX, textY);
        }
    });

    var data = [{
        value: 30,
        color: "#5590cc",
        label: "Single Family Residence",
        
    }, {
        value: 50,
        color: "#00c2f9"
    }, {
        value: 100,
        color: "#544fd9"
    }, {
        value: 40,
        color: "#ec2a90"
    }, {
        value: 120,
        color: "#4D5360"
    }];

    var DoughnutTextInsideChart = new Chart($('#myChart')[0].getContext('2d')).DoughnutTextInside(data, {
        responsive: true
    });