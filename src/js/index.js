import '../styles/index.css';
import * as ymaps3 from 'ymaps3';

async function initMap() {
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer } = ymaps3;

  const map = new YMap(document.getElementById('map'), {
    location: {
      center: [30.608271, 59.738259],
      zoom: 14
    }
  });

  map.addChild(new YMapDefaultSchemeLayer());
}

initMap();
