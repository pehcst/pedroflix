import styled from "styled-components";

export const VideoCardContainer = styled.a`
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  width: 218px;
  height: 123px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 0;
  align-items: flex-end;
  opacity: 0.57;
  position: relative;
  display: inline-block;
  transition: opacity 0.3s;
  transition: transform 0.6s;
  &:hover,
  &:focus {
    opacity: 1;
    transform: scale(1.1);
    z-index: 999;
  }

  &:not(:first-child) {
    margin-left: 5px;
  }
`;
