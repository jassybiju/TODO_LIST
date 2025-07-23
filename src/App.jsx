import { useEffect, useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import ShowDeadlines from "./components/ShowDeadlines";
import Navbar from "./components/Navbar";

const App = () => {
  const [list, setList] = useState([]);
  const [doneShow, setDoneShow] = useState(null); //* shows reverse, possible value ( null : All , true : TODO , false : Completed)
  console.log(list);
  const handleDelete = (listVal) => {
    setList((prev) => prev.filter((x) => x.todo !== listVal));
  };

  useEffect(() => {
    console.log("get data from localStorage");
    const data = localStorage.getItem("todo");
    setList(JSON.parse(data));
    console.log(JSON.stringify(list));
    console.log("hello from nowhere");
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "";
      console.log(list);
      console.log("hello from unload");

      localStorage.setItem("todo", JSON.stringify(list));
      console.log(localStorage.getItem("todo"));
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [list]);
  return (
    <div className="">
      <Header setList={setList} list={list} />
      <Navbar doneShow={doneShow} setDoneShow={setDoneShow} />
      <List
        list={list}
        doneShow={doneShow}
        handleDelete={handleDelete}
        setList={setList}
      />
      <ShowDeadlines list={list} setList={setList} />
    </div>
  );
};
export default App;
