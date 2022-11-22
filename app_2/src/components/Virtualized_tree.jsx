import React, { useState } from "react";
import { TreeView, TreeItem } from "@mui/lab";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { defaultNodes } from "./utils";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList } from "react-window";

const appStyles = {
  display: "flex",
  height: "100%"
};

const sideStyles = {
  display: "flex",
  flexDirection: "column",
  width: "300px",
  height: "100%",
  backgroundColor: "#e2e2e2"
};

const renderSubtree = ({ id, name, children }) => {
  return (
    <TreeItem key={id} nodeId={id} label={name}>
      {Array.isArray(children)
        ? children.map((node) => renderSubtree(node))
        : null}
    </TreeItem>
  );
};

const VirtualizedRow = ({ index, data, style }) => {
  const node = data[index];
  const { id, name, children } = node;
  return (
    <div style={{ ...style, padding: "16px" }}>
      <div style={{ height: "30px", lineHeight: "30px" }}>search</div>
      <TreeItem key={id} nodeId={id} label={name}>
        {Array.isArray(children)
          ? children.map((currentNode) => renderSubtree(currentNode))
          : null}
      </TreeItem>
    </div>
  );
};

const VirtualizedList = ({ nodes }) => {
  // const { width, height } = size;
  console.log(nodes);

  return (
    <FixedSizeList
      width={300}
      height={400}
      itemCount={nodes.length}
      itemSize={24}
      itemData={nodes}
    >
      {VirtualizedRow}
    </FixedSizeList>
  );
};

export default () => {
  const [nodes] = useState(() => defaultNodes);

  return (
    <div style={appStyles}>
      <div style={sideStyles}>
        {/* <AutoSizer style={{ width: "100%", height: "100%" }}>
          {(size) => ( */}
            <TreeView
              defaultExpandIcon={<ChevronRightIcon />}
              defaultCollapseIcon={<ExpandMoreIcon />}
            >
              <VirtualizedList nodes={nodes}  />
            </TreeView>
          {/* )}
        </AutoSizer> */}
      </div>
    </div>
  );
};
// import React from 'react'

// const Virtualized_tree = () => {
//   return (
//     <div>Virtualized_tree</div>
//   )
// }

// export default Virtualized_tree