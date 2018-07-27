import React from 'react';
import Sidebar from '../sidebar';
import Logo from '../../../logo/logo.js';

class SidebarOrderManager extends Sidebar {
  render() {
    return (
      <div className='sidebar sidebar--order-manager'>
        <Logo/>
      </div>
    );
  }
}

export default SidebarOrderManager;