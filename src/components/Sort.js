import React, { useState } from "react";
import detailsData from "../transactions";
function Sort() {
 const [sortedDescription, setSortedDescription] = useState([])
 const [sortedCategory, setSortedCategory] = useState([])
 
const getDescription = detailsData.map(data =>{
    return data.description
  })

  const getCategories = detailsData.map(data =>{
    return data.categories
  })
 


  return (
    <div>
        <p>{getCategories}</p>
        <p>{getDescription}</p>
      <button className="sort">sort</button>
    </div>
  );
}
export default Sort;
