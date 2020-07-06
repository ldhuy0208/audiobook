import React, { Component } from "react";
import "./Statistic.scss";
import {Line} from "react-chartjs-2";

export class Statistic extends Component {
  render() {
    return (
      <div className="admin-statistic">
        <Line
          data={{
            labels: [
              'Tháng 1',
              'Tháng 2',
              'Tháng 3',
              'Tháng 4',
              'Tháng 5',
              'Tháng 6',
              
            ],
            datasets: [
              {
                data: [1000, 1200, 1300, 1300, 1500, 1600],
                label: "Africa",
                borderColor: "#3e95cd",
                fill: false,
              }
            ],
          }}
          options={{
            title: {
              display: true,
              text: "THỐNG KÊ LƯỢT NGHE TRONG 6 THÁNG QUA",
            },
            legend: {
              display: false,
              position: "bottom",
            },
          }}
        />
      </div>
    );
  }
}

export default Statistic;
