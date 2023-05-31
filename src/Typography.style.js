import { css } from 'styled-components'
import { calculateFluidStyle } from './utils'

export const level1 = css`
  font-size: ${calculateFluidStyle(64, 80, 854, 1440)};
  line-height: 110%;

  @media screen and (max-width: 853px) {
    font-size: ${calculateFluidStyle(32, 64, 320, 853)};
  }
`

export const level2 = css`
  font-size: ${calculateFluidStyle(48, 56, 854, 1440)};
  line-height: 120%;

  @media screen and (max-width: 853px) {
    font-size: ${calculateFluidStyle(32, 48, 320, 853)};
  }
`

export const level3 = css`
  font-size: ${calculateFluidStyle(36, 40, 854, 1440)};
  line-height: 130%;

  @media screen and (max-width: 853px) {
    font-size: ${calculateFluidStyle(28, 36, 320, 853)};
  }
`

export const level4 = css`
  font-size: ${calculateFluidStyle(29, 32, 854, 1440)};
  line-height: 140%;

  @media screen and (max-width: 853px) {
    font-size: ${calculateFluidStyle(24, 29, 320, 853)};
  }
`

export const level5 = css`
  font-size: ${calculateFluidStyle(26, 28, 854, 1440)};
  line-height: 150%;

  @media screen and (max-width: 853px) {
    font-size: ${calculateFluidStyle(22, 26, 320, 853)};
  }
`

export const level6 = css`
  font-size: ${calculateFluidStyle(23, 25, 854, 1440)};
  line-height: 140%;

  @media screen and (max-width: 853px) {
    font-size: ${calculateFluidStyle(20, 23, 320, 853)};
  }
`

export const level7 = css`
  font-size: ${calculateFluidStyle(21, 22, 854, 1440)};
  line-height: 160%;

  @media screen and (max-width: 853px) {
    font-size: ${calculateFluidStyle(18, 21, 320, 853)};
  }
`
export const level8 = css`
  font-size: ${calculateFluidStyle(17, 18, 854, 1440)};
  line-height: 160%;

  @media screen and (max-width: 853px) {
    font-size: ${calculateFluidStyle(16, 17, 320, 853)};
  }
`

export const genericHeadingStyle = css`
  break-after: avoid;
  break-inside: avoid;
  /* color: black; */
  font-weight: 800;
  margin-block-end: 0;
  margin-block-start: 0;
  margin-inline-end: 0;
  margin-inline-start: 0;
  box-sizing: border-box;
`

export const genericParagraphStyle = css`
  /* color: black; */
  font-weight: 400;
  margin-block: 0;
  box-sizing: border-box;
  -webkit-text-size-adjust: 100%;
`
