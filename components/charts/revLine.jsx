import React from "react";
import { Card, Typography } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

export default function RevLineChart({ data }) {
  return (
    <div className="">
      <Card className="dashboard-card">
        <Typography variant="h6" className="mb-3">
          Expected Revenue Trend
        </Typography>
        <div style={{ height: "300px" }}>
          <ResponsiveLine
            data={[
              {
                x: data.time,
                y: data.rev,
              },
            ]}
            margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
            yScale={{ type: "linear" }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Revenue (KSH)",
              legendOffset: -50,
              legendPosition: "middle",
            }}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            enableGridX={false}
            curve="monotoneX"
          />
        </div>
      </Card>
    </div>
  );
}
