import React from 'react';
import { Chart } from 'react-chartjs-2';
import 'chart.js/auto';

export default function Placements() {
  const averageData = {
    labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Average CTC(in LPA)',
        data: [9, 16, 12, 9, 13, 14, 14, 15],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 205, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(201, 203, 207, 0.6)'
        ],
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
  };

  const averageOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  const medianData = {
    labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Median CTC(in LPA)',
        data: [9, 15, 12, 8, 12, 10, 12, 11],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 205, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(201, 203, 207, 0.6)'
        ],
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
  };

  const medianOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="h-full w-full bg-black text-white">
      <div className="flex flex-col items-center">
        <div className="h-96 w-full bg-black text-white">
          <div className=" py-20">
            <h2 className="text-3xl mb-4 py-52 px-16">Average CTC Over the Years:</h2>
          </div>
        </div>
        <div className="flex flex-col items-center h-96 w-11/12 bg-white rounded-3xl py-4">
          <Chart type="bar" data={averageData} options={averageOptions} />
        </div>
        <div className="h-96 w-full bg-black text-white">
          <div className=" py-20">
            <h2 className="text-3xl mb-4 py-52 px-16">Median CTC Over the Years:</h2>
          </div>
        </div>
        <div className="flex flex-col items-center h-96 w-11/12 bg-white rounded-3xl py-4">
          <Chart type="bar" data={medianData} options={medianOptions} />
        </div>
        <div className="h-96 w-full bg-black text-white">
          <div className=" py-20">
            <h2 className="text-3xl mb-4 py-52 px-16">Here goes you placement brochures!</h2>
          </div>
        </div>
        <div className="bg-white px-8 py-20 w-11/12 rounded-3xl">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
            <button className="bg-red-500 rounded-3xl h-44 hover:scale-105 duration-200 text-white items-center font-bold text-3xl">
              <div className="justify-center">2016</div>
            </button>
            <button className="bg-yellow-400 rounded-3xl h-44  hover:scale-105 duration-200 text-white items-center font-bold text-3xl">
              <div className="justify-center">2017</div>
            </button>
            <button className="bg-green-500 rounded-3xl h-44  hover:scale-105 duration-200 text-white items-center font-bold text-3xl">
              <div className="justify-center">2018</div>
            </button>
            <button className="bg-purple-500 rounded-3xl h-44  hover:scale-105 duration-200 text-white items-center font-bold text-3xl">
              <div className="justify-center">2019</div>
            </button>
            <button className="bg-blue-500 rounded-3xl h-44 hover:scale-105 duration-200 text-white items-center font-bold text-3xl">
              <div className="justify-center">2020</div>
            </button>
            <button className="bg-orange-400 rounded-3xl h-44 hover:scale-105 duration-200 text-white items-center font-bold text-3xl">
              <div className="justify-center">2021</div>
            </button>
            <button className="bg-indigo-500 rounded-3xl h-44 hover:scale-105 duration-200 text-white items-center font-bold text-3xl">
              <div className="justify-center">2022</div>
            </button>
            <button className="bg-pink-500 rounded-3xl h-44 hover:scale-105 duration-200 text-white items-center font-bold text-3xl">
              <div className="justify-center">2023</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
