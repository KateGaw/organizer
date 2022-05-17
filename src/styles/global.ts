import { css } from '@emotion/react'
import colors from '../components/colors'

export default css`
  :root {
    ${Object.keys(colors).map(
      (key) => `
      ${key}: ${(colors as any)[key]};
    `
    )}
  }

  body,
  input,
  select {
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 400;
    background: #f6f6f6;
  }

  input:focus-visible {
    outline: none;
  }

  html,
  body {
    height: 100%;
  }

  .container {
    max-width: 1366px;
    width: calc(100% - 48px);
    margin: 0 auto;
  }

  .body-container {
    min-height: 90vh;
    padding-top: 50px;
  }

  .scroll-disabled {
    overflow: hidden;
    height: 100%;
  }

  /* css helpers */
  .dib {
    display: inline-block;
  }
  .dn {
    display: none;
  }
  .db {
    display: block;
  }
  .df {
    display: flex;
  }
  .dg {
    display: grid;
  }
  .jcsb {
    justify-content: space-between;
  }
  .jcc {
    justify-content: center;
  }
  .jcfs {
    justify-content: flex-start;
  }
  .jcfe {
    justify-content: flex-end;
  }
  .aic {
    align-items: center;
  }
  .aife {
    align-items: flex-end;
  }
  .fdc {
    flex-direction: column;
  }
  .f1 {
    flex: 1;
  }
  .fww {
    flex-wrap: wrap;
  }
  .fh {
    height: 100%;
  }
  .fw {
    width: 100%;
  }
  .cup {
    cursor: pointer;
  }
  .tr {
    text-align: right;
  }
  .tc {
    text-align: center;
  }
  .tl {
    text-align: left;
  }
  .fz14 {
    font-size: 14px;
  }
  .fz16 {
    font-size: 16px;
  }
  .fz18 {
    font-size: 18px;
  }
  .fwb {
    font-weight: bold;
  }
  .error-text {
    color: rgb(234, 115, 134);
  }
  .pr {
    position: relative;
  }

  .tdu {
    text-decoration: underline;
  }
`
