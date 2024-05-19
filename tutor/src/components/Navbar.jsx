import React, { useContext } from 'react';
import { Menu, Switch } from 'antd';
import { Link } from 'react-router-dom';
import { Context } from '../App';
// import 'antd/dist/antd.css';

const Navbar = () => {
  const {theme, setTheme} = useContext(Context);
  const handleThemeChange = (checked) => {
    setTheme(checked ? 'dark' : 'light');
  };
  return (
    <Menu mode="horizontal" theme={theme}>
      <Menu.Item key="title"  >Tutor</Menu.Item>
        <Link to={'/tutor/students'}>
            <Menu.Item key="about">Students</Menu.Item>
        </Link>
        <Link to={'/tutor/'}>
            <Menu.Item key="home">Lessons</Menu.Item>
        </Link>
        <Menu.Item key="theme-switch" className="menu-switch">
        <Switch
          checked={theme === 'dark'}
          onChange={handleThemeChange}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
        </Menu.Item>
      {/* <Menu.Item key="services">Services</Menu.Item>
      <Menu.Item key="contact">Contact</Menu.Item> */}
    </Menu>
  );
};

export default Navbar;
