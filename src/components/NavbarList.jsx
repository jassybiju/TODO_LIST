const NavbarList = (props) => {
  return props.show === true ? (
    <div onClick={props.onClick} className="bg-white px-9 py-3 rounded-full font-bold uppercase hover:bg-gray-500 ">
      {props.children}
    </div>
  ) : (
    <div onClick={props.onClick} className="text-white px-9 py-3 rounded-full font-bold uppercase hover:bg-gray-400 ">
      {props.children}
    </div>
  );
};
export default NavbarList;
