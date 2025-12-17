import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import Toast from "./Toast";

const ShowDeadlines = ({ list, setList }) => {
  let toastListRef = useRef([]);

  useEffect(() => {
    console.log(`-----Show Deadlines RAN -----`);
    const timer = setInterval(() => {
      let time = new Date()
        .toLocaleTimeString("en-US", { hour12: false })
        .slice(0, 5);
      console.log(time);

      if (list.some((x) => x.deadline === time && x.done === false)) {
        console.log("TOAST");

        toastListRef.current = list.filter((x) => x.deadline == time);

        setList(
          list.map((x) => (x.deadline !== time ? x : { ...x, done: true }))
        );
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [list]);
  return createPortal(
    <div className="absolute right-0 m-2">
      {" "}
      {toastListRef.current.map((x) => (
        <Toast todo={x.todo} />
      ))}{" "}
    </div>,
    document.getElementById("root")
  );
};
export default ShowDeadlines;
