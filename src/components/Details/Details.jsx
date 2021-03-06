import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";

import useStyles from './styles'
import useTransaction from "../../hooks/useTransaction";

const Details = ({title}) => {
  const classes = useStyles();
  const { total, chartData, chartOptions } = useTransaction({title});

  return (
    <Card className={classes.cardTracker}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData} options={chartOptions} />
      </CardContent>
    </Card>
  );
};

export default Details;
