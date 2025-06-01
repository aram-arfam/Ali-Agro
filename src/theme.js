import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

// 1. Define your soft earthy color palette
const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        // Brand colors - soft earthy palette
        brand: {
          mossGreen: { value: "#7A8471" }, // Primary brand color - muted sage
          dustySage: { value: "#A8B5A0" }, // Secondary green - gentle sage
          mintLeaf: { value: "#C7D2C7" }, // Light green - backgrounds & highlights
          fernGreen: { value: "#657A5C" }, // Darker green - text & borders

          // Warm Earth Tones
          warmTaupe: { value: "#E6D7C3" }, // Primary background - warm neutral
          sandBeige: { value: "#F2E7D5" }, // Secondary background - lighter warmth
          clayBrown: { value: "#B5967A" }, // Accent brown - buttons & elements
          dustyRose: { value: "#D4B5A0" }, // Soft pink-brown - subtle accents

          // Supporting Neutrals
          mushroom: { value: "#C9BBAE" }, // Mid-tone neutral
          driftwood: { value: "#A69B8E" }, // Text on light backgrounds
          charcoal: { value: "#4A453F" }, // Dark text
          ivory: { value: "#FEFCF7" }, // Lightest background
          mist: { value: "#F7F5F0" }, // Card backgrounds

          // Functional Colors (soft versions)
          success: { value: "#8FAF7F" }, // Soft green success
          warning: { value: "#D4B88A" }, // Warm amber warning
          error: { value: "#C49A9A" }, // Muted coral error
          info: { value: "#9BBBC4" }, // Soft blue-grey info
        },

        // Override default color scales with softer alternatives
        green: {
          50: { value: "#F7F9F7" },
          100: { value: "#E8F0E6" },
          200: { value: "#D1E0CE" },
          300: { value: "#A8C4A2" },
          400: { value: "#7FA876" },
          500: { value: "#7A8471" }, // Your main green
          600: { value: "#6B7462" },
          700: { value: "#5C6454" },
          800: { value: "#4D5445" },
          900: { value: "#3E4436" },
        },

        brown: {
          50: { value: "#FBF8F4" },
          100: { value: "#F2E7D5" },
          200: { value: "#E6D7C3" },
          300: { value: "#D4B5A0" },
          400: { value: "#C49A85" },
          500: { value: "#B5967A" }, // Your main brown
          600: { value: "#A0846B" },
          700: { value: "#8B725C" },
          800: { value: "#76604D" },
          900: { value: "#614E3E" },
        },

        gray: {
          50: { value: "#FEFCF7" },
          100: { value: "#F7F5F0" },
          200: { value: "#EDE8E0" },
          300: { value: "#D6CFC4" },
          400: { value: "#C9BBAE" },
          500: { value: "#A69B8E" }, // Your main neutral
          600: { value: "#8C8179" },
          700: { value: "#726B62" },
          800: { value: "#58524B" },
          900: { value: "#4A453F" },
        },
      },

      fonts: {
        heading: { value: "Inter, 'Segoe UI', system-ui, sans-serif" },
        body: { value: "Source Sans Pro, 'Segoe UI', system-ui, sans-serif" },
        mono: { value: "JetBrains Mono, 'Fira Code', monospace" },
      },

      fontSizes: {
        xs: { value: "0.75rem" },
        sm: { value: "0.875rem" },
        md: { value: "1rem" },
        lg: { value: "1.125rem" },
        xl: { value: "1.25rem" },
        "2xl": { value: "1.5rem" },
        "3xl": { value: "1.875rem" },
        "4xl": { value: "2.25rem" },
        "5xl": { value: "3rem" },
        "6xl": { value: "3.75rem" },
      },

      radii: {
        none: { value: "0" },
        sm: { value: "6px" },
        base: { value: "8px" },
        md: { value: "12px" },
        lg: { value: "16px" },
        xl: { value: "20px" },
        "2xl": { value: "24px" },
        "3xl": { value: "32px" },
        full: { value: "9999px" },
      },

      shadows: {
        xs: { value: "0 1px 2px 0 rgba(74, 69, 63, 0.05)" },
        sm: {
          value:
            "0 1px 3px 0 rgba(74, 69, 63, 0.1), 0 1px 2px 0 rgba(74, 69, 63, 0.06)",
        },
        base: {
          value:
            "0 4px 6px -1px rgba(74, 69, 63, 0.1), 0 2px 4px -1px rgba(74, 69, 63, 0.06)",
        },
        md: {
          value:
            "0 4px 6px -1px rgba(74, 69, 63, 0.1), 0 2px 4px -1px rgba(74, 69, 63, 0.06)",
        },
        lg: {
          value:
            "0 10px 15px -3px rgba(74, 69, 63, 0.1), 0 4px 6px -2px rgba(74, 69, 63, 0.05)",
        },
        xl: {
          value:
            "0 20px 25px -5px rgba(74, 69, 63, 0.1), 0 10px 10px -5px rgba(74, 69, 63, 0.04)",
        },
        "2xl": { value: "0 25px 50px -12px rgba(74, 69, 63, 0.25)" },
        outline: { value: "0 0 0 3px rgba(122, 132, 113, 0.2)" },
        inner: { value: "inset 0 2px 4px 0 rgba(74, 69, 63, 0.06)" },
      },
    },

    semanticTokens: {
      colors: {
        // Global color assignments
        "bg.canvas": { value: "{colors.brand.warmTaupe}" },
        "bg.default": { value: "{colors.brand.mist}" },
        "bg.subtle": { value: "{colors.brand.ivory}" },
        "bg.muted": { value: "{colors.brand.sandBeige}" },

        "fg.default": { value: "{colors.brand.charcoal}" },
        "fg.muted": { value: "{colors.brand.driftwood}" },
        "fg.subtle": { value: "{colors.brand.mushroom}" },

        "border.default": { value: "{colors.brand.mushroom}" },
        "border.muted": { value: "{colors.brand.dustySage}" },
        "border.subtle": { value: "{colors.brand.mintLeaf}" },

        // Brand semantic colors
        "colorPalette.50": { value: "{colors.brand.ivory}" },
        "colorPalette.100": { value: "{colors.brand.mintLeaf}" },
        "colorPalette.200": { value: "{colors.brand.dustySage}" },
        "colorPalette.300": { value: "{colors.brand.mossGreen}" },
        "colorPalette.400": { value: "{colors.brand.fernGreen}" },
        "colorPalette.500": { value: "{colors.brand.mossGreen}" },
        "colorPalette.600": { value: "{colors.brand.fernGreen}" },
        "colorPalette.700": { value: "{colors.brand.charcoal}" },
        "colorPalette.800": { value: "{colors.brand.charcoal}" },
        "colorPalette.900": { value: "{colors.brand.charcoal}" },
      },
    },

    globalCss: {
      "html, body": {
        bg: "bg.canvas",
        color: "fg.default",
        fontFamily: "body",
        lineHeight: "1.7",
        letterSpacing: "0.01em",
      },

      "h1, h2, h3, h4, h5, h6": {
        fontFamily: "heading",
        color: "brand.fernGreen",
        fontWeight: "600",
        letterSpacing: "-0.01em",
      },

      h1: {
        fontSize: { base: "2xl", md: "4xl" },
        lineHeight: "1.2",
      },

      h2: {
        fontSize: { base: "xl", md: "3xl" },
        lineHeight: "1.3",
      },

      h3: {
        fontSize: { base: "lg", md: "2xl" },
        lineHeight: "1.4",
      },

      a: {
        color: "brand.clayBrown",
        textDecoration: "none",
        transition: "all 0.2s ease",
        _hover: {
          color: "brand.mossGreen",
          textDecoration: "underline",
          textDecorationColor: "brand.dustySage",
          textUnderlineOffset: "3px",
        },
      },

      "*:focus-visible": {
        outline: "2px solid",
        outlineColor: "brand.dustySage",
        outlineOffset: "2px",
      },
    },

    recipes: {
      button: {
        base: {
          fontWeight: "500",
          borderRadius: "md",
          transition: "all 0.2s ease",
          _focusVisible: {
            boxShadow: "outline",
          },
        },
        variants: {
          variant: {
            solid: {
              bg: "brand.mossGreen",
              color: "white",
              _hover: {
                bg: "brand.fernGreen",
                transform: "translateY(-1px)",
                boxShadow: "lg",
              },
              _active: {
                bg: "brand.fernGreen",
                transform: "translateY(0)",
              },
            },
            outline: {
              borderColor: "brand.mossGreen",
              borderWidth: "2px",
              color: "brand.mossGreen",
              _hover: {
                bg: "brand.mintLeaf",
                borderColor: "brand.fernGreen",
                color: "brand.fernGreen",
              },
            },
            ghost: {
              color: "brand.mossGreen",
              _hover: {
                bg: "brand.mintLeaf",
                color: "brand.fernGreen",
              },
            },
            soft: {
              bg: "brand.mintLeaf",
              color: "brand.fernGreen",
              _hover: {
                bg: "brand.dustySage",
                color: "brand.charcoal",
              },
            },
          },
          size: {
            sm: {
              px: "4",
              py: "2",
              fontSize: "sm",
            },
            md: {
              px: "6",
              py: "3",
              fontSize: "md",
            },
            lg: {
              px: "8",
              py: "4",
              fontSize: "lg",
            },
          },
        },
        defaultVariants: {
          variant: "solid",
          size: "md",
        },
      },

      card: {
        base: {
          bg: "brand.mist",
          borderRadius: "lg",
          boxShadow: "base",
          border: "1px solid",
          borderColor: "border.default",
          transition: "all 0.2s ease",
          _hover: {
            boxShadow: "lg",
            borderColor: "border.muted",
            transform: "translateY(-2px)",
          },
        },
      },

      input: {
        base: {
          borderColor: "border.default",
          borderRadius: "md",
          bg: "bg.subtle",
          color: "fg.default",
          _hover: {
            borderColor: "border.muted",
          },
          _focusVisible: {
            borderColor: "brand.mossGreen",
            boxShadow: "0 0 0 1px {colors.brand.mossGreen}",
          },
          _placeholder: {
            color: "fg.muted",
          },
        },
      },
    },
  },
});

// Create the system using the new v3 API
const customTheme = createSystem(defaultConfig, config);

export default customTheme;
