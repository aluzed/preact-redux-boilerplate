import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { bindActionCreators } from 'redux';
import style from '../page.less';

class ForbiddenPage extends Component {
  render() {
    return (
      <div className={style.page}>
        <h1>Forbidden</h1>
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
)(ForbiddenPage);
