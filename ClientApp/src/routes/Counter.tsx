import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'rootReducer';
import { increment, decrement, reset } from 'store/counter';
import { Button, ButtonGroup, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  marginTop: {
    marginTop: theme.spacing(2),
  },
}));

function Counter () {
  const classes = useStyles();
  const value = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch()

  return (
    <>
      <Typography className={classes.marginTop} variant="h5">
        Counter
      </Typography>
      <Typography className={classes.marginTop} variant="body2">
        This is a simple example of a React component.
      </Typography>
      <Typography variant="body2" aria-live="polite">
        Current count: <strong>{value}</strong>
      </Typography>
      <ButtonGroup className={classes.marginTop}>
        <Button onClick={() => dispatch(increment())}>
            Increment
        </Button>
        <Button onClick={() => dispatch(reset())}>
            Reset
        </Button>
        <Button onClick={() => dispatch(decrement())}>
            Decrement
        </Button>
      </ButtonGroup>
    </>
  );
}

export default Counter;
