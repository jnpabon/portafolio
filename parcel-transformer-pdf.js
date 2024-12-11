const { Transformer } = require('@parcel/plugin');

module.exports = new Transformer({
  async transform({ asset }) {
    asset.type = 'pdf';
    return [asset];
  }
});