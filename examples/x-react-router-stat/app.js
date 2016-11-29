import React from 'react';
import ReactDOM from 'react-dom';
import SuperAgent from 'superagent';
import Highchart from 'react-highcharts';

class Stat extends React.Component {
  constructor() {
    super();
    this.state = {
      config: {
        title: {
          text: 'x-react-router download count',
          x: -20 //center
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
        },
        xAxis: { categories: [] },
        yAxis: {
          title: {
            text: 'Download Count'
          },
          plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
          }]
        },
        series: [{ name: 'Count', data: [] }]
      }
    };
  }
  componentWillMount() {
    this.getStat();
  }
  componentDidMount() {}
  render = () => <Highchart config={this.state.config} />
  getStat() {
    // see: https://github.com/npm/download-counts
    SuperAgent
      .get(`https://api.npmjs.org/downloads/range/last-month/x-react-router`)
      .end((err, res) => {
        if (!err) {
          const { categories, data } = this.map(res.body.downloads);
          this.setState({
            config: {
              ...this.state.config,
              xAxis: { categories: categories },
              yAxis: {
                title: {
                  text: 'Download Count'
                },
                plotLines: [{
                  value: 0,
                  width: 1,
                  color: '#808080'
                }]
              },
              series: [{ name: 'Count', data }]
            }
          });
        }
      })
  }
  map(downloads) {
    const data = [];
    const categories = [];
    for(let k = downloads.length; k--;) {
      const d = downloads[k];
      data.unshift(d.downloads);
      categories.unshift(d.day.slice(5));
    }
    return { data, categories }
  }
}

function run() {
  ReactDOM.render(
    <Stat />
    , document.getElementById('container'));
}

function init() {
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    return run();
  }
  if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', run);
  } else {
    window.attachEvent('onload', run);
  }
}

// Run the application when DOM is ready
init();
