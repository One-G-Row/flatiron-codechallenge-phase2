

function ListTable({details, addObjs}){

return(
<div className="table" >
<table> 
    <thead>
    <tr>
    <th>Date</th>
    <th>Description</th>
    <th>Category</th>
    <th>Amount</th>
    </tr>
    </thead>
<tbody>
{details.map((detail, index)=> {
  return  <tr key={index}>
    <td>{detail.date}</td>
    <td>{detail.description}</td>
    <td>{detail.category}</td>
    <td>{detail.amount}</td>
</tr>
})}

{/* adding the new transaction to the list table */}
{addObjs.map((addObj) => { 
  return <tr key={addObj.id}>
  <td>{addObj}</td>
  </tr> 
    
 })} 
 

{/* <tr>
<td>{addObjs}</td>
</tr>  */}

{/* {addObj.map((obj, index)=>{
<tr key={index}>
<td>{addObj}</td>
    <td>{addObj}</td>
    <td>{addObj}</td>
    <td>{addObj}</td>
</tr>
})} */}

</tbody>

</table>
</div>
)
}
export default ListTable