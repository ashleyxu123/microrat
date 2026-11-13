import type { ImageMetadata } from 'astro';
import spiralLogo from './assets/logo.png';
import spiralLogoDark from './assets/logo-dark.png';
import spiralLogoBeingLight from './assets/logo-being-light.png'
import spiralLogoBeingDark from './assets/logo-being-dark.png'
import spiralLogoCapturingLight from './assets/logo-capturing-light.png'
import spiralLogoCapturingDark from './assets/logo-capturing-dark.png'
import spiralLogoMakingLight from './assets/logo-making-light.png'
import spiralLogoMakingDark from './assets/logo-making-dark.png'

/**
 * Logo variations. Each one has a light-mode and a dark-mode image.
 * To add one: import its two images above, then add an entry here,
 * e.g. wine: { light: wineLogo, dark: wineLogoDark }.
 */
export const LOGO_VARIANTS = {
	main: { light: spiralLogo, dark: spiralLogoDark },
	being: { light: spiralLogoBeingLight, dark: spiralLogoBeingDark },
	capturing: { light: spiralLogoCapturingLight, dark: spiralLogoCapturingDark },
	making: { light: spiralLogoMakingLight, dark: spiralLogoMakingDark },
} satisfies Record<string, { light: ImageMetadata; dark: ImageMetadata }>;

export type LogoVariant = keyof typeof LOGO_VARIANTS;

/**
 * Page color themes. The key is the CSS class that a page passes as
 * <PageLayout theme="...">. Its colors are defined in that page's <style is:global>.
 * `logo` picks which logo variation matches the theme.
 */
export const THEMES = {
	'theme-being': { logo: 'being' },
	'theme-capturing': {logo: 'capturing' },
	'theme-making': {logo: 'making'},
} satisfies Record<string, { logo: LogoVariant }>;

export type ThemeName = keyof typeof THEMES;
