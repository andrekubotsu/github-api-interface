import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  margin-bottom: 20px;

  h1 {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }

  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 8px;
    font-weight: 500;
  }

  button {
    background-color: #225ed8;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;
    transition: 300ms;

    &:hover {
      background-color: #2c5282;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

    span {
      font-size: 20px;
      font-weight: 500;
      color: #ffff;
    }
  }
`;
