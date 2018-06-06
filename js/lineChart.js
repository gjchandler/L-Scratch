new Chart(document.getElementById("lineChart"), {
  type: 'line',
  data: {
    labels: [2001,2005,2010,2015],
    datasets: [{ 
        //lineTension: 0,
        data: [100000000,10000000,30000,1500],
        label: "Cost",
        borderColor: "#3e95cd",
        fill: false
      }, 
    ]
  },
  options: {

    title: {
      display: true,
      text: 'Cost Per Sequencing the Human Genome'
    }
}
});

