import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx,css,html}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				empire: {
					black: "#0e0e0e",
					darkest: "#0a0a0f",
					dark: "#141419",
					medium: "#2a2a32",
					canyon: "#2a918f",
					'canyon-deep': "#1d3a46",
					cyan: "#44f9ff",
					ghost: "#d9d9d9",
					steel: "#7A8C94",
					gunmetal: "#2a3439",
					silver: "#BCC6CC",
					light: "#f5f5f5",
					white: "#f5f5f5",
					red: "#e24a6e",
					purple: "#8a54fd",
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
                'fade-in': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'slide-up': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(20px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'pulse-subtle': {
                    '0%': {
                        opacity: '1'
                    },
                    '50%': {
                        opacity: '0.7'
                    },
                    '100%': {
                        opacity: '1'
                    }
                },
                'float': {
                    '0%, 100%': {
                        transform: 'translateY(0)'
                    },
                    '50%': {
                        transform: 'translateY(-8px)'
                    }
                },
                'gradient-x': {
                    '0%, 100%': {
                        'background-position': '0% 50%',
                    },
                    '50%': {
                        'background-position': '100% 50%',
                    },
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-in': 'fade-in 0.6s ease-out',
                'slide-up': 'slide-up 0.8s ease-out',
                'pulse-subtle': 'pulse-subtle 2.5s infinite ease-in-out',
                'float': 'float 5s infinite ease-in-out',
                'gradient-x': 'gradient-x 6s ease infinite'
			},
            backgroundImage: {
                'minimal-dark-gradient': 'linear-gradient(180deg, #141419 0%, #0a0a0f 100%)',
                'minimal-light-gradient': 'linear-gradient(180deg, #f5f5f5 0%, #2a2a32 100%)',
                'canyon-accent-gradient': 'linear-gradient(to right, #2a918f, rgba(42, 145, 143, 0.7))',
                'silver-subtle-gradient': 'linear-gradient(to bottom, rgba(217, 217, 217, 0.1) 0%, rgba(188, 198, 204, 0.05) 100%)',
                'vision-glass-dark': 'linear-gradient(135deg, rgba(10, 10, 15, 0.6) 0%, rgba(3, 3, 5, 0.5) 100%)',
                'vision-glass-light': 'linear-gradient(135deg, rgba(245, 245, 245, 0.7) 0%, rgba(217, 217, 217, 0.6) 100%)',
                'gradient-silver-to-medium': 'linear-gradient(to right, #BCC6CC, #2a2a32)',
                'gradient-canyon-to-dark': 'linear-gradient(to right, #2a918f, #1d3a46)',
            },
            fontFamily: {
                sans: ['Exo 2', 'Exo 2 Fallback', 'system-ui', 'sans-serif'],
                heading: ['Space Grotesk', 'Space Grotesk Fallback', 'system-ui', 'sans-serif'],
                mono: ['SF Mono', 'Consolas', 'monospace'],
            }
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('tailwindcss-animate')
	],
} satisfies Config;
