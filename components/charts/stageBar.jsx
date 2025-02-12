import React from "react";
import { Card, Typography } from "@mui/material";
import { ResponsiveBar } from '@nivo/bar';

export default function StageContBar({ data }) {
  return (
    <div className="">
<Card className="dashboard-card">
                <Typography variant="h6" className="mb-3">Journey Stage Contribution by Vehicle</Typography>
                <div style={{ height: '400px' }}>
                  <ResponsiveBar
                    data={data}
                    keys={['stage1', 'stage2', 'stage3', 'stage4']}
                    indexBy="reg"
                    margin={{ top: 20, right: 130, bottom: 50, left: 60 }}
                    padding={0.3}
                    valueScale={{ type: 'linear' }}
                    colors={{ scheme: 'nivo' }}
                    stacked={true}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: 'Revenue (KSH)',
                      legendPosition: 'middle',
                      legendOffset: -40
                    }}
                    legends={[{
                      dataFrom: 'keys',
                      anchor: 'bottom-right',
                      direction: 'column',
                      justify: false,
                      translateX: 120,
                      translateY: 0,
                      itemsSpacing: 2,
                      itemWidth: 100,
                      itemHeight: 20,
                      itemDirection: 'left-to-right',
                      itemOpacity: 0.85,
                      symbolSize: 20
                    }]}
                  />
                </div>
              </Card>
    </div>
  );
}
