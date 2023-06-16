import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "./counterSlice";
// import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Counter = () => {
  // const { coin } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      {/* <div>
        <div style={{ paddingTop: "200px" }}>
          <h1>Coins: {coin}</h1>
        </div>
      </div> */}
      <Button
        aria-label="Increment value"
        onClick={() => {
          dispatch(increment());
        }}
        variant="contained"
        color="success"
        startIcon={<AddIcon />}
      >
        Increase
      </Button>

      <Button
        className="button"
        aria-label="Decrement value"
        onClick={() => {
          dispatch(decrement());
        }}
        variant="contained"
        color="error"
        startIcon={<RemoveIcon />}
      >
        Decrease
      </Button>

      <Button
        className="button"
        aria-label="Decrement value"
        onClick={() => {
          dispatch(incrementByAmount(10));
        }}
        variant="outlined"
        color="success"
        startIcon={<AddIcon />}
      >
        IncrementBy 10
      </Button>

      <Button
        className="button"
        aria-label="Decrement value"
        onClick={() => {
          dispatch(decrementByAmount(10));
        }}
        variant="outlined"
        color="error"
        startIcon={<RemoveIcon />}
      >
        DecrementBy 10
      </Button>
    </div>
  );
};
export default Counter;
