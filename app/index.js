var React = require('react');
var ReactDOM = require('react-dom');

var routes = require('./config/routes');

/*
var USER_DATA = {
	name: 'Tyler McGinnis',
	username: 'tylermcginnis',
	image: 'https://randomuser.me/api/portraits/men/3.jpg'
}

var ProfilePic = React.createClass({
	render: function() {
		return <img src={this.props.uImage} style={{height: 100, width: 100}} />
	}
});

var Link = React.createClass({
	changeURL: function() {
		window.location.replace(this.props.href)	
	},
	render: function() {
		return(
			<span 
				style={{color:'blue', cursor:'pointer'}}
				onClick={this.changeURL}
			>
				{this.props.children}
			</span>
		)
	}
})

var ProfileLink = React.createClass({
	render: function() {
		return(
			<div>
				<Link href={'https://www.github.com/' + this.props.uUsername}>
					{this.props.uUsername}
				</Link>
			</div>
		)
	}
});

var ProfileName = React.createClass({
	render: function() {
		return(
			<div>{this.props.uName}</div>
		)
	}
});

var Avatar = React.createClass({
	render: function() {
		return(
			<div>
				<ProfilePic uImage={this.props.user.image} />
				<ProfileName uName={this.props.user.name} />
				<ProfileLink uUsername={this.props.user.username} />
			</div>
		)
	}
});
*/

ReactDOM.render(
	routes,
	document.getElementById('app')
);

