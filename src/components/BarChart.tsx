import { Bar } from "react-chartjs-2";
type Props = {
  values: number[];
  targetVal: number;
  itemName: string;
};
const BarChart = ({ values, targetVal, itemName }: Props) => {
  const data = {
    labels: values.map((r) => ""),
    datasets: [
      {
        label: itemName,
        data: values,
        borderWidth: 1,
        backgroundColor: values.map((v) => {
          return v === targetVal
            ? "rgba(153, 102, 255, 0.2)"
            : "rgba(255, 159, 64, 0.2)";
        }),
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return <Bar type="" data={data} width={100} height={50} options={options} />;
};

export default BarChart;
