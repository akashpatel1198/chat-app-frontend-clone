import React, { useState } from 'react'
import { Avatar, Divider, Layout, Menu } from 'antd'
import {
  ContactsOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  UnorderedListOutlined
} from '@ant-design/icons'

const { Sider } = Layout
import Image from 'next/image'

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className={!collapsed ? 'bg-white w-[262px] min-w-[262px] max-w-[262px]' : 'bg-white'}
    >
      <div className="demo-logo-vertical" />
      <span
        className="absolute top-[4px] right-[4px] z-50 cursor-pointer"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <MenuUnfoldOutlined rev={undefined} /> : <MenuFoldOutlined />}
      </span>
      <div className="my-[40px] flex flex-col items-center justify-center h-[141px]">
        <Avatar size={collapsed ? 50 : 105} style={{ backgroundColor: '#1c6daf' }}>
          <p className="text-[40px]">J</p>
        </Avatar>
        {!collapsed && <h5 className="text-[24px] text=[#1c6daf]">John</h5>}
      </div>
      <Divider />
      <Menu
        mode="inline"
        defaultSelectedKeys={['2']}
        items={[
          {
            key: '1',
            icon: <HomeOutlined />,
            label: 'Home'
          },
          {
            key: '2',
            icon: <UnorderedListOutlined />,
            label: 'Tasks'
          },
          {
            key: '3',
            icon: <SettingOutlined />,
            label: 'Settings'
          },
          {
            key: '4',
            icon: <ContactsOutlined />,
            label: 'Contact Us'
          }
        ]}
      />
      {!collapsed && (
        <div className="absolute bottom-[30px] right-[54px]">
          <Image src="/img/logoSkillfully.svg" alt="logo" width={163} height={43} />
        </div>
      )}
    </Sider>
  )
}

export default SideBar
