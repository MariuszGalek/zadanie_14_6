var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    multiply: function() {
        this.setState({
            counter: this.state.counter *2
        });
    },

    divide: function() {
        this.setState({
            counter: this.state.counter /2
        });
    },

    render: function() {
        return React.createElement('div', {className: 'counter'},
            React.createElement('span', {}, 'Counter: ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, ' +1 '),
            React.createElement('button', {onClick: this.decrement}, ' -1 '),
            React.createElement('button', {onClick: this.multiply}, " *2 "),
            React.createElement('button', {onClick: this.divide}, " /2 "))
        },

    getDefaultProps: function() {
        console.log("getDefaultProps: set some default props, if there were no props set while creating an isntance");
    },

    componentWillMount: function() {
        console.log("componentWillMount: possibility to handle configuration and prepare for a render");
    },

    componentDidMount: function() {
        console.log("componentDidlMount: a new element has been created and we can update it, like attach an event listener or update state variables");
    },

    componentWillReceiveProps: function() {
        console.log("componentWillReceiveProps: I have an access to current and next props, so I can check hich props will change and if the change is significant, I can make some action");
    },

    shouldComponentUpdate: function() {
        console.log("shouldComponentUpdate: if we want to make optimalization of our app, we can compare props and if the result is true, this element will be updated");
        return true;
    },

    componentWillUpdate: function() {
        console.log("componentWillUpdate: method shouldComponentUpdate was true, so we can add another function before an update");
    },

    componentDidUpdate: function() {
        console.log("componentDidUpdate: after an update we have an access to new props, we can make some operations on DOM tree");
    },

    componentWillUnmount: function() {
        console.log("componentWillUnmount: we can remove actions added in componentDidMount method, like update state variables or unattach event listener");
    }
});

var element = React.createElement('div', {},
    React.createElement(Counter, {}),
    React.createElement(Counter, {})
);
ReactDOM.render(element, document.getElementById('app'));