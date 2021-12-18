export default class {
  constructor(images) {
    this._images = images;
    this._imagePosition = 0;
    this._nextImagePosition = 1;
  }

  get currentImage() {
    return this._images[this._imagePosition];
  }

  next() {
    console.log("next");
    if (this._imagePosition === this._images.length - 1) {
      this._imagePosition = 0;
    } else this._imagePosition += 1;
    console.log(this._imagePosition);
  }

  previous() {
    if (this._imagePosition === 0) {
      this._imagePosition = this._images.length - 1;
    } else this._imagePosition -= 1;
  }
}
