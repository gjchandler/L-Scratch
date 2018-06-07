new Chart(document.getElementById("lineChart"), {
  type: 'line',
  data: {
    labels: [2001,2005,2010,2015],
    datasets: [{ 
<<<<<<< HEAD
        lineTension: 0,
=======
        //lineTension: 0,
>>>>>>> glen
        data: [100000000,10000000,30000,1500],
        label: "Cost",
        borderColor: "#3e95cd",
        fill: false
      }, 
    ]
  },
  options: {
<<<<<<< HEAD
    /*scales: {
    yAxes: [{
        type: 'logarithmic',
    }]
  }*/
=======
>>>>>>> glen

    title: {
      display: true,
      text: 'Cost Per Sequencing the Human Genome'
    }
}
<<<<<<< HEAD
});
=======
});

>>>>>>> glen
