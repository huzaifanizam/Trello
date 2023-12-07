import React, { useState } from "react";
import { addlist , addCard} from "../store/listSlices";
import { useDispatch } from "react-redux";

const AddNew = ({type , parentId}) => {
  const [inputVal, setInputVal] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  // console.log("type", type)

  const dispatch = useDispatch();

  const submintHandler = (e) => {
    e.preventDefault();

    if (type) {
      dispatch(addCard({id: Math.random(), title: inputVal,parentId:parentId}))
    } else {
      dispatch(addlist({ id: Math.random(), title: inputVal }));
    }

    hideForm();
      setInputVal("")
  };

  const updateInput = (e) => {
    setInputVal(e.target.value);
  };

  const openForm = () => {
    setIsFormVisible(true);
  };

  const hideForm = () => {
    setIsFormVisible(false);
  };
  return (
    <div>
      <button onClick={openForm}>+ Add{type?" a card":" another list"}</button>
      {isFormVisible && (
        <form onSubmit={submintHandler} className="mt-3">
          <input value={inputVal} onChange={updateInput} className="w-full h-10 p-2"placeholder={type ? "Enter a title for this card..." : "Enter list title..."}/>
          <div className="mt-3 ">
            <button onClick={hideForm} className="mr-3">
              Cancel
            </button>
            <button onClick={submintHandler} className="px-3 py-1 bg-blue-500  ">
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddNew;
