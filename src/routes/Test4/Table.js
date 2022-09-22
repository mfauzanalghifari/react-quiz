const Table = ({currentData}) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
        { currentData.map(data => {
          return (
            <tr key={`${data.name}-${data.age}-${data.address}`}>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.address}</td>
            </tr>)
        }) }
      </thead>
    </table>
  )
}

export default Table;
