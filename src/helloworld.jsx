
var restyle = function () {
      return  'rgb(' + parseInt(Math.random() * 255) + ', ' + parseInt(Math.random() * 255) + ', ' + parseInt(Math.random() * 255) + ')'
};

var CommentBox = React.createClass({
    getInitialState: function() {
      return {rng: 0};
    },
    setThing: function(){
      this.setState({rng: restyle() })
    },
    componentDidMount: function() { setInterval(this.setThing,1000)},

    render: function () {
        return (
            <div className="commentBox">
                <h1 style={{transition: 'color 0.5s ease',color: this.state.rng}}>Comments</h1>
                <CommentList />
                <CommentForm />
            </div>
        );
    }
});
var CommentList = React.createClass({
    render: function () {
        return (
            <div className="commentList">
                <Comment author="Pete Hunt">This is one comment</Comment>
                <Comment author="Jordan Walke">This is *another* comment</Comment>
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function () {
        return (
            <div className="commentForm">
                Hello, world! I am a CommentForm.
            </div>
        );
    }
});
var Comment = React.createClass({
    render: function () {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {this.props.children}
            </div>
        );
    }
});
ReactDOM.render(
    <CommentBox />,
    $('#example')[0]
);