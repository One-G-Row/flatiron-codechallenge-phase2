
function ListTable({details}){
return(
<div className="table">
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
</tbody>

</table>
</div>
)
}
export default ListTable