import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primaryBeige: {
  				'100': '#F8F4F0',
  				'500': '#98908B'
  			},
  			primaryGrey: {
  				'100': '#F2F2F2',
  				'300': '#B3B3B3',
  				'500': '#696868',
  				'900': '#201F24'
  			},
  			secondary: {
  				green: '#277C78',
  				yellow: '#F2CDAC',
  				cyan: '#82C9D7',
  				navy: '#626070',
  				red: '#C94736',
  				purple: '#826CB0',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			other: {
  				purple: '#AF81BA',
  				Turquoise: '#597C7C',
  				brown: '#93674F',
  				magenta: '#934F6F',
  				blue: '#3F82B2',
  				navyGrey: '#97A0AC',
  				armyGreen: '#7F9161',
  				gold: '#CAB361',
  				orange: '#BE6C49'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontSize: {
  			textPreset1: [
  				'32px',
  				{
  					lineHeight: '120%',
  					letterSpacing: '0px'
  				}
  			],
  			textPreset2: [
  				'20px',
  				{
  					lineHeight: '120%',
  					letterSpacing: '0px'
  				}
  			],
  			textPreset3: [
  				'16px',
  				{
  					lineHeight: '150%',
  					letterSpacing: '0px'
  				}
  			],
  			textPreset4: [
  				'14px',
  				{
  					lineHeight: '120%',
  					letterSpacing: '0px'
  				}
  			],
  			textPreset5: [
  				'12px',
  				{
  					lineHeight: '120%',
  					letterSpacing: '0px'
  				}
  			],
  			textPreset5Bold: [
  				'12px',
  				{
  					lineHeight: '150%',
  					letterSpacing: '0px'
  				}
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
