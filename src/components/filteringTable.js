import React,{useMemo} from 'react'
import {useTable,useGlobalFilter} from 'react-table';
import MOCK_DATA from './MOCK_DATA.json'
import {COLUMNS} from './columns'
import './style.css'
import { GlobalFilter } from './globalFilter';

export const FilteringTable = () => {
    console.log(MOCK_DATA)
    const columns= useMemo(()=>COLUMNS,[])
    const data=useMemo(()=>MOCK_DATA,[])

   const tableInstance=useTable({
       columns,
       data
    },useGlobalFilter)

    const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow,state,setGlobalFilter}=tableInstance;

    const {globalFilter}=state;

    return (
        <>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
        <table {...getTableProps()} className="" id="customers">
            <thead>
                {
                   headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                              {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                              ))}
                            </tr>
                    ))
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map((row)=>{
                        prepareRow(row)
                        return(
                             <tr {...row.getRowProps()}>
                                {
                                    row.cells.map((cell)=>{
                                      return  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })
                                }
                              </tr>
                        )
                    })
                }
               
            </tbody>
        </table>
       </>
    )
}
