import React from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'
import { defaultNodes } from "./utils";
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView, TreeItem } from "@mui/lab";
import { FixedSizeList } from 'react-window';


const Transtack = () => {
    const [nodes] = useState(() => defaultNodes);

    const rows = new Array(100)
        .fill('hi')
    // .map(() => 25 + Math.round(Math.random() * 100))
    const renderSubtree = ({ id, name, children }) => {
        console.log(id,name,children)
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
    function RowVirtualizerVariable({ rows }) {
        const parentRef = React.useRef()

        const rowVirtualizer = useVirtualizer({
            count: nodes.length,
            getScrollElement: () => parentRef.current,
            estimateSize: (i) => nodes[i],
            overscan: 5,
        })

        console.log(rowVirtualizer.getVirtualItems())
        // return

        return (
            <>
                <div
                    ref={parentRef}
                    className="List"
                    style={{
                        height: `400px`,
                        width: `400px`,
                        overflow: 'auto',
                    }}
                >
                    <div
                        style={{
                            height: `${rowVirtualizer.getTotalSize()}px`,
                            width: '100%',
                            position: 'relative',
                        }}
                    >
                        {rowVirtualizer.getVirtualItems().map((virtualRow) => (
                            <div
                                key={virtualRow.index}
                                className={virtualRow.index % 2 ? 'ListItemOdd' : 'ListItemEven'}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: `${rows[virtualRow.index]}px`,
                                    transform: `translateY(${virtualRow.start}px)`,
                                }}
                            >
                                <TreeView
                                    defaultExpandIcon={<ChevronRightIcon />}
                                    defaultCollapseIcon={<ExpandMoreIcon />}
                                >
                                    {console.log(virtualRow.size.children)}
                                    <VirtualizedList nodes={nodes}  />
                                </TreeView>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }

    return (
        <div>
            <RowVirtualizerVariable rows={rows} />
        </div>
    )
}

export default Transtack