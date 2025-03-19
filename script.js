// Инициализация карты
var map = L.map('map').setView([59.979216, 30.267139], 15);

// Добавление слоя карты
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

// Добавляем точки на карту
var places = [
    {
        coords: [59.979327, 30.269980],
        title: "Елагин дворец",
        img: "yelagin_palace.jpg",
        text: "Стиль - Классицизм"+ "<br>" + "Елагин дворец, построенный по проекту Карла Росси в 1818-1822 годах, являет собой яркий пример воздействия античности на архитектуру русского классицизма. Архитектор использовал элементы древнегреческой и римской архитектуры, такие как коринфские колонны и портики, что придает зданию величественность и торжественность, характерные для античных храмов. Главный фасад украшен портиком с шестью колоннами, а восточный фасад включает полуротонду, что напоминает античные строения. Стилобат, на котором расположено здание, защищает дворец от наводнений и является заимствованием из античной архитектурной практики. Легкость и гармония форм, а также использование колоннад, отражают влияние античных традиций на проектирование дворца."
    },
    {
        coords: [59.980273, 30.268516],
        title: "Оранжерея",
        img: "oranzereya.jpg",
        text: "Стиль - Классицизм"+ "<br>" + "Оранжерея на Елагином острове, построенная при И. П. Елагине, была известна зимним садом с тропическими растениями, мраморной скульптурой и экзотическими птицами. Когда Росси предстояло перестроить здание, он сохранил старые стены и изменил декор фасадов и интерьеров, вдохновившись античными элементами. Парадные фасады оранжереи украшены пилястрами, чугунными масками и скульптурными рельефами, что перекликается с архитектурным стилем соседнего Кухонного корпуса. Южный фасад с центральным стеклянным залом был оформлен с использованием пилонов, пилястр и чугунных герм, что напоминает античные архитектурные элементы, такие как колонны и волютообразные завершения. Внутреннее убранство, включая расписанные потолки и скульптурное оформление, также следовало канонам классической гармонии. Боковые флигели, предназначенные для фрейлин и наследников, имели уютное и камерное оформление, с напоминанием о павильонах античной архитектуры через большие окна и гармонию с природой."
    },
    {
        coords: [59.979799, 30.268320],
        title: "Кухонный корпус",
        img: "kichen.jpg",
        text: "Стиль - Классицизм"+ "<br>" + "Кухонный корпус на Елагином острове был построен по проекту Карла Росси в 1818-1822 годах одновременно с дворцом. Это двухэтажное здание полукруглой формы выполнено в утилитарном стиле, но украшено античными элементами, что отражает влияние классической архитектуры. Главный фасад корпуса акцентирован портиком с шестью дорическими колоннами, а фасады с нишами, содержащими копии античных статуй, придают зданию монументальность. Окна служебных помещений выходят в полуциркульный внутренний двор, который связывает корпус с окружающим пространством. Декор фасадов включает чугунные декоративные вазы, выполненные по рисункам К. Росси, и статуи, созданные скульптором С. Пименовым. Элементы лепки и живописи также выполнены мастерами Н. Саягиным и Б. Медичи. Здание гармонично вписывается в общий ансамбль Елагина острова и является памятником архитектуры мирового значения."
    },
    {
        coords: [59.980119, 30.265149],
        title: "Конюшенный корпус",
        img: "horse.jpg",
        text: "Стиль - Классицизм"+ "<br>" +"Конюшенный корпус на Елагином острове— выдающийся памятник архитектуры, спроектированный Карлом Ивановичем Росси в период с 1818 по 1822 год. Здание выполнено в форме подковы и состоит из главного фасада с дорической колоннадой и двух симметричных флигелей. Корпус был предназначен для размещения служебных помещений, включая конюшни, каретные сараи и манеж, а также жилых апартаментов для флигель-адъютантов и свиты императрицы. Полукруглая часть здания использовалась для хранения фуража, сена и размещения лошадей."

    },
    {
        coords: [59.981258, 30.267347],
        title: "Дом садовника П. Бука",
        img: "cadovnik.jpg",
        text: "Стиль - Классицизм"+ "<br>" + "Дом садовника Питера Бука – памятник деревянного зодчества, построен по проекту архитектора К. Росси в 1818–1822 гг. Питер Бук был одним из лучших садовников России начала XIX в. Этот дом имеет черты классицизма и русского ампира, что характерно для загородных усадеб и парковых построек XIX века. Архитектурные особенности: деревянная конструкция с горизонтальной обшивкой, окрашенная в светлый цвет, что характерно для русской загородной архитектуры; высокий цоколь с рустовкой, придающий зданию основательность; пропорциональные окна с декоративными наличниками, украшенные сандриками и кронштейнами, типичными для классицизма; лаконичный карниз с модулями вдоль крыши; простота и симметрия фасада, характерные для классицистической архитектуры. Такой стиль часто использовался в дворянских усадьбах и зданиях служебного назначения при парках и загородных резиденциях."
    },
    {
        coords: [59.980322, 30.263589],
        title: "Кладовые (Дом служителей)",
        img: "klad.jpg",
        text: "Стиль - Классицизм"+ "<br>" + "К 1850-м гг. по проекту архитектора Р. Кузьмина возвели деревянное здание «для сервизной и камерцалмейстерской кладовых». Здание кладовых каменное двухэтажное на каменном фундаменте, «лицевые стены, а также и внутренние в ширину строения кирпичные». Пластический акцент фасаду придавали треугольные сандрики под окнами второго этажа. Архитектурный декор распределен симметрично, соответственно классическим канонам. Его рельеф контрастирует с гладкой поверхностью штукатурных стен. Подобно остальным строениям ансамбля и здесь карнизы с модульонами окрашены белой известью, а сами стены «под серую известь». Когда дом отстроили, то решили использовать его для «проживания придворно-служителей». Поэтому комнаты были переделаны под жилые"
    },
    {
        coords: [59.980724, 30.263598],
        title: "Дом смотрителя и гоф-фурьера",
        img: "gof.jpg",
        text: "Стиль - Классицизм"+ "<br>" + "Дом смотрителя и гоф-фурьера был построен в 1836 г., выполнен в классицистическом стиле с элементами русского ампира. Архитектурные особенности: симметричный фасад с пропорциональными оконными проемами; горизонтальная деревянная обшивка, характерная для загородных усадеб XIX века; высокий рустованный цоколь, создающий эффект массивности и устойчивости; декоративные наличники над окнами с классическими сандриками и кронштейнами; строгие, но изящные карнизы с модулями, подчёркивающие геометрию здания; простые, но элегантные входные группы с небольшими навесами."
    },
    {
        coords: [59.980308, 30.262664],
        title: "Фрейлинский дом",
        img: "",
        text: "Стиль - Классицизм"+ "<br>" + ""
    },
    {
        coords: [59.980671, 30.273272],
        title: "Павильон с гранитной пристанью",
        img: "",
        text: "Стиль - Классицизм"+ "<br>" + ""
    },
    {
        coords: [59.977485, 30.269445],
        title: "Павильон Гауптвахта",
        img: "",
        text: "Стиль - Классицизм"+ "<br>" + ""
    },
    {
        coords: [59.976699, 30.268545],
        title: "Музыкальный павильон",
        img: "",
        text: "Стиль - Классицизм"+ "<br>" + ""
    },
    {
        coords: [59.978314, 30.255717],
        title: "Павильон на острове  ",
        img: "",
        text: "Стиль - Классицизм"+ "<br>" + ""
    }
];

// Добавляем маркеры
places.forEach(place => {
    const marker = L.marker(place.coords).addTo(map)
        .bindPopup(`<h3>${place.title}</h3><img src="${place.img || ''}" width="150"><p>${place.text}</p>`);

    marker.on('click', function() {
        // Меняем маркер на красный при клике
        this.setIcon(L.icon({
            iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/678111-map-marker-512.png', // Картинка для красного маркера
            iconSize: [48, 48], // Размер маркера
            iconAnchor: [24, 48], // Якорь иконки
            popupAnchor: [0, -48], // Позиция всплывающего окна
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            shadowSize: [41, 41]
        }));
    });
});
