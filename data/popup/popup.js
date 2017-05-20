var mainTypes, iconSize, popupWidth, closePanel, panelColor, fontColor, backupTypes, Titles = {}, total_drag = false, isDraging = false, toggle = true;
var height_1 = 0, height_2 = 0, width = 0, iconPadding = 10;
var isFirefox = (typeof self !== 'undefined' && self.port);
var isSafari = (typeof safari !== 'undefined');

Titles['search'] = 'Яндекс.Поиск';                        Titles['gibdd'] = 'Яндекс.Штрафы';
Titles['news'] = 'Яндекс.Новости';                        Titles['dns'] = 'Яндекс DNS';
Titles['image'] = 'Яндекс.Картинки';                      Titles['spreechkit'] = 'SpreechKit';
Titles['video'] = 'Яндекс.Видео';                         Titles['xml'] = 'XML';
Titles['pogoda'] = 'Яндекс.Погода';                       Titles['factory'] = 'Yandex Data Factory';
Titles['maps'] = 'Яндекс.Карты';                          Titles['emptyCell'] = '';
Titles['mail'] = 'Яндекс.Почта';                     
Titles['market'] = 'Яндекс.Маркет';                       
Titles['money'] = 'Яндекс.Деньги';                       
Titles['music'] = 'Яндекс.Музыка';                         
Titles['disk'] = 'Яндекс.Диск';                            
Titles['translate'] = 'Яндекс.Переводчик';                           
Titles['audience'] = 'Яндекс.Аудитория';                   
Titles['direkt'] = 'Яндекс.Директ';                        
Titles['display'] = 'Яндекс.Дисплей';                
Titles['time'] = 'Яндекс.Время';                     
Titles['webmaster'] = 'Яндекс.Вебмастер';                        
Titles['stat'] = 'Яндекс.Статистика';             
Titles['tv'] = 'Яндекс.Телепрограммы';                          
Titles['calendar'] = 'Яндекс.Календарь';               
Titles['avia'] = 'Яндекс.Авиабилеты';    
Titles['bus'] = 'Яндекс.Автобусы';          
Titles['auto'] = 'Авто.ру';        
Titles['afisha'] = 'Яндекс.Афиша';                   
Titles['delivery'] = 'Яндекс.Доставка';        
Titles['internet'] = 'Яндекс.Интернетометр';        
Titles['kassa'] = 'Яндекс.Касса';               
Titles['yaca'] = 'Яндекс.Каталог';             
Titles['kinopoisk'] = 'КиноПоиск';                        
Titles['kinopoiskplus'] = 'КиноПоиск+';                  
Titles['mapconstructor'] = 'Яндекс.Конструктор Карт';              
Titles['metrica'] = 'Яндекс.Метрика';                
Titles['narodmaps'] = 'Яндекс.Народная Карта';                
Titles['realty'] = 'Яндекс.Недвижимость';        
Titles['sitesearch'] = 'Яндекс.Поиск для Сайта';               
Titles['people'] = 'Яндекс.Поиск Людей';                       
Titles['blogs'] = 'Яндекс.Поиск Блогов';                         
Titles['pdd'] = 'Яндекс.Почта для Домена';                     
Titles['probki'] = 'Яндекс.Пробки';         
Titles['travel'] = 'Яндекс.Путешествия';            
Titles['rabota'] = 'Яндекс.Работа';            
Titles['radio'] = 'Яндекс.Радио';                
Titles['rasp'] = 'Яндекс.Расписание';                     
Titles['adv'] = 'Яндекс.Реклама';                     
Titles['partner'] = 'Яндекс.Рекламная Сеть';                       
Titles['sprav'] = 'Яндекс.Справочник';                   
Titles['things'] = 'Яндекс.Сувениры';         
Titles['telephony'] = 'Яндекс.Телефония';                 
Titles['tech'] = 'Яндекс.Технологии';                   
Titles['fotki'] = 'Яндекс.Фотки';                       
Titles[''] = '';                                        

function init(data, name) {
  var id_pref, count = 0;
  if (name == 'shortcuts-table') id_pref = 'm';
  if (name == 'backup-table') id_pref = 'b';
  var nc = parseInt(document.getElementById('panel-size-input').value);
  var table = document.getElementById(name);
  var trs = table.getElementsByTagName('tr');
  document.body.style.color = fontColor;
  document.body.style.backgroundColor = '#' + panelColor;
  if (fontColor == '#444444') {
    document.getElementById('more-td').setAttribute('type', 'black');
    document.getElementById('settings-td').setAttribute('type', 'black');
  }
  else {
    document.getElementById('more-td').setAttribute('type', 'white');
    document.getElementById('settings-td').setAttribute('type', 'white');
  }
  var inputs = document.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].style.color = fontColor;
  }
  for (var i = 0; i < trs.length; i++) {
    var tds = trs[i].getElementsByTagName('td');
    for (var k = 0; k < tds.length; k++) { // first reset icons
      tds[k].draggable = false;
      tds[k].removeAttribute('id');
      tds[k].removeAttribute('type');
      tds[k].removeAttribute('title');
      tds[k].setAttribute('status', 'empty');
    }
  }
  for (var i = 0; i < trs.length; i++) {
    var tds = trs[i].getElementsByTagName('td');
    for (var j = 0; j < nc; j++) {
      var id = id_pref + count.toString();
      var td = tds[j];
      td.setAttribute('id', id);
      if (count < data.length && data[count]) {
        td.draggable = true;
        td.removeAttribute('status');
        td.setAttribute('type', data[count]);
        td.setAttribute('title', Titles[data[count]]);
        var wIC = parseInt(document.getElementById('icon-size-input').value) + "px";
        var wTD = parseInt(document.getElementById('icon-size-input').value) + iconPadding + "px";
        td.style.width = wTD;
        td.style.minWidth = wTD;
        td.style.maxWidth = wTD;
        td.style.height = wTD;
        td.style.minHeight = wTD;
        td.style.maxHeight = wTD;
        td.style.backgroundSize = wIC;
      }
      count++;
    }
  }
  var width = nc * (parseInt(document.getElementById('icon-size-input').value) + iconPadding);
  var height_1 = document.getElementById('shortcuts-table').getBoundingClientRect().height;
  var height_2 = document.getElementById('backup-table').getBoundingClientRect().height;
  var height_3 = document.getElementById('status-div').getBoundingClientRect().height;
  var height_4 = document.getElementById('settings-div').getBoundingClientRect().height;
  var height_5 = document.getElementById('separator-table').getBoundingClientRect().height;
  var height = height_1 + height_2 + height_3 + height_4 + height_5 + 20;
  /* for panel width bug in safari and firefox */
  if (isFirefox && height_4) height += 3;
  if (isSafari && height_4) height += 2;
  document.body.style.height = height + 'px';
  document.body.style.width = width + 'px';
  doResize();
}

function initAll() {
  init(mainTypes, 'shortcuts-table');
  init(backupTypes, 'backup-table');
}

background.receive('request-inits', function (data) {
  mainTypes = data.mainTypes;
  backupTypes = data.backupTypes;
  iconSize = data.iconSize;
  popupWidth = data.popupWidth;
  closePanel = data.closePanel;
  panelColor = data.panelColor;
  fontColor = data.fontColor;
  document.getElementById('icon-size-input').value = iconSize;
  document.getElementById('panel-size-input').value = popupWidth;
  document.getElementById('panel-color-input').value = panelColor;
  document.getElementById('close-panel').setAttribute('state', closePanel);
  initAll();
});
background.send('request-inits');

function showMore(e) {
  var target = e.target || e.originalTarget;
  if (toggle) {
    total_drag = true;
    document.getElementById('backup-table').style.display = 'table';
    document.getElementById('separator-table').style.display = 'table';
    target.setAttribute('status', 'active');
    target.setAttribute("title", "Click to collapse hidden section");
    toggle = false;
  }
  else {
    total_drag = false;
    document.getElementById('backup-table').style.display = 'none';
    document.getElementById('separator-table').style.display = 'none';
    target.removeAttribute('status');
    target.setAttribute("title", "Click to see all products");
    toggle = true;
  }
  initAll();
}

document.getElementById('more-td').addEventListener('click', showMore, false);

function onMouseup(e) {
  if (isDraging) return;
  var target = e.target || e.originalTarget;
  var type = target.getAttribute('type');
  if (type) {
    background.send('open-tab-request', {
      type: type,
      inBackground: (e.ctrlKey && e.button == 0) || (e.metaKey && e.button == 0) || e.button == 1
    });
    /* close the panel after clicking on any icon */
    if (closePanel === 'close') {
      if (isFirefox) background.send('close-panel');
      else if (isSafari) safari.extension.popovers[0].hide();
      else window.close();
    }
  }
}

/* onClick does not fire (e.button == 1) on Firefox */
document.getElementById('shortcuts-table').addEventListener('mouseup', onMouseup, false);
document.getElementById('backup-table').addEventListener('mouseup', onMouseup, false);
document.getElementById('shortcuts-table').addEventListener("click", function (e) {  //prevent post-click on ubuntu
    e.preventDefault();
}, true);
document.getElementById('backup-table').addEventListener("click", function (e) { //prevent post-click on ubuntu
    e.preventDefault();
}, true);
document.getElementById('settings-td').addEventListener('click', function (e) {
  if (!document.getElementById('settings-table').style.display || document.getElementById('settings-table').style.display == "none") {
    document.getElementById('settings-table').style.display = "block";
  }
  else {
    document.getElementById('settings-table').style.display = "none";
  }
  initAll();
});

document.getElementById('reset-button').addEventListener('click', function (e) {
  background.send('reset-history');
});

document.getElementById('close-panel').addEventListener('click', function (e) {
  var target = e.target || e.originalTarget;
  var state = target.getAttribute('state');
  if (state === 'close') state = '';
  else state = 'close';
  closePanel = state;
  target.setAttribute('state', state);
  background.send('store-close-panel', state);
});

document.getElementById('panel-size-input').addEventListener('change', function (e) {
  var target = e.target || e.originalTarget;
  var nc = parseInt(target.value) || 10;
  target.value = nc;
  popupWidth = nc;
  background.send('store-popup-width', nc);
  initAll();
});

document.getElementById('icon-size-input').addEventListener('change', function (e) {
  var target = e.target || e.originalTarget;
  var is = parseInt(target.value) || 32;
  target.value = is;
  iconSize = is;
  background.send('store-icon-size', is);
  initAll();
});

document.getElementById('panel-color-input').addEventListener('change', function (e) {
  var target = e.target || e.originalTarget;
  var pc = target.value || 'FFFFFF';
  target.value = pc;
  panelColor = pc;
  fontColor = window.getComputedStyle(target).color;
  if (fontColor == 'rgb(0, 0, 0)' || fontColor == '000000' || fontColor == '#000000' ||
      fontColor == '000' || fontColor == '#000' || fontColor == 'black') {
    fontColor = '#444444';
  }
  else {
    fontColor = '#FFFFFF';
  }
  background.send('store-panel-color', pc);
  background.send('store-font-color', fontColor);
  initAll();
});

/* update status */
(function updateStatus() {
  function updateInformation(e) {
    var target = e.target || e.originalTarget;
    document.getElementById('status-td').textContent = target.getAttribute('title') || 'Yandex™ Services';
  }
  function resetInformation(e) {
    document.getElementById('status-td').textContent = 'Yandex™ Services';
  }
  var tds = document.querySelectorAll('td');
  for (var i = 0; i < tds.length; i++) {
    tds[i].addEventListener("mouseenter", updateInformation, false);
    tds[i].addEventListener("mouseleave", resetInformation, false);
  }
})();