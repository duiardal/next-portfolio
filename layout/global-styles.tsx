import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0 1vw;
        min-height: 100vh;
    }
    a {
        color: black;
        text-decoration: none;
        transition: color 50ms;
        &:hover {
            color: grey;
        }
    }
    .slick-list,
    .slick-slider,
    .slick-track {
      position:relative;
      display:block;
    }

    .slick-loading
    .slick-slide,
    .slick-loading .slick-track {
      visibility:hidden;
    }

    .slick-slider {
      user-select:none;
      -webkit-touch-callout:none;
      -khtml-user-select:none;
      -ms-touch-action:pan-y;
      touch-action:pan-y;
      -webkit-tap-highlight-color:transparent;
      height: 100%;
    }

    .slick-list {
      overflow:hidden;
      margin:0;
      padding:0;
      height: 100%;
    }

    .slick-list:focus {
      outline:0
    }

    .slick-list.dragging {
      cursor:pointer;
      cursor:hand;
    }

    .slick-slider .slick-list,
    .slick-slider .slick-track {
      transform:translate3d(0,0,0);
    }

    .slick-track {
      top:0;
      left:0;
      height: 100%;
    }

    .slick-track:after,
    .slick-track:before {
      display:table;
      content:'';
    }

    .slick-track:after {
      clear:both;
    }

    .slick-slide {
      display:none;
      float:left;
      height:100%;
      min-height:1px;
    }[dir=rtl]

    .slick-slide {
      float:right;
    }

    .slick-slide > div {
      height: 100%;
      display: flex;
      align-items: center;
    }

    .slick-slide img {
      display:block;
    }

    .slick-slide.slick-loading img {
      display:none;
    }

    .slick-slide.dragging img {
      pointer-events:none;
    }

    .slick-initialized .slick-slide {
      display:block;
    }

    .slick-arrow.slick-hidden {
      display: none;
    }

    /* Hide arrows until hover */
    .slick-slider button {
      display: none;
    }

    .slick-slider:hover button {
      display: block;
    }
`