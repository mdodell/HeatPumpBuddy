import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, reset} from "../reducers/slices/counter";
import Button from "@material-ui/core/Button";

export default function Index() {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch();
  return <Grid container justify="center">
    <Grid container item xs={12} justify="center">
      <Typography variant="h1">Hello from Material-UI!</Typography>
    </Grid>
    <Grid container item xs={12} justify="center">
      <Typography variant="h3">Count is: {count}</Typography>
    </Grid>
    <Grid container item xs={3} justify="center">
      <Button variant="outlined" color="primary" onClick={() => dispatch(increment())}>+</Button>
    </Grid>
    <Grid container item xs={3} justify="center">
      <Button variant="outlined" color="primary" onClick={() => dispatch(decrement())}>-</Button>
    </Grid>
    <Grid container item xs={3} justify="center">
      <Button variant="outlined" color="primary" onClick={() => dispatch(reset())}>Reset</Button>
    </Grid>
  </Grid>
}
