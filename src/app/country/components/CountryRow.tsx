import React from 'react';

import { TableCell, TableRow, LinearProgress } from '@mui/material';

import styled from 'styled-components';

import { formatNumberToString } from 'core/util/functions';

import { getLatLngStringFromArray } from '../functions';
import { useCountryRowHandler } from '../hooks/useCountryRowHandler';
import { Country } from '../types';

const Wrapper = styled(TableRow)`
  position: relative;
  cursor: pointer;
  height: 90px;
`;

const LinearProgressWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 6px;
  bottom: 0px;
  right: 0;
`;

interface CountryRowProps {
  country: Country;
  onLongPress: (country: Country) => void;
}

const CountryRow: React.FC<CountryRowProps> = ({ country, onLongPress }) => {
  const { handleMouseDown, handleMouseUp, progress } = useCountryRowHandler(() => {
    onLongPress(country);
  });

  return (
    <Wrapper
      key={country.code}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <TableCell className="shrink">
        <img src={country.flag} alt={country.name} width="50" />
      </TableCell>
      <TableCell className="shrink">{country.code}</TableCell>
      <TableCell>
        <b>{country.name}</b>
      </TableCell>
      <TableCell>{country.capitalName || 'N/A'}</TableCell>
      <TableCell>{country.region}</TableCell>
      <TableCell>{country.subregion}</TableCell>
      <TableCell className="shrink">{formatNumberToString(country.population)}</TableCell>
      <TableCell className="shrink">
        {getLatLngStringFromArray(country.latLng)}
        <LinearProgressWrapper>
          <LinearProgress variant="determinate" value={progress} />
        </LinearProgressWrapper>
      </TableCell>
    </Wrapper>
  );
};

export default CountryRow;
