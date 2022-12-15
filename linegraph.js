const ctx = document.getElementById('myChart');

  const CscanChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'CSCAN LINE GRAPH',
        data: [],
        borderWidth:2
      }]
    },
    
    options: {
      animations: {
        tension: {
          duration: 1000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true
          
        }
        
      },
      
      indexAxis: 'y',
      interaction: {
        intersect: false
      },
        
    }
    
  });