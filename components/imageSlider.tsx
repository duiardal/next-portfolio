import React from 'react';
import styled from 'styled-components';
import Slick, { Settings } from "react-slick"

export class ImageSlider extends React.Component<Settings> {
  firstClientX: any
  firstClientY: any
  clientX: any
  clientY: any

  componentDidMount() {
    window.addEventListener("touchstart", this.touchStart)
  }

  componentWillUnmount() {
    window.removeEventListener("touchstart", this.touchStart)
  }

  touchStart = (e: any) => {
    this.firstClientX = e.touches[0].clientX
    this.firstClientY = e.touches[0].clientY
  }

  render() {
    return (
      <Slick {...this.props}>
        {this.props.children}
      </Slick>
    )
  }
}