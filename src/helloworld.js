var Holder = React.createClass({
  displayName: 'Holder',

  render: function () {
    return React.createElement(
      'div',
      { className: 'container', style: { border: '1px solid', height: 120 } },
      React.createElement(Progressbar, null),
      React.createElement(Progressbar, null),
      React.createElement(Progressbar, null),
      React.createElement(Progressbar, null),
      React.createElement(Progressbar, null),
      React.createElement(Progressbar, null),
      React.createElement(Progressbar, null),
      React.createElement(Progressbar, null),
      React.createElement(Progressbar, null),
      React.createElement(Progressbar, null)
    );
  }
});

var Progressbar = React.createClass({
  displayName: 'Progressbar',

  getInitialState: function () {
    return { progress: 0 };
  },
  setThing: function () {
    cur = this.state.progress;
    this.setState({ progress: (this.state.progress + Math.random()) % 100 });
  },
  componentDidMount: function () {
    setInterval(this.setThing, 100);
  },
  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement('div', { style: { border: '1px solid green', height: 10, background: 'gray', width: this.state.progress + '%' } })
    );
  }
});
ReactDOM.render(React.createElement(Holder, null), $('#example')[0]);