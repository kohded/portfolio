const requireAsset = (asset) => {
  const assets = {};

  asset.keys().forEach((item) => {
    assets[item.replace(/^.*[\\/]/, '')] = asset(item);
  });

  return assets;
};

const image = requireAsset(require.context('images', true, /\.(gif|jpg|png|svg)$/));

export default image;
