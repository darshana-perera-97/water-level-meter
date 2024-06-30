import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

const Design2 = () => {
  const projectionsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Projections vs Actuals",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56, 55],
      },
    ],
  };

  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Current Week",
        data: [50, 60, 70, 60, 75, 80],
        fill: false,
        borderColor: "#742774",
        tension: 0.1,
      },
      {
        label: "Previous Week",
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: "#ff6384",
        tension: 0.1,
      },
    ],
  };

  const locationData = {
    labels: ["New York", "San Francisco", "Sydney", "Singapore"],
    datasets: [
      {
        label: "Revenue by Location",
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        data: [72, 39, 25, 61],
      },
    ],
  };

  const salesData = {
    labels: ["Direct", "Affiliate", "Sponsored", "E-mail"],
    datasets: [
      {
        data: [300.56, 135.18, 78.02, 48.96],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  return (
    <div className="container pb-5">
      <div className="row">
        <div className="col=md-12 mt-5">
          <h2>Graph View - Weekly</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card projections">
            <div className="card-body">
              <h5>Total Usage - Daily</h5>
              <Bar data={projectionsData} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12">
              <div className="card revenue-chart">
                <div className="card-body">
                  <h5>In and Out - Daily</h5>
                  <Line data={revenueData} />
                </div>
              </div>
            </div>

            {/* <div className="col-md-6">
              <div className="card revenue-location">
                <div className="card-body">
                  <h5>Revenue by Location</h5>
                  <Pie data={locationData} />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card total-sales">
                <div className="card-body">
                  <h5>Total Sales</h5>
                  <Pie data={salesData} />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mt-5">
          <h2>Graph View - Today</h2>
        </div>

        <div className="col-md-12">
          <div className="card revenue-chart">
            <div className="card-body">
              <h5>In and Out - Daily</h5>
              <Line data={revenueData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design2;
