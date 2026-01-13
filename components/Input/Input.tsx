import styled from "styled-components";

export const Wrapper = styled.div`
  font: var(--text-md);
  max-width: 510px;
  min-width: 224px;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  border: 1px solid var(--grey-500);
  border-radius: 5px;
  color: var(--white);
  background: var(--grey-100);

  :disabled {
    cursor: not-allowed;
  }

  ::placeholder {
    color: var(--grey-800);
  }
`;
