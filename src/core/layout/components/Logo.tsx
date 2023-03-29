import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  overflow: visible;
  max-height: 30px;
`;

const Image = styled.img`
  height: 50px;
  position: relative;
  top: -15px;
`;

export const Logo = () => {
  return (
    <Wrapper>
      <Image
        src="https://www.excitel.com/wp-content/uploads/2022/07/logo-excitel.png"
        alt="Excitel Logo"
      />
    </Wrapper>
  );
};
