const MINIMAL_CHROMIUM_VERSION = 70

const getChromeVersion = (): number => {     
    const raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
    return raw ? parseInt(raw[2], 10) : 0;
}

export const isBrowserSupported = (): boolean => getChromeVersion() > MINIMAL_CHROMIUM_VERSION

