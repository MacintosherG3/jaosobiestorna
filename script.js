
const machines = [
  {
    cat:"apple", name:"iMac G3 — Bondi Blue", tag:"iMac G3", year:"1998",
    cpu:"PowerPC G3 233 MHz", gpu:"ATI Rage Pro", ram:"256 MB", os:"Mac OS 9.2.2",
    i18n:{bs:{name:"iMac G3 — Bondi Blue",desc:"Jedan od najprepoznatljivijih računara s kraja 90-ih i početka 2000-ih. Prozirno kućište i Bondi Blue boja postali su simbol perioda u kojem je Apple snažno stavio naglasak na dizajn. Ovaj primjerak spaja jednostavnost PowerPC platforme s klasičnim Mac OS-om.",tag:null},ar:{name:"iMac G3 — Bondi Blue",desc:"واحد من أكثر الحواسيب تميزًا في نهاية التسعينيات وبداية الألفية. أصبح الهيكل الشفاف ولون Bondi Blue رمزًا لمرحلة ركزت فيها Apple بقوة على التصميم. يجمع هذا الجهاز بين بساطة منصة PowerPC ونظام Mac OS الكلاسيكي.",tag:null}},
    desc:"Jeden z najbardziej charakterystycznych komputerów przełomu lat 90. i 2000. Przezroczysta obudowa i kolor Bondi Blue są niemal symbolem epoki, w której Apple zaczęło mocno stawiać na wzornictwo. Ten egzemplarz jest ciekawym połączeniem prostoty PowerPC i klasycznego Mac OS."
  },
  {
    cat:"apple", name:"iMac G4 — Lampka", tag:"iMac G4", year:"2002",
    cpu:"PowerPC G4 800 MHz", gpu:"NVIDIA GeForce 2 MX", ram:"256 MB", os:"Mac OS 9.2.2 / Mac OS 10.3.9",
    i18n:{
      bs:{
        name:"iMac G4 — Ikona dizajna",
        desc:"Ikona dizajna i tehnološko remek-djelo. Predstavljen 2002. godine, ovaj revolucionarni računar zauvijek je promijenio industrijski dizajn u svijetu tehnologije. Zahvaljujući prepoznatljivom, fleksibilnom postolju inspirisanom stonom lampom i snažnom PowerPC G4 procesoru, iMac G4 je postao jedan od najcjenjenijih i najprepoznatljivijih uređaja u istoriji Apple-a. Savršen spoj nostalgije, inovacije i klasičnog Mac OS-a koji i danas očarava kolekcionare i ljubitelje dobrog dizajna širom svijeta.",
        tag:null
      },
      ar:{
        name:"iMac G4 — أيقونة التصميم",
        desc:"أيقونة التصميم وتحفة تكنولوجية. تم إصداره في عام 2002، ليُغير هذا الكمبيوتر الثوري مفهوم التصميم الصناعي في عالم التكنولوجيا إلى الأبد. بفضل قاعدته المرنة والمميزة المستوحاة من مصباح المكتب ومعالج PowerPC G4 القوي، أصبح جهاز iMac G4 واحداً من أكثر أجهزة Apple شهرة وطلباً في التاريخ. إنه مزيج مثالي بين الحنين إلى الماضي، والابتكار، ونظام التشغيل الكلاسيكي Mac OS، وهو جهاز لا يزال يثير إعجاب هواة جمع الأجهزة وعشاق التصميم العالم حتى يومنا هذا.",
        tag:null
      }
    },
    desc:"Ikona designu i technologiczne dzieło sztuki. Zaprezentowany w 2002 roku, ten przełomowy komputer na zawsze zmienił postrzeganie wzornictwa przemysłowego w branży IT. Dzięki unikalnej, regulowanej konstrukcji inspirowanej lampką biurkową oraz procesorowi PowerPC G4, iMac G4 stał się jednym z najbardziej pożądanych i rozpoznawalnych urządzeń w historii Apple. To idealne połączenie nostalgii, innowacji i klasycznego systemu Mac OS, które do dziś zachwyca kolekcjonerów i pasjonatów designu na całym świecie."
  },
  {
    cat:"apple", name:"Macintosh Classic", tag:"Macintosh", year:"1990",
    cpu:"Motorola 68000 8 MHz", gpu:"-", ram:"4 MB", os:"System 7.0.1",
    i18n:{
        bs:{
            name:"Macintosh Classic",
            desc:"Macintosh Classic je trenutno najstariji računar u mojoj kolekciji. Ima dosta problema zbog svoje starosti, uključujući stare elektrolitske kondenzatore i druge komponente koje zahtijevaju pažnju. Trenutno radim na njegovom vraćanju u potpuno ispravno stanje.",
            tag:null
        },
        ar:{
            name:"Macintosh Classic",
            desc:"يُعد Macintosh Classic حاليًا أقدم حاسوب في مجموعتي. يواجه عددًا من المشاكل بسبب عمره، بما في ذلك المكثفات الإلكتروليتية القديمة ومكونات أخرى تحتاج إلى اهتمام. أعمل حاليًا على إعادته إلى حالة تشغيل كاملة.",
            tag:null
        }
    },
    desc:"Macintosh Classic jest aktualnie najstarszym komputerem w mojej kolekcji. Jest z nim sporo problemów z powodu jego wieku, między innymi starych kondensatorów elektrolitycznych i innych podzespołów wymagających uwagi. Aktualnie pracuję nad przywróceniem go do pełnej sprawności."
  },
 
  {
    cat:"apple", name:"PowerMac G4 Sawtooth — Graphite", tag:"PowerMac G4", year:"1999",
    cpu:"PowerPC G4 400 MHz", gpu:"ATI Rage 128", ram:"384 MB", os:"Mac OS 9.2.2",
    i18n:{bs:{name:"PowerMac G4 Sawtooth — Graphite",desc:"Sawtooth predstavlja profesionalniju stranu PowerPC G4 ere. G4 procesor i ATI Rage 128 tipična su kombinacija s prijelaza u novo milenijum, dok grafitno kućište jasno odvaja ovaj model od potrošačkog iMaca.",tag:null},ar:{name:"PowerMac G4 Sawtooth — Graphite",desc:"يمثل Sawtooth الجانب الاحترافي من عصر PowerPC G4. يجمع معالج G4 وبطاقة ATI Rage 128 بين مواصفات نموذجية لمرحلة الانتقال إلى الألفية الجديدة، بينما يميّزه الهيكل الجرافيتي عن iMac الموجه للمستخدم العادي.",tag:null}},
    desc:"Sawtooth reprezentuje profesjonalniejszą stronę ery PowerPC G4. Procesor G4 i karta ATI Rage 128 tworzą zestaw typowy dla przełomu tysiącleci, a grafitowa obudowa odróżnia go od bardziej konsumenckiego iMaca."
  },
  {
    cat:"apple", name:"PowerMac G4 Quicksilver", tag:"PowerMac G4", year:"2001",
    cpu:"2× PowerPC G4 800 MHz", gpu:"GeForce 2 MX", ram:"1 GB", os:"Mac OS 9.2.2 / 10.4.11",
    i18n:{bs:{name:"PowerMac G4 Quicksilver",desc:"Quicksilver je jedan od najmoćnijih računara u kolekciji iz klasične Mac OS ere. Dva G4 procesora, 1 GB RAM-a i mogućnost rada s Mac OS 9.2.2 i Mac OS X 10.4.11 čine ga odličnom mašinom za poređenje dvije generacije Apple softvera.",tag:null},ar:{name:"PowerMac G4 Quicksilver",desc:"يُعد Quicksilver واحدًا من أقوى أجهزة المجموعة من عصر Mac OS الكلاسيكي. معالجا G4 وذاكرة 1 GB وإمكانية تشغيل Mac OS 9.2.2 وMac OS X 10.4.11 تجعله جهازًا ممتازًا لمقارنة جيلين من برمجيات Apple.",tag:null}},
    desc:"Quicksilver jest jedną z najmocniejszych maszyn kolekcji z klasycznej epoki Mac OS. Dwa procesory G4, 1 GB RAM i możliwość pracy zarówno z Mac OS 9.2.2, jak i Mac OS X 10.4.11 czynią go świetną maszyną do porównywania dwóch generacji oprogramowania Apple."
  },
  {
    cat:"apple", name:"MacBook 2006", tag:"MacBook", year:"2006",
    cpu:"Intel Core 2 Duo T2500 2 GHz", gpu:"Intel GMA 950", ram:"2 GB", os:"Mac OS X 10.4.11",
    i18n:{bs:{name:"MacBook 2006",desc:"Jedan od prvih MacBook modela s Intel procesorom. To je važna etapa u historiji Applea: prelazak s PowerPC-a na x86 otvorio je put kasnijoj generaciji Mac računara s Intel procesorima.",tag:null},ar:{name:"MacBook 2006",desc:"واحد من أوائل طرازات MacBook بمعالج Intel. كانت هذه مرحلة مهمة في تاريخ Apple؛ فالانتقال من PowerPC إلى x86 فتح الطريق أمام أجيال Mac اللاحقة بمعالجات Intel.",tag:null}},
    desc:"Jeden z pierwszych MacBooków z procesorem Intel. To ważny etap w historii Apple: odejście od PowerPC i przejście na x86 otworzyło drogę do całej późniejszej generacji komputerów Mac z procesorami Intela."
  },
  {
    cat:"apple", name:"MacBook Early 2008", tag:"MacBook", year:"2008",
    cpu:"Core 2 Duo 2.1 GHz", gpu:"Intel GMA X3100", ram:"4 GB", os:"Mac OS X 10.6.8",
    i18n:{bs:{name:"MacBook Early 2008",desc:"Bijeli MacBook iz vremena kada je Apple još razvijao prepoznatljivu polikarbonatnu liniju prijenosnika. GMA X3100 nije bila zvijer od grafike, ali je dobro odgovarala laganom sistemu i svakodnevnim zadacima tog vremena.",tag:null},ar:{name:"MacBook Early 2008",desc:"MacBook أبيض من الفترة التي كانت فيها Apple لا تزال تطور خط حواسيبها المحمولة المميز المصنوع من البوليكربونات. لم تكن GMA X3100 قوية جدًا، لكنها كانت مناسبة للنظام الخفيف والمهام اليومية في ذلك الوقت.",tag:null}},
    desc:"Biały MacBook z epoki, gdy Apple rozwijało jeszcze charakterystyczną poliwęglanową linię notebooków. GMA X3100 nie była demonem wydajności, ale dobrze pasowała do lekkiego systemu i codziennych zadań tamtego okresu."
  },
  {
    cat:"apple", name:"MacBook Pro 2008 15″", tag:"MacBook Pro", year:"2008",
    cpu:"Core 2 Duo T9300 2.5 GHz", gpu:"NVIDIA GeForce 8600M GT", ram:"6 GB", os:"Mac OS X 10.6.8",
    i18n:{bs:{name:"MacBook Pro 2008 15″",desc:"Veći i profesionalniji aluminijski notebook. T9300 i GeForce 8600M GT čine ga znatno snažnijim od običnih MacBook modela, a 6 GB RAM-a omogućilo mu je dug život i nakon njegove originalne ere.",tag:null},ar:{name:"MacBook Pro 2008 15″",desc:"حاسوب محمول أكبر وأكثر احترافية من جيل MacBook Pro المصنوع من الألومنيوم. يجعل T9300 وGeForce 8600M GT هذا الجهاز أقوى بوضوح من MacBook العادي، بينما ساعدته ذاكرة 6 GB على الاستمرار لفترة طويلة بعد عصره الأصلي.",tag:null}},
    desc:"Większy i bardziej profesjonalny notebook z aluminiowej generacji MacBook Pro. T9300 i GeForce 8600M GT tworzą konfigurację wyraźnie mocniejszą od zwykłych MacBooków, a 6 GB RAM pozwalało temu modelowi dłużej żyć poza swoją pierwotną epoką."
  },
  {
    cat:"apple", name:"MacBook Late 2009", tag:"MacBook", year:"2009",
    cpu:"Core 2 Duo P7550 2.26 GHz", gpu:"NVIDIA GeForce 9400M", ram:"4 GB", os:"Mac OS X 10.8.5 / 10.13.6",
    i18n:{bs:{name:"MacBook Late 2009",desc:"Model iz kasnije generacije bijelih MacBook računara. GeForce 9400M pruža osjetno više mogućnosti od ranijih GMA grafika, a mogućnost pokretanja starijeg i novijeg sistema daje mu drugi život kao retro mašini.",tag:null},ar:{name:"MacBook Late 2009",desc:"طراز من الجيل المتأخر من أجهزة MacBook البيضاء. قدمت GeForce 9400M إمكانات أكبر بوضوح من رسومات GMA السابقة، كما أن تشغيل أنظمة قديمة وحديثة نسبيًا يمنحه حياة ثانية كجهاز رجعي.",tag:null}},
    desc:"Model z późniejszej generacji białych MacBooków. GeForce 9400M była zintegrowaną grafiką o wyraźnie większych możliwościach niż wcześniejsze GMA, a możliwość uruchomienia zarówno starszego systemu, jak i późnego macOS daje mu drugie życie jako maszyna retro."
  },
  {
    cat:"apple", name:"MacBook Pro Late 2011 13″", tag:"MacBook Pro", year:"2011",
    cpu:"Intel Core i5 2.4 GHz", gpu:"Intel HD Graphics 3000", ram:"8 GB", os:"macOS 10.13.6",
    i18n:{bs:{name:"MacBook Pro Late 2011 13″",desc:"Kompaktni MacBook Pro s kraja Intel ere. Sandy Bridge i 8 GB RAM-a čine ga zanimljivim za stariji softver, kompatibilnost i eksperimente s ranijim verzijama macOS-a.",tag:null},ar:{name:"MacBook Pro Late 2011 13″",desc:"MacBook Pro مدمج من نهاية عصر Intel. يجعل Sandy Bridge وذاكرة 8 GB الجهاز مثيرًا للاهتمام للبرمجيات القديمة والتوافق والتجارب مع إصدارات macOS السابقة.",tag:null}},
    desc:"Kompaktowy MacBook Pro z końca ery Intela. Sandy Bridge i 8 GB RAM sprawiają, że mimo wieku jest to bardzo ciekawa maszyna do starszego oprogramowania, kompatybilności i eksperymentów z dawnymi wersjami macOS."
  },
  {
    cat:"pc", name:"Pentium 75 — S3 Trio/V2", tag:"PC", year:"1995",
    cpu:"Intel Pentium 75 MHz", gpu:"S3 Trio/V2", ram:"32 MB", os:"Windows 95 / 98",
    i18n:{bs:{name:"Pentium 75 — S3 Trio/V2",desc:"Klasični PC iz prve polovine 90-ih. Pentium 75 MHz i 32 MB RAM-a odlično odgovaraju svijetu DOS-a, Windowsa 95 i ranog Windowsa 98. Ovakve konfiguracije lijepo pokazuju koliki je skok performansi došao kasnije.",tag:null},ar:{name:"Pentium 75 — S3 Trio/V2",desc:"حاسوب شخصي كلاسيكي من النصف الأول من التسعينيات. يناسب Pentium 75 MHz وذاكرة 32 MB عالم DOS وWindows 95 وبدايات Windows 98. يوضح هذا النوع من الأجهزة مدى ضخامة قفزة الأداء التي جاءت لاحقًا.",tag:null}},
    desc:"Klasyczny PC z pierwszej połowy lat 90. Pentium 75 MHz i 32 MB RAM świetnie pasują do świata DOS-u, Windows 95 oraz wczesnego Windows 98. To właśnie takie konfiguracje pokazują, jak ogromny skok wydajności dokonał się później."
  },
  {
    cat:"pc", name:"Pentium 4 HT 661", tag:"PC", year:"2006",
    cpu:"Intel Pentium 4 HT 661 3.6 GHz", gpu:"NVIDIA GeForce 6600 GT", ram:"4 GB", os:"Windows XP",
    i18n:{bs:{name:"Pentium 4 HT 661",desc:"Mašina iz vremena kada su Pentium 4 procesori dostizali visoke taktove, a Hyper-Threading je omogućavao dva logička threada. GeForce 6600 GT odlično odgovara igrama iz Windows XP ere i pravi zanimljiv kontrast Pentiumu 75.",tag:null},ar:{name:"Pentium 4 HT 661",desc:"جهاز من عصر كانت فيه معالجات Pentium 4 تصل إلى ترددات عالية، بينما أتاح Hyper-Threading للنظام استخدام مسارين منطقيين. تناسب GeForce 6600 GT ألعاب عصر Windows XP وتقدم تباينًا واضحًا مع Pentium 75.",tag:null}},
    desc:"Maszyna z czasów, gdy Pentium 4 osiągały wysokie zegary, a Hyper-Threading pozwalał systemowi korzystać z dwóch logicznych wątków. GeForce 6600 GT dobrze pasuje do gier ery Windows XP i stanowi ciekawy kontrast dla dużo starszego Pentium 75."
  },
  {
    cat:"laptop", name:"Toshiba Portégé 3110CT", tag:"PC Laptop", year:"2000",
    cpu:"Mobile Pentium II 300 MHz", gpu:"SVGA/VGA, 2.5 MB VRAM", ram:"64 MB", os:"Windows 98 SE",
    i18n:{bs:{name:"Toshiba Portégé 3110CT",desc:"Vrlo mali notebook s kraja 90-ih i početka 2000-ih. Portégé 3110CT pripadao je laganim poslovnim računarima gdje je mobilnost bila važnija od sirove snage. U kolekciji pokazuje kako je izgledao prenosivi računar prije ere modernih ultrabookova.",tag:null},ar:{name:"Toshiba Portégé 3110CT",desc:"حاسوب محمول صغير جدًا من نهاية التسعينيات وبداية الألفية. كان Portégé 3110CT من الحواسيب التجارية الخفيفة التي كانت فيها قابلية التنقل أهم من القوة الخام. يوضح في المجموعة كيف بدت الحواسيب المحمولة قبل عصر Ultrabook الحديث.",tag:null}},
    desc:"Bardzo mały notebook z końca lat 90. i początku 2000. Portégé 3110CT należał do lekkich komputerów biznesowych, gdzie liczyła się mobilność bardziej niż surowa moc. W kolekcji świetnie pokazuje, jak wyglądał przenośny komputer przed erą współczesnych ultrabooków."
  },
  {
    cat:"laptop", name:"IBM ThinkPad R50e", tag:"PC Laptop", year:"2004",
    cpu:"Pentium M", gpu:"Intel 855GM", ram:"512 MB", os:"Windows XP",
    i18n:{bs:{name:"IBM ThinkPad R50e",desc:"ThinkPad R50e je predstavnik klasičnih poslovnih laptopa IBM-a. Platforma Intel 855GM i procesori Pentium M bili su projektovani s naglaskom na razumnu potrošnju energije. Tipična ThinkPad konstrukcija stavlja praktičnost, servisiranje i tastaturu ispred efektnog izgleda.",tag:null},ar:{name:"IBM ThinkPad R50e",desc:"يمثل ThinkPad R50e فئة الحواسيب المحمولة التجارية الكلاسيكية من IBM. صُممت منصة Intel 855GM ومعالجات Pentium M مع التركيز على استهلاك طاقة معقول. يركز تصميم ThinkPad المعتاد على العملية وقابلية الصيانة ولوحة المفاتيح أكثر من المظهر اللافت.",tag:null}},
    desc:"ThinkPad R50e to przedstawiciel klasycznych biznesowych laptopów IBM. Platforma Intel 855GM i procesory z rodziny Pentium M były projektowane z myślą o rozsądnym poborze energii. Typowa dla ThinkPadów konstrukcja stawia na praktyczność, serwisowalność i klawiaturę, a nie efektowny wygląd."
  },
  {
    cat:"main", name:"MacBook Pro M5 — główny laptop", tag:"MAIN GEAR", year:"2025",
    cpu:"Apple M5", gpu:"Apple M5", ram:"16 GB", os:"macOS 27 Golden Gate",
    i18n:{bs:{name:"MacBook Pro M5 — glavni laptop",desc:"Nenametljiv, ali moćan računar za programiranje, igranje i svakodnevnu upotrebu — bilo gdje i u bilo koje vrijeme. Savremeni kontrast kolekciji PowerPC i Intel mašina.",tag:null},ar:{name:"MacBook Pro M5 — الحاسوب المحمول الرئيسي",desc:"جهاز غير لافت في شكله لكنه قوي للبرمجة والألعاب والاستخدام اليومي في أي مكان ووقت. إنه المقابل الحديث لمجموعة أجهزة PowerPC وIntel.",tag:null}},
    desc:"Niepozorna, ale potężna maszyna do programowania, grania oraz codziennego użytku — w każdym miejscu i o każdej porze. To współczesny kontrapunkt dla kolekcji PowerPC i Intel."
  },
  {
    cat:"main", name:"Główny PC — Linux Gaming Rig", tag:"MAIN GEAR", year:"2020",
    cpu:"Intel Core i7-9700K", gpu:"NVIDIA RTX 3060 Ti", ram:"16 GB", os:"Arch Linux",
    i18n:{bs:{name:"Glavni PC — Linux Gaming Rig",desc:"Gaming mašina i pravi Linux entuzijast za sve što ne mogu raditi na Macu. Dva Samsung 990 diska od po 1 TB pružaju brzo okruženje za projekte, igre, virtuelne mašine i eksperimente s Linuxom.",tag:null},ar:{name:"الحاسوب الرئيسي — Linux Gaming Rig",desc:"جهاز ألعاب وبيئة Linux قوية لكل ما لا أستطيع القيام به على Mac. يوفر قرصا Samsung 990 بسعة 1 TB لكل منهما بيئة سريعة للمشاريع والألعاب والآلات الافتراضية وتجارب Linux.",tag:null}},
    desc:"Maszynka gamingowa oraz linuxowy wariat pod wszystko, czego nie mogę zrobić na Macu. Dwa dyski Samsung 990 1 TB dają szybkie środowisko do projektów, gier, maszyn wirtualnych i eksperymentów z Linuksem."
  }
];

const dict = {
  pl:{
    online:"ONLINE",nav_home:"START",nav_about:"O MNIE",nav_skills:"TECH",nav_collection:"KOLEKCJA",nav_phones:"TELEFONY",nav_gallery:"GALERIA",nav_sources:"ŹRÓDŁA",
    hero_title_1:"PROGRAMOWANIE.",hero_title_2:"RETRO KOMPUTERY.",hero_title_3:"LINUX.",hero_text:"To mój mały zakątek internetu poświęcony tworzeniu oprogramowania, sprzętowi z duszą i eksperymentowaniu z technologią — od klasycznego Mac OS po Arch Linux.",
    see_collection:"[ ZOBACZ KOLEKCJĘ ]",see_stack:"[ MÓJ STACK ]",home_intro_title:"BUREK / BUREKTECH",home_intro_lead:"Kod, stare komputery i ciekawość tego, jak wszystko działa.",home_intro:"Ta strona jest moim cyfrowym archiwum: pokazuję tutaj technologie, których używam, oraz kolekcję maszyn, które przeszły przez różne epoki komputerów.",quick_about:"O mnie",quick_about_desc:"kim jestem i czym się zajmuję",quick_tech:"Technologie",quick_tech_desc:"C++, Swift, MySQL, Linux, Metal, SwiftUI",quick_collection:"Kolekcja",quick_collection_desc:"Apple, PC, laptopy i główny sprzęt",
    about_title:"O MNIE",about_lead:"Lubię wiedzieć, co dzieje się pod maską.",about_text:"Programowanie traktuję jako połączenie praktyki, ciekawości i ciągłego grzebania w systemach. Tworzę w C++ i Swift, pracuję z MySQL, a Linuxa znam zarówno od strony codziennego użytkowania, jak i konfiguracji, administracji oraz pracy w terminalu.",about_text2:"Jednocześnie kolekcjonuję komputery, które pokazują, jak zmieniało się podejście do sprzętu i oprogramowania. Każda maszyna ma własną epokę, charakter i historię.",about_text3:"Nie traktuję retro sprzętu wyłącznie jako dekoracji. Lubię uruchamiać stare systemy, sprawdzać ograniczenia dawnych podzespołów, instalować oprogramowanie i porównywać dawne rozwiązania z tym, czego używamy dzisiaj.",about_text4:"Z drugiej strony interesuje mnie współczesny sprzęt: Apple Silicon, grafika GPU, Linux, programowanie aplikacji i wszystko, co pozwala budować własne narzędzia zamiast tylko korzystać z gotowych.",quote:"Nowoczesny sprzęt może i jest szybki i estetyczny ale Stary zawsze będzie ciekawszy i zabawny",about_focus_title:"CO MNIE KRĘCI",focus1_title:"Systemy",focus1:"Rozumienie systemu od terminala i procesów po usługi, pliki, sieć i konfigurację.",focus2_title:"Programowanie",focus2:"C++ dla wydajności i fundamentów oraz Swift dla ekosystemu Apple.",focus3_title:"Retro computing",focus3:"Mac OS 9, PowerPC, stare PC i próba przywracania sprzętu do życia.",focus4_title:"Eksperymenty",focus4:"Łączenie starego i nowego sprzętu oraz sprawdzanie, gdzie kończą się jego możliwości.",
    skills_title:"TECH / SKILLS",tech_intro:"Mój zestaw narzędzi — od kodu niskopoziomowego po aplikacje i administrację systemami.",cpp:"wydajne programowanie, systemy, eksperymenty niskopoziomowe",swift:"aplikacje Apple, nowoczesny kod i praca z ekosystemem macOS/iOS",mysql:"modelowanie danych, zapytania, relacje i codzienna praca z bazami",linux:"terminal, administracja, sieci, usługi, automatyzacja i Arch Linux",metal:"grafika i obliczenia GPU w ekosystemie Apple",swiftui:"deklaratywne interfejsy dla platform Apple",tech_detail_title:"JAK Z TEGO KORZYSTAM",tech_cpp_detail:"Używam go tam, gdzie liczy się kontrola, wydajność i zrozumienie tego, co dzieje się blisko sprzętu. To także mój język do eksperymentów i nauki mechanizmów systemowych.",tech_swift_detail:"Swift jest moim wejściem w współczesny świat Apple. SwiftUI pozwala mi budować interfejsy w sposób deklaratywny, a cały ekosystem dobrze łączy się z macOS i iOS.",tech_mysql_detail:"Pracuję z relacyjnymi bazami danych: projektowaniem tabel, relacjami, zapytaniami, indeksami i porządkowaniem danych.",tech_linux_detail:"Arch Linux jest moim głównym środowiskiem PC. Interesuje mnie pełny stos: shell, procesy, pakiety, usługi, sieci, logi, automatyzacja i konfiguracja systemu.",tech_metal_detail:"Metal pozwala mi zaglądać w świat GPU Apple i myśleć o grafice oraz obliczeniach bardziej bezpośrednio niż przez wysokopoziomowe API.",
    collection_title:"KOLEKCJA // COMPUTERS",collection_intro:"Maszyny z różnych epok — każda ma własną konfigurację, historię i powód, dla którego została ze mną.",all:"WSZYSTKO",main_gear:"GŁÓWNY SPRZĘT",
    phones_title:"KOLEKCJA // TELEFONY",phones_intro:"Mały przekrój historii telefonów, które trafiały do mojej kolekcji.",main_phone:"(GŁÓWNY)",phones_story_title:"DLACZEGO TELEFONY?",phones_story:"Telefony są ciekawym uzupełnieniem kolekcji komputerów, bo w małej obudowie pokazują tę samą historię rozwoju technologii: coraz mocniejsze układy, lepsze ekrany, aparaty, pamięć i coraz bardziej rozbudowane systemy.",
    gallery_title:"GALERIA // MOJE MASZYNY",gallery_intro:"Zdjęcia są wyświetlane bez przycinania. Kliknij dowolne zdjęcie, aby zobaczyć je w pełnym rozmiarze.",full_size:"FULL SIZE",
    sources_title:"NOTATKI / ŹRÓDŁA",sources_intro:"Dane kolekcji pochodzą z opisu właściciela. Dla Toshiba Portégé 3110CT i ThinkPada R50e dodałem informacje referencyjne o modelach.",sources_note:"Konfiguracje konkretnych egzemplarzy mogą różnić się od konfiguracji katalogowych — dlatego przy kolekcji zachowuję przede wszystkim dane podane dla własnych maszyn.",footer:"zbudowane z HTML + CSS + JS"
  },
  bs:{
    online:"ONLINE",nav_home:"POČETNA",nav_about:"O MENI",nav_skills:"TEHNIKA",nav_collection:"KOLEKCIJA",nav_phones:"TELEFONI",nav_gallery:"GALERIJA",nav_sources:"IZVORI",
    hero_title_1:"PROGRAMIRANJE.",hero_title_2:"RETRO RAČUNARI.",hero_title_3:"LINUX.",hero_text:"Moj mali kutak interneta posvećen razvoju softvera, starom hardveru i eksperimentisanju s tehnologijom — od klasičnog Mac OS-a do Arch Linuxa.",see_collection:"[ POGLEDAJ KOLEKCIJU ]",see_stack:"[ MOJ STACK ]",home_intro_title:"BUREK / BUREKTECH",home_intro_lead:"Kod, stari računari i radoznalost kako sve radi.",home_intro:"Ova stranica je moj digitalni arhiv: prikazuje tehnologije koje koristim i kolekciju mašina kroz različite epohe računarstva.",quick_about:"O meni",quick_about_desc:"ko sam i čime se bavim",quick_tech:"Tehnologije",quick_tech_desc:"C++, Swift, MySQL, Linux, Metal, SwiftUI",quick_collection:"Kolekcija",quick_collection_desc:"Apple, PC, laptopi i glavna oprema",
    about_title:"O MENI",about_lead:"Volim znati šta se dešava ispod haube.",about_text:"Programiranje za mene spaja praksu, radoznalost i stalno istraživanje sistema. Radim u C++ i Swiftu, koristim MySQL, a Linux poznajem kroz svakodnevni rad, konfiguraciju, administraciju i terminal.",about_text2:"Istovremeno skupljam računare koji pokazuju kako su se mijenjali hardver i softver. Svaka mašina ima svoju epohu, karakter i priču.",about_text3:"Retro hardver ne gledam samo kao dekoraciju. Volim pokretati stare sisteme, testirati granice starog hardvera i porediti ta rješenja sa današnjim.",about_text4:"Zanimaju me i Apple Silicon, GPU grafika, Linux i razvoj aplikacija — posebno kada mogu napraviti vlastiti alat.",quote:"Moderna oprema može biti brza i estetski privlačna, ali stara oprema će uvijek biti zanimljivija i zabavnija.",about_focus_title:"ŠTA ME ZANIMA",focus1_title:"Sistemi",focus1:"Od terminala i procesa do servisa, fajlova, mreže i konfiguracije.",focus2_title:"Programiranje",focus2:"C++ za performanse i osnove, Swift za Apple ekosistem.",focus3_title:"Retro computing",focus3:"Mac OS 9, PowerPC, stari PC računari i vraćanje hardvera u život.",focus4_title:"Eksperimenti",focus4:"Spajanje starog i novog hardvera i testiranje njegovih granica.",
    skills_title:"TEHNIKA / VJEŠTINE",tech_intro:"Moj alatni set — od low-level koda do aplikacija i administracije sistema.",cpp:"performanse, sistemi i low-level eksperimenti",swift:"Apple aplikacije i rad s macOS/iOS ekosistemom",mysql:"modeliranje podataka, upiti i relacije",linux:"terminal, administracija, mreže, servisi i Arch Linux",metal:"GPU grafika i računanje u Apple ekosistemu",swiftui:"deklarativni interfejsi za Apple platforme",tech_detail_title:"KAKO IH KORISTIM",tech_cpp_detail:"Koristim ga gdje su važni kontrola, performanse i razumijevanje rada blizu hardvera. Takođe mi služi za eksperimente i učenje sistemskih mehanizama.",tech_swift_detail:"Swift mi je ulaz u savremeni Apple svijet. SwiftUI omogućava deklarativne interfejse, a dobro se uklapa u macOS i iOS.",tech_mysql_detail:"Radim s relacionim bazama: tabele, relacije, upiti, indeksi i organizacija podataka.",tech_linux_detail:"Arch Linux je moje glavno PC okruženje. Zanimaju me shell, procesi, paketi, servisi, mreže, logovi, automatizacija i konfiguracija.",tech_metal_detail:"Metal mi omogućava da istražujem Apple GPU grafiku i računanje direktnije od visokog nivoa.",
    collection_title:"KOLEKCIJA // RAČUNARI",collection_intro:"Mašine iz različitih epoha — svaka ima svoju konfiguraciju, istoriju i razlog zašto je u kolekciji.",all:"SVE",main_gear:"GLAVNA OPREMA",phones_title:"KOLEKCIJA // TELEFONI",phones_intro:"Mali presjek istorije telefona koji su završili u mojoj kolekciji.",main_phone:"(GLAVNI)",phones_story_title:"ZAŠTO TELEFONI?",phones_story:"Telefoni su zanimljiv dodatak kolekciji računara jer u malom formatu pokazuju isti razvoj: jače čipove, bolje ekrane, kamere, memoriju i složenije sisteme.",gallery_title:"GALERIJA // MOJE MAŠINE",gallery_intro:"Fotografije se prikazuju bez izrezivanja. Klikni na sliku za puni format.",full_size:"FULL SIZE",sources_title:"BILJEŠKE / IZVORI",sources_intro:"Podaci o kolekciji dolaze iz opisa vlasnika. Za Toshiba Portégé 3110CT i ThinkPad R50e dodao sam referentne podatke.",sources_note:"Konkretne konfiguracije mogu se razlikovati od kataloških — zato su prioritet podaci navedeni za moje primjerke.",footer:"napravljeno u HTML + CSS + JS"
  },
  ar:{
    online:"متصل",nav_home:"البداية",nav_about:"عني",nav_skills:"التقنيات",nav_collection:"المجموعة",nav_phones:"الهواتف",nav_gallery:"المعرض",nav_sources:"المصادر",
    hero_title_1:"البرمجة.",hero_title_2:"الحواسيب القديمة.",hero_title_3:"لينكس.",hero_text:"ركني الصغير على الإنترنت مخصص لتطوير البرمجيات، الأجهزة ذات الروح، وتجربة التقنيات — من Mac OS الكلاسيكي إلى Arch Linux.",see_collection:"[ شاهد المجموعة ]",see_stack:"[ التقنيات التي أستخدمها ]",home_intro_title:"BUREK / BUREKTECH",home_intro_lead:"البرمجة، الحواسيب القديمة، والفضول لمعرفة كيف يعمل كل شيء.",home_intro:"هذه الصفحة أرشيفي الرقمي: أعرض فيها التقنيات التي أستخدمها ومجموعة الأجهزة التي مرت عبر عصور مختلفة من الحوسبة.",quick_about:"عني",quick_about_desc:"من أنا وماذا أفعل",quick_tech:"التقنيات",quick_tech_desc:"C++ وSwift وMySQL وLinux وMetal وSwiftUI",quick_collection:"المجموعة",quick_collection_desc:"Apple وPC والحواسيب المحمولة والأجهزة الرئيسية",
    about_title:"عني",about_lead:"أحب أن أعرف ما يحدث تحت الغطاء.",about_text:"أتعامل مع البرمجة كمزيج من التطبيق والفضول واستكشاف الأنظمة. أبرمج بـ C++ وSwift، وأعمل مع MySQL، وأستخدم Linux من الاستخدام اليومي إلى الإعداد والإدارة والعمل عبر الطرفية.",about_text2:"كما أجمع الحواسيب التي توضح كيف تغيّرت الأجهزة والبرمجيات عبر الزمن. لكل جهاز حقبته وشخصيته وقصته.",about_text3:"لا أتعامل مع الأجهزة القديمة كديكور فقط. أحب تشغيل الأنظمة القديمة واختبار حدود العتاد ومقارنة الحلول القديمة بما نستخدمه اليوم.",about_text4:"وفي المقابل أهتم بـ Apple Silicon ورسوميات GPU وLinux وتطوير التطبيقات وبناء أدواتي الخاصة.",quote:"قد تكون المعدات الحديثة سريعة وجميلة، لكن المعدات القديمة ستظل دائمًا أكثر إثارة ومتعة.",about_focus_title:"ما يهمني",focus1_title:"الأنظمة",focus1:"من الطرفية والعمليات إلى الخدمات والملفات والشبكات والإعدادات.",focus2_title:"البرمجة",focus2:"C++ للأداء والأساسيات وSwift لمنظومة Apple.",focus3_title:"الحوسبة القديمة",focus3:"Mac OS 9 وPowerPC والحواسيب القديمة وإعادتها إلى الحياة.",focus4_title:"التجارب",focus4:"دمج العتاد القديم والجديد واختبار حدوده.",
    skills_title:"التقنيات / المهارات",tech_intro:"مجموعة أدواتي — من البرمجة منخفضة المستوى إلى التطبيقات وإدارة الأنظمة.",cpp:"برمجة عالية الأداء وأنظمة وتجارب منخفضة المستوى",swift:"تطبيقات Apple والعمل مع macOS وiOS",mysql:"نمذجة البيانات والاستعلامات والعلاقات",linux:"الطرفية والإدارة والشبكات والخدمات وArch Linux",metal:"رسوميات وحسابات GPU ضمن منظومة Apple",swiftui:"واجهات تصريحية لمنصات Apple",tech_detail_title:"كيف أستخدمها",tech_cpp_detail:"أستخدم C++ عندما تكون السيطرة والأداء وفهم ما يحدث قرب العتاد مهمة. كما أستخدمه للتجارب وتعلم آليات الأنظمة.",tech_swift_detail:"Swift هو مدخلي إلى عالم Apple الحديث، وSwiftUI يساعدني في بناء الواجهات بطريقة تصريحية.",tech_mysql_detail:"أعمل مع قواعد البيانات العلائقية: الجداول والعلاقات والاستعلامات والفهارس وتنظيم البيانات.",tech_linux_detail:"Arch Linux هو بيئة PC الرئيسية لدي. أهتم بالـshell والعمليات والحزم والخدمات والشبكات والسجلات والأتمتة والإعداد.",tech_metal_detail:"Metal يسمح لي باستكشاف رسومات وحسابات GPU في أجهزة Apple بشكل أكثر مباشرة.",
    collection_title:"المجموعة // الحواسيب",collection_intro:"أجهزة من عصور مختلفة — لكل جهاز مواصفاته وتاريخه وسبب وجوده في المجموعة.",all:"الكل",main_gear:"الأجهزة الرئيسية",phones_title:"المجموعة // الهواتف",phones_intro:"جزء صغير من تاريخ الهواتف التي وصلت إلى مجموعتي.",main_phone:"(الرئيسي)",phones_story_title:"لماذا الهواتف؟",phones_story:"الهواتف إضافة جميلة لمجموعة الحواسيب لأنها تُظهر في مساحة صغيرة تطور المعالجات والشاشات والكاميرات والذاكرة والأنظمة.",gallery_title:"المعرض // أجهزتي",gallery_intro:"تُعرض الصور بدون قص. اضغط على الصورة لعرضها بالحجم الكامل.",full_size:"FULL SIZE",sources_title:"ملاحظات / مصادر",sources_intro:"بيانات المجموعة مأخوذة من وصف المالك. أضفت بيانات مرجعية لـToshiba Portégé 3110CT وThinkPad R50e.",sources_note:"قد تختلف مواصفات الجهاز الفعلي عن مواصفات الكتالوج؛ لذلك أعتمد على بيانات أجهزتي.",footer:"مبني باستخدام HTML + CSS + JS"
  }
};

dict.en = {
online:'ONLINE',nav_home:'HOME',nav_about:'ABOUT ME',nav_skills:'TECH',nav_collection:'COLLECTION',nav_phones:'PHONES',nav_gallery:'GALLERY',nav_sources:'SOURCES',
hero_title_1:'PROGRAMMING.',hero_title_2:'RETRO COMPUTERS.',hero_title_3:'LINUX.',hero_text:'My little corner of the internet, dedicated to building software, hardware with character, and experimenting with technology — from classic Mac OS to Arch Linux.',see_collection:'Explore the collection',see_stack:'My tech stack',home_intro_title:'BUREK / BUREKTECH',home_intro_lead:'Code, old computers, and curiosity about how everything works.',home_intro:'This website is my digital archive: I share the projects and technologies I work with, and my collection of machines from different eras of computing.',quick_about:'About me',quick_about_desc:'who I am and what I do',quick_tech:'Technologies',quick_tech_desc:'C++, Swift, MySQL, Linux, Metal, SwiftUI',quick_collection:'Collection',quick_collection_desc:'Apple, PCs, laptops, and my main gear',
about_title:'ABOUT ME',about_lead:'I like knowing what happens under the hood.',about_text:'For me, programming combines hands-on practice, curiosity, and constant tinkering with systems. I write C++ and Swift, work with MySQL, and know Linux through everyday use, configuration, administration, and terminal work.',about_text2:'I also collect computers that show how approaches to hardware and software have changed. Every machine has its own era, character, and story.',about_text3:'Retro hardware is more than decoration to me. I enjoy running old operating systems, exploring the limits of older components, installing software, and comparing past solutions with what we use today.',about_text4:'I am also interested in modern hardware: Apple Silicon, GPU graphics, Linux, app development, and anything that lets me build my own tools instead of just using ready-made ones.',quote:'Modern hardware may be fast and good-looking, but old hardware will always be more interesting and fun.',about_focus_title:'WHAT I ENJOY',focus1_title:'Systems',focus1:'Understanding systems, from terminals and processes to services, files, networking, and configuration.',focus2_title:'Programming',focus2:'C++ for performance and fundamentals, and Swift for the Apple ecosystem.',focus3_title:'Retro computing',focus3:'Mac OS 9, PowerPC, old PCs, and bringing hardware back to life.',focus4_title:'Experiments',focus4:'Combining old and new hardware and finding out where its limits lie.',
skills_title:'TECH / SKILLS',tech_intro:'My toolkit — from low-level code to applications and system administration.',cpp:'high-performance programming, systems, and low-level experiments',swift:'Apple apps, modern code, and the macOS/iOS ecosystem',mysql:'data modelling, queries, relationships, and everyday database work',linux:'terminal, administration, networking, services, automation, and Arch Linux',metal:'GPU graphics and computing in the Apple ecosystem',swiftui:'declarative interfaces for Apple platforms',tech_detail_title:'HOW I USE THEM',tech_cpp_detail:'I use C++ where control, performance, and understanding what happens close to the hardware matter. It is also my language for experiments and learning how systems work.',tech_swift_detail:'Swift is my way into the modern Apple world. SwiftUI lets me build interfaces declaratively, and the ecosystem fits naturally with macOS and iOS.',tech_mysql_detail:'I work with relational databases: designing tables, relationships, queries, indexes, and organising data.',tech_linux_detail:'Arch Linux is my main PC environment. I am interested in the full stack: shells, processes, packages, services, networking, logs, automation, and system configuration.',tech_metal_detail:'Metal lets me explore Apple GPUs and approach graphics and computing more directly than through high-level APIs.',
collection_title:'COLLECTION // COMPUTERS',collection_intro:'Machines from different eras — each with its own configuration, history, and reason for staying in my collection.',all:'ALL',main_gear:'MAIN GEAR',phones_title:'COLLECTION // PHONES',phones_intro:'A small cross-section of the history of phones that have found their way into my collection.',main_phone:'(MAIN)',phones_story_title:'WHY PHONES?',phones_story:'Phones complement a computer collection because they tell the same story of technological progress in a small package: more powerful chips, better screens, cameras and memory, and increasingly capable operating systems.',gallery_title:'GALLERY // MY MACHINES',gallery_intro:'Photos are displayed without cropping. Click any photo to view it at full size.',full_size:'FULL SIZE',sources_title:'NOTES / SOURCES',sources_intro:'Collection details come from the owner’s descriptions. Reference information has been added for the Toshiba Portégé 3110CT and ThinkPad R50e.',sources_note:'Individual configurations may differ from catalogue specifications, so the collection prioritises the details provided for my own machines.',footer:'built with HTML + CSS + JS',
era:'Era / year',category:'Category',close:'Close',navigation:'Main navigation',language:'Select language',gallery_work:'MacBook Pro // main workstation',gallery_apple:'Collection // generations of Apple',photo_phones:'Phone collection: Nokia 6610 and several generations of iPhone',photo_code:'Code in Xcode — developing Apple applications',photo_0:'Two white MacBooks on a desk',photo_1:'Silver MacBook Pro',photo_2:'Colourful iMac G3 from the front',photo_3:'Colourful iMac G3 from the side',photo_4:'White MacBook running Mac OS X',photo_5:'MacBook Pro with a large external display and a waterfall wallpaper',photo_6:'Apple computer collection — MacBooks, an iMac, and a MacBook Pro'
};
const englishDescriptions = [
'One of the most recognisable computers of the late 1990s and early 2000s. Its translucent case and Bondi Blue colour symbolise an era when Apple put design centre stage. This machine combines the simplicity of PowerPC with classic Mac OS.',
'A design icon and a technological work of art. Introduced in 2002, this groundbreaking computer reshaped industrial design in IT. Its distinctive adjustable desk-lamp-inspired construction and PowerPC G4 processor made it one of Apple’s most desirable and recognisable machines. It combines nostalgia, innovation, and classic Mac OS, and still delights collectors and design enthusiasts around the world.',
'The Macintosh Classic is currently the oldest computer in my collection. Its age brings several problems, including ageing electrolytic capacitors and other components that need attention. I am currently working to restore it to full working order.',
'Sawtooth represents the professional side of the PowerPC G4 era. Its G4 processor and ATI Rage 128 are a typical turn-of-the-millennium combination, while the graphite case sets it apart from the consumer-focused iMac.',
'Quicksilver is one of the collection’s most powerful machines from the classic Mac OS era. Dual G4 processors, 1 GB of RAM, and support for both Mac OS 9.2.2 and Mac OS X 10.4.11 make it ideal for comparing two generations of Apple software.',
'One of the first Intel-powered MacBooks. It marks an important stage in Apple’s history: the move from PowerPC to x86 paved the way for subsequent generations of Intel Macs.',
'A white MacBook from the era when Apple was still developing its distinctive polycarbonate notebooks. The GMA X3100 was no performance powerhouse, but it suited the lightweight operating system and everyday tasks of the time.',
'A larger, more professional notebook from the aluminium MacBook Pro generation. Its T9300 and GeForce 8600M GT make it considerably more powerful than standard MacBooks, while 6 GB of RAM helped extend its useful life.',
'A later-generation white MacBook. Its integrated GeForce 9400M offered substantially more capability than earlier GMA graphics. Support for both older systems and later macOS releases gives it a second life as a retro machine.',
'A compact Intel-era MacBook Pro. Sandy Bridge and 8 GB of RAM make it an interesting machine for older software, compatibility work, and experiments with earlier macOS releases, despite its age.',
'A classic PC from the first half of the 1990s. A 75 MHz Pentium and 32 MB of RAM fit the world of DOS, Windows 95, and early Windows 98 perfectly. Configurations like this show just how enormous later performance gains were.',
'A machine from the days of high-clocked Pentium 4 processors, when Hyper-Threading gave the operating system two logical threads. The GeForce 6600 GT suits Windows XP-era games and provides an interesting contrast to the much older Pentium 75.',
'A tiny notebook from the turn of the millennium. The Portégé 3110CT belonged to a class of lightweight business computers where mobility mattered more than raw power. It shows what portable computing looked like before modern ultrabooks.',
'A classic IBM business laptop. The Intel 855GM platform and Pentium M processors were designed with sensible power consumption in mind. Its ThinkPad construction prioritises practicality, serviceability, and the keyboard over flashy looks.',
'An understated but powerful machine for programming, gaming, and everyday use — anywhere, anytime. It is a modern counterpoint to the PowerPC and Intel collection.',
'My gaming machine and all-purpose Linux workhorse for everything I cannot do on a Mac. Two 1 TB Samsung 990 drives provide a fast environment for projects, games, virtual machines, and Linux experiments.'
];
machines.forEach((m,i)=>{m.i18n.en={name:({1:'iMac G4 — Desk Lamp',14:'MacBook Pro M5 — main laptop',15:'Main PC — Linux Gaming Rig'})[i] || m.name,desc:englishDescriptions[i]};});
Object.assign(dict.pl,{era:'Era / rok',category:'Kategoria',close:'Zamknij',navigation:'Główna nawigacja',language:'Wybierz język',gallery_work:'MacBook Pro // główne stanowisko pracy',gallery_apple:'Kolekcja // Apple w kilku generacjach'});
Object.assign(dict.bs,{era:'Era / godina',category:'Kategorija',close:'Zatvori',navigation:'Glavna navigacija',language:'Odaberi jezik'});
Object.assign(dict.ar,{era:'العصر / السنة',category:'الفئة',close:'إغلاق',navigation:'التنقل الرئيسي',language:'اختر اللغة'});
const preferences = {
 get(key){try{return localStorage.getItem(key)}catch{return null}},
 set(key,value){try{localStorage.setItem(key,value)}catch{}}
};

let lang = preferences.get("retroLang") || "pl";
if(!dict[lang]) lang="pl";

function applyLang(){
  const d = dict[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(d[key] !== undefined) el.textContent=d[key];
  });
  document.querySelectorAll(".lang").forEach(b=>{
    b.classList.toggle("active",b.dataset.lang===lang);
    b.setAttribute("aria-pressed",String(b.dataset.lang===lang));
  });
  document.querySelectorAll("[data-i18n-alt]").forEach(el=>{
    if(!el.dataset.originalAlt) el.dataset.originalAlt=el.alt;
    el.alt=d[el.dataset.i18nAlt] || el.dataset.originalAlt;
  });
  document.querySelectorAll("[data-i18n-extra]").forEach(el=>{
    if(!el.dataset.originalText) el.dataset.originalText=el.textContent;
    el.textContent=d[el.dataset.i18nExtra] || el.dataset.originalText;
  });
  document.querySelector(".nav")?.setAttribute("aria-label",d.navigation);
  document.querySelector(".lang-switcher")?.setAttribute("aria-label",d.language);
  document.querySelectorAll(".modal-close,.lightbox-close").forEach(el=>el.setAttribute("aria-label",d.close));
  const activeLink=document.querySelector('.nav [aria-current="page"]');
  if(activeLink) document.title="Burek / Burektech — "+activeLink.textContent;
  const description=document.querySelector('meta[name="description"]');
  if(description) description.content=d.hero_text;
  const openModal=document.getElementById("modal");
  if(openModal) openMachine(Number(openModal.dataset.index));
  preferences.set("retroLang",lang);
  if(document.getElementById("collectionGrid")) renderMachines(document.querySelector(".filter.active")?.dataset.filter || "all");
}

function machineText(m){
  const tr=m.i18n?.[lang];
  return {name:tr?.name || m.name, tag:tr?.tag || m.tag, desc:tr?.desc || m.desc};
}
function machineHTML(m,i){
  const t=machineText(m);
  return `<article class="machine" data-index="${i}">
    <div class="machine-top"><h3>${t.name}</h3><span class="tag">${t.tag}</span></div>
    <p>${t.desc}</p>
    <div class="specs">
      <div><b>CPU:</b> ${m.cpu}</div><div><b>GPU:</b> ${m.gpu}</div>
      <div><b>RAM:</b> ${m.ram}</div><div><b>OS:</b> ${m.os}</div>
    </div>
  </article>`;
}
function renderMachines(filter="all"){
  const grid=document.getElementById("collectionGrid");
  grid.innerHTML=machines.map((m,i)=>({m,i})).filter(x=>filter==="all"||x.m.cat===filter).map(x=>machineHTML(x.m,x.i)).join("");
  grid.querySelectorAll(".machine").forEach(card=>card.addEventListener("click",()=>openMachine(+card.dataset.index)));
}
function openMachine(i){
  const m=machines[i];
  const t=machineText(m);
  const modal=document.getElementById("modal");
  if(!modal){
    const box=document.createElement("div");
    box.className="modal open";
    box.id="modal";
    box.innerHTML=`<div class="modal-box"><button class="modal-close" aria-label="${dict[lang].close}">X</button><div id="modalContent"></div></div>`;
    document.body.appendChild(box);
    box.addEventListener("click",e=>{if(e.target===box) box.remove()});
    box.querySelector(".modal-close").addEventListener("click",()=>box.remove());
  }
  const current=document.getElementById("modal");
  current.dataset.index=String(i);
  const content=current.querySelector("#modalContent");
  content.innerHTML=`<h3>${t.name}</h3><p>${t.desc}</p><div class="big-specs">
    <div><b>CPU</b><br>${m.cpu}</div><div><b>GPU</b><br>${m.gpu}</div>
    <div><b>RAM</b><br>${m.ram}</div><div><b>OS</b><br>${m.os}</div>
    <div><b>${dict[lang].era}</b><br>${m.year}</div><div><b>${dict[lang].category}</b><br>${t.tag}</div>
  </div>`;
}

document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  renderMachines(btn.dataset.filter);
}));

document.querySelectorAll(".lang").forEach(btn=>btn.addEventListener("click",()=>{
  lang=btn.dataset.lang;
  applyLang();
}));

document.querySelectorAll(".gallery-link").forEach(link=>{
  link.addEventListener("click",e=>{
    e.preventDefault();
    const lightbox=document.getElementById("lightbox");
    if(!lightbox) return;
    const img=lightbox.querySelector("#lightboxImage");
    const thumb=link.querySelector("img");
    img.src=link.href;
    img.alt=thumb.alt;
    lightbox.querySelector("#lightboxCaption").textContent=thumb.alt + " — " + img.naturalWidth + " × " + img.naturalHeight + " px";
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden","false");
  });
});
const lightbox=document.getElementById("lightbox");
if(lightbox){
  const close=()=>{lightbox.classList.remove("open");lightbox.setAttribute("aria-hidden","true");};
  lightbox.querySelector(".lightbox-close").addEventListener("click",close);
  lightbox.addEventListener("click",e=>{if(e.target===lightbox)close()});
  document.addEventListener("keydown",e=>{if(e.key==="Escape")close()});
}

document.addEventListener("keydown",e=>{if(e.key==="Escape")document.getElementById("modal")?.remove()});
document.getElementById("year").textContent=new Date().getFullYear();
let vc=Number(preferences.get("retroVisits")||42)+1;
preferences.set("retroVisits",vc);
document.getElementById("visitorCount").textContent=String(vc).padStart(6,"0");
applyLang();
