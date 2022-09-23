import { useContext, useEffect } from "react";
import { Test7Context } from "./context";

const Table = () => {

  const { data } = useContext(Test7Context);


  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {data.map((eachrow) => {
          return (
            <tr key={`${eachrow.name}-${eachrow.age}-${eachrow.address}`}>
              <td>{eachrow.name}</td>
              <td>{eachrow.age}</td>
              <td>{eachrow.address}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table;
