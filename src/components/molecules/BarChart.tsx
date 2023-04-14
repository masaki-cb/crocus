import { Chart as ChartJS, BarElement, Tooltip, Legend,LinearScale,CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, Tooltip, Legend,LinearScale,CategoryScale);

type Props = {
  values: number[];
  targetVal: number;
  itemName: string;
};
const BarChart = ({ values, targetVal, itemName }: Props) => {
  let flag = false;
  const data = {
    labels: values.map((r) => ""),
    datasets: [
      {
        label: itemName,
        data: values,
        borderWidth: 0,
        backgroundColor: values.map((v) => {
          if (v === targetVal && !flag) {
            flag = true;
            return "#281B40";
          }
          return "#E8E2F2";
        }),
      },
    ],
  };

  const options = {
    animation: {
      duration: 0,
    },
    scales: {
      y: {
        max: 10,
        min: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Bar data={data} width={100} height={50} options={options} />;
};

export default BarChart;
