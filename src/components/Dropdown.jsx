import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import React from 'react';
const menu = (
  <Menu
    items={[
      {
        label: <a href="https://www.antgroup.com">Edit Avatar PlaceHolder</a>,
        key: '0',
      },
      {
        label: <a href="https://www.aliyun.com">Edit Fontstyle PlaceHolder</a>,
        key: '1',
      },
      
    ]}
  />
);

const DropdownBar = () => (
  <Dropdown overlay={menu} trigger={['click']}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Customize
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default DropdownBar;