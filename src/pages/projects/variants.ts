export const imgMotion = {
  restDesktop: {
    x: "125px",
    opacity: 0.6,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
  rest: {
    x: 0,
    opacity: 0.6,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "spring",
      ease: "easeOut",
    },
  },
};

export const cardMotion = {
  restDesktop: {
    x: "-125px",
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
  rest: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    x: 0,
    transition: {
      duration: 0.4,
      type: "spring",
      ease: "easeOut",
    },
  },
};
