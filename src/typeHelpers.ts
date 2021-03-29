import styled from "styled-components"

/**
 * A predicate function that checks a value is neither null nor undefined.
 *
 * @param value - A value that might be null or undefined
 */
export function notEmpty<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined
}

export function notUndefined<T>(value: T | undefined): value is T {
  return value !== undefined
}

export interface Content {
  id?: string
  key?: string
  rich?: {
    html?: string
  }
}

export const BackgroundBase = styled.div<{ url: string }>`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &::before {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
`
