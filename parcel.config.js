module.exports = {
    transformers: {
      '*.pdf': ['@parcel/transformer-raw'],
      '*.html': ['@parcel/transformer-html'],
      '*.js': ['@parcel/transformer-js'],
    },
  };