import React, { useState } from 'react';

import { CircularProgress, Paper, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

import styled, { useTheme } from 'styled-components';

import CountryDetails from '../components/CountryDetails';
import { useAutocompleteCountries } from '../hooks/useAutocompleteCountries';
import { useCountryDetails } from '../hooks/useCountryDetails';

const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
`;

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LoadingWrapper = styled.div`
  position: absolute;
  right: 45px;
  top: 15px;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const OptionImage = styled.img`
  margin-right: 8px;
`;

const AutocompleteCountriesPage: React.FC = () => {
  const theme = useTheme();
  const { countries, handleSearch, loading } = useAutocompleteCountries();
  const { showDetails, open, country, closeDetails } = useCountryDetails();
  const [autocompleteValue, setAutocompleteValue] = useState(null);

  return (
    <Wrapper>
      <Autocomplete
        options={countries}
        getOptionLabel={(option) => option.name}
        onInputChange={(_, value) => handleSearch(value)}
        onChange={(_, value) => {
          if (value) {
            showDetails(value);
            setAutocompleteValue(null);
          }
        }}
        onBlur={() => setAutocompleteValue(null)}
        value={autocompleteValue}
        renderInput={(params) => (
          <InputWrapper>
            <TextField {...params} label="Search countries" variant="outlined" />
            {loading && (
              <LoadingWrapper>
                <CircularProgress size={24} />
              </LoadingWrapper>
            )}
          </InputWrapper>
        )}
        PaperComponent={({ children }) => (
          <Paper style={{ background: theme.colors.secondaryBackground }}>{children}</Paper>
        )}
        renderOption={(props, option) => (
          <li {...props}>
            <OptionWrapper>
              <OptionImage src={option.flag} alt={option.name} width="20" />
              {option.name} ({option.code})
            </OptionWrapper>
          </li>
        )}
      />
      <CountryDetails open={open} country={country} onClose={closeDetails} />
    </Wrapper>
  );
};

export default AutocompleteCountriesPage;
