import React from 'react';
 
let Tree = ' '
export default class DTree  extends React.PureComponent {
   state = {
   	redender: false
   };
   async componentDidMount() {
   	let res = await import("react-d3-tree");
   	Tree = res.Tree;
   	this.setState({ redender: true, window });
   }
   render() {
    console.log(this.props.data);
   	return <div style={{ height: 1000, width: 1000 }}>{this.state.redender && <Tree data={this.props.data} />}</div>;
   }
}