
const events = [
    {
        id: 1,
        name: "Robotlar Şehri",
        desc: "İstanbul! Çocukları ROBOTLAR ŞEHRİ - EMAAR SQUARE MALL'a getirin. 24 Mart - 2 Ekim arasında buradayız. İstanbul'da ilk kez Las Vegas, Berlin ve Tokyo'dan 85 robot. Her yarım saatte bir 5 teknik performans ve 11 VR teknolojisi.",
        date: "2022-06-27T18:30:00.000Z",
        category: "Sergi",
        image: [
            "https://backstage-feo.doracdn.com/resize/cbd799aa13be4c5b/760/430/static/---1182x665_1652954631.jpg",
            "https://www.independentturkish.com/sites/default/files/styles/1368x911/public/article/main_image/2020/09/09/459371-2026390160.jpg?itok=F3XXUS14",
            "https://cdn1.ntv.com.tr/gorsel/0a_KllWxgEmDAPbI39o7Gg.jpg?width=1000&mode=crop&scale=both"
        ],
        locations: [
            {
                name: "EMAAR SQUARE MALL / ÜSKÜDAR",
                lat: 41.003439,
                lng: 29.069191
            }]
    },

    {
        id: 2,
        name: "Culture NEXT 2022",
        desc: "TBWA global ekibi tarafından hazırlanan Küresel Kültürel Değişim Raporu’nun Türkiye’deki yansımalarını incelemek üzere TBWA\Group Istanbul, Ipsos ve Oksijen tarafından hayata geçirilen “Culture NEXT 2022 Kültürel Değişim Konferansı” 21 Haziran 2022’de Uniq’de!",
        date: "2022-06-25T10:30:00.000Z",
        category: "Konferans",
        image: ["https://backstage-feo.doracdn.com/resize/cbd799aa13be4c5b/760/430/static/mobilet-icerikleri-2_1654794104.jpg"],
        locations: [
            {
                name: "UNIQ Hall / MASLAK",
                lat: 41.1076033,
                lng: 29.0054297
            }]
    },

    {
        id: 3,
        name: "Leonardo Da Vinci",
        desc: "Dijital verileri renk olarak, algoritmayı ise fırça olarak kullanan Ouchhh, sanatın geleceğini yeniden tanımlayan fiziksel dünya ile dijital dünya arasında bağlantı kurmayı hedefliyor. Michelangelo, Raphael Botticelli gibi ustalar tarafından yapılan sanat tarihinin ünlü şaheserleri ile Leonardo Da Vinci'nin öncülüğünde, sanat ve bilimin ışığıyla yapay zeka algoritmalarını kullanarak daha önce hiç görülmemiş kompozisyonların oluşturulmasıyla yeni bir sanat eseri şeklinde tekrar hayata döndürülüyor.",
        date: "2022-06-25T10:00:00.000Z",
        category: "Sergi",
        image: ["https://backstage-feo.doracdn.com/resize/cbd799aa13be4c5b/760/430/static/xmam-mobilet-1182x665_1653900482.png"],
        locations: [
            {
                name: "Metropol İstanbul AVM / ATAŞEHİR",
                lat: 40.994017,
                lng: 29.1202509
            }]
    },

    {
        id: 4,
        name: "Berk Baysal",
        desc: "Organizasyon firması, diğer misafirleri rahatsız eden/edecek nitelikte, uygun görmediği kişileri etkinlik için bilet bedelini iade etmek koşuluyla, etkinlik mekanına kişiyi almama hakkına sahiptir.",
        date: "2022-07-21T21:00:00.000Z",
        category: "Konser",
        image: ["https://backstage-feo.doracdn.com/resize/cbd799aa13be4c5b/760/430/static/xmam-mobilet-1182x665_1653900482.png", "https://img-s1.onedio.com/id-61a5411a528659763a8f4a00/rev-0/w-620/f-jpg/s-75175c35cba3e386d5cbc7dc103bf201a9cfd2a2.jpg"],
        locations: [
            {
                name: "IF Performance Hall, Ankara",
                lat: 39.9116509,
                lng: 32.8538881
            }]
    },

    {
        id: 5,
        name: "Bir Baba Hamlet",
        desc: "Kalaslarından dekor, heveslerinden oyun yapmak üzere yola çıkmış iki cüretkar oyuncu, kendilerine kurban olarak Shakespeare'in başyapıtı Hamlet'i seçmişlerdir.",
        date: "2022-07-21T21:00:00.000Z",
        category: "Tiyatro",
        image: ["https://backstage-feo.doracdn.com/resize/cbd799aa13be4c5b/760/430/static/bbh-1182x665_1649767673.jpg"],
        locations: [
            {
                name: "İzmir Kültürpark Açıkhava Tiyatrosu",
                lat: 38.4286642,
                lng: 27.1460229
            }]
    },

    {
        id: 6,
        name: "Adamlar",
        desc: "Kişisel bir trajedinin ardından, Harper (Jessie Buckley) yaralarını sarıp, iyileşmek umuduyla İngiltere’nin güzel kırsal bir bölgesinde inzivaya çekilir",
        date: "2022-06-17T21:00:00.000Z",
        category: "Sinema",
        image: [""],
        locations: [
            {
                name: "Pera Sineması",
                lat: 41.0345022,
                lng: 28.9771926
            }]
    },

    {
        id: 7,
        name: "Anadolu Efes Mavi Sahne:",
        desc: "Murat Gülsoy’un aynı adlı romanından, Ceren Boz ve Nagihan Gürkan tarafından sahneye uyarlanan Yalnızlar İçin Çok Özel Bir Hizmet, kendini bilmek ve bulmak arasındaki bir kayboluş hikayesi. Mirat’ın kendi ağzından dinlediğimiz bu hikaye Esra, Tuncay, Mirat ve diğerleri arasında...",
        date: "2022-06-22T21:00:00.000Z",
        category: "Tiyatro",
        image: ["https://backstage-feo.doracdn.com/resize/cbd799aa13be4c5b/760/430/static/yalnizlar1_1651709433.jpg"],
        locations: [
            {
                name: "DasDas Atölye",
                lat: 40.9940051,
                lng: 29.1230063
            }]
    },

    {
        id: 8,
        name: "Allame",
        desc: "Organizasyon firması, diğer misafirleri rahatsız eden/edecek nitelikte, uygun görmediği kişileri etkinlik için bilet bedelini iade etmek koşuluyla, etkinlik mekanına kişiyi almama hakkına sahiptir.",
        date: "2022-07-10T22:00:00.000Z",
        category: "Konser",
        image: ["https://backstage-feo.doracdn.com/resize/cbd799aa13be4c5b/760/430/static/allame_1653141374.jpg", "https://i.pinimg.com/736x/9f/93/60/9f9360d38bf1eed52d894477139f077e.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJAkMsZkyqFh4v4gpEAwCpR0rGdYznm-RubZsrPiOqPoKJgWar4TdHZ44Z35auRnWstoc&usqp=CAU"],
        locations: [
            {
                name: "IF Performance Hall, Ankara",
                lat: 39.9116509,
                lng: 32.8538881
            }]
    },


]

module.exports = events