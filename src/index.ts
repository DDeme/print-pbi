// Import stylesheets
// import './main.scss';

import { handleFilesSelect } from './handleFilesSelect'
import { printView } from './printView'
import { isBrowserSupported } from './isBrowserSupported'
import { PbiDto } from './renderPrintView'

const sampleData: PbiDto[] = [
  {
    ID: '1',
    Title: 'Lorem Ipsum je fiktívny text, používaný pri návrhu tlačovín a typografie. Lorem Ipsum je štandardným výplňovým textom už od 16. storočia, keď neznámy tlačiar zobral sadzobnicu plnú tlačových znakov a pomiešal ich, aby tak vytvoril vzorkovú knihu. Prežil nielen päť storočí, ale aj skok do elektronickej sadzby, a pritom zostal v podstate nezmenený. Spopularizovaný bol v 60-tych rokoch 20.storočia, vydaním hárkov Letraset, ktoré obsahovali pasáže Lorem Ipsum, a neskôr aj publikačným softvérom ako Aldus PageMaker, ktorý obsahoval verzie Lorem Ipsum.',
    featureID: 'Lorem Ipsum je fiktívny text, používaný pri návrhu tlačovín a typografie. Lorem Ipsum je štandardným výplňovým textom už od 16. storočia, keď neznámy tlačiar zobral sadzobnicu plnú tlačových znakov a pomiešal ich, aby tak vytvoril vzorkovú knihu. Prežil nielen päť storočí, ale aj skok do elektronickej sadzby, a pritom zostal v podstate nezmenený. Spopularizovaný bol v 60-tych rokoch 20.storočia, vydaním hárkov Letraset, ktoré obsahovali pasáže Lorem Ipsum, a neskôr aj publikačným softvérom ako Aldus PageMaker, ktorý obsahoval verzie Lorem Ipsum.',
    featureTitle: 'Sample Title',
    ["Work Item Type"]: ``,
  },
  {
    ID: 'Lorem Ipsum je fiktívny text, používaný pri návrhu tlačovín a typografie. Lorem Ipsum je štandardným výplňovým textom už od 16. storočia, keď neznámy tlačiar zobral sadzobnicu plnú tlačových znakov a pomiešal ich, aby tak vytvoril vzorkovú knihu. Prežil nielen päť storočí, ale aj skok do elektronickej sadzby, a pritom zostal v podstate nezmenený. Spopularizovaný bol v 60-tych rokoch 20.storočia, vydaním hárkov Letraset, ktoré obsahovali pasáže Lorem Ipsum, a neskôr aj publikačným softvérom ako Aldus PageMaker, ktorý obsahoval verzie Lorem Ipsum.',
    Title: 'Implement new fearute',
    featureID: 'Lorem Ipsum je fiktívny text, používaný pri návrhu tlačovín a typografie. Lorem Ipsum je štandardným výplňovým textom už od 16. storočia, keď neznámy tlačiar zobral sadzobnicu plnú tlačových znakov a pomiešal ich, aby tak vytvoril vzorkovú knihu. Prežil nielen päť storočí, ale aj skok do elektronickej sadzby, a pritom zostal v podstate nezmenený. Spopularizovaný bol v 60-tych rokoch 20.storočia, vydaním hárkov Letraset, ktoré obsahovali pasáže Lorem Ipsum, a neskôr aj publikačným softvérom ako Aldus PageMaker, ktorý obsahoval verzie Lorem Ipsum.',
    featureTitle: 'Lorem Ipsum je fiktívny text, používaný pri návrhu tlačovín a typografie. Lorem Ipsum je štandardným výplňovým textom už od 16. storočia, keď neznámy tlačiar zobral sadzobnicu plnú tlačových znakov a pomiešal ich, aby tak vytvoril vzorkovú knihu. Prežil nielen päť storočí, ale aj skok do elektronickej sadzby, a pritom zostal v podstate nezmenený. Spopularizovaný bol v 60-tych rokoch 20.storočia, vydaním hárkov Letraset, ktoré obsahovali pasáže Lorem Ipsum, a neskôr aj publikačným softvérom ako Aldus PageMaker, ktorý obsahoval verzie Lorem Ipsum.',
    ["Work Item Type"]: ``,
  },
  {
    ID: '3',
    Title: 'Implement new fearute',
    featureID: '4597897',
    featureTitle: 'Sample Title',
    ["Work Item Type"]: ``,
  },
  {
    ID: '4',
    Title: 'Implement new fearute',
    featureID: '4597897',
    featureTitle: 'Sample Title',
    ["Work Item Type"]: ``,
  },
  {
    ID: '5',
    Title: 'Implement new fearute',
    featureID: '4597897',
    featureTitle: 'Sample Title',
    ["Work Item Type"]: ``,
  },
  {
    ID: '6',
    Title: 'Implement new fearute',
    featureID: '4597897',
    featureTitle: 'Sample Title',
    ["Work Item Type"]: ``,
  },
  {
    ID: '7',
    Title: 'Implement new fearute',
    featureID: '4597897',
    featureTitle: 'Sample Title',
    ["Work Item Type"]: ``,
  },
  {
    ID: '8',
    Title: 'Implement new fearute',
    featureID: '4597897',
    featureTitle: 'Sample Title',
    ["Work Item Type"]: ``,
  },
  {
    ID: '9',
    Title: 'Implement new fearute',
    featureID: '4597897',
    featureTitle: 'Sample Title',
    ["Work Item Type"]: ``,
  },
  {
    ID: '10',
    Title: 'Implement new fearute',
    featureID: '4597897',
    featureTitle: 'Sample Title',
    ["Work Item Type"]: ``,
  },
]

const main = () => {
  // checking for browser support
  if (isBrowserSupported()) {
    document.querySelector('#app').classList.remove('hidden')
  }
  else {
    document.querySelector('#unsupported').classList.remove('hidden')
  }
  
  document.getElementById('print-btn').addEventListener('click', ()=> printView(window), false);
  document.getElementById('file-upload').addEventListener('change', handleFilesSelect, false);
  
  // renderPrintView(sampleData)
  // printView()
}

// run main on dom load (ready)
//window.addEventListener('load', main)

main()