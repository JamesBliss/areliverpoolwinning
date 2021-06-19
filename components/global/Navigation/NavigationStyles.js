import styled from 'styled-components';

export const Menu = styled.nav`
  position: fixed;
  z-index: 99;
  bottom: 15px;
  right: 15px;
`;

export const MenuDrop = styled.div``;

export const MenuItem = styled.button`
  box-sizing: border-box;
  -webkit-appearance: none;
  cursor: pointer;
  backface-visibility: hidden;
  border: none;
  background: transparent;
  border-radius: 0;
  line-height: 1;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 30px;
  text-align: center;
  cursor: pointer;
  padding: 13px;
  border-radius: 100%;
  z-index: 1;
  position: absolute;
  right: 0;
  bottom: 0;

  .is-active &:nth-child(3) {
    bottom: ${1 * (54 + 15)}px;
  }
  .is-active &:nth-child(2) {
    bottom: ${2 * (54 + 15)}px;
  }
  .is-active &:nth-child(1) {
    bottom: ${3 * (54 + 15)}px;
  }

  &.active {
    z-index: 10;
  }

  height: 54px;
  width: 54px;

  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
    background: #fff;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  &:not(:first-child) {
    border-top: 1px solid #fff;
  }
`;
