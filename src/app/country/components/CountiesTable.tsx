import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import styled, { useTheme } from 'styled-components';

import { convertPascalCaseToUppercaseWords } from 'core/util/functions';

import { NON_SORTABLE_FIELDS } from '../constants';
import { Country } from '../types';

import CountryRow from './CountryRow';

interface CountriesTableProps {
  countries: Country[];
  handleSort: (field: keyof Country) => void;
  onCountryLongPress: (country: Country) => void;
}

const Wrapper = styled.div`
  .sort {
    cursor: pointer;
    white-space: nowrap;
  }
  .shrink {
    width: 1%;
    white-space: nowrap;
  }
`;

const CountriesTable: React.FC<CountriesTableProps> = ({
  countries,
  handleSort,
  onCountryLongPress,
}) => {
  const theme = useTheme();
  const customTheme = createTheme({
    palette: {
      background: {
        paper: theme.colors.secondaryBackground,
      },
    },
  });

  return (
    <Wrapper>
      <ThemeProvider theme={customTheme}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {[
                  'flag',
                  'code',
                  'name',
                  'capitalName',
                  'region',
                  'subregion',
                  'population',
                  'latLng',
                ].map((field) => {
                  const isFieldSortable = !NON_SORTABLE_FIELDS.includes(field);

                  return (
                    <TableCell
                      key={field}
                      onClick={() => {
                        if (isFieldSortable) {
                          handleSort(field as keyof Country);
                        }
                      }}
                      className={isFieldSortable ? 'sort' : undefined}
                    >
                      {convertPascalCaseToUppercaseWords(field)}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {countries.map((country) => (
                <CountryRow key={country.code} country={country} onLongPress={onCountryLongPress} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ThemeProvider>
    </Wrapper>
  );
};

export default CountriesTable;
