import { Divider } from 'antd';
import React from 'react';
import About from './component/About';
import ContentDetail from './component/ContentDetail';
import Detail from './component/Detail';
import Experience from './component/Experience'

const Profile = (props) => {

  return (
    <div className="page-header">
      <div className="container p-3">
        <div className="row">
          <div className="col-md-6 text-center">
            <Detail />
            <ContentDetail />
          </div>
          <div className="col-md-6">
            <About />
            <Divider />
            <Experience />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;