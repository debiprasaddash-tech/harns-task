// import React, { useState } from 'react';
// import './App.css';
// import Search from './components/Search';
// import Virtualized_tree from './components/Virtualized_tree';


// function App() {
//   const [inputData, setInputData] = useState("")
//   const [listData, setListData] = useState([])

//   const [searchText, setSearchText] = useState("")
//   const [filterCheck, setFilterCheck] = useState(false)
//   const [searchCheck, setSearchCheck] = useState(false)

//   const [dropdownData, setDropdownData] = useState("")

//   const handleSubmit = () => {
//     console.log(listData)
//     if (inputData) {
//       setListData(
//         [...listData,
//         {
//           inputdata: inputData,
//           status: false
//         }]
//       )
//     }
//     setInputData("")
//   }

//   const statusChange = (i, data) => {
//     listData[i].status = true
//     listData[i].inputdata = data
//     setListData([...listData])
//   }
//   const handleSearch = () => {
//     if (searchText) {
//       setSearchCheck(true)
//     }
//   }

//   const handleCompleted = (e) => {
//     setDropdownData(e.target.value)
//     if (e.target.value === "all") {
//       setFilterCheck(false)
//     } else {
//       console.log(e.target.value)
//       setFilterCheck(true)
//     }
//   }

//   const renderData = (data) => {
//     return <>
//       {
//         data.map((p, i) => {
//           return (
//             <div key={i}>
//               <div onClick={() => { statusChange(i, p?.inputdata) }}
//                 style={p.status ? { fontSize: 20, fontWeight: 500, color: "green", cursor: "pointer" } : { fontSize: 20, fontWeight: 500, cursor: "pointer" }}>{p?.inputdata}</div>
//             </div>
//           )
//         })
//       }
//     </>
//   }

//   return (
//     <div className='App'>
//       <div style={{ display: "flex", justifyContent: 'space-evenly', margin: 10 }}>
//         <div>
//           <input type="text" onChange={(e) => { setSearchCheck(false); setSearchText(e.target.value) }} value={searchText} />
//           <button style={{ marginInline: 2 }} onClick={handleSearch}>Search</button>
//           <button onClick={() => { setSearchText(""); setSearchCheck(false) }}>clear</button>
//         </div>

//         <select name="" id="" onChange={handleCompleted} defaultValue='all'>
//           <option value="all">All</option>
//           <option value={true}>Completed</option>
//           <option value={false}>Not Completed</option>
//         </select>
//       </div>
//       <input type="text" onChange={(e) => { setInputData(e.target.value) }} placeholder="Add new todo" value={inputData} />
//       <button style={{ marginInline: 15 }}
//         onClick={handleSubmit}>Submit</button>


//       <div>
//         {searchCheck && filterCheck ? renderData(listData.filter(data => data.inputdata === searchText || data.inputdata.includes(searchText))?.filter(data => data.status === (dropdownData === "false" ? false : true))) :
//           searchCheck ? renderData(listData.filter(data => data.inputdata === searchText || data.inputdata.includes(searchText))) :
//             filterCheck ? renderData(listData.filter(data => data.status === (dropdownData === "false" ? false : true))) :
//               renderData(listData)
//         }
//       </div>
//       <Search />

//       <Virtualized_tree />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { TreeView, TreeItem } from "@mui/lab";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { defaultNodes } from "./components/utils";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList } from "react-window";
import Muilists from "./components/Muilists";
import VtreeExample from "./components/VtreeExample";
import Search from "./components/Search";
import SortableTreeExample from "./components/SortableTreeExample";
import Virtualized_tree from "./components/Virtualized_tree";
import Tree from "./tree";
import { data } from "./tree/data";
import Transtack from "./components/Transtack";
import FormTest from "./components/FormTest";
import ReactTreeVirtualized from "./components/ReactTreeVirtualized";

const appStyles = {
  display: "flex",
  height: "100%"
};

const sideStyles = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  // height: "100%",
  backgroundColor: "none"
};

const renderSubtree = ({ id, name, children }) => (
  <TreeItem key={id} nodeId={id} label={name} style={{}}>
    {Array.isArray(children)
      && children.map((node) => renderSubtree(node))
    }
  </TreeItem>
);


// const VirtualizedRow = ({ index, data, style }) => {
//   const node = data[index];
//   const { id, name, children } = node;
//   return (
//     <>
//       <TreeItem key={id} nodeId={id} label={name} style={style}>
//         {Array.isArray(children)
//           && children.map((currentNode) => renderSubtree(currentNode))
//         }
//       </TreeItem>
//     </>
//   );
// };
const VirtualizedRow = ({ index, data, style }) => (
  <>
    <TreeItem key={data[index].id} nodeId={data[index].id} label={data[index].name} style={style}>
      {Array.isArray(data[index].children)
        && data[index].children.map((currentNode) => renderSubtree(currentNode, style))
      }
    </TreeItem>
  </>
)
const VirtualizedList = ({ nodes, size }) => {
  const { width, height } = size;
  console.log(nodes);

  return (
    <FixedSizeList
      // style={{ overflow: "auto" }}
      // className="List"
      width={width}
      height={150}
      itemCount={nodes.length}
      itemSize={24}
      itemData={nodes}
    >
      {VirtualizedRow}
    </FixedSizeList>
  );
};
function App() {
  const [nodes] = useState(() => defaultNodes);

  return (
    <div style={appStyles}>
      <div style={sideStyles}>
        {/* <Muilists/> */}
        {/* <Search /> */}
        {/* <AutoSizer style={{ width: 100, height: "100vh" }}>
          {(size) => ( */}
        {/* <TreeView
          defaultExpandIcon={<ChevronRightIcon />}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpanded={['root', 'root-child-2']}
        >
          {<VirtualizedList nodes={nodes} size={{ width: 600, height: 800 }} />}
        </TreeView> */}

        {/* )}
        </AutoSizer> */}
        {/* <Virtualized_tree/> */}
        {/* <VtreeExample /> */}
        {/* <SortableTreeExample/> */}
        {/* <Tree width={500} items={data} height={500} /> */}
        {/* <Transtack /> */}
        {/* <TreeviewVirtualized /> */}
        <ReactTreeVirtualized />
        {/* <FormTest/> */}
      </div>
    </div>
  );
};

export default App;

// import React from 'react'
// import Tree from 'react-virtualized-tree-view'

// const App = () => {
//   return (
//     <>
//     <Tree
//         items={[
//           {
//             id: 1,
//             rootId: null,
//             text: "root"
//           },
//           // First siblings
//           { text: "sibling A 1", id: 2, rootId: 1 },
//           { text: "sibling A 2", id: 3, rootId: 1 },
//           { text: "sibling A 3", id: 4, rootId: 1 },

//           // Second siblings
//           { text: "sibling B 1", id: 5, rootId: 2 },
//           { text: "sibling B 2", id: 6, rootId: 2 },

//           // Third siblings
//           { text: "sibling C 1", id: 7, rootId: 5 },
//           { text: "sibling C 2", id: 8, rootId: 5 },
//           { text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
//           { text: "sibling C 4", id: 10, rootId: 6 },
//         ]} 
//       />
//     </>
//   )
// }

// export default App