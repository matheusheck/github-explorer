import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  margin-top: 80px;
  max-width: 460px;
  line-height: 56px;

  color: #3a3a3a;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;
  height: 70px;

  input {
    flex: 1;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    width: 210px;
    background: #04d361;
    color: #fff;
    border: 0;
    border-radius: 0px 5px 5px 0px;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div``;
