import React, {  } from 'react';
// import { BTable } from 'react-bootstrap';
import BTable from 'react-bootstrap/Table'
// import { useAuth } from '../contexts/AuthContext'
import {  } from 'react-router-dom'
// import instance from '../axios.setup';
import {useTable} from 'react-table';
import { DateTime } from 'luxon';
import Humanizer from 'humanize-duration-es6';
import en from '../locale/en'

export default function Waitlist() {
  // const [data, setData] = useState({name: '', regDate: ''})
  const data = [
     {
       name: 'Jane Doe',
       regDate: '2020-11-11 13:23:44',
     },
     {
       name: 'Alice Doe',
       regDate: '2020-11-09 15:45:21',
     },
     {
       name: 'Bob Doe',
       regDate: '2020-11-11 11:12:01',
     },
   ]

  //   setData(prevData => {
  //     return {
  //       ...prevData,
  //
  //     }
  //   })
  // console.log(waiters)
  console.log(data)
 const date1 = data[1].regDate
 const h = new Humanizer(en);
 const dateH = h.humanize(DateTime.fromSQL(date1).diffNow(), {largest: 2});

 const columns = React.useMemo(
   () => [
     {
       Header: 'Name',
       accessor: 'name', // accessor is the "key" in the data
     },
     {
       Header: 'Time on waitlist',
       accessor: 'regDate',
     },
   ],
   []
 )
 // const tableInstance = useTable({ columns, data })
 // const {
 //    getTableProps,
 //    getTableBodyProps,
 //    headerGroups,
 //    rows,
 //    prepareRow,
 //  } = tableInstance

  async function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const { getTableProps, headerGroups, rows, prepareRow } = useTable({
      columns,
      data,
    })

    // Render the UI for your table
    return (
      <BTable striped bordered hover size="sm" {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </BTable>
    )
  }
  return (
    <div>
      <Table columns={columns} data={data} />
      <p>Human dates: { dateH}</p>
    </div>

  )

}
