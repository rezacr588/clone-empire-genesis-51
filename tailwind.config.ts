import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
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
                // Updated color palette
                empire: {
                    light: "#F5F5F5",       // Light color from palette
                    medium: "#BCC6CC",      // Medium color from palette
                    silver: "#D9D9D9",      // Silver color from palette
                    red: "#E10600",         // Red color from palette
                    "red-dark": "#BE0500",  // Darker red for hover states
                    dark: "#0A0A0F",        // Keep deep space dark
                    darker: "#06060A",      // Keep darker backgrounds
                    darkest: "#030305",     // Keep almost black
                    charcoal: "#1A1F2C",    // Keep charcoal for cards
                    cyan: "#1EAEDB",        // Keep neon cyan for accents
                    darkCyan: "#0F87A7",    // Keep darker cyan
                    lightCyan: "#33C3F0",   // Keep lighter cyan
                    lime: "#00E676",        // Neon lime for accents
                    purple: "#7B61FF",      // Futuristic purple accent
                }
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
                        opacity: '0.9'
                    }
                },
                'float': {
                    '0%, 100%': {
                        transform: 'translateY(0)'
                    },
                    '50%': {
                        transform: 'translateY(-10px)'
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
                'pulse-subtle': 'pulse-subtle 3s infinite ease-in-out',
                'float': 'float 6s infinite ease-in-out',
                'gradient-x': 'gradient-x 8s ease infinite'
			},
            backgroundImage: {
                'glass-gradient': 'linear-gradient(109.6deg, rgba(17,24,39,0.7) 11.2%, rgba(9,13,20,0.7) 91.1%)',
                'hero-gradient': 'linear-gradient(180deg, rgba(10,10,15,0.8) 0%, rgba(5,5,5,1) 100%)',
                'card-gradient': 'linear-gradient(to top, rgba(10,11,15,0.7) 0%, rgba(15,15,22,0.4) 100%)',
                'cyan-glow': 'radial-gradient(circle, rgba(30,174,219,0.15) 0%, rgba(5,5,5,0) 70%)',
            },
            fontFamily: {
                'sans': ['Exo 2', 'Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
                'exo': ['Exo 2', 'sans-serif'],
            }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
