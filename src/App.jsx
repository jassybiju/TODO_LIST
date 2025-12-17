import { useEffect, useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import ShowDeadlines from "./components/ShowDeadlines";
import Navbar from "./components/Navbar";
import localforage from "localforage";
// import Sample from "./components/Sample";

const App = () => {
  const [list, setList] = useState([]);
  // const [name , setName] = useState('')
  const [doneShow, setDoneShow] = useState(null); //* shows reverse, possible value ( null : All , true : TODO , false : Completed)
  const handleDelete = (listVal) => {
    setList((prev) => prev.filter((x) => x.todo !== listVal));
  };

  useEffect(() => {
    localforage.getItem("todo", (err, val) => {
      setList(JSON.parse(val));
    });
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "";
      localforage.setItem("todo", JSON.stringify(list));

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
      {/* <Sample setName={setName} name={Jassy}/>
      {name} */}
    </div>
  );
};
export default App;
