import { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";

const App = () => {
  const [list, setList ] = useState([])

  const handleDelete=(listVal)=>{
    
    setList(prev => prev.filter(x => x!==listVal))
  }

  return <div>
      <Header setList={setList}/>
      <List list={list} handleDelete={handleDelete} />
  </div>;
};
export default App;
