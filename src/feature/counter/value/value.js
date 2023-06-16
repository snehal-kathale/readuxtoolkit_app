import { useSelector } from "react-redux";
const Value = () => {
  const { coin } = useSelector((state) => state.counter);
  return (
    <div style={{ paddingTop: "100px" }}>
      <h1>Coins: {coin}</h1>
    </div>
  );
};

export default Value;
