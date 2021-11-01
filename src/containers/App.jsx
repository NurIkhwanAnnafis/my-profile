import '../../src/styles/App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData, createData, updateData, deleteData } from '../stores/actions/app.action';
import ModalContent from '../components/ModalContent';
import moment from 'moment';
import ButtonBack from '../components/Button/ButtonBack';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isModalVisible: false,
      formValues: {},
      titleModal: 'Create'
    };
  }

  componentDidMount(){
    this.props.fetchData();
  }

  handleCreate = () => {
    this.setState({ isModalVisible: true, formValues: {}, titleModal: 'Create' });
  };

  handleUpdate = val => {
    this.setState({ isModalVisible: true, formValues: val, titleModal: 'Update' });
  };

  handleCancel = () => {
    this.setState({ isModalVisible: false, formValues: {}, titleModal: 'Create' });
  };

  onSubmitContent = val => {
    const { createData, updateData, data } = this.props;
    if(val.id){
      updateData(Object.assign(val, { createdAt: moment().format('YYYY-MM-DD HH:mm') }));
    } else {
      const id = data.listDataUnFinished.length + data.listDataDone.length + 1;
      createData(Object.assign(val, { id, createdAt: moment().format('YYYY-MM-DD HH:mm') }));
    }
  };

  onDeleteContent = val => {
    const { deleteData } = this.props;
    deleteData(val);
  };

  render() {
    const { data } = this.props;
    const otherProps = {
      handleCreate: this.handleCreate,
      handleUpdate: this.handleUpdate,
      handleCancel: this.handleCancel,
      onSubmitContent: this.onSubmitContent,
      onDeleteContent: this.onDeleteContent
    }
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12 text-center mb-5 d-flex justify-content-between">
            <ButtonBack />
            <h3 className="text-center">To do application</h3>
            <div />
          </div>
          <div className="col-md-12 text-center mb-5">
            <button type="button" onClick={this.handleCreate}>Create To do</button>
          </div>
          <div className="col-md-6 border">
            <p>List Data (not finished)</p>
            <ul>
              {data.listDataUnFinished.map(item => (
                <li className="data-list" onClick={() => this.handleUpdate(item)}>{item.title}</li>
              ))}
            </ul>
          </div>
          <div className="col-md-6 border">
            <p>List Data (done)</p>
            <ul>
              {data.listDataDone.map(item => (
                <li className="data-list" onClick={() => this.handleUpdate(item)}>{item.title}</li>
              ))}
            </ul>
          </div>
        </div>
        <ModalContent {...this.state} {...this.props} {...otherProps} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.app
})

export default connect(mapStateToProps, { fetchData, createData, updateData, deleteData })(App);