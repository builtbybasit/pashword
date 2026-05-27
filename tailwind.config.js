module.exports = {
  theme: {
    extend: {
      animation: {
        bg: "bg 50s infinite ease",
        blob: "blob 25s infinite ease",
        blob2: "blob 15s infinite ease",
        blob3: "blob3 7s infinite",
        updown: "updown 2s infinite ease",
      },

      keyframes: {
        blob: {
          "0%": { backgroundPosition: "0%" },
          "50%": { backgroundPosition: "100%" },
          "100%": { backgroundPosition: "0%" },
        },

        bg: {
          "0%": { backgroundPosition: "0%" },
          "50%": { backgroundPosition: "100%" },
          "100%": { backgroundPosition: "0%" },
        },

        updown: {
          "0%": {
            transform: "translateY(0)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(50%)",
            opacity: 1,
          },
        },
      },
    },
  },
};
