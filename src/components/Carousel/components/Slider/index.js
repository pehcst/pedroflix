/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import SlickSlider from "react-slick";
import styled from "styled-components";

const Container = styled.ul`
  padding: 0;
  margin: 0;
  max-height: 300px;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }

  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 10px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 5px;
  position: relative;
  display: block;
  flex: 1 1 0px;
  transition: transform 500ms;

  img {
    display: block;
    max-width: 100%;
  }
  &:focus ~ &,
  &:hover ~ & {
    transform: translateX(25%);
  }
`;

const Slider = ({ children }) => (
  <Container>
    <SlickSlider
      {...{
        dots: false,
        infinite: true,
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: false,
      }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;
