
import React, { useState } from 'react';
import styled from 'styled-components';

// comps
import Table from '../../components/table/Page';
import Matches from '../../components/matches/Page';

// styled
const Wrapper = styled.div`
  display: flex;

  position: relative;

  padding-bottom: 20px;
`;

const Button = styled.button`
  box-sizing: border-box;
  -webkit-appearance: none;
  cursor: pointer;
  backface-visibility: hidden;
  border: none;
  background: transparent;
  border-radius: 0;
  color: #333;
  transition: background 0.2s;
  position: relative;
  outline-offset: -3px;
  display: block;
  text-align: center;
  flex: 1 0 auto;
  padding: 20px;

  font-weight: 300;
  font-size: 20px;

  background: #eaeaea;
  border-bottom: 10px solid #49475B;

  &.is-active {
    border-bottom: 10px solid #799496;
  }

  &:hover {
    transition: background 0.2s;
    background: rgba(0, 0, 0, 0.2);
  }
`;

// comp
const CL = () => {
  const [tab, setTabs] = useState('table');

  return (
    <React.Fragment>
      <Wrapper>
        <Button
          className={ tab === 'table' ? 'is-active' : '' }
          onClick={() => setTabs('table')}
        >
          Table
        </Button>
        <Button
          className={ tab === 'fixtures' ? 'is-active' : '' }
          onClick={() => setTabs('fixtures')}
        >
          Fixtures
        </Button>
      </Wrapper>

      {tab === 'table' && (
        <Table id={2001} />
        )}
      {tab === 'fixtures' && (
        <Matches id={2001} />
      )}
    </React.Fragment>
  )
};

export default CL;