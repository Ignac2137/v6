'use strict';
const DECK_COLORS=['#74b9ff','#cc5de8','#ffa94d','#51cf66','#ff5f6d','#b8ff45','#20c997','#f06595'];
const PRELOADED_ENG=[
  {id:'e01',name:'Modul Younga - stal',value:210,unit:'GPa',min:100,max:400,cat:'Materialy',desc:'Stal konstrukcyjna 190-220 GPa'},
  {id:'e02',name:'Modul Younga - aluminium',value:70,unit:'GPa',min:30,max:150,cat:'Materialy',desc:'Stopy Al 60-80 GPa'},
  {id:'e03',name:'Granica plastycznosci 42CrMo4',value:650,unit:'MPa',min:200,max:1500,cat:'Materialy',desc:'Stan ulepszony cieplnie'},
  {id:'e04',name:'Wytrzymalosc 42CrMo4 Rm',value:900,unit:'MPa',min:400,max:1800,cat:'Materialy',desc:'Stan ulepszony cieplnie'},
  {id:'e05',name:'Gestosc stali weglowej',value:7850,unit:'kg/m3',min:5000,max:12000,cat:'Materialy',desc:'Stal weglowa'},
  {id:'e06',name:'Wspolczynnik Poissona - stal',value:0.3,unit:'-',min:0.1,max:0.5,cat:'Materialy',desc:'Zakres 0.27-0.32'},
  {id:'e07',name:'Modul scinania G - stal',value:80,unit:'GPa',min:30,max:150,cat:'Materialy',desc:'G=E/[2(1+v)]'},
  {id:'e08',name:'Przyspieszenie grawitacyjne g',value:9.81,unit:'m/s2',min:9.0,max:10.5,cat:'Stale',desc:'Standard 9.80665'},
  {id:'e09',name:'Stala gazowa R',value:8.314,unit:'J/(mol K)',min:5,max:15,cat:'Stale',desc:'8.31446 J/(mol K)'},
  {id:'e10',name:'Stala gazowa powietrza',value:287,unit:'J/(kg K)',min:100,max:500,cat:'Stale',desc:'R_pow=287'},
  {id:'e11',name:'Wykladnik adiabaty powietrza k',value:1.4,unit:'-',min:1.0,max:2.0,cat:'Stale',desc:'Gazy dwuatomowe'},
  {id:'e12',name:'Cieplo wlasciwe wody cp',value:4186,unit:'J/(kg K)',min:1000,max:8000,cat:'Termiczne',desc:'25 C'},
  {id:'e13',name:'Cieplo wlasciwe powietrza cp',value:1005,unit:'J/(kg K)',min:500,max:2000,cat:'Termiczne',desc:''},
  {id:'e14',name:'Cieplo wlasciwe stali',value:490,unit:'J/(kg K)',min:200,max:1000,cat:'Termiczne',desc:''},
  {id:'e15',name:'Przewodnosc cieplna stali L',value:50,unit:'W/(m K)',min:10,max:200,cat:'Termiczne',desc:'Stal weglowa'},
  {id:'e16',name:'Przewodnosc cieplna aluminium',value:205,unit:'W/(m K)',min:50,max:400,cat:'Termiczne',desc:''},
  {id:'e17',name:'Cieplo parowania wody',value:2257,unit:'kJ/kg',min:500,max:3000,cat:'Termiczne',desc:'100 C, 1 atm'},
  {id:'e18',name:'Temperatura pary nasyconej 1MPa',value:179.9,unit:'C',min:100,max:250,cat:'Para wodna',desc:''},
  {id:'e19',name:'Cisnienie krytyczne wody',value:22.1,unit:'MPa',min:10,max:30,cat:'Para wodna',desc:'Punkt krytyczny'},
  {id:'e20',name:'Temperatura krytyczna wody',value:374,unit:'C',min:300,max:450,cat:'Para wodna',desc:'Punkt krytyczny'},
  {id:'e21',name:'Sprawnosc kotla parowego',value:90,unit:'%',min:60,max:98,cat:'Energetyka',desc:'Nowoczesny kotel'},
  {id:'e22',name:'Sprawnosc turbiny parowej',value:88,unit:'%',min:60,max:96,cat:'Energetyka',desc:'Izentropowa'},
  {id:'e23',name:'Sprawnosc generatora',value:98,unit:'%',min:90,max:99.5,cat:'Energetyka',desc:'Synchroniczny'},
  {id:'e24',name:'Sprawnosc elektrowni kondensacyjnej',value:40,unit:'%',min:20,max:55,cat:'Energetyka',desc:''},
  {id:'e25',name:'Sprawnosc elektrocieplowni',value:82,unit:'%',min:60,max:92,cat:'Energetyka',desc:'Kogeneracja'},
  {id:'e26',name:'COP pompy ciepla',value:4.5,unit:'-',min:2,max:8,cat:'Energetyka',desc:'Grunt-woda'},
  {id:'e27',name:'Limit Betza (turbiny wiatrowe)',value:59.3,unit:'%',min:30,max:65,cat:'OZE',desc:'Cp_max'},
  {id:'e28',name:'Sprawnosc PV monokrystaliczne',value:20,unit:'%',min:10,max:30,cat:'OZE',desc:''},
  {id:'e29',name:'Wspolczynnik bezpieczenstwa SF',value:1.5,unit:'-',min:1.0,max:3.5,cat:'Bezpieczenstwo',desc:'Zginanie kol ISO 6336'},
  {id:'e30',name:'Temperatura hartowania C45',value:840,unit:'C',min:700,max:1000,cat:'Obrobka',desc:'Austenityzacja'},
];
const SR0={ef:2.5,interval:0,reps:0,nextReview:null,lastReview:null,status:'new',reviews:0,type:'basic'};
const SEED_CARDS=[
  {id:'s01',deckId:'d1',front:'Pierwsza zasada termodynamiki',back:'$$\\Delta U = Q - W$$\n- **Q** - cieplo dostarczone [J]\n- **W** - praca wykonana przez uklad [J]\n\nDla przeplywu: $\\dot{Q}-\\dot{W}=\\dot{m}(h_2-h_1)$',tags:['#termodynamika','#zasady','#wzory'],...SR0},
  {id:'s02',deckId:'d1',front:'Sprawnosc silnika Carnota',back:'$$\\eta_C = 1 - \\frac{T_2}{T_1}$$\nMaksymalna mozliwa sprawnosc.\n- $T_1$ - zrodlo gorne [K]\n- $T_2$ - chlodnica [K]\n\nZaden silnik nie moze miec wyzszej sprawnosci!',tags:['#termodynamika','#carnot','#sprawnosc'],...SR0},
  {id:'s03',deckId:'d1',front:'Obieg Rankine\'a - 4 procesy',back:'1->2: Pompowanie kondensatu (izentropowe)\n2->3: Podgrzew + odparowanie w kotle (izobaryczne)\n3->4: Rozprezanie w turbinie (izentropowe)\n4->1: Skraplanie (izobaryczne)\n\n$$\\eta=\\frac{h_3-h_4-(h_2-h_1)}{h_3-h_2}$$',tags:['#termodynamika','#rankine','#obieg'],...SR0},
  {id:'s04',deckId:'d1',front:'Entropia - definicja i intuicja',back:'$$dS \\geq \\frac{\\delta Q}{T}$$\nMiara nieuporządkowania = miara utraconych mozliwosci pracy.\n- Kazdy rzeczywisty proces: $dS > 0$\n\n**Intuicja:** im wyzsza entropia -> mniej energii mozna zamienic w prace.',tags:['#termodynamika','#entropia','#intuicja'],...SR0},
  {id:'s05',deckId:'d1',front:'Entalpia wlasciwa h',back:'$$h = u + pv \\quad [\\text{J/kg}]$$\nEnergia wewnetrzna + praca przeplywu.\n\nKluczowa w maszynach przeplywowych:\n$$\\dot{W}_{turbina} = \\dot{m}(h_1 - h_2)$$\n\nDla gazu dosakonalego: $\\Delta h = c_p \\Delta T$',tags:['#termodynamika','#entalpia','#wzory'],...SR0},
  {id:'s06',deckId:'d1',front:'Egzergia vs Anergia',back:'**Egzergia** = max praca uzyteczna z ukladu:\n$$E_x = (h-h_0) - T_0(s-s_0)$$\n\n**Anergia** = energia ktorej NIE mozna zamienic w prace.\n\n$$\\text{Energia} = \\text{Egzergia} + \\text{Anergia}$$',tags:['#termodynamika','#egzergia','#intuicja'],...SR0},
  {id:'s07',deckId:'d1',front:'Sprawnosc izentropowa turbiny',back:'$$\\eta_{is} = \\frac{h_1-h_2}{h_1-h_{2s}} < 1$$\nPorownanie turbiny realnej z idealna.\n\n**Typowe wartosci:**\n- Turbina parowa: 85-92%\n- Sprezarka: 75-85%\n- Turbina gazowa: 85-90%',tags:['#termodynamika','#sprawnosc','#wzory'],...SR0},
  {id:'s08',deckId:'d1',front:'Obieg Braytona (turbina gazowa)',back:'1->2: Sprezanie (izentropowe)\n2->3: Spalanie (izobaryczne)\n3->4: Rozprezanie w turbinie (izentropowe)\n4->1: Chlodzenie (izobaryczne)\n\n$$\\eta = 1 - \\frac{1}{\\pi_k^{\\frac{\\kappa-1}{\\kappa}}}$$',tags:['#termodynamika','#brayton','#turbina-gazowa'],...SR0},
  {id:'s09',deckId:'d2',front:'Rownanie Bernoulliego',back:'$$p + \\frac{\\rho c^2}{2} + \\rho g z = const$$\n\n**Zasada:** wzrost predkosci -> spadek cisnienia.\n\n**Rurka Pitota:** $c = \\sqrt{2\\Delta p / \\rho}$',tags:['#mechanika-plynow','#bernoulli','#wzory'],...SR0},
  {id:'s10',deckId:'d2',front:'Liczba Reynoldsa',back:'$$Re = \\frac{\\rho c d}{\\mu} = \\frac{cd}{\\nu}$$\nStosunek sil bezwladnosci do lepkosci.\n\n- $Re < 2300$ -> laminarny\n- $Re > 4000$ -> turbulentny\n\n**Intuicja:** male Re = lepkosc uspokaja. Duze Re = bezwladnosc wygrywa.',tags:['#mechanika-plynow','#reynolds','#wzory'],...SR0},
  {id:'s11',deckId:'d2',front:'Kawitacja - gotowanie na zimno',back:'Gdy cisnienie lokalne spada **ponizej cisnienia parowania** -> ciecz paruje bez podgrzewania.\n\nBabelki imploduja z sila rzedu GPa -> wyrywaja metal z wirnika.\n\n**Analogia:** jak wbijanie mikrogwozdzikow w metal milion razy/sekunde.',tags:['#mechanika-plynow','#kawitacja','#pompy'],...SR0},
  {id:'s12',deckId:'d2',front:'Rownanie ciaglosci',back:'Przeplyw niescisliwy:\n$$A_1 c_1 = A_2 c_2 = \\dot{V}$$\n\nPrzeplyw scisliwy:\n$$\\rho_1 A_1 c_1 = \\rho_2 A_2 c_2 = \\dot{m}$$\n\n**Intuicja:** jezeli rura sie zweza -> predkosc rosnie.',tags:['#mechanika-plynow','#ciaglosc','#wzory'],...SR0},
  {id:'s13',deckId:'d2',front:'Darcy-Weisbach - opory przeplywu',back:'$$\\Delta p = \\lambda \\frac{l}{d} \\frac{\\rho c^2}{2}$$\n\n- $\\lambda$ - wspolczynnik oporow\n- Laminarny: $\\lambda = 64/Re$\n\n**Strata wysokosci:** $h_f = \\lambda \\frac{l}{d} \\frac{c^2}{2g}$',tags:['#mechanika-plynow','#opory','#wzory'],...SR0},
  {id:'s14',deckId:'d3',front:'Naprezenie normalne i scinajace',back:'$$\\sigma = \\frac{F}{A} \\quad \\tau = \\frac{T}{A}$$\n\n**Kryterium Hubera-Misesa:**\n$$\\sigma_{red} = \\sqrt{\\sigma^2 + 3\\tau^2} \\leq R_e$$\n\n**Jednostka:** Pa = N/m2',tags:['#wytrzymalosc','#naprezenia','#wzory'],...SR0},
  {id:'s15',deckId:'d3',front:'Prawo Hookea + modul Younga',back:'$$\\sigma = E \\cdot \\varepsilon$$\n\n$E$ - sztywnosc materialu:\n- Stal: **210 GPa**\n- Aluminium: **70 GPa**\n- Guma: ~0.01 GPa\n\n**Wazne:** E nie zalezy od gatunku stali!',tags:['#wytrzymalosc','#hooke','#wzory'],...SR0},
  {id:'s16',deckId:'d3',front:'Zginanie belek',back:'**Naprezenie:**\n$$\\sigma = \\frac{M_g}{W_g}$$\n\n**Przekroj prostokatny b x h:**\n$$W_g = \\frac{bh^2}{6}, \\quad I = \\frac{bh^3}{12}$$\n\n**Przekroj kolowy d:**\n$$W_g = \\frac{\\pi d^3}{32}, \\quad I = \\frac{\\pi d^4}{64}$$',tags:['#wytrzymalosc','#zginanie','#wzory'],...SR0},
  {id:'s17',deckId:'d3',front:'Skrecanie walow',back:'$$\\tau = \\frac{M_s}{W_s} \\qquad \\varphi = \\frac{M_s l}{G I_0}$$\n\n**Wal kolowy:**\n$$W_s = \\frac{\\pi d^3}{16}, \\quad I_0 = \\frac{\\pi d^4}{32}$$\n\n$G \\approx 80$ GPa dla stali',tags:['#wytrzymalosc','#skrecanie','#wzory'],...SR0},
  {id:'s18',deckId:'d3',front:'Wyboczenie Eulera',back:'$$F_{kr} = \\frac{\\pi^2 E I}{(\\mu l)^2}$$\n\n**Wspolczynnik mu:**\n- Oba konce przegubowe: mu=1\n- Jeden utwierdzony, drugi wolny: mu=2\n- Oba utwierdzone: mu=0.5\n\n**Intuicja:** spaghetti nie gniecie sie - wygina w luk.',tags:['#wytrzymalosc','#wyboczenie','#wzory'],...SR0},
  {id:'s19',deckId:'d3',front:'Zmeczenie materialu - karb',back:'**Zmeczenie:** cykliczne naprezenia ponizej Re -> mikropekniecia -> nagle peknięcie.\n\n**Granica zmeczenia:** $Z_{go} \\approx (0.4\\div0.5) R_m$\n\n**Karb:** $\\sigma_{max} = \\alpha_k \\cdot \\sigma_{nom}$\n\n**Rozwiazanie:** zawsze daj promien zaokraglenia!',tags:['#wytrzymalosc','#zmeczenie','#karb'],...SR0},
  {id:'s20',deckId:'d4',front:'Trzy mechanizmy wymiany ciepla',back:'**Przewodzenie (Fourier):**\n$$\\dot{Q} = -\\lambda A \\frac{dT}{dx}$$\n\n**Konwekcja (Newton):**\n$$\\dot{Q} = \\alpha A (T_w - T_f)$$\n\n**Promieniowanie (Stefan-Boltzmann):**\n$$\\dot{Q} = \\varepsilon \\sigma A T^4$$',tags:['#wymiana-ciepla','#wzory'],...SR0},
  {id:'s21',deckId:'d4',front:'Wspolczynnik przenikania ciepla k',back:'$$\\frac{1}{k} = \\frac{1}{\\alpha_1} + \\frac{\\delta}{\\lambda} + \\frac{1}{\\alpha_2}$$\n\n$$\\dot{Q} = k A \\Delta T_{lm}$$\n\n**LMTD:**\n$$\\Delta T_{lm} = \\frac{\\Delta T_1 - \\Delta T_2}{\\ln(\\Delta T_1/\\Delta T_2)}$$',tags:['#wymiana-ciepla','#wzory'],...SR0},
  {id:'s22',deckId:'d5',front:'Kola zebate - podstawowe parametry',back:'**Modul:** $m = d/z$ [mm] - znormalizowany!\n\nSeria: 1, 1.5, 2, 3, 4, 5, 6, 8, 10...\n\n$$d = m \\cdot z \\quad a = \\frac{m(z_1+z_2)}{2} \\quad i = \\frac{n_1}{n_2} = \\frac{z_2}{z_1}$$',tags:['#elementy-maszyn','#kola-zebate','#wzory'],...SR0},
  {id:'s23',deckId:'d5',front:'Lozys toczne - oznaczenia',back:'Przyklad **6208**:\n- **6** - kulkowe jednorzedowe\n- **2** - seria wymiarowa\n- **08** - d = 08x5 = **40 mm**\n\n**Typy:**\n- 6xxx: kulkowe - wysokie obroty\n- 7xxx: skosne - sily osiowe\n- 3xxx: walcowe - duze sily promieniowe',tags:['#elementy-maszyn','#lozys'],...SR0},
  {id:'s24',deckId:'d5',front:'Polaczenia srubowe - klasy wytrzymalosci',back:'Oznaczenie **8.8**:\n- 1. cyfra x100 = Rm -> **800 MPa**\n- Obie x10 = Re -> **640 MPa**\n\n| Klasa | Rm | Re |\n|---|---|---|\n| 4.6 | 400 | 240 |\n| 8.8 | 800 | 640 |\n| 10.9 | 1000 | 900 |\n| 12.9 | 1200 | 1080 |',tags:['#elementy-maszyn','#sruby'],...SR0},
  {id:'s25',deckId:'d6',front:'Moc czynna, bierna, pozorna - analogia z kuflem piwa',back:'$$S = U \\cdot I \\quad P = S\\cos\\varphi \\quad Q = S\\sin\\varphi$$\n\n**Analogia:**\n- Piwo = moc czynna P [W] - wykonuje prace\n- Piana = moc bierna Q [VAr]\n- Pelny kufel = moc pozorna S [VA]\n\n**cos fi = 1** -> idealny, wszystko piwo!',tags:['#elektrotechnika','#moc','#intuicja'],...SR0},
  {id:'s26',deckId:'d6',front:'Prawo Ohma - analogia w 3 dziedzinach',back:'| Dziedzina | Sila | Przeplyw | Opor |\n|---|---|---|---|\n| Elektryczna | U [V] | I [A] | R [Om] |\n| Hydraulika | Dp [Pa] | Q [m3/s] | R_hyd |\n| Cieplna | DT [K] | Q_punkt [W] | R_ciepl |\n\nTa sama logika: Przeplyw = Potencjal / Opor',tags:['#elektrotechnika','#analogie','#intuicja'],...SR0},
  {id:'s27',deckId:'d6',front:'Metoda Elementow Skonczonych (MES)',back:'Rozbijasz skomplikowany problem na **tysiace malych prostych elementow**.\n\nDla kazdego rowna sa trywialne -> komputer rozwiazuje macierzami.\n\n**Programy:** ANSYS, Abaqus, SolidWorks Simulation\n\n**Zastosowania:** naprezenia, CFD, analiza cieplna.',tags:['#mes','#numeryczne','#intuicja'],...SR0},
  {id:'s28',deckId:'d6',front:'Wspolczynnik bezpieczenstwa - margines niewiedzy',back:'$$x = \\frac{R_e}{\\sigma_{rob}}$$\n\nTo Twoj **margines inzynierskiej niewiedzy** - uwzglednia:\n- rozrzut wlasciwosci materialu\n- nieprzewidziane przeciazenia\n- wady wykonania, korozje\n\n**Wartosci:** statyczne 1.5-2.5, zmeczenie 2-4',tags:['#wytrzymalosc','#bezpieczenstwo','#intuicja'],...SR0},
  {id:'s29',deckId:'d6',front:'Kogeneracja - dlaczego lepsza od zwyklej elektrowni?',back:'Elektrownia kondensacyjna: n~40% - reszta jako cieplo do rzeki.\n\n**Kogeneracja (CHP):** zamiast wyrzucac cieplo -> dostarcza do sieci cieplowniczej.\n\n$$\\eta_{CHP} = \\eta_{el} + \\eta_{cieplo} \\approx 80-90\\%$$\n\n**Intuicja:** zamiast grzac rzeke, grzejesz mieszkania.',tags:['#energetyka','#kogeneracja','#intuicja'],...SR0},
  {id:'s30',deckId:'d6',front:'Prawo Hookea - material jak sprezyna',back:'$$\\sigma = E \\cdot \\varepsilon$$\n\nW zakresie sprezystym material zachowuje sie **dokladnie jak sprezyna:**\n$$F = k \\cdot x \\iff \\sigma = E \\cdot \\varepsilon$$\n\n**Granica:** do $R_e$ - powyzej material plynie i nie wraca.\n\n**Analogia:** gumka powraca. Zgniecciony kapsel - nie.',tags:['#wytrzymalosc','#hooke','#intuicja'],...SR0},
  {id:'s31',deckId:'d6',front:'Efekt pre-testowania - ucz sie przez probe',back:'Zanim zobaczysz material - najpierw dostaniesz pytanie.\n\nBadania: nawet **bledne odpowiedzi** przed nauka zwiekszaja retencje o 30-40%.\n\n**Dlaczego:** probowanie aktywuje schematy w mozgu, ktore latwiej "zahaczyc" nowa wiedza.\n\n**Tutaj:** tryb Feynmana to wlasnie to!',tags:['#neurodydaktyka','#techniki','#intuicja'],...SR0},
  {id:'s32',deckId:'d6',front:'Zmeczenie materialu - dlaczego male sily moga zniszczyc?',back:'Cykliczne naprezenia **ponizej Re** powoduja mikropekniecia -> rosna z kazdym cyklem -> nagle kruche peknięcie.\n\n**Granica zmeczenia:** $Z_{go} \\approx (0.4\\div0.5) R_m$\n\n**Analogia:** zginaj spinacz papierowy - za pierwszym razem wytrzyma, za setnym zlatwie sie.',tags:['#wytrzymalosc','#zmeczenie','#intuicja'],...SR0},
];

let DB={decks:[],cards:[],engVars:[],stats:{totalReviews:0,streak:0,lastDate:null,weekData:[0,0,0,0,0,0,0],xp:0,level:1,calibration:[],errorLog:[]},exam:{name:'',date:'',goal:30}};

function today(){return new Date().toISOString().split('T')[0]}
function addDays(d,n){let dt=new Date(d);dt.setDate(dt.getDate()+n);return dt.toISOString().split('T')[0]}

function load(){
  try{let r=localStorage.getItem('fp_db');
    if(r){DB=JSON.parse(r);if(!DB.stats.calibration)DB.stats.calibration=[];if(!DB.stats.errorLog)DB.stats.errorLog=[];if(!DB.engVars)DB.engVars=[];if(!DB.exam)DB.exam={name:'',date:'',goal:30};}
    else seed();
  }catch(e){seed()}
  if(!DB.engVars||!DB.engVars.length)DB.engVars=[...PRELOADED_ENG];
}
function save(){localStorage.setItem('fp_db',JSON.stringify(DB))}
function seed(){
  DB.decks=[{id:'d1',name:'Termodynamika',color:'#ffa94d'},{id:'d2',name:'Mechanika Plynow',color:'#74b9ff'},{id:'d3',name:'Wytrzymalosc Materialow',color:'#cc5de8'},{id:'d4',name:'Wymiana Ciepla',color:'#ff5f6d'},{id:'d5',name:'Elementy Maszyn',color:'#51cf66'},{id:'d6',name:'Intuicje Inzynierskie',color:'#b8ff45'}];
  DB.cards=SEED_CARDS.map(c=>({...c}));
  DB.engVars=[...PRELOADED_ENG];
  DB.stats={totalReviews:0,streak:2,lastDate:today(),weekData:[0,3,5,2,0,4,3],xp:120,level:1,calibration:[],errorLog:[]};
  DB.exam={name:'',date:'',goal:30};
  save();
}

function uid(){return '_'+Math.random().toString(36).slice(2)+Date.now().toString(36)}
function esc(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;')}
function shuffle(a){let b=[...a];for(let i=b.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b}
function fmtVal(v){let a=Math.abs(v);if(a===0)return'0';if(a>=1e9)return(v/1e9).toPrecision(3)+'e9';if(a>=1e6)return(v/1e6).toPrecision(3)+'e6';if(a>=1e3)return(v/1e3).toPrecision(3)+'e3';if(a<0.001)return v.toExponential(2);return Number.isInteger(v)?String(v):v.toPrecision(3)}
function getAllTags(){let s=new Set();DB.cards.forEach(c=>(c.tags||[]).forEach(t=>s.add(t)));return[...s].sort()}
function getDeckCards(id){return DB.cards.filter(c=>c.deckId===id)}

// SM-2
function applySM2(card,q){
  let ef=card.ef||2.5,interval=card.interval||0,reps=card.reps||0;
  if(q<3){reps=0;interval=1;}
  else{ef=Math.max(1.3,ef+0.1-(5-q)*(0.08+(5-q)*0.02));if(reps===0)interval=1;else if(reps===1)interval=6;else interval=Math.round(interval*ef);reps++;}
  let nr=new Date();nr.setDate(nr.getDate()+interval);
  return{...card,ef,interval,reps,nextReview:nr.toISOString().split('T')[0],lastReview:today(),status:q>=5?'known':q>=3?'review':'learning',reviews:(card.reviews||0)+1};
}
function isCardDue(c){return!c.nextReview||c.nextReview<=today()}
function getDueCount(){return DB.cards.filter(isCardDue).length}
function getForecast(days){let r=[];for(let i=0;i<days;i++){let d=addDays(today(),i);r.push(DB.cards.filter(c=>c.nextReview===d).length)}return r}
function getSessionCards(deckIds,tagFilter,dueOnly=true){
  return shuffle(DB.cards.filter(c=>{
    if(deckIds&&deckIds.length&&!deckIds.includes(c.deckId))return false;
    if(tagFilter&&tagFilter.size>0){let ct=new Set(c.tags||[]);if(![...tagFilter].some(t=>ct.has(t)))return false}
    if(dueOnly&&!isCardDue(c))return false;
    return true;
  }));
}

// Render
marked.setOptions({breaks:true,gfm:true});
function renderMD(t){return marked.parse(t||'')}
function renderMath(el){
  if(!el||!window.renderMathInElement)return;
  try{renderMathInElement(el,{delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}],throwOnError:false})}catch(e){}
}

// AI
async function callClaude(system,user,maxTokens=1000){
  let key=localStorage.getItem('fp_key')||'';
  if(!key){toast('Ustaw klucz API w Admin');return null}
  try{
    let res=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',
      headers:{'Content-Type':'application/json','x-api-key':key,'anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true'},
      body:JSON.stringify({model:'claude-sonnet-4-5',max_tokens:maxTokens,system,messages:[{role:'user',content:user}]})});
    let data=await res.json();
    if(data.error)throw new Error(data.error.message);
    return(data.content||[]).map(i=>i.text||'').join('');
  }catch(e){toast('Blad API: '+e.message);return null}
}

// Nav
let _cur='learn';
function nav(name,btn){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.querySelectorAll('.ni').forEach(b=>b.classList.remove('active'));
  document.getElementById('v-'+name).classList.add('active');
  if(btn)btn.classList.add('active');
  _cur=name;
  if(name==='learn'){renderLearnCtrl();renderCountdown()}
  if(name==='cards'){renderDecks();renderCards()}
  if(name==='stats')renderStats();
  if(name==='admin')renderAdmin();
}

// Countdown
function renderCountdown(){
  let el=document.getElementById('countdown-area');if(!el)return;
  let ex=DB.exam;
  if(!ex.date){el.innerHTML='';return}
  let diff=Math.ceil((new Date(ex.date)-new Date())/86400000);
  if(diff<0){el.innerHTML='';return}
  let dow=new Date().getDay(),wi=dow===0?6:dow-1;
  let todayDone=DB.stats.weekData[wi]||0;
  let pct=Math.min(100,Math.round(todayDone/ex.goal*100));
  el.innerHTML='<div class="countdown-card"><div class="countdown-num">'+diff+'</div><div class="countdown-info"><div class="countdown-title">Dni do: '+esc(ex.name||'Egzaminu')+'</div><div class="countdown-sub">Cel dzienny: '+todayDone+'/'+ex.goal+' fiszek</div><div class="goal-row"><div class="goal-bar"><div class="goal-fill" style="width:'+pct+'%"></div></div><div style="font-size:10px;color:var(--tx2);white-space:nowrap">'+pct+'%</div></div></div></div>';
}
function saveExam(){
  DB.exam={name:document.getElementById('exam-name')?.value||'',date:document.getElementById('exam-date')?.value||'',goal:parseInt(document.getElementById('exam-goal')?.value)||30};
  save();renderCountdown();toast('Egzamin zapisany');
}

// Learn mode
let learnMode='deck';
let sesTags=new Set();
function setMode(m,btn){
  learnMode=m;
  document.querySelectorAll('#mode-seg .sb').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderLearnCtrl();
  document.getElementById('learn-body').innerHTML='';
  document.getElementById('learn-prog').style.display='none';
}
function renderLearnCtrl(){
  let el=document.getElementById('learn-ctrl');if(!el)return;
  let decks=DB.decks;
  if(learnMode==='deck'){
    el.innerHTML='<div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><select class="pill-sel" id="lc-deck">'+decks.map(d=>'<option value="'+d.id+'">'+esc(d.name)+' ('+getDeckCards(d.id).length+')</option>').join('')+'</select><label style="display:flex;align-items:center;gap:5px;font-size:12px;color:var(--tx2);cursor:pointer;white-space:nowrap"><input type="checkbox" id="lc-due" checked style="accent-color:var(--acc)"> Tylko zaległe</label></div><div style="margin-top:9px"><button class="btn-main" onclick="startDeck()">&#9654; Start</button></div>';
  }else if(learnMode==='mix'){
    el.innerHTML='<div>'+decks.map(d=>'<label class="chk-row"><input type="checkbox" class="mix-cb" value="'+d.id+'" checked style="accent-color:var(--acc)"><span class="deck-dot" style="background:'+d.color+'"></span><span>'+esc(d.name)+'</span><span style="font-size:11px;color:var(--tx2);margin-left:auto">'+getDeckCards(d.id).length+'</span></label>').join('')+'</div><button class="btn-main" style="margin-top:9px" onclick="startMix()">&#9654; Start Miks</button>';
  }else if(learnMode==='tags'){
    let tags=getAllTags();
    el.innerHTML=tags.length?'<div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:9px">'+tags.map(t=>'<span class="tag'+(sesTags.has(t)?' sel':'')+'" onclick="toggleSesTag(this,\''+esc(t)+'\')">'+esc(t)+'</span>').join('')+'</div><button class="btn-main" onclick="startTags()">&#9654; Start z tagami</button>':'<div style="font-size:12px;color:var(--tx2)">Brak tagow.</div>';
  }else if(learnMode==='quiz'){
    el.innerHTML='<select class="pill-sel" id="lc-qdeck">'+decks.map(d=>'<option value="'+d.id+'">'+esc(d.name)+'</option>').join('')+'</select><div style="font-size:11px;color:var(--tx2);margin-top:6px">4 opcje, jedna poprawna - generowane z Twoich fiszek</div><div style="margin-top:9px"><button class="btn-main" onclick="startQuiz()">&#9654; Start Quiz</button></div>';
  }else if(learnMode==='feynman'){
    el.innerHTML='<select class="pill-sel" id="lc-fdeck" style="margin-bottom:9px">'+decks.map(d=>'<option value="'+d.id+'">'+esc(d.name)+'</option>').join('')+'</select><button class="btn-main" onclick="startFeynman()">&#129504; Start Feynman</button>';
  }else if(learnMode==='exam'){
    el.innerHTML='<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:9px"><select class="pill-sel" id="lc-xdeck">'+[{id:'all',name:'Wszystkie zestawy'},...decks].map(d=>'<option value="'+d.id+'">'+esc(d.name)+'</option>').join('')+'</select><select class="pill-sel" id="lc-xtime" style="max-width:110px"><option value="30">30 min</option><option value="60" selected>60 min</option><option value="90">90 min</option></select></div><button class="btn-main" onclick="startExam()">&#128221; Start Egzamin</button>';
  }else if(learnMode==='eng'){
    el.innerHTML='<div style="font-size:12px;color:var(--tx2);margin-bottom:9px"><b style="color:var(--tx)">'+DB.engVars.length+'</b> zmiennych. Suwak, ocena rzedu wielkosci.</div><button class="btn-main" onclick="startEng()">&#9654; Start Intuicja</button>';
  }
}
function toggleSesTag(el,t){sesTags.has(t)?sesTags.delete(t):sesTags.add(t);el.classList.toggle('sel')}

// Session
let S={cards:[],index:0,flipped:false,results:{good:0,ok:0,bad:0},confidence:null};
let examTimer={active:false,left:0,interval:null};

function startDeck(){
  let did=document.getElementById('lc-deck')?.value;
  let due=document.getElementById('lc-due')?.checked!==false;
  let cards=getSessionCards([did],null,due);
  if(!cards.length){toast('Brak zalegly fiszek!');return}
  S={cards,index:0,flipped:false,results:{good:0,ok:0,bad:0},confidence:null};
  renderCard();
}
function startMix(){
  let ids=[...document.querySelectorAll('.mix-cb:checked')].map(e=>e.value);
  if(!ids.length){toast('Wybierz zestaw');return}
  let cards=getSessionCards(ids,null,true);
  if(!cards.length){toast('Brak zalegly fiszek');return}
  S={cards,index:0,flipped:false,results:{good:0,ok:0,bad:0},confidence:null};
  renderCard();
}
function startTags(){
  if(!sesTags.size){toast('Wybierz tag');return}
  let cards=getSessionCards(null,sesTags,true);
  if(!cards.length){toast('Brak fiszek z tymi tagami');return}
  S={cards,index:0,flipped:false,results:{good:0,ok:0,bad:0},confidence:null};
  renderCard();
}

function renderCard(){
  let body=document.getElementById('learn-body');
  let prog=document.getElementById('learn-prog');
  let {cards,index}=S;
  if(index>=cards.length){endSession(body,prog);return}
  prog.style.display='block';
  let pct=Math.round(index/cards.length*100);
  document.getElementById('prog-fill').style.width=pct+'%';
  document.getElementById('prog-l').textContent=(index+1)+' / '+cards.length;
  document.getElementById('prog-r').textContent=pct+'%';
  let card=cards[index];
  if(card.front&&card.front.includes('{{')){{renderClozeCard(card);return}}
  let sc={new:'s-new',learning:'s-lrn',review:'s-rev',known:'s-knw'}[card.status||'new'];
  let sl={new:'Nowa',learning:'W nauce',review:'Powt.',known:'Znam'}[card.status||'new'];
  let tags=(card.tags||[]).map(t=>'<span class="tag">'+esc(t)+'</span>').join('');
  let confHtml='';
  if(!S.confidence&&!S.flipped){
    confHtml='<div class="conf-lbl">Jak pewny jestes odpowiedzi?</div><div class="conf-row"><button class="conf-btn c1" onclick="setConf(1)"><span class="ico">&#10067;</span>Nie wiem</button><button class="conf-btn c2" onclick="setConf(2)"><span class="ico">&#129300;</span>Chyba wiem</button><button class="conf-btn c3" onclick="setConf(3)"><span class="ico">&#9989;</span>Wiem!</button></div>';
  }
  let locked=(!S.confidence&&!S.flipped)?'opacity:.35;pointer-events:none':'';
  body.innerHTML=confHtml+'<div class="flip-scene" style="'+locked+'"><div class="flip-card'+(S.flipped?' flipped':'')+'" id="flip-c" onclick="flipCard()"><div class="face face-front"><span class="face-status '+sc+'">'+sl+'</span><div class="face-lbl">Pytanie</div><div class="face-content" id="fc-f">'+renderMD(card.front)+'</div>'+(S.confidence&&!S.flipped?'<div class="face-hint">Dotknij aby odsłonic</div>':'')+(tags?'<div class="face-tags">'+tags+'</div>':'')+'</div><div class="face face-back"><div class="face-lbl">Odpowiedz</div><div class="face-content" id="fc-b">'+renderMD(card.back)+'</div></div></div></div>'+(S.flipped?'<div style="padding:0 16px 6px;display:flex;gap:6px;flex-wrap:wrap"><button class="btn pur" onclick="showTransfer()" id="tbtn">&#128302; Pytanie praktyczne</button><button class="btn" onclick="showCompare()" id="cbtn">&#9878; Porownaj pojecia</button></div><div id="transfer-area"></div><div class="rating-row"><button class="rb bad" onclick="rate(1)"><span class="ico">&#10007;</span><span>Nie pamietalem</span><small>1</small></button><button class="rb ok" onclick="rate(3)"><span class="ico">&#12316;</span><span>Tak sobie</span><small>2</small></button><button class="rb good" onclick="rate(5)"><span class="ico">&#10003;</span><span>Umialem</span><small>3</small></button></div>':'<div style="height:10px"></div>');
  renderMath(document.getElementById('fc-f'));
  renderMath(document.getElementById('fc-b'));
}

    else if(dy<-50)rate(3);
  },{passive:true});
}

function setConf(level){
  S.confidence=level;
  document.querySelectorAll('.conf-btn').forEach((b,i)=>{b.classList.remove('chosen');if(i===level-1)b.classList.add('chosen')});
  let scene=document.querySelector('.flip-scene');
  if(scene){scene.style.opacity='1';scene.style.pointerEvents='auto'}
}
function flipCard(){if(!S.confidence&&!S.flipped)return;S.flipped=true;renderCard()}

function rate(q){
  let card=S.cards[S.index];
  if(S.confidence)recordCalib(S.confidence,q);
  let updated=applySM2(card,q);
  let di=DB.cards.findIndex(c=>c.id===card.id);
  if(di>=0)DB.cards[di]=updated;
  if(q>=5)S.results.good++;
  else if(q>=3)S.results.ok++;
  else{
    S.results.bad++;
    S.cards.push({...card});
    DB.stats.errorLog=DB.stats.errorLog||[];
    DB.stats.errorLog.unshift({date:today(),front:card.front.slice(0,80),tags:card.tags||[]});
    if(DB.stats.errorLog.length>100)DB.stats.errorLog=DB.stats.errorLog.slice(0,100);
  }
  let dow=new Date().getDay(),wi=dow===0?6:dow-1;
  DB.stats.weekData[wi]=(DB.stats.weekData[wi]||0)+1;
  DB.stats.totalReviews=(DB.stats.totalReviews||0)+1;
  S.index++;S.flipped=false;S.confidence=null;
  save();renderCard();
}

function endSession(body,prog){
  prog.style.display='none';
  let tot=S.results.good+S.results.ok+S.results.bad;
  let pct=tot?Math.round(S.results.good/tot*100):0;
  awardXP(S.results.good*10+S.results.ok*5+S.results.bad*2);
  updateStreak();
  body.innerHTML='<div class="done-wrap"><div class="done-ico">&#127881;</div><div class="done-ttl">Sesja skonczona!</div><div class="done-sub">'+tot+' fiszek powtorzonych</div><div class="done-grid"><div class="done-tile"><div class="done-num" style="color:var(--grn)">'+S.results.good+'</div><div class="done-lbl">Umialem</div></div><div class="done-tile"><div class="done-num" style="color:var(--amb)">'+S.results.ok+'</div><div class="done-lbl">Tak sobie</div></div><div class="done-tile"><div class="done-num" style="color:var(--red)">'+S.results.bad+'</div><div class="done-lbl">Nie pamietalem</div></div><div class="done-tile"><div class="done-num" style="color:var(--acc)">'+pct+'%</div><div class="done-lbl">Skutecznosc</div></div></div><button class="btn-main" onclick="renderLearnCtrl();document.getElementById(\'learn-body\').innerHTML=\'\';document.getElementById(\'learn-prog\').style.display=\'none\'">&#8617; Wróc</button></div>';
  updateDueBadge();save();
}

// Cloze
function renderClozeCard(card){
  let body=document.getElementById('learn-body');
  let frontHtml=card.front.replace(/\{\{([^}]+)\}\}/g,(_,w)=>'<span class="cloze-blank" onclick="this.classList.add(\'revealed\');this.textContent=\''+esc(w)+'\'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>');
  let backHtml=(card.back||'').replace(/\{\{([^}]+)\}\}/g,(_,w)=>'<span style="color:var(--acc);font-weight:600">'+esc(w)+'</span>');
  body.innerHTML='<div class="flip-scene"><div class="face face-front" style="position:relative;min-height:240px;border-radius:var(--r);padding:20px 18px;display:flex;flex-direction:column;align-items:center;justify-content:center;border:.5px solid var(--b2);text-align:center"><div class="face-lbl">Uzupelnij luki - kliknij blank aby odsłonic</div><div class="face-content" id="cloze-f">'+frontHtml+'</div></div></div><div style="font-size:11px;color:var(--tx2);padding:4px 16px 6px">Tyl: <span style="color:var(--acc);cursor:pointer" onclick="document.getElementById(\'cloze-back\').style.display=\'block\';this.style.display=\'none\'">pokaz odpowiedz</span></div><div id="cloze-back" style="display:none;font-size:13px;color:var(--tx2);padding:0 16px 8px;line-height:1.5">'+backHtml+'</div><div class="rating-row"><button class="rb bad" onclick="rate(1)"><span class="ico">&#10007;</span>Trudne<small>1</small></button><button class="rb ok" onclick="rate(3)"><span class="ico">&#12316;</span>Tak sobie<small>2</small></button><button class="rb good" onclick="rate(5)"><span class="ico">&#10003;</span>Latwe<small>3</small></button></div>';
  renderMath(document.getElementById('cloze-f'));
}

// Quiz
let quizSes={cards:[],index:0,correct:0};
function startQuiz(){
  let did=document.getElementById('lc-qdeck')?.value;
  let cards=shuffle(getDeckCards(did));
  if(cards.length<4){toast('Potrzeba min. 4 fiszek');return}
  quizSes={cards,index:0,correct:0};
  renderQuizCard();
  document.getElementById('learn-prog').style.display='block';
}
function renderQuizCard(){
  let {cards,index}=quizSes;
  let body=document.getElementById('learn-body');
  if(index>=cards.length){
    document.getElementById('learn-prog').style.display='none';
    let pct=Math.round(quizSes.correct/cards.length*100);
    body.innerHTML='<div class="done-wrap"><div class="done-ico">'+(pct>=80?'&#127942;':pct>=50?'&#128077;':'&#128218;')+'</div><div class="done-ttl">Quiz skonczony!</div><div class="done-sub">'+quizSes.correct+'/'+cards.length+' poprawnych - '+pct+'%</div><button class="btn-main" onclick="startQuiz()">&#128256; Powtorz</button></div>';
    awardXP(quizSes.correct*8);return;
  }
  let pct=Math.round(index/cards.length*100);
  document.getElementById('prog-fill').style.width=pct+'%';
  document.getElementById('prog-l').textContent=(index+1)+' / '+cards.length;
  document.getElementById('prog-r').textContent=pct+'%';
  let card=cards[index];
  let others=shuffle(cards.filter((_,i)=>i!==index)).slice(0,3);
  let opts=shuffle([{text:card.back,correct:true},...others.map(o=>({text:o.back,correct:false}))]);
  body.innerHTML='<div class="quiz-card"><div class="quiz-q" id="quiz-q">'+renderMD(card.front)+'</div><div class="quiz-opts">'+opts.map(o=>'<button class="quiz-opt" onclick="answerQuiz('+o.correct+',this)">'+esc(o.text.slice(0,120))+'</button>').join('')+'</div><div id="quiz-fb"></div></div>';
  renderMath(document.getElementById('quiz-q'));
}
function answerQuiz(correct,btn){
  document.querySelectorAll('.quiz-opt').forEach(b=>b.onclick=null);
  btn.classList.add(correct?'correct':'wrong');
  if(!correct)document.querySelectorAll('.quiz-opt').forEach(b=>{if(!b.classList.contains('wrong'))b.classList.add('reveal')});
  document.getElementById('quiz-fb').innerHTML='<div class="mc-r '+(correct?'ok':'err')+'">'+(correct?'&#9989; Poprawnie!':'&#10060; Blad. Zielona = poprawna.')+'</div>';
  if(correct)quizSes.correct++;
  setTimeout(()=>{quizSes.index++;renderQuizCard()},1600);
}

// Feynman
let feynSes={cards:[],index:0};
function startFeynman(){
  let did=document.getElementById('lc-fdeck')?.value;
  let cards=shuffle(getDeckCards(did));
  if(!cards.length){toast('Brak fiszek');return}
  feynSes={cards,index:0};
  renderFeynCard();
  document.getElementById('learn-prog').style.display='block';
}
function renderFeynCard(){
  let {cards,index}=feynSes;
  let body=document.getElementById('learn-body');
  if(index>=cards.length){
    document.getElementById('learn-prog').style.display='none';
    body.innerHTML='<div class="done-wrap"><div class="done-ico">&#127942;</div><div class="done-ttl">Brawo!</div><div class="done-sub">Wszystkie trybem Feynmana.</div><button class="btn-main" onclick="startFeynman()">&#128256; Powtorz</button></div>';return;
  }
  let pct=Math.round(index/cards.length*100);
  document.getElementById('prog-fill').style.width=pct+'%';
  document.getElementById('prog-l').textContent=(index+1)+' / '+cards.length;
  document.getElementById('prog-r').textContent=pct+'%';
  let card=cards[index];
  body.innerHTML='<div class="feyn-q"><div class="feyn-q-lbl">Pytanie</div><div class="feyn-q-text" id="fq-t">'+renderMD(card.front)+'</div></div><div style="padding:0 16px 8px"><textarea class="feyn-ta" id="feyn-inp" placeholder="Wyjasni wlasnymi slowami&#8230; Im wiecej napiszesz, tym lepsza ocena."></textarea><div style="display:flex;gap:8px;margin-top:8px"><button class="btn-main" onclick="submitFeyn()" id="feyn-btn">&#129504; Ocen wyjasnienie</button><button class="btn" onclick="feynSes.index++;renderFeynCard()">Pomin &#8594;</button></div><div id="feyn-res"></div></div>';
  renderMath(document.getElementById('fq-t'));
}
async function submitFeyn(){
  let inp=document.getElementById('feyn-inp')?.value.trim();
  if(!inp||inp.length<10){toast('Napisz przynajmniej kilka zdan');return}
  let btn=document.getElementById('feyn-btn'),res=document.getElementById('feyn-res');
  btn.disabled=true;btn.textContent='Oceniam&#8230;';
  res.innerHTML='<div class="ai-load"><span class="spin"></span>Claude analizuje Twoje wyjasnienie&#8230;</div>';
  let card=feynSes.cards[feynSes.index];
  let result=await callClaude('Jestes mentorem akademickim. Oceniasz wyjasnienia studentow inzynierii. Jestes wymagajacy ale konstruktywny. Zawsze po polsku. Odpowiadaj TYLKO jako JSON bez backtickow.','Fiszka:\nPytanie: '+card.front+'\nWzorcowa odpowiedz: '+card.back+'\n\nWyjasnienie studenta:\n'+inp+'\n\nOcen i odpowiedz TYLKO jako JSON:\n{"score":1-10,"verdict":"jedno zdanie","correct":"co poprawne","missing":"czego brakuje","wrong":"bledy lub Brak bledow","tip":"jedna wskazowka"}',800);
  if(!result){res.innerHTML='';btn.disabled=false;btn.textContent='&#129504; Ocen wyjasnienie';return}
  try{
    let d=JSON.parse(result.replace(/```json|```/g,'').trim());
    let col=d.score>=8?'var(--grn)':d.score>=5?'var(--amb)':'var(--red)';
    res.innerHTML='<div class="feyn-res"><div class="feyn-score" style="color:'+col+'">'+d.score+'/10 - '+esc(d.verdict||'')+'</div>'+(d.correct?'<div class="feyn-sec"><div class="feyn-sec-lbl" style="color:var(--grn)">&#9989; Co masz dobrze</div><p>'+esc(d.correct)+'</p></div>':'')+(d.missing?'<div class="feyn-sec"><div class="feyn-sec-lbl" style="color:var(--amb)">&#9888; Czego brakuje</div><p>'+esc(d.missing)+'</p></div>':'')+(d.wrong&&d.wrong!=='Brak bledow'?'<div class="feyn-sec"><div class="feyn-sec-lbl" style="color:var(--red)">&#10060; Bledy</div><p>'+esc(d.wrong)+'</p></div>':'')+(d.tip?'<div class="feyn-sec"><div class="feyn-sec-lbl" style="color:var(--acc)">&#128161; Wskazowka</div><p>'+esc(d.tip)+'</p></div>':'')+'<button class="btn-main" onclick="feynSes.index++;renderFeynCard()" style="margin-top:10px">Nastepna &#8594;</button></div>';
    awardXP(d.score*3);
  }catch(e){res.innerHTML='<div style="padding:10px;color:var(--amb)">Blad parsowania. Sprobuj ponownie.</div>'}
  btn.disabled=false;btn.textContent='&#129504; Ocen wyjasnienie';
}

// Exam
let examSes={cards:[],index:0,correct:0,total:0};
function startExam(){
  let did=document.getElementById('lc-xdeck')?.value;
  let mins=parseInt(document.getElementById('lc-xtime')?.value||60);
  let cards=did==='all'?shuffle(DB.cards):shuffle(getDeckCards(did));
  if(cards.length<4){toast('Za malo fiszek (min 4)');return}
  cards=cards.slice(0,50);
  examSes={cards,index:0,correct:0,total:cards.length};
  if(examTimer.interval)clearInterval(examTimer.interval);
  examTimer={active:true,left:mins*60,interval:setInterval(tickExam,1000)};
  renderExamCard();
  document.getElementById('learn-prog').style.display='block';
}
function tickExam(){
  examTimer.left--;
  let el=document.getElementById('exam-timer');
  if(el){let m=Math.floor(examTimer.left/60),s=examTimer.left%60;el.textContent=String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');el.className='exam-timer'+(examTimer.left<300?' warn':'')+(examTimer.left<60?' danger':'');}
  if(examTimer.left<=0){clearInterval(examTimer.interval);examTimer.active=false;endExam()}
}
function renderExamCard(){
  let {cards,index,total}=examSes;
  let body=document.getElementById('learn-body');
  if(index>=total){endExam();return}
  let pct=Math.round(index/total*100);
  document.getElementById('prog-fill').style.width=pct+'%';
  document.getElementById('prog-l').textContent=(index+1)+' / '+total;
  document.getElementById('prog-r').textContent=pct+'%';
  let card=cards[index];
  let m=Math.floor(examTimer.left/60),s=examTimer.left%60;
  let timerHtml='<div class="exam-hdr"><div class="exam-timer" id="exam-timer">'+String(m).padStart(2,'0')+':'+String(s).padStart(2,'0')+'</div><div><div style="font-family:Syne,sans-serif;font-size:12px;font-weight:700">Pytanie '+(index+1)+'/'+total+'</div></div></div>';
  if(index%2===0&&DB.cards.length>=4){
    let others=shuffle(DB.cards.filter(c=>c.id!==card.id)).slice(0,3);
    let opts=shuffle([{text:card.back,ok:true},...others.map(o=>({text:o.back,ok:false}))]);
    body.innerHTML=timerHtml+'<div class="quiz-card"><div class="quiz-q" id="xq">'+renderMD(card.front)+'</div><div class="quiz-opts">'+opts.map(o=>'<button class="quiz-opt" onclick="answerExam('+o.ok+',this)">'+esc(o.text.slice(0,100))+'</button>').join('')+'</div><div id="xfb"></div></div>';
    renderMath(document.getElementById('xq'));
  }else{
    body.innerHTML=timerHtml+'<div class="flip-scene"><div class="flip-card" id="flip-c" onclick="this.classList.add(\'flipped\');document.getElementById(\'xrate\').style.display=\'flex\'"><div class="face face-front"><div class="face-lbl">Pytanie</div><div class="face-content" id="xfc-f">'+renderMD(card.front)+'</div><div class="face-hint">Dotknij aby odsłonic</div></div><div class="face face-back"><div class="face-lbl">Odpowiedz</div><div class="face-content" id="xfc-b">'+renderMD(card.back)+'</div></div></div></div><div class="rating-row" id="xrate" style="display:none"><button class="rb bad" onclick="answerExam(false,this)"><span class="ico">&#10007;</span>Nie</button><button class="rb ok" onclick="answerExam(true,this)"><span class="ico">&#12316;</span>Tak sobie</button><button class="rb good" onclick="answerExam(true,this)"><span class="ico">&#10003;</span>Tak!</button></div>';
    renderMath(document.getElementById('xfc-f'));
    renderMath(document.getElementById('xfc-b'));
  }
}
function answerExam(correct,btn){
  document.querySelectorAll('.quiz-opt').forEach(b=>b.onclick=null);
  if(btn.classList.contains('quiz-opt'))btn.classList.add(correct?'correct':'wrong');
  if(correct)examSes.correct++;
  examSes.index++;
  setTimeout(()=>renderExamCard(),correct?600:1200);
}
function endExam(){
  if(examTimer.interval)clearInterval(examTimer.interval);
  examTimer.active=false;
  document.getElementById('learn-prog').style.display='none';
  let pct=Math.round(examSes.correct/examSes.total*100);
  let grade=pct>=90?'5.0':pct>=80?'4.5':pct>=70?'4.0':pct>=60?'3.5':pct>=50?'3.0':'2.0';
  document.getElementById('learn-body').innerHTML='<div class="done-wrap"><div class="done-ico">'+(pct>=80?'&#127942;':pct>=60?'&#128077;':'&#128218;')+'</div><div class="done-ttl">Egzamin skonczony!</div><div class="done-sub">'+examSes.correct+'/'+examSes.total+' poprawnych</div><div class="done-grid"><div class="done-tile"><div class="done-num" style="color:var(--acc)">'+pct+'%</div><div class="done-lbl">Wynik</div></div><div class="done-tile"><div class="done-num" style="color:'+(pct>=50?'var(--grn)':'var(--red)')+'">'+grade+'</div><div class="done-lbl">Szac. ocena</div></div></div><button class="btn-main" onclick="renderLearnCtrl();document.getElementById(\'learn-body\').innerHTML=\'\';document.getElementById(\'learn-prog\').style.display=\'none\'">&#8617; Wróc</button></div>';
}

// Transfer + Compare
async function showTransfer(){
  let btn=document.getElementById('tbtn'),area=document.getElementById('transfer-area');
  if(!btn||!area)return;
  btn.disabled=true;btn.textContent='Generuje&#8230;';
  area.innerHTML='<div class="ai-load" style="padding:0 16px 6px"><span class="spin"></span>AI tworzy pytanie praktyczne&#8230;</div>';
  let card=S.cards[S.index];
  let result=await callClaude('Jestes ekspertem od dydaktyki inzynierskiej. Generujesz pytania transferowe. Po polsku.','Fiszka:\nPrzod: '+card.front+'\nTyl: '+card.back+'\n\nWygeneruj JEDNO konkretne pytanie aplikacyjne dla inzyniera. Potem po --- wzorcowa odpowiedz (2-3 zdania).');
  if(!result){area.innerHTML='';btn.disabled=false;btn.textContent='&#128302; Pytanie praktyczne';return}
  let parts=result.split('---');
  area.innerHTML='<div class="transfer-card"><div class="transfer-lbl">&#128302; Pytanie Transferowe</div><div style="font-size:13px;line-height:1.5;color:var(--tx)">'+esc(parts[0].trim())+'</div>'+(parts[1]?'<button onclick="let a=this.nextElementSibling;a.style.display=a.style.display===\'block\'?\'none\':\'block\'" style="margin-top:7px;background:none;border:none;color:var(--pur);font-size:11px;cursor:pointer;font-family:Syne,sans-serif;font-weight:700">&#9660; Pokaz odpowiedz</button><div style="margin-top:7px;padding-top:7px;border-top:.5px solid var(--b1);font-size:12px;color:var(--tx2);line-height:1.5;display:none">'+esc(parts[1].trim())+'</div>':'')+'</div>';
  btn.disabled=false;btn.textContent='&#128302; Pytanie praktyczne';
}

async function showCompare(){
  let btn=document.getElementById('cbtn'),area=document.getElementById('transfer-area');
  if(!btn||!area)return;
  btn.disabled=true;btn.textContent='Porownuje&#8230;';
  area.innerHTML='<div class="ai-load" style="padding:0 16px 6px"><span class="spin"></span>AI tworzy porownanie&#8230;</div>';
  let card=S.cards[S.index];
  let result=await callClaude('Jestes ekspertem inzynierskim. Tworzysz tabele porownawcze pojec. Po polsku. Odpowiadaj TYLKO jako JSON bez backtickow.','Na podstawie fiszki: "'+card.front+'" / "'+card.back.slice(0,200)+'"\n\nZidentyfikuj dwa pojecia z tej dziedziny ktore studenci czesto myla i porownaj je.\nJSON: {"concept_a":"nazwa A","concept_b":"nazwa B","rows":[{"aspect":"aspekt","a":"opis A","b":"opis B"}]}\nMaks 6 wierszy.',600);
  if(!result){area.innerHTML='';btn.disabled=false;btn.textContent='&#9878; Porownaj pojecia';return}
  try{
    let d=JSON.parse(result.replace(/```json|```/g,'').trim());
    area.innerHTML='<div class="card" style="margin-top:4px"><div class="card-title">&#9878; '+esc(d.concept_a)+' vs '+esc(d.concept_b)+'</div><table class="compare-table"><thead><tr><th>Aspekt</th><th style="color:var(--acc)">'+esc(d.concept_a)+'</th><th style="color:var(--blu)">'+esc(d.concept_b)+'</th></tr></thead><tbody>'+(d.rows||[]).map(r=>'<tr><td>'+esc(r.aspect)+'</td><td>'+esc(r.a)+'</td><td>'+esc(r.b)+'</td></tr>').join('')+'</tbody></table></div>';
  }catch(e){area.innerHTML=''}
  btn.disabled=false;btn.textContent='&#9878; Porownaj pojecia';
}

// Engineering Slider
let engSes={vars:[],index:0};
function startEng(){
  if(!DB.engVars.length){toast('Brak zmiennych');return}
  engSes={vars:shuffle(DB.engVars),index:0};
  renderEngCard();
  document.getElementById('learn-prog').style.display='block';
}
function isLog(mn,mx){return mn>0&&mx>0&&mx/mn>100}
function sToV(p,mn,mx){if(isLog(mn,mx)){let a=Math.log10(mn),b=Math.log10(mx);return Math.pow(10,a+(p/100)*(b-a))}return mn+(p/100)*(mx-mn)}
function scoreEng(e,c){if(c===0)return{s:5,lbl:'Idealnie!',col:'#51cf66'};let le=Math.abs(Math.log10(e/c));if(le<0.05)return{s:5,lbl:'&#127919; Idealnie!',col:'#51cf66'};if(le<0.15)return{s:4,lbl:'&#9989; Bardzo blisko',col:'#94d82d'};if(le<0.35)return{s:3,lbl:'&#128077; Dobry rzad wielkosci',col:'#ffa94d'};if(le<0.6)return{s:2,lbl:'&#128207; Zblizone',col:'#ff8c47'};return{s:1,lbl:'&#10060; Daleko',col:'#ff5f6d'}}
function renderEngCard(){
  let {vars,index}=engSes;
  let body=document.getElementById('learn-body');
  if(index>=vars.length){document.getElementById('learn-prog').style.display='none';body.innerHTML='<div class="done-wrap"><div class="done-ico">&#127942;</div><div class="done-ttl">Wszystkie zmienne!</div><button class="btn-main" onclick="startEng()">&#128256; Powtorz</button></div>';return}
  let p=Math.round(index/vars.length*100);
  document.getElementById('prog-fill').style.width=p+'%';
  document.getElementById('prog-l').textContent=(index+1)+' / '+vars.length;
  document.getElementById('prog-r').textContent=p+'%';
  let v=vars[index];
  body.innerHTML='<div class="slider-card"><div class="sl-cat">'+esc(v.cat||'')+'</div><div class="sl-name">'+esc(v.name)+'</div><div class="sl-desc">'+esc(v.desc||'')+'</div><div class="sl-value" id="sl-d">'+fmtVal(sToV(50,v.min,v.max))+' <span class="sl-unit">'+esc(v.unit)+'</span></div><input type="range" id="sl-i" min="0" max="100" value="50" oninput="updSl('+v.min+','+v.max+',\''+esc(v.unit)+'\')"><div class="sl-range"><span>'+fmtVal(v.min)+'</span><span>'+fmtVal(v.max)+'</span></div><div id="sl-r"></div></div><div style="padding:0 16px 10px"><button class="btn-main" id="sl-btn" onclick="submitSl('+v.min+','+v.max+','+v.value+')">Sprawdz odpowiedz</button></div>';
}
function updSl(mn,mx,unit){let p=parseFloat(document.getElementById('sl-i').value);document.getElementById('sl-d').innerHTML=fmtVal(sToV(p,mn,mx))+' <span class="sl-unit">'+esc(unit)+'</span>'}
function submitSl(mn,mx,correct){
  let p=parseFloat(document.getElementById('sl-i')?.value||50);
  let est=sToV(p,mn,mx),sc=scoreEng(est,correct);
  document.getElementById('sl-r').innerHTML='<div style="border-top:.5px solid var(--b1);margin-top:12px;padding-top:12px;text-align:center"><div class="sl-score-lbl" style="color:'+sc.col+'">'+sc.lbl+'</div><div class="sl-score-det">Twoja: <b>'+fmtVal(est)+'</b> | Prawidlowa: <b>'+fmtVal(correct)+'</b></div></div>';
  let btn=document.getElementById('sl-btn');if(btn){btn.textContent='Nastepna \u2192';btn.onclick=()=>{engSes.index++;renderEngCard()}}
}


// Smart Raw Paste dla fiszek (format pipe)
function openSmartPaste(){
  let did=fDeck||DB.decks[0]?.id||'';
  openSheet('<div class="sh-ttl">&#9889; Smart Paste Fiszki</div><div style="font-size:11px;color:var(--tx2);line-height:1.7;margin-bottom:10px;font-family:JetBrains Mono,monospace;background:var(--bg);padding:8px;border-radius:8px">Przod | Tyl<br>Przod | Tyl | #tag1 #tag2<br>Przod | Tyl | #tag1 | NazwaZestawu</div><div class="field"><label>Zestaw domyslny</label><select id="sp-deck">'+DB.decks.map(d=>'<option value="'+d.id+'"'+(d.id===did?' selected':'')+'>'+esc(d.name)+'</option>').join('')+'</select></div><div class="field"><label>Wklej fiszki</label><textarea id="sp-area" placeholder="Pierwsza zasada termodynamiki | dU = Q - W | #termodynamika #wzory&#10;Liczba Reynoldsa | Re = rho*c*d/mu | #mechanika #wzory&#10;Kolo zebate modul | m = d/z [mm], znormalizowany | #elementy-maszyn" style="min-height:140px;font-family:JetBrains Mono,monospace;font-size:11px" oninput="previewPaste()"></textarea></div><div id="sp-preview"></div><div class="sh-actions"><button class="sh-cancel" onclick="closeSheet()">Anuluj</button><button class="sh-ok" id="sp-ok" onclick="importPaste()" disabled>Importuj (0)</button></div>');
}

let _parsedCards=[];
function previewPaste(){
  let txt=document.getElementById('sp-area')?.value||'';
  let defDeck=document.getElementById('sp-deck')?.value||DB.decks[0]?.id||'';
  _parsedCards=[];
  let lines=txt.split('\n').filter(l=>l.trim()&&!l.trim().startsWith('#'));
  lines.forEach(line=>{
    let parts=line.split('|').map(p=>p.trim());
    if(parts.length<2||!parts[0]||!parts[1])return;
    let front=parts[0],back=parts[1];
    let tags=[],deckId=defDeck;
    if(parts[2]){
      // part 2: tags (#tag) or deck name
      let p2=parts[2].trim();
      if(p2.startsWith('#')){
        tags=p2.split(/\s+/).filter(t=>t.startsWith('#'));
        if(parts[3]){
          let d=DB.decks.find(d=>d.name.toLowerCase()===parts[3].toLowerCase().trim());
          if(d)deckId=d.id;
        }
      }else{
        let d=DB.decks.find(d=>d.name.toLowerCase()===p2.toLowerCase());
        if(d)deckId=d.id;
      }
    }
    _parsedCards.push({front,back,tags,deckId});
  });
  let prev=document.getElementById('sp-preview');
  let ok=document.getElementById('sp-ok');
  if(!prev||!ok)return;
  if(!_parsedCards.length){prev.innerHTML='';ok.disabled=true;ok.textContent='Importuj (0)';return}
  ok.disabled=false;ok.textContent='Importuj ('+_parsedCards.length+')';
  prev.innerHTML='<div style="margin-top:8px;font-size:10px;font-weight:700;color:var(--tx3);font-family:Syne,sans-serif;text-transform:uppercase;letter-spacing:.08em;margin-bottom:5px">Podglad ('+_parsedCards.length+' fiszek)</div>'+_parsedCards.slice(0,5).map(c=>'<div class="ci" style="margin:0 0 5px"><div class="ci-txt"><div class="ci-front">'+esc(c.front.slice(0,60))+'</div><div class="ci-back" style="color:var(--tx2)">'+esc(c.back.slice(0,60))+'</div>'+(c.tags.length?'<div class="ci-tags">'+c.tags.map(t=>'<span class="tag">'+esc(t)+'</span>').join('')+'</div>':'')+'</div><div style="font-size:9px;color:var(--tx3)">'+(DB.decks.find(d=>d.id===c.deckId)?.name||'?')+'</div></div>').join('')+(_parsedCards.length>5?'<div style="font-size:11px;color:var(--tx2);padding:5px 0">... i '+(_parsedCards.length-5)+' wiecej</div>':'');
}

function importPaste(){
  if(!_parsedCards.length)return;
  _parsedCards.forEach(c=>{DB.cards.push({id:uid(),deckId:c.deckId,front:c.front,back:c.back,tags:c.tags,type:'basic',status:'new',reviews:0,ef:2.5,interval:0,reps:0,nextReview:null,lastReview:null})});
  save();closeSheet();renderCards();updateDueBadge();toast('Dodano '+_parsedCards.length+' fiszek');_parsedCards=[];
}

// Topic Gen
function openTopicGen(){
  openSheet('<div class="sh-ttl">&#129302; Wygeneruj fiszki z tematu</div><div class="field"><label>Zestaw docelowy</label><select id="tg-deck">'+DB.decks.map(d=>'<option value="'+d.id+'">'+esc(d.name)+'</option>').join('')+'</select></div><div class="field"><label>Temat / Zagadnienie</label><textarea id="tg-topic" placeholder="np. Obieg Rankine\'a i jego sprawnosc&#8230;\nlub: Wzory na naprezenia w zginaniu\nlub: Zjawisko kawitacji w pompach" style="min-height:100px"></textarea></div><div class="field"><label>Liczba fiszek (5-15)</label><input id="tg-cnt" type="number" value="8" min="5" max="15"></div><div id="tg-st"></div><div class="sh-actions"><button class="sh-cancel" onclick="closeSheet()">Anuluj</button><button class="sh-ok" onclick="genTopicCards()" id="tg-btn">&#129302; Generuj</button></div>');
}
async function genTopicCards(){
  let topic=document.getElementById('tg-topic')?.value.trim();
  let cnt=parseInt(document.getElementById('tg-cnt')?.value||8);
  let deckId=document.getElementById('tg-deck')?.value;
  if(!topic){toast('Wpisz temat');return}
  let btn=document.getElementById('tg-btn'),stat=document.getElementById('tg-st');
  btn.disabled=true;btn.textContent='Generuje&#8230;';
  stat.innerHTML='<div class="ai-load"><span class="spin"></span>AI tworzy '+cnt+' fiszek&#8230;</div>';
  let result=await callClaude('Jestes ekspertem od dydaktyki inzynierskiej. Tworzysz fiszki do nauki. Zawsze po polsku. Uzywaj Markdown i LaTeX z $$ $$. Odpowiadaj TYLKO jako JSON bez backtickow.','Temat: '+topic+'\n\nStworz '+cnt+' fiszek. JSON:\n[{"front":"pytanie/pojecie","back":"odpowiedz z wzorami LaTeX jesli potrzeba","tags":["#tag1","#tag2"]}]\n\nMaks 10 tagow lacznie. Tyl powinien byc tresciwy.',1500);
  if(!result){stat.innerHTML='';btn.disabled=false;btn.textContent='&#129302; Generuj';return}
  try{
    let cards=JSON.parse(result.replace(/```json|```/g,'').trim());
    cards.forEach(c=>{if(c.front&&c.back)DB.cards.push({id:uid(),deckId,front:c.front,back:c.back,tags:c.tags||[],type:'basic',status:'new',reviews:0,ef:2.5,interval:0,reps:0,nextReview:null,lastReview:null})});
    save();closeSheet();renderCards();updateDueBadge();toast('Dodano '+cards.length+' fiszek z tematu');awardXP(10);
  }catch(e){stat.innerHTML='<div style="color:var(--amb);font-size:12px">Blad parsowania. Sprobuj ponownie.</div>'}
  btn.disabled=false;btn.textContent='&#129302; Generuj';
}

// Calibration
function recordCalib(p,q){let a=q>=5?3:q>=3?2:1;DB.stats.calibration.push({date:today(),p,a});if(DB.stats.calibration.length>200)DB.stats.calibration=DB.stats.calibration.slice(-200);}

// AI Tutor
let tutorHistory=[];
function tutorQ(msg){nav('tutor',document.querySelectorAll('.ni')[2]);sendTutorMsg(msg)}
async function sendTutor(){let inp=document.getElementById('tutor-inp');let msg=inp?.value.trim();if(!msg)return;inp.value='';sendTutorMsg(msg)}
async function sendTutorMsg(msg){
  let msgs=document.getElementById('tutor-msgs'),typing=document.getElementById('tutor-typing');
  tutorHistory.push({role:'user',content:msg});
  let userDiv=document.createElement('div');userDiv.className='tutor-msg user';userDiv.textContent=msg;msgs.appendChild(userDiv);msgs.scrollTop=msgs.scrollHeight;
  typing.style.display='block';
  let result=await callClaude('Jestes korepetytorem z energetyki mechanicznej i inzynierii mechanicznej dla studenta polskiej uczelni. Tlumaczysz jasno i intuicyjnie. Uzywasz analogii. Piszesz po polsku. Uzywasz Markdown i LaTeX (wzory w $$ $$). Jezeli student nie rozumie - zadaj pytanie naprowadzajace. Badz jak dobry profesor.',tutorHistory.map(m=>m.role+': '+m.content).join('\n'),1200);
  typing.style.display='none';
  if(result){
    tutorHistory.push({role:'assistant',content:result});
    let aiDiv=document.createElement('div');aiDiv.className='tutor-msg ai';aiDiv.innerHTML=renderMD(result);msgs.appendChild(aiDiv);renderMath(aiDiv);msgs.scrollTop=msgs.scrollHeight;
    if(tutorHistory.length>20)tutorHistory=tutorHistory.slice(-16);
  }
}

// Cards view
let fDeck='',fTags=new Set();
function renderDecks(){
  let el=document.getElementById('decks-list');if(!el)return;
  el.innerHTML=DB.decks.map(d=>'<div class="deck-item" style="'+(fDeck===d.id?'border-color:'+d.color+';background:var(--s2)':'')+'" onclick="selDeck(\''+d.id+'\')"><span class="di-dot" style="background:'+d.color+'"></span><span class="di-name">'+esc(d.name)+'</span><span class="di-cnt">'+getDeckCards(d.id).length+'</span><button style="background:none;border:none;color:var(--tx3);font-size:14px;cursor:pointer;padding:4px" onclick="delDeck(event,\''+d.id+'\')">&#128465;</button></div>').join('')||'<div style="padding:0 16px;font-size:12px;color:var(--tx2)">Brak zestawow</div>';
}
function selDeck(id){fDeck=fDeck===id?'':id;renderDecks();renderCards()}
function renderCards(){
  let q=(document.getElementById('search-inp')?.value||'').toLowerCase().trim();
  let cards=DB.cards.filter(c=>{
    if(fDeck&&c.deckId!==fDeck)return false;
    if(fTags.size){let ct=new Set(c.tags||[]);if(![...fTags].some(t=>ct.has(t)))return false}
    if(q&&!(c.front+c.back+(c.tags||[]).join(' ')).toLowerCase().includes(q))return false;
    return true;
  });
  let ttl=document.getElementById('cards-sec-t');if(ttl)ttl.textContent='Fiszki ('+cards.length+')';
  let sc=document.getElementById('search-cnt');if(sc)sc.textContent=q?cards.length:'';
  let el=document.getElementById('cards-list');if(!el)return;
  el.innerHTML=cards.map(c=>{
    let sc2={new:'s-new',learning:'s-lrn',review:'s-rev',known:'s-knw'}[c.status||'new'];
    let sl={new:'Nowa',learning:'Nauka',review:'Powt.',known:'Znam'}[c.status||'new'];
    let tags=(c.tags||[]).map(t=>'<span class="tag">'+esc(t)+'</span>').join('');
    return'<div class="ci"><div class="ci-txt"><div class="ci-front">'+esc(c.front.slice(0,70))+'</div><div class="ci-back">'+esc((c.back||'').slice(0,60))+'</div>'+(tags?'<div class="ci-tags">'+tags+'</div>':'')+'</div><span class="face-status '+sc2+'" style="position:static;margin-left:4px;flex-shrink:0">'+sl+'</span><button class="ci-del" onclick="delCard(\''+c.id+'\')">&#128465;</button></div>';
  }).join('')||'<div class="empty" style="padding:28px 20px"><div class="empty-ico">&#128525;</div><div class="empty-t">Brak fiszek</div><div class="empty-s">Dodaj lub wygeneruj z tematu &#129302;</div></div>';
  let tf=document.getElementById('tag-filter');
  if(tf)tf.innerHTML=getAllTags().map(t=>'<span class="tag'+(fTags.has(t)?' sel':'')+'" onclick="togFTag(\''+esc(t)+'\')">'+esc(t)+'</span>').join('');
}
function togFTag(t){fTags.has(t)?fTags.delete(t):fTags.add(t);renderCards()}
function delCard(id){if(!confirm('Usunac?'))return;DB.cards=DB.cards.filter(c=>c.id!==id);save();renderCards();updateDueBadge();toast('Usunieto')}
function delDeck(e,id){e.stopPropagation();if(!confirm('Usunac zestaw i fiszki?'))return;DB.decks=DB.decks.filter(d=>d.id!==id);DB.cards=DB.cards.filter(c=>c.deckId!==id);if(fDeck===id)fDeck='';save();renderDecks();renderCards();renderLearnCtrl();toast('Usunieto')}

// Add card/deck
function openAddDeck(){
  openSheet('<div class="sh-ttl">Nowy zestaw</div><div class="field"><label>Nazwa</label><input id="in-dn" type="text" placeholder="np. Mechanika Plynow"></div><div class="sh-actions"><button class="sh-cancel" onclick="closeSheet()">Anuluj</button><button class="sh-ok" onclick="addDeck()">Utworz</button></div>');
  setTimeout(()=>document.getElementById('in-dn')?.focus(),350);
}
function addDeck(){let n=document.getElementById('in-dn')?.value.trim();if(!n)return;DB.decks.push({id:uid(),name:n,color:DECK_COLORS[DB.decks.length%DECK_COLORS.length]});save();closeSheet();renderDecks();renderCards();renderLearnCtrl();toast('Zestaw utworzony')}

function openAddCard(){
  let did=fDeck||DB.decks[0]?.id||'';
  openSheet('<div class="sh-ttl">Nowa fiszka</div><div class="field"><label>Zestaw</label><select id="in-cd">'+DB.decks.map(d=>'<option value="'+d.id+'"'+(d.id===did?' selected':'')+'>'+esc(d.name)+'</option>').join('')+'</select></div><div class="field"><label>Przod (Markdown + $$wzory$$, cloze: {{slowo}})</label><textarea id="in-cf" placeholder="np. Naprezenie normalne" oninput="upPv(\'in-cf\',\'pv-f\')"></textarea><div class="md-prev" id="pv-f"></div></div><div class="field"><label>Tyl</label><textarea id="in-cb" placeholder="Odpowiedz, wzory..." oninput="upPv(\'in-cb\',\'pv-b\')"></textarea><div class="md-prev" id="pv-b"></div></div><div class="field"><label>Tagi (np. #wzory #mechanika)</label><input id="in-ct" type="text" placeholder="#wzory #teoria"></div><div class="sh-actions"><button class="sh-cancel" onclick="closeSheet()">Anuluj</button><button class="sh-ok" onclick="addCard()">Dodaj</button></div>');
  setTimeout(()=>document.getElementById('in-cf')?.focus(),350);
}
function upPv(iid,pid){let v=document.getElementById(iid)?.value||'';let p=document.getElementById(pid);if(!p)return;if(v.length>2){p.style.display='block';p.innerHTML=renderMD(v);renderMath(p)}else p.style.display='none'}
function addCard(){
  let front=document.getElementById('in-cf')?.value.trim(),back=document.getElementById('in-cb')?.value.trim(),deckId=document.getElementById('in-cd')?.value,tagsRaw=document.getElementById('in-ct')?.value||'';
  if(!front||!back){toast('Uzupelnij przod i tyl');return}
  let tags=tagsRaw.trim().split(/\s+/).filter(t=>t.startsWith('#')&&t.length>1);
  DB.cards.push({id:uid(),deckId,front,back,tags,type:'basic',status:'new',reviews:0,ef:2.5,interval:0,reps:0,nextReview:null,lastReview:null});
  save();closeSheet();renderCards();updateDueBadge();toast('Fiszka dodana');
}

// Scan
let scanned=[];
function openScan(){
  let did=fDeck||DB.decks[0]?.id||'';
  openSheet('<div class="sh-ttl">&#128247; Skanuj zdjecie</div><p style="font-size:12px;color:var(--tx2);margin-bottom:12px;line-height:1.5">Wgraj zdjecie z notatek - AI wygeneruje fiszki.</p><div class="field"><label>Zestaw</label><select id="sc-dk">'+DB.decks.map(d=>'<option value="'+d.id+'"'+(d.id===did?' selected':'')+'>'+esc(d.name)+'</option>').join('')+'</select></div><input type="file" id="sc-fi" accept="image/*" style="display:none" onchange="handleScan(this)"><div onclick="document.getElementById(\'sc-fi\').click()" style="border:1.5px dashed var(--b2);border-radius:var(--rsm);padding:18px;text-align:center;cursor:pointer;margin-bottom:10px"><div style="font-size:26px;margin-bottom:5px">&#128444;</div><div style="font-size:12px;color:var(--tx2)">Dotknij aby wybrac zdjecie</div></div><div id="sc-prev"></div><div id="sc-res"></div><div id="sc-act" style="display:none" class="sh-actions"><button class="sh-cancel" onclick="closeSheet()">Anuluj</button><button class="sh-ok" onclick="addScanned()">Dodaj fiszki</button></div>');
}
function handleScan(inp){
  if(!inp.files?.[0])return;
  let r=new FileReader();
  r.onload=async e=>{
    let src=e.target.result,b64=src.split(',')[1],mime=inp.files[0].type||'image/jpeg';
    document.getElementById('sc-prev').innerHTML='<div style="display:flex;gap:9px;align-items:center;background:var(--s2);border-radius:var(--rsm);padding:9px;margin-bottom:9px"><img src="'+src+'" style="width:50px;height:50px;object-fit:cover;border-radius:6px"><div id="sc-st" class="ai-load" style="padding:0"><span class="spin"></span>AI analizuje&#8230;</div></div>';
    let key=localStorage.getItem('fp_key')||'';
    if(!key){document.getElementById('sc-st').innerHTML='Brak klucza API';return}
    try{
      let res=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json','x-api-key':key,'anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true'},body:JSON.stringify({model:'claude-sonnet-4-5',max_tokens:1500,messages:[{role:'user',content:[{type:'image',source:{type:'base64',media_type:mime,data:b64}},{type:'text',text:'Na podstawie tego zdjecia wygeneruj fiszki do nauki. TYLKO JSON bez backtickow: [{"front":"...","back":"...","tags":["#tag"]}]. Maks 10. Mozesz uzywac Markdown i LaTeX $$ $$.'}]}]})});
      let data=await res.json();if(data.error)throw new Error(data.error.message);
      let txt=(data.content||[]).map(i=>i.text||'').join('');
      scanned=JSON.parse(txt.replace(/```json|```/g,'').trim());
      document.getElementById('sc-st').innerHTML='&#9989; '+scanned.length+' fiszek';
      document.getElementById('sc-res').innerHTML=scanned.map(c=>'<div class="ci" style="margin:0 0 5px"><div class="ci-txt"><div class="ci-front">'+esc(c.front.slice(0,60))+'</div></div></div>').join('');
      let sa=document.getElementById('sc-act');if(sa)sa.style.display='flex';
    }catch(err){document.getElementById('sc-st').innerHTML='Blad: '+esc(err.message)}
  };r.readAsDataURL(inp.files[0]);
}
function addScanned(){
  let did=document.getElementById('sc-dk')?.value;
  scanned.forEach(c=>{if(c.front&&c.back)DB.cards.push({id:uid(),deckId:did,front:c.front,back:c.back,tags:c.tags||[],type:'basic',status:'new',reviews:0,ef:2.5,interval:0,reps:0,nextReview:null,lastReview:null})});
  save();closeSheet();renderCards();updateDueBadge();toast('Dodano '+scanned.length+' fiszek');
}

// Stats
function renderStats(){
  let tot=DB.cards.length,known=DB.cards.filter(c=>c.status==='known').length;
  let due=getDueCount(),pct=tot?Math.round(known/tot*100):0;
  let sg=document.getElementById('stats-grid');
  if(sg)sg.innerHTML='<div class="st"><div class="st-num" style="color:var(--acc)">'+tot+'</div><div class="st-lbl">Wszystkich fiszek</div></div><div class="st"><div class="st-num" style="color:var(--grn)">'+known+'</div><div class="st-lbl">Opanowanych</div></div><div class="st"><div class="st-num" style="color:var(--red)">'+due+'</div><div class="st-lbl">Do powtorzenia dzis</div></div><div class="st"><div class="st-num">'+( DB.stats.streak||0)+'&#128293;</div><div class="st-lbl">Dni z rzedu</div></div><div class="st"><div class="st-num">'+(DB.stats.totalReviews||0)+'</div><div class="st-lbl">Powtorzen lacznie</div></div><div class="st"><div class="st-num" style="color:var(--acc)">'+pct+'%</div><div class="st-lbl">Opanowano</div></div>';
  let calib=DB.stats.calibration||[];
  let ct=document.getElementById('calib-tiles');
  if(calib.length>5){
    let ok=calib.filter(c=>c.p===c.a).length,over=calib.filter(c=>c.p>c.a).length,under=calib.filter(c=>c.p<c.a).length;
    let cp=Math.round(ok/calib.length*100);
    if(ct)ct.innerHTML='<div style="display:flex;gap:7px"><div class="calib-tile"><div class="calib-n" style="color:var(--acc)">'+cp+'%</div><div class="calib-l">Trafnosc</div></div><div class="calib-tile"><div class="calib-n" style="color:var(--red)">'+Math.round(over/calib.length*100)+'%</div><div class="calib-l">Zbyt pewny</div></div><div class="calib-tile"><div class="calib-n" style="color:var(--blu)">'+Math.round(under/calib.length*100)+'%</div><div class="calib-l">Zbyt niepewny</div></div></div>';
  }
  let days=['Pn','Wt','Sr','Cz','Pt','Sb','Nd'];
  let dow=new Date().getDay(),ti=dow===0?6:dow-1;
  let wd=DB.stats.weekData||[0,0,0,0,0,0,0],wmax=Math.max(...wd,1);
  let wb=document.getElementById('week-bars');
  if(wb)wb.innerHTML=wd.map((v,i)=>'<div class="bc'+(i===ti?' today':'')+'"><div class="bf" style="height:'+Math.round(v/wmax*100)+'%;'+(i!==ti?'opacity:.4':'')+'"></div><div class="bd">'+days[i]+'</div></div>').join('');
  let fc=getForecast(14),fmax=Math.max(...fc,1);
  let fel=document.getElementById('forecast');
  if(fel)fel.innerHTML=fc.map((v,i)=>'<div class="fcc"><div class="fcf" style="height:'+Math.round(v/fmax*100)+'%"></div><div class="fcl">'+(i===0?'D':i===7?'+7':i===13?'+13':'')+'</div></div>').join('');
  let dp=document.getElementById('deck-prog');
  if(dp)dp.innerHTML='<div class="card-title">Zestawy</div>'+DB.decks.map(d=>{let cards=getDeckCards(d.id),k=cards.filter(c=>c.status==='known').length,p=cards.length?Math.round(k/cards.length*100):0;return'<div class="dp-row"><span class="di-dot" style="background:'+d.color+'"></span><div class="dp-name">'+esc(d.name)+'</div><div class="dp-bar"><div class="dp-fill" style="width:'+p+'%"></div></div><div class="dp-pct">'+p+'%</div></div>';}).join('');
  let ej=document.getElementById('error-journal'),errs=DB.stats.errorLog||[];
  if(ej)ej.innerHTML=errs.length?errs.slice(0,20).map(e=>'<div class="ci" style="margin:0 16px 6px"><div class="ci-txt"><div class="ci-front">'+esc(e.front)+'</div><div class="ci-tags">'+(e.tags||[]).map(t=>'<span class="tag">'+esc(t)+'</span>').join('')+'</div></div><div style="font-size:10px;color:var(--tx3);margin-left:4px">'+( e.date||'')+'</div></div>').join(''):'<div style="padding:0 16px 10px;font-size:12px;color:var(--tx2)">Brak bledow - tak trzymaj! &#127881;</div>';
}
function clearErrors(){DB.stats.errorLog=[];save();renderStats();toast('Dziennik wyczyszczony')}
async function analyzeErrors(){
  let btn=document.getElementById('analyze-btn'),res=document.getElementById('analysis-result');
  btn.disabled=true;btn.textContent='Analizuje&#8230;';
  res.innerHTML='<div class="ai-load" style="padding:0 16px"><span class="spin"></span>AI analizuje slabe punkty&#8230;</div>';
  let weak=DB.cards.filter(c=>c.reviews>0).sort((a,b)=>(a.ef||2.5)-(b.ef||2.5)).slice(0,15);
  if(weak.length<3){res.innerHTML='<div style="padding:0 16px 10px;font-size:12px;color:var(--tx2)">Za malo danych. Powtorz wiecej fiszek.</div>';btn.disabled=false;btn.textContent='&#129302; Analizuj slabe punkty (AI)';return}
  let list=weak.map(c=>'- "'+c.front.slice(0,60)+'" | ef:'+((c.ef||2.5).toFixed(2))+' | reps:'+c.reviews+' | '+c.status).join('\n');
  let result=await callClaude('Jestes ekspertem od uczenia sie. Analizujesz dane studenta. Po polsku. Konkretnie i bezposrednio.','Najslabsze fiszki studenta energetyki:\n'+list+'\n\nLacznie powtorzen: '+DB.stats.totalReviews+'\n\nOdpowiedz w Markdown:\n## Glowne slabe obszary\n## Wzorzec bledow\n## 3 konkretne rekomendacje\n## Priorytet na dzis',1000);
  if(!result){res.innerHTML='';btn.disabled=false;btn.textContent='&#129302; Analizuj slabe punkty (AI)';return}
  res.innerHTML='<div class="card" style="margin-top:4px"><div class="card-title" style="color:var(--pur)">&#129302; Analiza AI</div><div style="font-size:13px;line-height:1.7;color:var(--tx2)">'+renderMD(result)+'</div></div>';
  btn.disabled=false;btn.textContent='&#129302; Analizuj ponownie';
}
function showFormulaSheet(){
  let el=document.getElementById('formula-sheet-area');
  let wzory=DB.cards.filter(c=>(c.tags||[]).includes('#wzory'));
  if(!wzory.length){el.innerHTML='<div style="padding:0 16px 10px;font-size:12px;color:var(--tx2)">Brak fiszek z tagiem #wzory.</div>';return}
  el.innerHTML='<div class="formula-sheet"><div class="card-title">&#128208; Arkusz wzorow - '+wzory.length+' wzorow</div>'+wzory.map(c=>'<div class="formula-item"><div class="formula-front">'+esc(c.front)+'</div><div class="formula-back" id="fw-'+c.id+'">'+renderMD(c.back)+'</div></div>').join('')+'</div>';
  wzory.forEach(c=>renderMath(document.getElementById('fw-'+c.id)));
}

// Admin
function renderAdmin(){
  let el=document.getElementById('eng-list'),cnt=document.getElementById('eng-count');
  if(cnt)cnt.textContent=DB.engVars.length;
  if(el)el.innerHTML=DB.engVars.map(v=>'<div class="eng-item"><div class="eng-name">'+esc(v.name)+'</div><span class="eng-val">'+fmtVal(v.value)+'</span><span class="eng-unit">'+esc(v.unit)+'</span><span class="eng-cat">'+esc(v.cat||v.category||'')+'</span></div>').join('')||'<div style="font-size:12px;color:var(--tx2)">Pusta.</div>';
  renderApiKeySt();
  if(DB.exam.name)document.getElementById('exam-name').value=DB.exam.name;
  if(DB.exam.date)document.getElementById('exam-date').value=DB.exam.date;
  if(DB.exam.goal)document.getElementById('exam-goal').value=DB.exam.goal;
}
function parsePaste(){
  let txt=document.getElementById('paste-area')?.value||'',added=0;
  txt.split('\n').filter(l=>l.trim()).forEach(line=>{
    let[name,vs,unit,mns,mxs,cat]=line.split('|').map(p=>p.trim());
    let value=parseFloat(vs),min=parseFloat(mns),max=parseFloat(mxs);
    if(!name||isNaN(value)||isNaN(min)||isNaN(max))return;
    DB.engVars.push({id:uid(),name,value,unit,min,max,cat:cat||'Ogolne',desc:''});added++;
  });
  save();renderAdmin();
  if(added>0){toast('Dodano '+added+' zmiennych');document.getElementById('paste-area').value=''}else toast('Bledny format.');
}
function clearEngDB(){if(!confirm('Wyczyscic?'))return;DB.engVars=[];save();renderAdmin();renderLearnCtrl();toast('Wyczyszczone')}
function exportJSON(){let a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify({version:4,date:new Date().toISOString(),...DB},null,2)],{type:'application/json'}));a.download='fiszki-'+today()+'.json';a.click();URL.revokeObjectURL(a.href);toast('Wyeksportowano')}
function importJSON(inp){if(!inp.files?.[0])return;let r=new FileReader();r.onload=e=>{try{let d=JSON.parse(e.target.result);if(d.decks)DB.decks=d.decks;if(d.cards)DB.cards=d.cards;if(d.engVars)DB.engVars=d.engVars;if(d.stats)DB.stats=d.stats;if(d.exam)DB.exam=d.exam;save();renderAdmin();renderDecks();renderCards();renderLearnCtrl();updateDueBadge();toast('Import OK')}catch{toast('Blad JSON')}};r.readAsText(inp.files[0])}
function clearAll(){if(!confirm('Usunac WSZYSTKIE dane?'))return;localStorage.clear();load();renderAdmin();renderDecks();renderCards();renderLearnCtrl();updateDueBadge();updateXPBadge();toast('Dane usuniete')}
function openApiKey(){openSheet('<div class="sh-ttl">&#128273; Klucz API</div><div class="field"><label>Klucz API Anthropic</label><input id="in-key" type="password" placeholder="sk-ant-..." value="'+esc(localStorage.getItem('fp_key')||'')+'"></div><div class="sh-actions"><button class="sh-cancel" onclick="closeSheet()">Anuluj</button><button class="sh-ok" onclick="saveApiKey()">Zapisz</button></div>');setTimeout(()=>document.getElementById('in-key')?.focus(),350)}
function saveApiKey(){let k=document.getElementById('in-key')?.value.trim()||'';localStorage.setItem('fp_key',k);closeSheet();renderApiKeySt();toast(k?'Klucz zapisany':'Klucz usuniety')}
function renderApiKeySt(){let k=localStorage.getItem('fp_key')||'';let el=document.getElementById('key-status');if(el)el.textContent=k?k.slice(0,8)+'**********':'Nie ustawiony'}

// Sheet
function openSheet(html){document.getElementById('sheet-body').innerHTML=html;document.getElementById('overlay').classList.add('open')}
function closeSheet(){document.getElementById('overlay').classList.remove('open')}
function bgClose(e){if(e.target===document.getElementById('overlay'))closeSheet()}

// Pomo
let pomo={on:false,brk:false,left:25*60,t:null};
function togglePomo(){if(pomo.on){clearInterval(pomo.t);pomo.on=false;updPomo()}else{pomo.on=true;pomo.t=setInterval(tickPomo,1000);updPomo()}}
function tickPomo(){pomo.left--;if(pomo.left<=0){pomo.brk=!pomo.brk;pomo.left=pomo.brk?5*60:25*60;toast(pomo.brk?'Przerwa 5 min!':'Czas na nauke!')}updPomo()}
function updPomo(){let el=document.getElementById('pomo-btn');if(!el)return;let m=Math.floor(pomo.left/60),s=pomo.left%60;el.textContent=(pomo.brk?'&#9749;':'&#9201;')+' '+String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');el.className='pomo-btn'+(pomo.on?(pomo.brk?' brk':' run'):'')}

// XP
const XP_LVL=[0,100,250,500,900,1500,2500,4000,6000,9000,13000];
const LVL_N=['','Nowicjusz','Uczen','Student','Adept','Ekspert','Mistrz','Profesor','Legenda','Genius','Omnibus'];
function awardXP(amt){DB.stats.xp=(DB.stats.xp||0)+amt;let lv=1;for(let i=0;i<XP_LVL.length;i++){if(DB.stats.xp>=XP_LVL[i])lv=i+1}let prev=DB.stats.level||1;DB.stats.level=lv;if(lv>prev)toast('Nowy poziom: '+(LVL_N[lv]||'Max')+'!');updateXPBadge()}
function updateXPBadge(){let el=document.getElementById('xp-chip');if(el)el.textContent='&#9889; '+(DB.stats.xp||0)+' XP \u00b7 Lv'+(DB.stats.level||1)}
function updateStreak(){let t=today(),last=DB.stats.lastDate;if(!last)DB.stats.streak=1;else if(t===last){}else if(t===addDays(last,1))DB.stats.streak=(DB.stats.streak||0)+1;else DB.stats.streak=1;DB.stats.lastDate=t;save()}
function updateDueBadge(){let cnt=getDueCount();let el=document.getElementById('due-badge');if(el){el.textContent=cnt>99?'99+':String(cnt);el.style.display=cnt>0?'flex':'none'}}

// Keyboard
document.addEventListener('keydown',e=>{
  if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA')return;
  if(_cur!=='learn')return;
  if(e.code==='Space'){e.preventDefault();if(S.confidence&&!S.flipped&&S.cards.length&&S.index<S.cards.length)flipCard()}
  if(e.key==='1'&&S.flipped)rate(1);
  if(e.key==='2'&&S.flipped)rate(3);
  if(e.key==='3'&&S.flipped)rate(5);
});

// Toast
let _tt=null;
function toast(msg){let el=document.getElementById('toast');el.innerHTML=msg;el.classList.add('show');clearTimeout(_tt);_tt=setTimeout(()=>el.classList.remove('show'),2400)}

// Init
if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js').catch(()=>{});
load();
renderLearnCtrl();
renderCountdown();
updateXPBadge();
updateDueBadge();
renderApiKeySt();
