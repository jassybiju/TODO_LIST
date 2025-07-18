
const List = ({ list, handleDelete ,setList }) => {
  

  

  const handleOnDrag = (e) => {
    e.dataTransfer.setData('text',e.target.id)
    console.log(e.target.id)
    
  };
  const handleOnDrop = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.id)
    const data = (e.dataTransfer.getData('text'))
    // console.log(data)
    let temp = [...list]
   console.log(temp , e.target.id , data)
    let t = temp[e.currentTarget.id]
    temp[e.currentTarget.id] = temp[data]
    temp[data] = t
    setList(temp)
    
    console.log(temp);
  };
  return (
    <div className="  mx-auto lg:w-3/4 overflow-x-auto shadow-md rounded-xl mt-6 ">
      <table className="w-full   text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className=" px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {list.map((x, i) => (
            <tr  
              key={x.todo}
              id = {i}
              draggable="true"
              onDragStart={handleOnDrag}
              onDrop={handleOnDrop}
              onDragOver={(e)=>e.preventDefault()}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {x.todo}
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">
                <a
                  onClick={() => handleDelete(x.todo)}
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default List;
