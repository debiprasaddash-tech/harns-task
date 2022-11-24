import React from "react";
import _ from "lodash";
import Tree, { renderers, FilteringContainer,  } from "react-virtualized-tree";

import { constructTree } from "./treeHelper/virtualizedTreeHelper";
import "react-virtualized/styles.css";
import "react-virtualized-tree/lib/main.css";
import "material-icons/css/material-icons.css";
import { data } from "./treeHelper/dummyData";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
const { Expandable } = renderers;

const SELECT = 2;

const Selection = ({ node, children, onChange }) => {
  const { state: { selected } = {} } = node;


  return (
    <span>
      {selected ? <CheckBoxIcon onClick={() =>
          onChange({
            node: {
              ...node,
              state: {
                ...(node.state || {}),
                selected: !selected
              }
            },
            type: SELECT
          })}/> : <CheckBoxOutlineBlankIcon 
          onClick={() =>
            onChange({
              node: {
                ...node,
                state: {
                  ...(node.state || {}),
                  selected: !selected
                }
              },
              type: SELECT
            })}/>}
      {children}
    </span>
  );
};

const LargeCollection = (props) => {
  const { data } = props;
  const [n, setN] = React.useState(data);

  const [maskIds, setMaskIds] = React.useState([]);

  const handleChange = (nodes) => {
    setN(nodes);
  };

  const handleSelection = (node) => {
    const isChecked = node.state.selected;
    const value = _.isArray(node.type) ? node.type : [node.type];
    const flattenArray = _.flattenDeep(value);
    const maskIdArray = _.cloneDeep(maskIds);

    if (!isChecked) {
      _.pullAll(maskIdArray, flattenArray);
      setMaskIds(maskIdArray);
      return;
    } else {
      _.pullAll(value, maskIdArray);

      maskIdArray.push(...flattenArray);
      setMaskIds(maskIdArray);
    }
  };

  const selectNodes = (nodes, selected) =>
    nodes.map((n) => ({
      ...n,
      children: n.children ? selectNodes(n.children, selected) : [],
      state: {
        ...n.state,
        selected
      }
    }));

  const nodeSelectionHandler = (nodes, updatedNode) => {
    handleSelection(updatedNode);
    return nodes.map((node) => {
      if (node.id === updatedNode.id) {
        return {
          ...updatedNode,
          children: node.children
            ? selectNodes(node.children, updatedNode.state.selected)
            : []
        };
      }

      if (node.children) {
        return {
          ...node,
          children: nodeSelectionHandler(node.children, updatedNode)
        };
      }

      return node;
    });
  };

  console.log("mask", maskIds);
  return (
    <FilteringContainer nodes={n} >
      {({ nodes }) => {
        return (
          <div style={{ height: 400 }}>
            <Tree
              nodes={nodes}
              onChange={handleChange}
              extensions={{
                updateTypeHandlers: {
                  [SELECT]: nodeSelectionHandler
                }
              }}
            >
              {({ style, node, ...rest }) => (
                <div style={style}>       
                  <Expandable node={node} {...rest}   >
                    <Selection node={node} {...rest}>
                      {node.label}
                    </Selection>
                  </Expandable>
                </div>
              )}
            </Tree>
          </div>
        );
      }}
    </FilteringContainer>
  );
};

export default function ReactTreeVirtualized() {
  const Nodes = constructTree(data);
  console.log("rrrrrrrrrrrrr", Nodes);
  return <LargeCollection data={Nodes} />;
}
