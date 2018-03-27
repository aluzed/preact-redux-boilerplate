import { h, Component } from 'preact';
import { bindActionCreators } from 'redux';
import { connect } from 'preact-redux';

import Header from './header';

class Layout extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <div className="page-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => bindActionCreators({
  
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)