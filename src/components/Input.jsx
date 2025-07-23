import { useRef } from "react";

const Input = ({setList }) => {
  const inputRef = useRef()
  const dateRef = useRef()
  const handleClick = () =>{
    let val = inputRef.current.value
    let date = dateRef.current.value 
    setList(prev => [...prev , {todo : val , hasPriority:false, done :false ,deadline : date} ] )
    inputRef.current.value = ''
    dateRef.current.value =''

  }

  console.log('hello')
  return (
    <div  className="bg-[#1e2030] w-1/2 mx-auto h-13 rounded-2xl flex align-middle">
      <input
        id='input'
        ref={inputRef}
        onKeyDown={e =>{if(e.key === 'Enter')handleClick()}}
        placeholder="TODO"
       className=" w-full  h-full rounded-l-2xl text-[#939ab7] p-4 focus:outline-[#363a4f] focus:outline-1 "
        type="text"
      />
      <input type="time" 
      ref={dateRef}
     
       className=" w-full  h-full text-[#939ab7] p-4 focus:outline-[#363a4f] focus:outline-1 "
      id="deadline" />
     
      <a href='#' onClick={handleClick} className="cursor-pointer w-20 h-full rounded-r-2xl text-3xl text-center flex flex-col justify-center hover:outline-[#363a4f] hover:outline-1">
        📝
      </a>
    </div>
  );
};
export default Input;
