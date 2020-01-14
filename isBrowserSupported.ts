
export const isBrowserSupported = (): boolean => {



  return true
}



const getChromeVersion = (): number => {     
    const raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
    console.log(raw)
    return raw ? parseInt(raw[2], 10) : false;
}

