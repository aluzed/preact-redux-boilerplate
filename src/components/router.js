import { h, Component } from 'preact';
import { bindActionCreators } from 'redux';
import { Router } from 'preact-router';
import { connect } from 'preact-redux';

import { activateMenu } from './reducers/appReducer';

import Layout from './layout';
import HomePage from './pages/home';
import ForbiddenPage from './pages/forbidden';
import NotFoundPage from './pages/notfound';
import ProfilePage from './pages/profile';

class AppRouter extends Component {
  constructor(props) {
    super(props);

    this.setLocation = this.setLocation.bind(this);
  }

  /** 
   * @entry checkUrl
   * @type Method
   *  
   * On each redirection, check path and set active menu
   *
   * @param {String} location
   */
  setLocation(location) {
    let profileReg = new RegExp(/^\/profile/);
    switch (location) {
      case '/':
        this.props.activateMenu('home');
        break;
      case (profileReg.test(location) ? location : null):
        this.props.activateMenu('profile');
        break;
    }
  }

  render() {
    return (
      <Layout>
        <Router onChange={e => this.setLocation(e.url)}>
          <HomePage path="/" />
          <ProfilePage path="/profile/" user="me" />
          <ProfilePage path="/profile/:user" />
          <ForbiddenPage path="/forbidden" />
          <NotFoundPage default />
        </Router>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({
  activateMenu
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);