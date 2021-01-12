module.exports = function (s, config, lang, app, io) {
    if (config.showPoweredByShinobi === undefined) { config.showPoweredByShinobi = true }
    if (config.poweredByShinobi === undefined) { config.poweredByShinobi = 'Powered by Diycam India Pvt. Ltd' }
    if (config.poweredByShinobiClass === undefined) { config.poweredByShinobiClass = 'margin:15px 0 0 0;text-align:center;color:#777;font-family: sans-serif;text-transform: uppercase;letter-spacing: 3;font-size: 8pt;' }
    if (config.webPageTitle === undefined) { config.webPageTitle = 'Diycam' }
    if (config.showLoginCardHeader === undefined) { config.showLoginCardHeader = true }
    if (config.webFavicon === undefined) { config.webFavicon = 'libs/img/icon/favicon.ico' }
    if (config.logoLocation76x76 === undefined) { config.logoLocation76x76 = 'libs/img/diycamLogo.png' }
    if (config.logoLocation76x76Link === undefined) { config.logoLocation76x76Link = 'https://www.diycam.com/' }
    if (config.logoLocation76x76Style === undefined) { config.logoLocation76x76Style = 'border-radius:0%' }
    if (config.showLoginSelector === undefined) { config.showLoginSelector = true }

    s.getConfigWithBranding = function (domain) {
        var configCopy = Object.assign({}, config)
        if (config.brandingConfig && config.brandingConfig[domain]) {
            return Object.assign(configCopy, config.brandingConfig[domain])
        }
        return config
    }
}
