var browser = _chrome;
var methods = ["load", "storage", "popup", "tab", "version", "timer", "button", "ospage"];
var load, storage, popup, tab, version, timer, button, ospage;
methods.forEach(function (id) {this[id] = browser[id]});

var ver = storage.read("version");
if (ver !== version()) {
  timer.setTimeout(function () {
    if (load.reason() === "install" || load.reason() === "startup") {
      if (ospage) {
      }
      storage.write("version", version());
    }
  }, 3000);
}

var mainTypes = ['search', 'news', 'image', 'video', 'pogoda', 'maps', 
                 'mail', 'market', 'money', 'music', 'disk', 'translate', 
                 'audience', 'direkt', 'metro', 'time', 'webmaster', 'stat', 
                 'tv', 'calendar'];

var backupTypes = ['avia', 'bus', 'auto', 'afisha', 'delivery', 'internet', 
                   'kassa', 'yaca', 'kinopoisk', 'kinopoiskplus', 'mapconstructor', 'metrica', 
                   'narodmaps', 'realty', 'sitesearch', 'people', 'blogs', 'pdd', 
                   'probki', 'travel', 'rabota', 'radio', 'rasp', 'adv', 
                   'partner', 'sprav', 'things', 'telephony', 'tech', 'fotki',
                   'gibdd', 'dns', 'spreechkit', 'xml', 'factory', 'toloka'];

var closePanel = '';
var iconSize = "32";
var popupWidth = "10";
var panelColor = "FFFFFF";
var fontColor = "#444444";

if (!storage.read("mainTypes")) {storage.write("mainTypes", JSON.stringify(mainTypes));}
if (!storage.read("backupTypes")) {storage.write("backupTypes", JSON.stringify(backupTypes));}

function inits() {
  popup.send('request-inits', {
    mainTypes: JSON.parse(storage.read("mainTypes")),
    backupTypes: JSON.parse(storage.read("backupTypes")),
    popupWidth: storage.read("popupWidth") || popupWidth,
    iconSize: storage.read("iconSize") || iconSize,
    closePanel: storage.read("closePanel") || closePanel,
    panelColor: storage.read("panelColor") || panelColor,
    fontColor: storage.read("fontColor") || fontColor,
  });
}
popup.receive('request-inits', inits);

popup.receive('store-icon-size', function (data) {storage.write("iconSize", data)});
popup.receive('store-font-color', function (data) {storage.write("fontColor", data)});
popup.receive('store-popup-width', function (data) {storage.write("popupWidth", data)});
popup.receive('store-panel-color', function (data) {storage.write("panelColor", data)});
popup.receive('store-close-panel', function (data) {storage.write("closePanel", data)});
popup.receive('store-mainTypes', function (data) {storage.write("mainTypes", JSON.stringify(data))});
popup.receive('store-backupTypes', function (data) {storage.write("backupTypes", JSON.stringify(data))});

popup.receive('reset-history', function () {
  storage.write("backupTypes", JSON.stringify(backupTypes));
  storage.write("mainTypes", JSON.stringify(mainTypes));
  storage.write("popupWidth", popupWidth);
  storage.write("closePanel", closePanel);
  storage.write("panelColor", panelColor);
  storage.write("fontColor", fontColor);
  storage.write("iconSize", iconSize);
  /* inits */
  inits();
});

popup.receive('open-tab-request', function (obj) {
  switch (obj.type) {
    case 'search': tab.open('https://yandex.ru/', obj.inBackground, !obj.inBackground); break;
    case 'news': tab.open('https://news.yandex.ru/', obj.inBackground, !obj.inBackground); break;
	case 'image': tab.open('https://yandex.ru/images/', obj.inBackground, !obj.inBackground); break;
	case 'video': tab.open('https://yandex.ru/video/', obj.inBackground, !obj.inBackground); break;
	case 'pogoda': tab.open('https://yandex.ru/pogoda/', obj.inBackground, !obj.inBackground); break;
	case 'maps': tab.open('https://yandex.ru/maps/', obj.inBackground, !obj.inBackground); break;
	case 'mail': tab.open('https://mail.yandex.ru/', obj.inBackground, !obj.inBackground); break;
	case 'market': tab.open('https://market.yandex.ru/', obj.inBackground, !obj.inBackground); break;
	case 'money': tab.open('https://money.yandex.ru/', obj.inBackground, !obj.inBackground); break;
	case 'music': tab.open('https://music.yandex.ru/', obj.inBackground, !obj.inBackground); break;
	case 'disk': tab.open('https://disk.yandex.ru/', obj.inBackground, !obj.inBackground); break;	  
    case 'translate': tab.open('https://translate.yandex.ru/', obj.inBackground, !obj.inBackground); break;
	case 'audience': tab.open('https://audience.yandex.ru/', obj.inBackground, !obj.inBackground); break;
	case 'direkt': tab.open('https://direct.yandex.ru/', obj.inBackground, !obj.inBackground); break;
	case 'metro': tab.open('https://metro.yandex.ru/', obj.inBackground, !obj.inBackground); break;
	case 'time': tab.open('https://yandex.ru/time', obj.inBackground, !obj.inBackground); break;
	case 'webmaster': tab.open('https://webmaster.yandex.ru/', obj.inBackground, !obj.inBackground); break;
	case 'stat': tab.open('https://stat.yandex.ru/', obj.inBackground, !obj.inBackground); break;
	case 'tv': tab.open('https://tv.yandex.ru/', obj.inBackground, !obj.inBackground); break;
	case 'calendar': tab.open('https://calendar.yandex.ru/', obj.inBackground, !obj.inBackground); break;
	case 'avia': tab.open('https://avia.yandex.ru/', obj.inBackground, !obj.inBackground); break;
	case 'bus': tab.open('https://yandex.ru/bus/', obj.inBackground, !obj.inBackground); break;
	case 'auto': tab.open('https://auto.ru/', obj.inBackground, !obj.inBackground); break;
	case 'afisha': tab.open('https://afisha.yandex.ru/', obj.inBackground, !obj.inBackground); break;
    case 'delivery': tab.open('https://delivery.yandex.ru/', obj.inBackground, !obj.inBackground); break;
	case 'internet': tab.open('https://yandex.ru/internet/', obj.inBackground, !obj.inBackground); break;
	case 'kassa': tab.open('https://kassa.yandex.ru/', obj.inBackground, !obj.inBackground); break;
	case 'yaca': tab.open('https://yandex.ru/yaca/', obj.inBackground, !obj.inBackground); break;
	case 'kinopoisk': tab.open('https://www.kinopoisk.ru/', obj.inBackground, !obj.inBackground); break;
	case 'kinopoiskplus': tab.open('https://plus.kinopoisk.ru/', obj.inBackground, !obj.inBackground); break;
	case 'mapconstructor': tab.open('https://yandex.ru/map-constructor/', obj.inBackground, !obj.inBackground); break;
	case 'metrica': tab.open('https://metrika.yandex.ru/', obj.inBackground, !obj.inBackground); break;
	case 'narodmaps': tab.open('https://n.maps.yandex.ru/', obj.inBackground, !obj.inBackground); break;
	case 'realty': tab.open('https://realty.yandex.ru/', obj.inBackground, !obj.inBackground); break;
	case 'sitesearch': tab.open('https://site.yandex.ru/', obj.inBackground, !obj.inBackground); break;
	case 'people': tab.open('https://yandex.ru/people/', obj.inBackground, !obj.inBackground); break;
	case 'blogs': tab.open('https://yandex.ru/blogs', obj.inBackground, !obj.inBackground); break;
	case 'pdd': tab.open('https://pdd.yandex.ru/', obj.inBackground, !obj.inBackground); break;
	case 'probki': tab.open('https://yandex.ru/maps/probki/', obj.inBackground, !obj.inBackground); break;
	case 'travel': tab.open('https://travel.yandex.ru/', obj.inBackground, !obj.inBackground); break;
	case 'rabota': tab.open('https://rabota.yandex.ru/', obj.inBackground, !obj.inBackground); break;
	case 'radio': tab.open('https://radio.yandex.ru/', obj.inBackground, !obj.inBackground); break;
	case 'rasp': tab.open('https://rasp.yandex.ru', obj.inBackground, !obj.inBackground); break;
	case 'adv': tab.open('https://yandex.ru/adv/', obj.inBackground, !obj.inBackground); break;
	case 'partner': tab.open('https://partner2.yandex.ru', obj.inBackground, !obj.inBackground); break;
	case 'sprav': tab.open('https://yandex.ru/sprav/', obj.inBackground, !obj.inBackground); break;
	case 'things': tab.open('https://yandex.ru/things/', obj.inBackground, !obj.inBackground); break;
	case 'telephony': tab.open('https://telephony.yandex.ru/', obj.inBackground, !obj.inBackground); break;
	case 'tech': tab.open('https://tech.yandex.ru', obj.inBackground, !obj.inBackground); break;
	case 'fotki': tab.open('https://fotki.yandex.ru/', obj.inBackground, !obj.inBackground); break;
	case 'gibdd': tab.open('https://money.yandex.ru/gibdd-debts/', obj.inBackground, !obj.inBackground); break;
	case 'dns': tab.open('https://dns.yandex.ru/', obj.inBackground, !obj.inBackground); break;
	case 'spreechkit': tab.open('https://speechkit.yandex.ru/', obj.inBackground, !obj.inBackground); break;
	case 'xml': tab.open('https://xml.yandex.ru/', obj.inBackground, !obj.inBackground); break;
	case 'factory': tab.open('https://yandexdatafactory.com/', obj.inBackground, !obj.inBackground); break;
	case 'toloka': tab.open('https://toloka.yandex.ru/', obj.inBackground, !obj.inBackground); break;
		default: tab.open('https://yandex.ru/all', obj.inBackground, !obj.inBackground); break;  
  }
});
