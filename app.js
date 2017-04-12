class GroceryListItem extends React.Component {
  
  constructor(props) {
    super(props);
    // this.state = {
    //   done: false
    // };
  }

  // onListItemHover() {
  //   this.setState({
  //     done: !this.state.done  
  //   });
  // }

  render() {
    
    // var style = {
    //   fontWeight: this.state.done ? 'bold' : 'none'  
    // }; 

    return (
      // <li>style={style} onClick={this.onListItemHover.bind(this)}>{this.props.grocery}</li>
      <li>{this.props.grocery}</li>
    );

  }

}

var GroceryList = (props) => (
  <ul>
    {props.groceries.map(grocery => 
      <GroceryListItem grocery={grocery}/>
    )}
  </ul>
);

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceries={['Strawberry', 'Almond', 'Walnut', 'Milk', 'Water']}/>
  </div>
);

ReactDOM.render(<App/>, document.getElementById('app'));


