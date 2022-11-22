import React from "react";
import SortableTree from "react-sortable-tree";


const maxDepth = 5;

let treeData=[
  { title: "IT Manager" },
  {
    title: "Regional Manager",
    expanded: true,
    children: [{ title: "Branch Manager" },
    { title: "Branch Manager" },
    { title: "Branch Manager" },
    { title: "Branch Manager" }]
  }
];
const alertNodeInfo = ({ node, path, treeIndex }) => {
  const objectString = Object.keys(node)
    .map((k) => (k === "children" ? "children: Array" : `${k}: '${node[k]}'`))
    .join(",\n   ");

  global.alert(
    "Info passed to the button generator:\n\n" +
      `node: {\n   ${objectString}\n},\n` +
      `path: [${path.join(", ")}],\n` +
      `treeIndex: ${treeIndex}`
  );
};

export default class SortableTreeExample extends React.Component {
  state = {
    treeData,
    nodeClicked: false
  };

  handleTreeOnChange = (treeData) => {
    this.setState({ treeData });
  };

  handleNodeClick = (node) => {
    this.setState({
      nodeClicked: node
    });
  };

  render() {
    const { treeData, nodeClicked } = this.state;

    return (
      <div className="wrapper">
        <div className="tree-wrapper">
          <SortableTree
            treeData={treeData}
            onChange={this.handleTreeOnChange}
            onMoveNode={({ node, treeIndex, path }) =>
              global.console.debug(
                "node:",
                node,
                "treeIndex:",
                treeIndex,
                "path:",
                path
              )
            }
            maxDepth={maxDepth}
            canDrag={({ node }) => false}
            canDrop={() => false}
            isVirtualized={true}
            generateNodeProps={(rowInfo) => {
              const { node } = rowInfo;
              return {
                buttons: [
                  <button
                    className="btn btn-outline-success"
                    style={{
                      verticalAlign: "middle"
                    }}
                    onClick={() => alertNodeInfo(rowInfo)}
                  >
                    ℹ
                  </button>
                ],
                onClick: () => {
                  this.handleNodeClick(node);
                },
                style:
                  node === this.state.nodeClicked
                    ? {
                        border: "3px solid yellow"
                      }
                    : {}
              };
            }}
          />
        </div>
        {nodeClicked && <p>You clicked on {nodeClicked.title}</p>}
      </div>
    );
  }
}
