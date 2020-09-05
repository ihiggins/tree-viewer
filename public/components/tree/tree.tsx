import React from 'react';
// import Tree from 'react-d3-tree';
 
const myTreeData = [
  {
    name: 'Top Level',
    attributes: {
      keyA: 'val A',
      keyB: 'val B',
      keyC: 'val C',
    },
    children: [
      {
        name: 'Level 2: A',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
      },
      {
        name: 'Level 2: B',
      },
    ],
  },
];
 
// export default class DTree extends React.Component {

//   state = {
//     didMount: false
//     }
  
//     componentDidMount() {
//     this.setState({
//       didMount: true
//     })
//     }

//   constructor(props){
//     super(props);
//   }
//   render() {

//     return (
    
//       <div id="treeWrapper" style={{width: '50em', height: '20em'}}>
 
//         <div>{this.state.didMount && <Tree data={myTreeData}/>}</div>
 
//       </div>
//     );
//   }
// }

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