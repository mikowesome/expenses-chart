const labels = [
    'mon',
    'tue',
    'wed',
    'thu',
    'fri',
    'sat',
    'sun',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Amount',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
      backgroundColor: [
        'hsl(10, 79%, 65%)',
      ],
      borderRadius: 8,
      borderSkipped: false,
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
        // events: ['click'],
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false,
                }
            },
            y: {
                grid: {
                    display: false,
                    drawBorder: false,
                },
                ticks: {
                    display: false,
                }
            }
        },
        plugins: {
            tooltip: {
                yAlign: 'bottom',
                displayColors: false,
                callbacks: {
                    title: function(context) {
                        return `$${context[0].formattedValue}`;
                    },
                    label: function(context) {
                        return '';
                    }
                }
            },
            legend: {
                display: false,
            }
        }
    },
  };

  const myChart = new Chart(
    document.getElementById('bar-chart'),
    config
  );
