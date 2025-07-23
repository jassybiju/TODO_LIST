import NavbarList from "./NavbarList";

const Navbar = ({doneShow, setDoneShow}) => {
  
  return <div className="mx-auto w-1/3 px-1 py-1 my-5 bg-gray-700 rounded-full flex justify-between">
    <NavbarList show={doneShow === null} onClick={()=>setDoneShow(null)}>All</NavbarList>
    <NavbarList show={doneShow === false} onClick={()=>setDoneShow(false)}>Completed</NavbarList>
    <NavbarList show={doneShow === true} onClick={()=>setDoneShow(true)}>Todo</NavbarList>
  </div>;
};
export default Navbar;
