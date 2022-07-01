import React from 'react'

export const GlobalFilter = ({filter,setFilter}) => {
  return (
    <span>
        <input className="px-2 py-1 border-2 border-rounded bg-slate-100 w-3/4" placeholder='Filter through records' value={filter || ''} onChange={(e)=>setFilter(e.target.value)}></input>
    </span>
  )
}
