import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { bindActionCreators } from 'redux';
import style from '../page.less';

class NotFoundPage extends Component {
  render() {
    return (
      <div class={style.page}>
        <h1>Not Found</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotFoundPage);
