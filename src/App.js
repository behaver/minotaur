import TabBar from './TabBar';

function App() {
  return (
    <div className="App">
      <TabBar></TabBar>
      {this.props.children}
    </div>
  );
}

export default App;