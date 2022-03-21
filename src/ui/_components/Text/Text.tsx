import React, { ReactNode } from 'react'
import { alignmentCss, color, ColorType, font, marginsCss } from '../../_styles'
import styled, { css } from 'styled-components'
import isUndefined from 'lodash/isUndefined'

interface Props {
  children: ReactNode,
  as?: 'p' | 'h1' | 'span',
  className?: string,
  title?: string,
  color?: ColorType,
  size?: string,
  weight?: string,
  uppercase?: boolean,
  marginLeft?: string,
  marginRight?: string,
  marginTop?: string,
  marginBottom?: string
}

const TextRaw = ({ as: As = 'span', children, className, title }: Props) => (
  <As className={className} title={title}>
    <h1></h1>
    {children}
  </As>
)

export const Text = styled(TextRaw)<Props>`
  ${marginsCss}
  ${alignmentCss}

  ${p =>
          p.color &&
          css`
            color: ${color[p.color]};
          `}

  ${p =>
          p.uppercase &&
          css`
            text-transform: uppercase;
          `}

  ${p => p.size === 'tiny' && font.sizes.tiny()}
  ${p => p.size === 'small' && font.sizes.small()}
  ${p => p.size === 'large' && font.sizes.large()}
  ${p => p.size === 'medium' && font.sizes.medium()}
  ${p => p.size === 'nav' && font.sizes.nav()}
  ${p => p.size === 'h1' && font.sizes.h1()}
  ${p => p.size === 'base' && font.sizes.base()}
  ${p => p.size === 'button' && font.sizes.button()}
  ${p => p.size === 'buttonSmall' && font.sizes.buttonSmall()}
  ${p => isUndefined(p.size) && font.sizes.base()}

  ${p =>
          p.weight === 'bold' &&
          css`
            font-weight: ${font.weight.bold};
          `}
  ${p =>
          p.weight === 'black' &&
          css`
            font-weight: ${font.weight.black};
          `}
  ${p =>
          p.weight === 'regular' &&
          css`
            font-weight: ${font.weight.regular};
          `}
  ${p =>
          isUndefined(p.weight) &&
          css`
            font-weight: ${font.weight.regular};
          `}
`
