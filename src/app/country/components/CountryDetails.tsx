import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogTitle, DialogContent, Typography, IconButton, Box } from '@mui/material';
import styled from 'styled-components';

import { formatNumberToString } from 'core/util/functions';

import { getLatLngStringFromArray } from '../functions';
import { Country } from '../types';

interface CountryDetailsProps {
  open: boolean;
  country: Country | null;
  onClose: () => void;
}

const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    position: absolute;
    top: 100px;
    background-color: ${(props) => props.theme.colors.background};
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 25px;
  display: block;
`;

const CountryDetails: React.FC<CountryDetailsProps> = ({ open, country, onClose }) => {
  return (
    <StyledDialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <TitleWrapper>
          {country?.name}
          <IconButton edge="end" color="inherit" onClick={onClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </TitleWrapper>
      </DialogTitle>
      <DialogContent>
        {country && (
          <>
            <StyledImage src={country.flag} alt={`${country.name} flag`} />
            <Box display="flex" flexDirection="column" gap={2}>
              <Typography variant="subtitle1">
                Capital: <b>{country.capitalName || 'N/A'}</b>
              </Typography>
              <Typography variant="subtitle1">
                Code: <b>{country.code}</b>
              </Typography>
              <Typography variant="subtitle1">
                Latitude and Longitude: <b>{getLatLngStringFromArray(country.latLng)}</b>
              </Typography>
              <Typography variant="subtitle1">
                Population: <b>{formatNumberToString(country.population)}</b>
              </Typography>
              <Typography variant="subtitle1">
                Region: <b>{country.region}</b>
              </Typography>
              <Typography variant="subtitle1">
                Subregion: <b>{country.subregion}</b>
              </Typography>
            </Box>
          </>
        )}
      </DialogContent>
    </StyledDialog>
  );
};

export default CountryDetails;
