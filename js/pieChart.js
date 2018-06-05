   new Chart(document.getElementById("pieChart"), {
    type: 'doughnut',
    data: {
      labels: ["Interesting", "Epigenetic", "Horvath", "Biological Age"],
      datasets: [
        {
          label: "Nice Pie Chart",
          backgroundColor: ["#5590cc", "#00c2f9","#ec2a90","#4D5360"],
          data: [2478,5267,734,784]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Methylation reactions'
      }
    }
});
