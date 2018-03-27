/**
 * {{originalName}} Preact Component
 *
 */
import { h, Component } from 'preact';
import { bindActionCreators } from 'redux';
import { connect } from 'preact-redux';

class {{componentName}} extends Component {
  render() {
    return null;
  }
}

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => bindActionCreators({
  
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)({{componentName}});