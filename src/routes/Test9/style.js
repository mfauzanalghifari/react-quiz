import { css, keyframes } from 'react-emotion';

const revolve = keyframes`
  from {
    transform: rotate(0) translateX(var(--push));
  }

  to {
    transform: rotate(360deg) translateX(var(--push));
  }
`

export const cssSpace = css({
  marginTop: 24,
  width: 800,
  height: 800,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'black',
  overflow: 'hidden',
});

export const cssSun = css({
  width: 80,
  height: 80,
  backgroundColor: 'yellow',
  borderRadius: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative'
});

export const cssPlanet = (props) => css({
  '--push': `${props.distance}px`,
  width: '20px',
  height: '20px',
  borderRadius: 10,
  backgroundColor: props.color,
  position: 'absolute',
  animation: `${revolve} ${props.duration}s infinite linear`
});
