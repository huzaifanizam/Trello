import React from "react";
import Card from "./Card";
import AddNew from "./AddNew";
import { useSelector } from "react-redux";

const List = () => {
  const listItem = useSelector((store) => store.listSlices.list);
  return (
    <>
      {listItem.map((list) => (
        <div className="p-3  w-1/3" key={list.id}>
          <div className="p-3 bg-gray-700 text-gray-400 shadow-sm border rounded-lg">
            <div key={list.id} className="mt-2 mb-4">
              {list.title}
            </div>
            {list?.children?.length > 0 &&
              list.children.map((children) => (
                <Card key={children.id } cardInfo={children}  />
              ))}
            {/* {list.children.length > 0 && list.children.map((children)=><Card key={children.id} cardInfo={children} />)} */}
            <div className="mt-3 p-3 rounded-lg bg-gray-600 text-gray-400 shadow-sm border">
              <AddNew type="card" parentId={list.id} />
            </div>
          </div>
        </div>
      ))}
      <div className="p-3 w-1/3">
        <div className="p-3 bg-gray-700 text-gray-400   shadow-sm border ">
          <AddNew />
        </div>
      </div>
    </>
  );
};

export default List;
