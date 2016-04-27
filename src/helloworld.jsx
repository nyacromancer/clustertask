var Holder = React.createClass({
  render: function(){
    return(
    <div className="container" style={{border:'1px solid',height:120}}>
        <Progressbar />
        <Progressbar />
        <Progressbar />
        <Progressbar />
        <Progressbar />
        <Progressbar />
        <Progressbar />
        <Progressbar />
        <Progressbar />
        <Progressbar />
    </div>
    )
  }
});

var Progressbar = React.createClass({
  getInitialState: function() {
    return {progress:0};
  },
  setThing: function(){
    cur = this.state.progress;
    this.setState({progress: (this.state.progress+Math.random())%100 })
  },
  componentDidMount: function() { setInterval(this.setThing,100)},
  render: function(){
    return(
        <div><div style={{ border:'1px solid green',height:10, background: 'gray', width:this.state.progress+'%'}}></div></div>
    )
  }
});
ReactDOM.render(
    <Holder />,
    $('#example')[0]
);