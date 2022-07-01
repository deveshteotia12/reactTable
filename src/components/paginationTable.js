import React,{useMemo} from 'react'
import {useTable,usePagination,useGlobalFilter} from 'react-table';
import MOCK_DATA from './MOCK_DATA.json'
import {COLUMNS} from './columns'
import { GlobalFilter } from './globalFilter';
import './style.css'

export const PaginationTable = () => {
    console.log(MOCK_DATA)
    const columns= useMemo(()=>COLUMNS,[])
    const data=useMemo(()=>MOCK_DATA,[])

   const tableInstance=useTable({
       columns,
       data
    },useGlobalFilter,usePagination)

    const {getTableProps,getTableBodyProps,headerGroups,page,prepareRow,nextPage,previousPage,canNextPage,canPreviousPage,pageOptions,state,setPageSize,setGlobalFilter}=tableInstance;
    const {pageIndex,pageSize,globalFilter}=state

    return (
        <div className="w-full  absolute text-center mt-5">
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
        <table {...getTableProps()} className="relative left-1/2 transform -translate-x-1/2 " id="customers">
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
                    page.map((row)=>{
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
        <div className='mt-5'>
            <span className="mr-3">
                Page{' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>
            </span>
            <button className="px-4 py-1 border bg-blue-400" onClick={()=> previousPage()} disabled={!canPreviousPage}>Prev</button>
            <button className="px-4 py-1 border bg-blue-400" onClick={()=> nextPage()} disabled={!canNextPage}>Next</button>
        </div>
        </div>
    )
}
