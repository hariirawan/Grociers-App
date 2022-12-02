export const green = '#53B175';
export const white = '#FCFCFC';
export const grey = '#828282';
export const border = '#E2E2E2';
export const blue = '#5383EC';
export const blue_dark = '#4A66AC';
export const black = '#181725';
export const grey_light = '#F2F3F2';

export const generateRgba = () => {
  let R = Math.floor(Math.random() * 127 + 127);
  let G = Math.floor(Math.random() * 127 + 127);
  let B = Math.floor(Math.random() * 127 + 127);

  return {
    backgroundColor: `rgba(${R},${G},${B}, 0.5)`,
    borderColor: `rgba(${R},${G},${B}, 1)`,
  };
};
