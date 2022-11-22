import React from 'react'
import Tree from 'react-virtualized-tree-view'

const TreeviewVirtualized = () => {
  return (
    <>
    <Tree
        items={[
          {
            id: 1,
            rootId: null,
            text: "root"
          },
          // First siblings
          { text: "sibling A 1", id: 2, rootId: 1 },
          { text: "sibling A 2", id: 3, rootId: 1 },
          { text: "sibling A 3", id: 4, rootId: 1 },

          // Second siblings
          { text: "sibling B 1", id: 5, rootId: 2 },
          { text: "sibling B 2", id: 6, rootId: 2 },

          // Third siblings
          { text: "sibling C 1", id: 7, rootId: 5 },
          { text: "sibling C 2", id: 8, rootId: 5 },
          { text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },{ text: "sibling C 3", id: 9, rootId: 6 },
          { text: "sibling C 4", id: 10, rootId: 6 },
        ]}
      />
    </>
  )
}

export default TreeviewVirtualized