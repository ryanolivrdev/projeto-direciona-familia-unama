import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: #344e41;
`

export const HomeWrapper = styled.main`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  div {
    display: flex;
    flex-direction: column;

    gap: 1rem;
  }

  img {
    width: 500px;
    height: 500px;
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;

    div {
      align-items: center;
    }

    img {
      width: 300px;
      height: 300px;
    }
  }
`

export const Button = styled.button`
  color: black;
  background-color: #ccd5ae;
  border: none;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 40px;
  padding: 1rem 2rem;
  transition: all 0.2s;

  width: fit-content;

  &:hover {
    background-color: #e9edc9;
  }
`

export const Footer = styled.footer`
  display: flex;
  position: absolute;
  bottom: 20px;
`