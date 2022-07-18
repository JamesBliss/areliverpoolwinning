import React, { useState } from 'react';

import Link from '../Link';
import Face from '../Face';

import { Menu, MenuDrop, MenuItem } from './NavigationStyles';

// component
const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <Menu>
      <MenuDrop className={open ? 'is-active' : null}>
        <Link activeClassName="active" additionalPaths={['/match']} href={{ pathname: '/' }}>
          <MenuItem
            onClick={() => {
              setOpen(!open);
            }}
            aria-label="Navigate to Match"
          >
            <Face />
          </MenuItem>
        </Link>
        <Link activeClassName="active" href={{ pathname: '/table' }}>
          <MenuItem
            onClick={() => {
              setOpen(!open);
            }}
            aria-label="Navigate to Table"
          >
            T
          </MenuItem>
        </Link>
        <Link activeClassName="active" href={{ pathname: '/fixtures' }}>
          <MenuItem
            onClick={() => {
              setOpen(!open);
            }}
            aria-label="Navigate to Fixtures"
          >
            F
          </MenuItem>
        </Link>
        <MenuItem
          onClick={() => {
            setOpen(!open);
          }}
          aria-label="Toggle Menu"
        >
          {open && (
            <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <g transform="translate(0, 0)">
                <path
                  fill="currentColor"
                  d="M32,3.3L19.2,16L32,28.7l-3.2,3.2L15.9,19.2L3.2,31.9L0,28.7L12.7,16L0,3.3l3.2-3.2l12.7,12.7L28.8,0.1L32,3.3z"
                />
              </g>
            </svg>
          )}
          {!open && (
            <svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 20">
              <g transform="translate(0, 0)">
                <path
                  fill="currentColor"
                  d="M27.2,18.3H0.8c-0.5,0-0.8,0.4-0.8,0.8C0,19.6,0.4,20,0.8,20h26.3c0.5,0,0.8-0.4,0.8-0.8 C28,18.7,27.6,18.3,27.2,18.3 M27.2,9.2H0.8C0.4,9.2,0,9.5,0,10c0,0.5,0.4,0.8,0.8,0.8h26.3c0.5,0,0.8-0.4,0.8-0.8 C28,9.5,27.6,9.2,27.2,9.2 M0.8,1.7h26.3c0.5,0,0.8-0.4,0.8-0.8C28,0.4,27.6,0,27.2,0H0.8C0.4,0,0,0.4,0,0.8C0,1.3,0.4,1.7,0.8,1.7"
                />
              </g>
            </svg>
          )}
        </MenuItem>
      </MenuDrop>
    </Menu>
  );
};

export default Navigation;
