import logo from './logo.svg';
import './App.css';
import {BasicTable} from './components/basicTable.js'
import {SortingTable} from './components/sortingTable.js'
import { FilteringTable } from './components/filteringTable';
import { PaginationTable} from './components/paginationTable'

function App() {
  return (
    <div className="w-full">
      {/* <BasicTable></BasicTable> */}
      {/* <FilteringTable></FilteringTable> */}
      {/* <SortingTable></SortingTable> */}
      <PaginationTable/>
    
    </div>
  );
}

export default App;
