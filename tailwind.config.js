/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1536px",
      "4xl": "1600px",
      "5xl": "1920px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        rotateFull: "rotateFullAni 5s ease-out forwards",
        fades: "fadeAni 2s ease-in-out alternate",
        toInvisible: "toInvisibleAni 8s ease-in-out forwards",
        slideDown: "slideDownAni 1s ease-out forwards", // slide down gradient banner
        slideDown2: "slideDownAni2 1s ease-out forwards", // Vide background silde down
        solidFadeIn: "solidFadeInAni 2s ease-out forwards", // fadein navigation
        textUp: "textUpAni .3s ease-out forwards", // Heading Slide up animation
      },
      keyframes: {
        rotateFullAni: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(130deg)",
          },
        },
        fadeAni: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        toInvisibleAni: {
          "0%": {
            visibility: "visible",
          },
          "100%": {
            visibility: "hidden",
          },
        },
        slideDownAni: {
          "0%": {
            // transform: "translateY(-100vh)",
            top: "-120%",
          },
          "100%": {
            // transform: "translateY(0vh)",
            top: "0",
          },
        },
        slideDownAni2: {
          // Slide down video
          "0%": {
            transform: "translateY(-100vh)",
            visibility: "hidden",
          },
          "10%": {
            visibility: "visible",
          },
          "100%": {
            transform: "translateY(0vh)",
            visibility: "visible",
          },
        },
        solidFadeInAni: {
          // Slide down video
          "0%": {
            opacity: "0",
            zIndex: "0",
          },
          "100%": {
            opacity: "1",
            zIndex: "50",
          },
        },
        textUpAni: {
          // heading text slide up animation
          "0%": {
            transform: "translateY(50px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};

// font-family: 'Poppins', sans-serif;
// font-family: 'Quicksand', sans-serif;
