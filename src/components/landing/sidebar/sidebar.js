import React, { Component } from 'react';
import { Sidebar } from '../../base/sidebar/sidebar';
import { Link } from 'react-router-dom';


export const LandingSidebar = class LandingSidebar extends Component {

  render() {
    const sidebarStatus = this.props.isOpen ? 'sidebar-open' : 'sidebar-closed';

    return(
      <Sidebar id='landing-sidebar' className={'sidebar--landing landing__sidebar ' + sidebarStatus} onClick={() => alert('hello')}>
        <div className='landing-sidebar__spacer'></div>
        <Link className='link sidebar__link' to='/'><span>Tour</span></Link>
        <Link className='link sidebar__link' to='/'><span>Process</span></Link>
        <Link className='link sidebar__link' to='/'><span>Facilities</span></Link>
        <Link className='link sidebar__link' to='/'><span>Suppliers</span></Link>
        <Link className='link sidebar__link' to='/'><span>Blog</span></Link>   
        <Link className='link sidebar__link' to='/'><span>Newsletter</span></Link>
        <Link className='link sidebar__link' to='/'><span>About Us</span></Link>
      </Sidebar>
    );
  }
}
