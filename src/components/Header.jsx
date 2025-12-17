import Input from "./Input";

const Header = ({setList,list }) => {
  return (
    <div>
      <h1 className="oi-regular text-6xl text-center primary-font py-10 ">
        TODO List
      </h1>
        
      <Input setList={setList} list={list}/>
    </div>
  );
};
export default Header;
