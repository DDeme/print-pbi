
export const isBrowserSupported = (): boolean => getChromeVersion() > 70

const getChromeVersion = (): number => {     
    const raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
    return raw ? parseInt(raw[2], 10) : 0;
}

