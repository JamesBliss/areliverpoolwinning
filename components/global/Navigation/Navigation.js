import React, { useState } from 'react';

import Link from '../Link'
import Face from '../Face';

import {
  Menu,
  MenuDrop,
  MenuItem,
} from './NavigationStyles';

// component
const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <Menu>
      <MenuDrop className={ open ? 'is-active' : null }>
        <Link activeClassName='active' additionalPaths={['/match']} href={{ pathname: '/'}}>
          <MenuItem onClick={ () => { setOpen(!open) } } ><Face /></MenuItem>
        </Link>
        <Link activeClassName='active' href={{ pathname: '/table'}}>
          <MenuItem onClick={ () => { setOpen(!open) } } >T</MenuItem>
        </Link>
        <Link activeClassName='active' href={{ pathname: '/fixtures'}}>
          <MenuItem onClick={ () => { setOpen(!open) } } >F</MenuItem>
        </Link>
        <MenuItem onClick={() => { setOpen(!open) }}>
          <svg
            width='16px'
            height='16px'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 32 32'
          >
            <g transform='translate(0, 0)'>
              <path fill='currentColor' d="M32,3.3L19.2,16L32,28.7l-3.2,3.2L15.9,19.2L3.2,31.9L0,28.7L12.7,16L0,3.3l3.2-3.2l12.7,12.7L28.8,0.1L32,3.3z" />
            </g>
          </svg>
        </MenuItem>
      </MenuDrop>
    </Menu>
  );
};

export default Navigation;