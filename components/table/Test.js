// todo:
// [ ] Stripped
// [ ] Themed
// [ ] Header callback function

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import merge from 'lodash/merge';

import defaultTheme from './TestTheme';

const Element = styled.div`
  display: grid;
  width: 100%;
  grid-template-areas: "header" "custom" "body" "footer";
`;

// groups components
const TableHead = styled.div`
  grid-area: header;
  border-top: ${ props => props.theme.header.borderTop } ;
  border-right: ${ props => props.theme.header.borderRight } ;
  border-bottom: ${ props => props.theme.header.borderBottom } ;
  border-left: ${ props => props.theme.header.borderLeft } ;
`;

const TableBody = styled.div`
  grid-area: body;
`;

const TableCustom = styled.div`
  grid-area: custom;
`;

const TableFoot = styled.div`
  grid-area: footer;

  border-top: ${ props => props.theme.footer.bsorderTop } ;
  border-right: ${ props => props.theme.footer.borderRight } ;
  border-bottom: ${ props => props.theme.footer.borderBottom } ;
  border-left: ${ props => props.theme.footer.borderLeft } ;
`;

// inner components
const TableRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: ${ props => props.gridTemplateColumns };

  ${ TableHead } & {
    &:nth-child(odd) {
      background: ${ props => props.theme.header.odd } ;
    }

    &:nth-child(even) {
      background: ${ props => props.theme.header.even } ;
    }
  }

  ${ TableBody } & {
    & {
      border-top: ${ props => props.theme.row.borderTop } ;
      border-right: ${ props => props.theme.row.borderRight } ;
      border-bottom: ${ props => props.theme.row.borderBottom } ;
      border-left: ${ props => props.theme.row.borderLeft } ;
    }

    &:nth-child(odd) {
      background: ${ props => props.theme.row.odd } ;
    }

    &:nth-child(even) {
      background: ${ props => props.theme.row.even } ;
    }
  }

  ${ TableFoot } & {
    &:nth-child(odd) {
      background: ${ props => props.theme.footer.odd } ;
    }

    &:nth-child(even) {
      background: ${ props => props.theme.footer.even } ;
    }
  }
`;

const TableHeader = styled.div`
  display: block;
  box-sizing: border-box;
  background: transparent;

  padding: ${ props => props.theme.header.padding } ;
  font-size: ${ props => props.theme.header.fontSize } ;
  font-weight: 500;
  color: #333333;
`;

const TableData = styled.div`
  display: block;
  box-sizing: border-box;
  background: transparent;

  padding: ${ props => props.theme.row.padding } ;
  font-size: ${ props => props.theme.row.fontSize } ;
  font-weight: 400;
  color: #333333;
`;

const TableFooter = styled.div`
  display: block;
  box-sizing: border-box;
  background: transparent;

  &:not(:empty) {
    padding: ${ props => props.theme.footer.padding } ;
    font-size: ${ props => props.theme.footer.fontSize } ;
    font-size: 1.1em;
    color: #333333;
  }
`;


// =============== //
// TABLE COMPONENT //
// =============== //
export default class Table extends Component {
  renderTableHead() {
    const { columns, rowProps } = this.props;

    return (
      <TableHead>
        <TableRow { ...rowProps }>
          { columns.map((columnItem, index) => (
            <TableHeader key={ index }>
              { columnItem.head }
            </TableHeader>
          ) ) }
        </TableRow>
      </TableHead>
    );
  }

  renderCustom() {
    const { children } = this.props;

    return (
      <TableCustom>
        { children }
      </TableCustom>
    );
  }

  renderTableBody() {
    const { data, columns, rowProps } = this.props;

    return (
      <TableBody>
        { data.map((dataItem, index) => {
          return (
            <TableRow key={index} { ...rowProps }>
              { columns.map((columnItem, index) => {
                const hasRender = columnItem.render;
                return (
                  <TableData key={index}>
                    {hasRender && hasRender({ mapped: dataItem[columnItem.data], item: dataItem, column: columnItem }) }
                    { !hasRender && dataItem[columnItem.data] }
                  </TableData>
                );
              }) }
            </TableRow>
          );
        }) }
      </TableBody>
    );
  }

  renderTableFoot() {
    const { columns, rowProps } = this.props;

    return (
      <TableFoot>
        <TableRow { ...rowProps }>
          { columns.map((columnItem, index) => {
            return (
              <TableFooter key={index}>
                { columnItem.foot }
              </TableFooter>
            );
          }) }
        </TableRow>
      </TableFoot>
    );
  }

  render() {
    const { theme } = this.props;

    return (
      <ThemeProvider theme={ merge(defaultTheme, theme) }>
        <Element>
          { this.renderTableHead() }
          { this.renderCustom() }
          { this.renderTableBody() }
          { this.renderTableFoot() }
        </Element>
      </ThemeProvider>
    );
  }
}

Table.defaultProps = {
  children: null,
  data: [],
  columns: [],
  rowProps: {
    gridTemplateColumns: '1fr 1fr 1fr'
  },
  theme: {}
};

Table.propTypes = {
  children: PropTypes.any,
  data: PropTypes.array,
  columns: PropTypes.array,
  rowProps: PropTypes.shape({
    gridTemplateColumns: PropTypes.string
  }),
  theme: PropTypes.shape({
    header: PropTypes.shape({
      borderTop: PropTypes.string,
      borderBottom: PropTypes.string,
      borderLeft: PropTypes.string,
      borderRight: PropTypes.string,
      odd: PropTypes.string,
      even: PropTypes.string
    }),
    row: PropTypes.shape({
      borderTop: PropTypes.string,
      borderBottom: PropTypes.string,
      borderLeft: PropTypes.string,
      borderRight: PropTypes.string,
      odd: PropTypes.string,
      even: PropTypes.string
    }),
    footer: PropTypes.shape({
      borderTop: PropTypes.string,
      borderBottom: PropTypes.string,
      borderLeft: PropTypes.string,
      borderRight: PropTypes.string,
      odd: PropTypes.string,
      even: PropTypes.string
    })
  })
};