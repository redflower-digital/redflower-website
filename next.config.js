const withImages = require('next-images');
const withVideos = require('next-videos');
module.exports = withImages(withVideos()),
{
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.node = {
            fs: 'empty', // This is required
        }
        return config
    }
}