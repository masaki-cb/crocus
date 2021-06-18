import { Bar } from "react-chartjs-2";
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

  return <Bar type="" data={data} width={100} height={50} options={options} />;
};

export default BarChart;
