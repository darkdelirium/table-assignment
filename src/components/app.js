import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {Tabs} from "antd";
import AppTable from './table.jsx';
import firebase from '../firebase.js';

import {fetchData} from '../reducers/data.js';

import 'antd/dist/antd.css';


const { TabPane } = Tabs;

const dummyDataStudents = [
  {
    key: '1',
    name: 'Alex Smith',
    age: '18',
    subject: 'C++ programming',
    school: 'random school title',
    gender: 'male',
    GPA: '3.45' 
  },
  {
    key: '2',
    name: 'John Doe',
    age: '20',
    subject: 'Data structures',
    school: 'random school title',
    gender: 'male',
    GPA: '3.25' 
  },
];

const dummyColumnsStudents = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Subject',
    dataIndex: 'subject',
    key: 'subject'
  },
  {
    title: 'School',
    dataIndex: 'school',
    key: 'school'
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender'
  },
  {
    title: 'GPA',
    dataIndex: 'GPA',
    key: 'GPA'
}

]



class App extends Component {

  callbackTabChange (key) {
    console.log(key);
  }

  componentDidMount() {
    fetchData('students');
  }

  render() {
    return (
      <React.Fragment>
        <h1>Assignment test</h1>

        <Tabs defaultActiveKey="1" onChange={this.callbackTabChange}>
    <TabPane tab="Students" key="1">
      <AppTable data={dummyDataStudents} columns={dummyColumnsStudents} />
    </TabPane>
    <TabPane tab="Teachers" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Principals" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usersData: state
  }
}

export default connect(mapStateToProps, { fetchData })(App);