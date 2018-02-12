const requireAsset = (asset) => {
  const assets = {};

  asset.keys().forEach((item) => {
    assets[item.replace('./', '')] = asset(item);
  });

  return assets;
};

const accountIcon = requireAsset(require.context('images/icons/account', false, /\.svg$/));
const devIcon = requireAsset(require.context('images/icons/dev', false, /\.svg$/));

export {
  accountIcon,
  devIcon,
};
