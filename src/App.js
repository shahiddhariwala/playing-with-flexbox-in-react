import "./styles.css";

const colorsArray = [
  "#2c2c54",
  "#c0392b",
  "#f39c12",
  "#1abc9c",
  "#3498db",
  "#9b59b6",
  "#34495e",
  "#2ecc71",
  "#8e44ad",
  "#3d3d3d",
  "#e67e22",
  "#2980b9",
  "#27ae60",
  "#40407a",
  "#f1c40f",
  "#182C61",
  "#e74c3c",
  "#2c3e50",
  "#d35400",
  "#273c75",
  "#192a56",
  "#c23616",
  "#3B3B98",
  "#4b4b4b",
  "#17c0eb"
];

export default function App() {
  return (
    <div className="App">
      <div className="box">{getAllBoxes(2)}</div>
      <input type="number" />
      <button onC>submit</button>
    </div>
  );
}

const getAllBoxes = (numberOfBoxes = 1) => {
  let boxesArray = [];

  const parentHeight = 300;
  const boxesHeight = parentHeight / numberOfBoxes;
  console.log(boxesHeight);
  for (let x = 0; x < numberOfBoxes; x++) {
    boxesArray.push(
      <SmallBoxes height={boxesHeight} backgroundColor={"red"} />
    );
  }
  return boxesArray;
};

const SmallBoxes = ({ height, backgroundColor }) => {
  return (
    <>
      <div
        className="innerSqaure"
        styles={{ height: height, width: height, backgroundColor }}
      ></div>
    </>
  );
};
