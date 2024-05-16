import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
// import 'antd/dist/antd.css';

const Navbar = () => {
  return (
    <Menu mode="horizontal">
        <Link to={'/lessons'}>
            <Menu.Item key="home">Lessons</Menu.Item>
        </Link>
        <Link to={'/students'}>
            <Menu.Item key="about">Students</Menu.Item>
        </Link>
      {/* <Menu.Item key="services">Services</Menu.Item>
      <Menu.Item key="contact">Contact</Menu.Item> */}
    </Menu>
  );
};

export default Navbar;
