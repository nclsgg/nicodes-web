export const colors = {
  background: '#F0F0F0',
  green: '#02A79D',
  purple: '#65328F',
  strokeGray: '#CED3D9',
  gray: '#697386',
  dimGray: '#696969',
  gradient: 'linear-gradient(to right, #02A79D, #65328F)',
  reverseGradient: 'linear-gradient(to right, #65328F, #02A79D)',
}

export const screenSize = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '500px',
  tablet: '768px',
  tabletL: '900px',
  laptop: '1200px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(max-width: ${screenSize.mobileS})`,
  mobileM: `(max-width: ${screenSize.mobileM})`,
  mobileL: `(max-width: ${screenSize.mobileL})`,
  tablet: `(max-width: ${screenSize.tablet})`,
  tabletL: `(max-width: ${screenSize.tabletL})`,
  laptop: `(max-width: ${screenSize.laptop})`,
  laptopL: `(max-width: ${screenSize.laptopL})`,
  desktop: `(max-width: ${screenSize.desktop})`,
  desktopL: `(max-width: ${screenSize.desktop})`
};

export const landscapeDevice = {
  mobileS: `(max-height: ${screenSize.mobileS})`,
  mobileM: `(max-height: ${screenSize.mobileM})`,
  mobileL: `(max-height: ${screenSize.mobileL})`,
  tablet: `(max-height: ${screenSize.tablet})`,
  tabletL: `(max-height: ${screenSize.tabletL})`,
  laptop: `(max-height: ${screenSize.laptop})`,
  laptopL: `(max-height: ${screenSize.laptopL})`,
  desktop: `(max-height: ${screenSize.desktop})`,
  desktopL: `(max-height: ${screenSize.desktop})`
}

export const fontSize = {
  title: '1.5rem',
  subtitle: '1.2rem',
  paragraph: '0.875rem',
  small: '0.75rem',
  button: '1rem'
}