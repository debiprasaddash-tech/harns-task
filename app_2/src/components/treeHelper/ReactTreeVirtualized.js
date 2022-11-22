import React, { Component } from "react";
import Tree from "react-tree-virtualized";
import "./styles.css";

import { constructTree } from "./virtualizedTreeHelper";
import { data } from "./dummyData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      checked: [],
      expanded: [],
      loading: []
    };
  }

  onCheck = (checked, node) => {
    this.setState({ checked });
  };

  onExpand = (expanded, loading, node) => {
    this.setState({ expanded });
  };

  render() {
    const { checked, expanded, loading } = this.state;
    const nodes = constructTree(data);
    // console.log(nodes);
    return (
      <div className="app-container">
        <Tree
          className="app-container"
          nodes={nodes}
          checked={checked}
          expanded={expanded}
          loading={loading}
          onCheck={this.onCheck}
          onExpand={this.onExpand}
        />
      </div>
    );
  }
}

export default App;
