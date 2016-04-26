
var restyle = function () {
    return 'rgb(' + parseInt(Math.random() * 255) + ', ' + parseInt(Math.random() * 255) + ', ' + parseInt(Math.random() * 255) + ')';
};

var CommentBox = React.createClass({
    displayName: 'CommentBox',

    getInitialState: function () {
        return { rng: 0 };
    },
    setThing: function () {
        this.setState({ rng: restyle() });
    },
    componentDidMount: function () {
        setInterval(this.setThing, 1000);
    },

    render: function () {
        return React.createElement(
            'div',
            { className: 'commentBox' },
            React.createElement(
                'h1',
                { style: { transition: 'color 0.5s ease', color: this.state.rng } },
                'Comments'
            ),
            React.createElement(CommentList, null),
            React.createElement(CommentForm, null)
        );
    }
});
var CommentList = React.createClass({
    displayName: 'CommentList',

    render: function () {
        return React.createElement(
            'div',
            { className: 'commentList' },
            React.createElement(
                Comment,
                { author: 'Pete Hunt' },
                'This is one comment'
            ),
            React.createElement(
                Comment,
                { author: 'Jordan Walke' },
                'This is *another* comment'
            )
        );
    }
});

var CommentForm = React.createClass({
    displayName: 'CommentForm',

    render: function () {
        return React.createElement(
            'div',
            { className: 'commentForm' },
            'Hello, world! I am a CommentForm.'
        );
    }
});
var Comment = React.createClass({
    displayName: 'Comment',

    render: function () {
        return React.createElement(
            'div',
            { className: 'comment' },
            React.createElement(
                'h2',
                { className: 'commentAuthor' },
                this.props.author
            ),
            this.props.children
        );
    }
});
ReactDOM.render(React.createElement(CommentBox, null), $('#example')[0]);