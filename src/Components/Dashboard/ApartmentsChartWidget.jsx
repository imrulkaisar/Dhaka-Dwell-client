import { PieChart } from "react-minimal-pie-chart";

const ApartmentsChartWidget = () => {
  return (
    <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
      <div className="px-6 py-5 font-semibold border-b border-gray-100">
        Percentage of total and available rooms
      </div>
      <div className="p-4 flex-grow">
        <div className="flex items-center justify-center h-full px-4 py-16 text-gray-400 text-sm font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
          <div className="max-w-md">
            <PieChart
              animate={true}
              animationDuration={1000}
              label={({ dataEntry }) => Math.round(dataEntry.percentage) + "%"}
              labelStyle={{
                fontSize: "8px",
                fill: "#fff",
              }}
              data={[
                { title: "Booked", value: 3, color: "#ffc107" },
                { title: "Available", value: 12, color: "#2196f3" },
              ]}
            />
            <div className="flex justify-center gap-5 mt-16">
              <div>
                <span className="w-4 h-1 text-transparent bg-blue-600">00</span>{" "}
                Available
              </div>
              <div>
                <span className="w-4 h-1 text-transparent bg-yellow-600">
                  00
                </span>{" "}
                Booked
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentsChartWidget;
