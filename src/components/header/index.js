import { h, Component } from 'preact';
import { Link } from 'preact-router';
import { bindActionCreators } from 'redux';
import { connect } from 'preact-redux';
import style from './style.less';

class Header extends Component {
  render() {
		return (
			<header class={style.header}>
				<h1>Preact App</h1>
				<nav>
          <Link 
            href="/" 
            className={this.props.location === 'home' ? 'menu-active' : ''}>
              Home
          </Link>
          <Link 
            href="/profile"
            className={this.props.location === 'profile' ? 'menu-active' : ''}>
              Profile
          </Link>
				</nav>
			</header>
		);
	}
}

const mapStateToProps = state => ({
  location: state.app.location
});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);