import React from "react";
 
import { AreaChart, LineChart , PieChart, BarChart, Histogram, BulletChart, Funnel, HeatMap, Table} from "nr1";
 
import { Grid, GridItem } from "nr1";
 
const index = () => {
  return (
    <div className="heading"><h1>hello everyone!</h1>
 



    <Grid>
        <GridItem columnSpan={6}>
            <div className="heading2"><h1>Area Chart</h1></div>
            <AreaChart
                    accountId={4438252}
                    query="SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzODI1MnxJTkZSQXxOQXw2NDc2MzM3NDM3NDc1NjU2MzE4') TIMESERIES AUTO"
                    fullWidth
                />
        </GridItem>
        <GridItem columnSpan={6}>
        <div className="heading2"><h1>Line Chart</h1></div>
            <LineChart
                    accountId={4438252}
                    query = "SELECT average(diskUsedPercent) AS `Storage used %` FROM StorageSample WHERE (entityGuid = 'NDQzODI1MnxJTkZSQXxOQXw2NDc2MzM3NDM3NDc1NjU2MzE4') TIMESERIES AUTO"
                    fullWidth
                />
        </GridItem>
        
        <GridItem columnSpan={6}>
            <div className="heading2"><h1>Pie Chart</h1></div>
            <PieChart
                accountId ={4438252}    
                query = "SELECT average(loadAverageOneMinute) AS `1 minute`, average(loadAverageFiveMinute) AS `5 minutes`, average(loadAverageFifteenMinute) AS `15 minutes` FROM SystemSample WHERE (entityGuid = 'NDQzODI1MnxJTkZSQXxOQXw2NDc2MzM3NDM3NDc1NjU2MzE4') TIMESERIES AUTO SINCE 30 minutes ago UNTIL now"
                fullWidth
                />
        </GridItem>
        <GridItem columnSpan={6}>
        <div className="heading2"><h1>Bar Chart</h1></div>
        <BarChart 
            accountId = {4438252}
            query = "SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzODI1MnxJTkZSQXxOQXw2NDc2MzM3NDM3NDc1NjU2MzE4') TIMESERIES AUTO"
            fullWidth
            />
        </GridItem>
    </Grid>

    {/*<Histogram
        accountId = {4438252}
        query=""
        fullWidth
        />
    <BulletChart
        accountId = {4438252}
        query=""
        fullWidth
        />
    <Funnel
        accountId = {4438252}
        query=""
        fullWidth
        />
    <HeatMap
        accountId = {4438252}
        query=""
        fullWidth
        />

    <Table
        accountId = {4438252}
        query=""
        fullWidth
        /> */}

    </div>
  );
};
 
export default index;