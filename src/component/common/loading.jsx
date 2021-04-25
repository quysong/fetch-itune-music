import React from 'react';
import { Spin } from 'antd';

const Loading = () => {
  return (
    <Spin size="large" className="loading-block"></Spin>
  );
};

export default Loading;