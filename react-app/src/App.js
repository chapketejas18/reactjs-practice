// import DayOneIndex from "./Day1/DayOneIndex";
// import DayTwoIndex from "./Day2/DayTwoIndex";
import Child from "./Day3/Question1/Child";
import Parent from "./Day3/Question1/Parent";
import MainApp from "./Day3/Question3/MainApp";

export default function App() {
  return (
    <>
      {/* <DayOneIndex/>
      <DayTwoIndex/> */}
      <Parent>
        <Child/>
      </Parent>
      <MainApp/>
    </>
  );
}
