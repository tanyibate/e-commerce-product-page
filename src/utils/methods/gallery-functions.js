const next = (currentPostion, galleryLength, currentPostionModifier) => {
  if (currentPostion === galleryLength - 1) currentPostionModifier(0);
  else currentPostionModifier(currentPostion + 1);
};

const previous = (currentPostion, galleryLength, currentPostionModifier) => {
  if (currentPostion === galleryLength - 1) currentPostionModifier(0);
  else currentPostionModifier(currentPostion + 1);
};
