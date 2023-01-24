export const colors = {
  backgroundDark: '#121212',
  backgroundLight: '#E3E3E3',
  yellow: '#F6FF94',
  darkGray: '#121212',
}

export const screenSize = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '500px',
  tablet: '768px',
  tabletL: '900px',
  laptop: '1200px',
  laptopL: '1920px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${screenSize.mobileS})`,
  mobileM: `(min-width: ${screenSize.mobileM})`,
  mobileL: `(min-width: ${screenSize.mobileL})`,
  tablet: `(min-width: ${screenSize.tablet})`,
  tabletL: `(min-width: ${screenSize.tabletL})`,
  laptop: `(min-width: ${screenSize.laptop})`,
  laptopL: `(min-width: ${screenSize.laptopL})`,
  desktop: `(min-width: ${screenSize.desktop})`,
  desktopL: `(min-width: ${screenSize.desktop})`
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