import React, { Component } from 'react';
import style from './challenges.css';
import generalStyle from '../onevent.css';
import Cookies from 'js-cookie';
import buttonStyle from '../../applyButton/applyButton.css';

class Challenges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges:[ 
        {
          id: 1,
          titleEn: "Boosting employee happiness with technology",
          titleIs: "Hvernig aukum við starfsánægju með tækni?",
          textEn: "Employee satisfaction can be measured in countless ways and can often be highly dependent on the employee. Some might prefer a relaxed work environment while others strive for maximum productivity and time management.    Some jobs have strict restrictions – Truck drivers must make their deliveries on time and must be alert at the wheel; students must complete tasks like achieving a minimum passing grade, write a thesis and defend it.    How can we leverage technology to increase job satisfaction?",
          textIs: "Það eru ótal leiðir til að mæla starfsánægju og getur það verið mismunandi milli einstaklinga hvað telst til starfsánægju. Sumir myndu e.t.v. vinna í rólegu vinnuumhverfi á meðan aðrir sækjast frekar í að hámarka framleiðni og besta tímastjórnun.    Sum störf hafa strangar kröfur – sendibílstjórar verða að komast á áfangastað og þurfa að vera vakandi við stýrið; nemendur verða að ná ákveðnum áföngum eins og að ná lágmarkseinkun, skrifa lokaritgerð og verja hana.    Hvernig getum við aukið starfsánægju með tækni?",
          company: "Origo",
          videoURL: null,
          companyPhotoURL: "/images/sponsors/reboot/OrigoSVG.svg",
          detailsEnPhotoURL: "/images/Challenges/Origo/Description_En.png",
          detailsIsPhotoURL: "/images/Challenges/Origo/Description_Is.png",
          companyLinkURL: 'https://www.origo.is/',
          criteriaPhotoEnURL: "/images/Challenges/Origo/Criteria_En.png",
          criteriaPhotoIsURL:"/images/Challenges/Origo/Criteria_Is.png",
          prizesEnURL: null,
          prizesIsURL: null,
          displayDetails: true,
          descriptionParagraph1En: "Employee satisfaction can be measured in countless ways and can often be highly dependent on the employee. Some might prefer a relaxed work environment while others strive for maximum productivity and time management.",
          descriptionParagraph1Is: "Það eru ótal leiðir til að mæla starfsánægju og getur það verið mismunandi milli einstaklinga hvað telst til starfsánægju. Sumir myndu e.t.v. vinna í rólegu vinnuumhverfi á meðan aðrir sækjast frekar í að hámarka framleiðni og besta tímastjórnun.",
          descriptionParagraph2En: "Some jobs have strict restrictions – Truck drivers must make their deliveries on time and must be alert at the wheel; students must complete tasks like achieving a minimum passing grade, write a thesis and defend it.",
          descriptionParagraph2Is: "Sum störf hafa strangar kröfur – sendibílstjórar verða að komast á áfangastað og þurfa að vera vakandi við stýrið; nemendur verða að ná ákveðnum áföngum eins og að ná lágmarkseinkun, skrifa lokaritgerð og verja hana.",
          descriptionParagraph3En: "How can we leverage technology to increase job satisfaction? ",
          descriptionParagraph3Is: "Hvernig getum við aukið starfsánægju með tækni?",
          Criteria1En: "Scope (the impact of your solution)",
          Criteria1Is: "Umfang (hvað hefur þetta áhrif á marga)",
          Criteria2En: "Ambition",
          Criteria2Is: "Metnaður",
          Criteria3En: "Feasibility",
          Criteria3Is: "Hagkvæmni",
          Criteria4En: null,
          Criteria4Is: null,
          Criteria5En: null,
          Criteria5Is: null,
          Criteria6En: null,
          Criteria6Is: null,
          Criteria7En: null,
          Criteria7Is: null
        },
        {
          id: 4,
          titleEn: "How will insurance services look like in the future?",
          titleIs: "Hvernig verður tryggingarþjónusta í framtíðinni?",
          textEn: "Insurance provides the peace of mind knowing that if something happens you are covered. Evolution into the digital world is happening fast and the financial sector is already on its way automating services for the benefit of the customer. The evolution of it is still in progress but what do you see happening?    How do we meet the customer needs on their terms and through the medium they choose when claims happens or when buying insurance?    How do we make sure our customers have the right level of coverage at the right price?",
          textIs: "Tryggingar snúast um að veita fólki þá hugarró sem felst í að vita að ef eitthvað kemur upp á þá ertu tryggður. Stafræn þróun er hröð og áhrifa er þegar farið að gæta hjá fjármálafyrirtækjum sem eru í auknum mæli farin að sjálfvirknivæða þjónustu. Það sér ekki fyrir endann á þeirri þróun en hvað sjáið þið?    Hvernig mætum við þörfum viðskiptavina á þeirra forsendum og í gegnum þá miðla sem þeir kjósa þegar kemur að tjóni eða kaupum á tryggingum?    Hvernig tryggjum við að viðskiptavinir okkar séu rétt tryggðir og rétt verðlagðir?",
          company: "Vörður",
          vodeoURL: null,
          companyPhotoURL: "/images/sponsors/restart/VordurLogoGraySVG.svg",
          detailsEnPhotoURL: "/images/Challenges/Vordur/Description_En.png",
          detailsIsPhotoURL: "/images/Challenges/Vordur/Description_Is.png",
          companyLinkURL: 'https://vordur.is/',
          criteriaPhotoEnURL: "/images/Challenges/Vordur/Criteria_En.png",
          criteriaPhotoIsURL:"/images/Challenges/Vordur/Criteria_Is.png",
          prizesEnURL: null,
          prizesIsURL: null,
          displayDetails: true,
          descriptionParagraph1En: "Insurance provides the peace of mind knowing that if something happens you are covered. Evolution into the digital world is happening fast and the financial sector is already on its way automating services for the benefit of the customer. The evolution of it is still in progress but what do you see happening?",
          descriptionParagraph1Is: "Tryggingar snúast um að veita fólki þá hugarró sem felst í að vita að ef eitthvað kemur upp á þá ertu tryggður. Stafræn þróun er hröð og áhrifa er þegar farið að gæta hjá fjármálafyrirtækjum sem eru í auknum mæli farin að sjálfvirknivæða þjónustu. Það sér ekki fyrir endann á þeirri þróun en hvað sjáið þið?",
          descriptionParagraph2En: "How do we meet the customer needs on their terms and through the medium they choose when claims happens or when buying insurance?",
          descriptionParagraph2Is: "Hvernig mætum við þörfum viðskiptavina á þeirra forsendum og í gegnum þá miðla sem þeir kjósa þegar kemur að tjóni eða kaupum á tryggingum?",
          descriptionParagraph3En: "How do we make sure our customers have the right level of coverage at the right price?",
          descriptionParagraph3Is: "Hvernig tryggjum við að viðskiptavinir okkar séu rétt tryggðir og rétt verðlagðir?",
          Criteria1En: "Originality",
          Criteria1Is: "Frumleiki hugmyndar",
          Criteria2En: "Quality of implementation",
          Criteria2Is: "Gæði útfærslu",
          Criteria3En: "The likelihood of your solution becoming reality",
          Criteria3Is: "Líkur á að hugmyndin yrði að veruleika",
          Criteria4En: null,
          Criteria4Is: null,
          Criteria5En: null,
          Criteria5Is: null,
          Criteria6En: null,
          Criteria6Is: null,
          Criteria7En: null,
          Criteria7Is: null
        },
        {
          id: 2,
          titleEn: "Gamification of Savings",
          titleIs: "Leikjavæðing sparnaðar",
          textEn: "Saving is something we all need to focus on, but we may find it difficult as it is often much easier to spend than save. It can be a challenge to find the will power to continue the habit of saving especially when you are on a budget.  How can the elements of gaming like challenges and competition be used to gamify savings and encourage individuals to achieve their savings goals and make it fun at the same time.",
          textIs: "Að leggja fyrir og spara er eitthvað sem við þurfum öll að temja okkur en það getur reynst erfitt því það er oft auðveldara að eyða en spara. Það getur verið áskorun að viðhalda þeirri venju að spara sérstaklega þegar það þrengir að fjárhagslega. En hvernig er hægt nýta eiginleika tölvuleikja eins og áskoranir og samkeppni til þess að leikjavæða sparnað og hvetja einstaklinga til þess að leggja fyrir og hjálpa þeim að ná sínum fjárhagslegu markmiðum og hafa gaman af því á sama tíma.",
          company: "Auður",
          vodeoURL: null,
          companyPhotoURL: "/images/sponsors/reboot/AudurSVG.svg",
          detailsEnPhotoURL: "/images/Challenges/Audur/Description_En.png",
          detailsIsPhotoURL: "/images/Challenges/Audur/Description_Is.png",
          companyLinkURL: 'https://www.audur.is/',
          criteriaPhotoEnURL: "/images/Challenges/Audur/Criteria_En.png",
          criteriaPhotoIsURL:"/images/Challenges/Audur/Criteria_Is.png",
          prizesEnURL: null,
          prizesIsURL: null,
          displayDetails: true,
          descriptionParagraph1En:"Saving is something we all need to focus on, but we may find it difficult as it is often much easier to spend than save. It can be a challenge to find the willpower to continue the habit of saving especially when you are on a budget.  How can the elements of gaming like challenges and competition be used to gamify savings and encourage individuals to achieve their savings goals and make it fun at the same time.",
          descriptionParagraph1Is:"Að leggja fyrir og spara er eitthvað sem við þurfum öll að temja okkur en það getur reynst erfitt því það er oft auðveldara að eyða en spara. Það getur verið áskorun að viðhalda þeirri venju að spara sérstaklega þegar það þrengir að fjárhagslega. En hvernig er hægt nýta eiginleika tölvuleikja eins og áskoranir og samkeppni til þess að leikjavæða sparnað og hvetja einstaklinga til þess að leggja fyrir og hjálpa þeim að ná sínum fjárhagslegu markmiðum og hafa gaman af því á sama tíma.",
          descriptionParagraph2En:null,
          descriptionParagraph2Is:null,
          descriptionParagraph3En:null,
          descriptionParagraph3Is:null,
          Criteria1En: "We are looking for solutions that are original and fun but at the same time practical to implement.",
          Criteria1Is: "Við erum að leita eftir lausnum sem eru frumlegar og skemmtilegar en á sama tíma raunhæfar til þess að hrinda í framkvæmd.",
          Criteria2En: null,
          Criteria2Is: null,
          Criteria3En: null,
          Criteria3Is: null,
          Criteria4En: null,
          Criteria4Is: null,
          Criteria5En: null,
          Criteria5Is: null,
          Criteria6En: null,
          Criteria6Is: null,
          Criteria7En: null,
          Criteria7Is: null
        },
        {
          id: 0,
          titleEn: "Jobs without specified location",
          titleIs: "Störf án staðsetningar",
          textEn: "One of the projects of the strategic regional plan for the period 2018 - 2024 is to ensure that 10% of all advertised jobs at ministries and their institutions shall be without specified location by the year 2024, meaning that residence has no influence on ministry staff selection. How can we make the non-capital area of Iceland a feasible place for young and educated people to live and work in? Please keep both social and technical factors in mind when solving the challenge.     Main objective: How can we make the non-capital area of Iceland a feasible place for young and educated people to live and work in? Please keep both social and technical factors in mind when solving the challenge.     Secondary objective: How can living in the non-capital area of Iceland be marketed in the best way to attract young and educated people?",
          textIs: "Eitt af markmiðum stefnumótandi byggðaáætlunar fyrir árin 2018 - 2024 er að 10% allra auglýstra starfa í ráðuneytum og stofnunum þeirra verði án staðsetningar árið 2024, þannig að búseta hafi ekki áhrif við val á starfsfólki. Hvernig er hægt að búa svo um að það verði ákjósanlegt fyrir ungt og menntað fólk að búa og starfa á landsbyggðinni? Horfa skal meðal annars til samfélagslegra, tæknilegra og félagslegra þátta við úrlausn áskorunarinnar.     Meginmarkmið: Hvernig er hægt að búa svo um að það verði ákjósanlegt fyrir ungt og menntað fólk að búa og starfa á landsbyggðinni? Horfa skal meðal annars til samfélagslegra, tæknilegra og félagslegra þátta við úrlausn áskorunarinnar.     Undirmarkmið: Hvernig er hægt að markaðssetja  búsetu á landsbyggðinni sem lífsstíl fyrir ungt, menntað fólk með sem bestum hætti?",
          company: "Byggðastofnun",
          vodeoURL: null,
          companyPhotoURL: "/images/sponsors/restart/Byggst_1800x600px_transp.png",
          detailsEnPhotoURL: "/images/Challenges/Byggdastofnun/Description_En.png",
          detailsIsPhotoURL: "/images/Challenges/Byggdastofnun/Description_Is.png",
          companyLinkURL: 'https://www.byggdastofnun.is/',
          criteriaPhotoEnURL: "/images/Challenges/Byggdastofnun/Criteria_En.png",
          criteriaPhotoIsURL:"/images/Challenges/Byggdastofnun/Criteria_Is.png",
          prizesEnURL: null,
          prizesIsURL: null,
          displayDetails: true,
          descriptionParagraph1En:"One of the projects of the strategic regional plan for the period 2018 - 2024 is to ensure that 10% of all advertised jobs at ministries and their institutions shall be without specified location by the year 2024, meaning that residence has no influence on ministry staff selection. How can we make the non-capital area of Iceland a feasible place for young and educated people to live and work in? Please keep both social and technical factors in mind when solving the challenge.",
          descriptionParagraph1Is:"Eitt af markmiðum stefnumótandi byggðaáætlunar fyrir árin 2018 - 2024 er að 10% allra auglýstra starfa í ráðuneytum og stofnunum þeirra verði án staðsetningar árið 2024, þannig að búseta hafi ekki áhrif við val á starfsfólki. Hvernig er hægt að búa svo um að það verði ákjósanlegt fyrir ungt og menntað fólk að búa og starfa á landsbyggðinni? Horfa skal meðal annars til samfélagslegra, tæknilegra og félagslegra þátta við úrlausn áskorunarinnar.",
          descriptionParagraph2En:"Main objective: How can we make the non-capital area of Iceland a feasible place for young and educated people to live and work in? Please keep both social and technical factors in mind when solving the challenge.",
          descriptionParagraph2Is:"Meginmarkmið: Hvernig er hægt að búa svo um að það verði ákjósanlegt fyrir ungt og menntað fólk að búa og starfa á landsbyggðinni? Horfa skal meðal annars til samfélagslegra, tæknilegra og félagslegra þátta við úrlausn áskorunarinnar. ",
          descriptionParagraph3En:"Secondary objective: How can living in the non-capital area of Iceland be marketed in the best way to attract young and educated people?",
          descriptionParagraph3Is:"Undirmarkmið: Hvernig er hægt að markaðssetja  búsetu á landsbyggðinni sem lífsstíl fyrir ungt, menntað fólk með sem bestum hætti?",
          Criteria1En: "SMART (specific, measurable, achievable, relevant, and time-based goal)",
          Criteria1Is: "SMART (skýr, mælanleg, aðlaðandi, raunhæf og tímasett)",
          Criteria2En: "Originality (Is the solution original and thinking outside of the box?)",
          Criteria2Is: "Frumleiki (Er þetta frumleg lausn? Er verið að hugsa út fyrir kassann?)",
          Criteria3En: null,
          Criteria3Is: null,
          Criteria4En: null,
          Criteria4Is: null,
          Criteria5En: null,
          Criteria5Is: null,
          Criteria6En: null,
          Criteria6Is: null,
          Criteria7En: null,
          Criteria7Is: null
        },
        {
          id: 3,
          titleEn: "Organized cyber criminals are after companies. How do we create security awareness among employees?",
          titleIs: "Skipulagðir netglæpahópar sækja á fyrirtæki. Hvernig gerum við starfsfólk meðvitað um hætturnar?",
          textEn: "Companies and civilians lost billions due to cyber crimes last year, mostly due to elaborate email scams. Security awareness training for employees can be tricky because people aren’t really interested in cyber security, they think it’s the IT department’s problem or they fully put their trust in anti-virus software and firewalls.    Cyber criminals seek out weak links by hacking people and when they succeed, traditional anti-virus software and firewalls won’t help. We are looking for methods to make security awareness interesting and memorable. How can we teach people to recognize scams online and not to download viruses or open just any ol’ attachment? How can we make sure that people remember their training when facing a real life cyber threat or hacking attempt? How can we turn employees into a human firewall?",
          textIs: "Fyrirtæki og einstaklingar töpuðu á milljörðum króna á síðasta ári vegna netsvika, þá aðallega vegna tölvupóstsvika. Öryggisvitundarþjálfun fyrir starfsfólks fyrirtækja getur reynst flókin því almennt hefur fólk ekki áhuga á netöryggismálum, telur þau einungis vandamál tölvudeildarinnar eða treystir um of á vírusvarnir og eldveggi.    Skipulagðir glæpahópar sækjast í auknum mæli eftir því að “hakka” fólk í stað þess að hakka eldveggi og þegar þeim tekst það er lítið sem hefðbundnar vírusvarnir geta gert. Við leitum að aðferðum til að gera öryggisvitund áhugaverða og minnisstæða. Hvernig getum við kennt fólki að þekkja svikapósta, varast vírusa og gæta sín á viðhengjum? Hvernig getum við gætt þess að slík þjálfun sé efst í huga fólks þegar mest á reynir? Hvernig gerum við starfsfólk að virkum hluta eldveggjarins?",
          company: "AwareGo",
          vodeoURL: null,
          companyPhotoURL: "/images/sponsors/restart/awarego.png",
          detailsEnPhotoURL: "/images/Challenges/AwareGo/Description_En.png",
          detailsIsPhotoURL: "/images/Challenges/AwareGo/Description_Is.png",
          companyLinkURL: 'https://www.awarego.com/',
          criteriaPhotoEnURL: "/images/Challenges/AwareGo/Criteria_En.png",
          criteriaPhotoIsURL:"/images/Challenges/AwareGo/Criteria_Is.png",
          prizesEnURL: null,
          prizesIsURL: null,
          displayDetails: true,
          descriptionParagraph1En:"Companies and civilians lost billions due to cyber crimes last year, mostly due to elaborate email scams. Security awareness training for employees can be tricky because people aren’t really interested in cyber security, they think it’s the IT department’s problem or they fully put their trust in anti-virus software and firewalls.",
          descriptionParagraph1Is:"Fyrirtæki og einstaklingar töpuðu á milljörðum króna á síðasta ári vegna netsvika, þá aðallega vegna tölvupóstsvika. Öryggisvitundar-þjálfun fyrir starfsfólks fyrirtækja getur reynst flókin því almennt hefur fólk ekki áhuga á netöryggismálum, telur þau einungis vandamál tölvudeildarinnar eða treystir um of á vírusvarnir og eldveggi.",
          descriptionParagraph2En:"Cyber criminals seek out weak links by hacking people and when they succeed, traditional anti-virus software and firewalls won’t help. We are looking for methods to make security awareness interesting and memorable. How can we teach people to recognize scams online and not to download viruses or open just any ol’ attachment? How can we make sure that people remember their training when facing a real life cyber threat or hacking attempt? How can we turn employees into a human firewall?",
          descriptionParagraph2Is:"Skipulagðir glæpahópar sækjast í auknum mæli eftir því að “hakka” fólk í stað þess að hakka eldveggi og þegar þeim tekst það er lítið sem hefðbundnar vírusvarnir geta gert. Við leitum að aðferðum til að gera öryggisvitund áhugaverða og minnisstæða. Hvernig getum við kennt fólki að þekkja svikapósta, varast vírus og gæta sín á viðhengjum? Hvernig getum við gætt þess að slík þjálfun sé efst í huga fólks þegar mest á reynir? Hvernig gerum við starfsfólk að virkum hluta eldveggjarins?",
          descriptionParagraph3En:null,
          descriptionParagraph3Is:null,
          Criteria1En: "Potential for success",
          Criteria1Is: "Líklegt til árangurs",
          Criteria2En: "Thinking outside the box",
          Criteria2Is: "Hugsað út fyrir kassann",
          Criteria3En: "Using technology that’s in common use or likely to be a favorite among users",
          Criteria3Is: "Nýtir tækni sem er í almennri notkun eða líkleg til almennra vinsælda",
          Criteria4En: null,
          Criteria4Is: null,
          Criteria5En: null,
          Criteria5Is: null,
          Criteria6En: null,
          Criteria6Is: null,
          Criteria7En: null,
          Criteria7Is: null
        },
        {
          id: 5,
          titleEn: "The future of trust in business",
          titleIs: "Traust í viðskiptum framtíðarinnar",
          textEn: "The world is changing rapidly and so does the business environment. Technology spurs quality and financial and nonfinancial data provided insight. Emerging technologies and the 4th industrial revolution will have significant effect on the assurance landscape.    How will the company of the future fulfil its regulatory and stakeholder obligations and how will 3rd party assurance service evolve? From financial statement and VAT reporting, to customer satisfaction, the challenge to meet the increased regulatory compliance and customer demands is ever challenging. We want you to help us to determine how the assurance service of the future will look like, and how it will be used to increase trust within the Icelandic marketplace. We welcome all solutions, ranging from theories to technical solutions, and everything between",
          textIs: "Traust er lykilþáttur þegar kemur að heilbrigðum viðskiptum og samskiptum milli fyrirtækja. Viðskiptaumhverfið hefur tekið miklu breytingum undanfarin ár og í þessu samhengi er talið að fjórða iðnbyltingin sem byggir á stafrænum grunni geti leitt til grundvallarbreytinga á hagkerfum, fyrirtækjum og þjóðfélögum. Þessi nýja stafræna tækni felur í sér fjölmörg tækifæri og jafnframt áskoranir. Í allri þessari gagnasöfnun, miðlun og vinnslu á gögnum verður traust áfram lykilþáttur og því mikilvægt að endurskoðun og önnur staðfestingarvinna fylgi þessari öru þróun og breytingum.    Sem óháður þriðji aðili hefur KPMG ásamt öðrum aðilum mikilvægt hlutverk að yfirfara og staðfesta upplýsingar frá fyrirtækjum s.s. ársreikninga, skattskil og einnig fylgni gagnvart lögum og reglum. Ný tækni, aukin gagnasöfnun og aukið færslumagn kallar á nýja nálgun í þessari vinnu.    Hvernig mun þessi tækniþróun og breyting hafa áhrif á þetta umhverfi og hvernig geta óháðir aðilar eins og KPMG nýtt sér tæknilausnir til að fylgja þessari þróun?",
          company: "KPMG",
          vodeoURL: null,
          companyPhotoURL: "/images/sponsors/reboot/KPMGSVG.svg",
          detailsEnPhotoURL: "/images/Challenges/KPMG/Description_En.png",
          detailsIsPhotoURL: "/images/Challenges/KPMG/Description_Is.png",
          companyLinkURL: 'https://home.kpmg/is/is/home.html',
          criteriaPhotoEnURL: "/images/Challenges/KPMG/Criteria_En.png",
          criteriaPhotoIsURL:"/images/Challenges/KPMG/Criteria_Is.png",
          prizesEnURL: null,
          prizesIsURL: null,
          displayDetails: true,
          descriptionParagraph1En:"The world is changing rapidly and so does the business environment. Technology spurs quality and financial and nonfinancial data provided insight. Emerging technologies and the 4th industrial revolution will have a significant effect on the assurance landscape.",
          descriptionParagraph1Is:"Traust er lykilþáttur þegar kemur að heilbrigðum viðskiptum og samskiptum milli fyrirtækja. Viðskiptaumhverfið hefur tekið miklu breytingum undanfarin ár og í þessu samhengi er talið að fjórða iðnbyltingin sem byggir á stafrænum grunni geti leitt til grundvallarbreytinga á hagkerfum, fyrirtækjum og þjóðfélögum. Þessi nýja stafræna tækni felur í sér fjölmörg tækifæri og jafnframt áskoranir. Í allri þessari gagnasöfnun, miðlun og vinnslu á gögnum verður traust áfram lykilþáttur og því mikilvægt að endurskoðun og önnur staðfestingar vinna fylgi þessari öru þróun og breytingum.",
          descriptionParagraph2En:"How will the company of the future fulfil its regulatory and stakeholder obligations and how will 3rd party assurance service evolve? From financial statement and VAT reporting, to customer satisfaction, the challenge to meet the increased regulatory compliance and customer demands is ever challenging. We want you to help us to determine how the assurance service of the future will look like, and how it will be used to increase trust within the Icelandic marketplace. We welcome all solutions, ranging from theories to technical solutions, and everything in between.",
          descriptionParagraph2Is:"Sem óháður þriðji aðili hefur KPMG ásamt öðrum aðilum mikilvægt hlutverk að yfirfara og staðfesta upplýsingar frá fyrirtækjum s.s. ársreikninga, skattskil og einnig fylgni gagnvart lögum og reglum. Ný tækni, aukin gagnasöfnun og aukið færslumagn kallar á nýja nálgun í þessari vinnu.",
          descriptionParagraph3En:null,
          descriptionParagraph3Is:"Hvernig mun þessi tækniþróun og breyting hafa áhrif á þetta umhverfi og hvernig geta óháðir aðilar eins og KPMG nýtt sér tæknilausnir til að fylgja þessari þróun?",
          Criteria1En: "Creativity",
          Criteria1Is: "Frumleiki",
          Criteria2En: "Logical approach",
          Criteria2Is: "Fýsileiki",
          Criteria3En: "Value to KPMG",
          Criteria3Is: "Hefur gildi fyrir KPMG",
          Criteria4En: null,
          Criteria4Is: null,
          Criteria5En: null,
          Criteria5Is: null,
          Criteria6En: null,
          Criteria6Is: null,
          Criteria7En: null,
          Criteria7Is: null
        },
        {
          id: 6,
          titleEn: "How can design, art and technology battle climate change?",
          titleIs: "Hvernig geta listir, hönnun og tækni spornað við loflagshamförum?",
          textEn: "We stand at a critical juncture in time. Life on Earth will be completely transformed in the next years and decades if nothing is done to battle the climate crisis caused by humans.    Climate catastrophe is considered humanity’s greatest challenge and the future outlook of people, animals, nature and ecosystems hangs in the balance.    How could design and art with the help of technology affect individuals, institutions and corporations when it comes to battling the climate crisis, build awareness on climate change, affect the way we live and increase social responsibility?",
          textIs: "Við stöndum á tímamótum. Lífið á Jörðinni mun gjörbreytast á næstu árum og áratugum ef kkert verður gert til að sporna við yfirvofandi loftslagshamförum af mannavöldum.    Hamfararhlýnun er talin stærsta áskorun samtímans og framtíðarhorfur manna, dýra, náttúru og vistkerfa virðast daprar.    Hvernig gætu hönnun og listir með hjálp tækni nýst einstaklingum, stofnunum og stórfyrirtækjum að sporna við loftlagshamförum, aukið meðvitund um loftslagsmál, haft áhrif á lifnaðarhætti fólks og aukið samfélagsábyrgð?",
          company: "LHÍ",
          vodeoURL: null,
          companyPhotoURL: "/images/universities/LHI_Black_Long_SVG.svg",
          detailsEnPhotoURL: "/images/Challenges/LHI/Description_En.png",
          detailsIsPhotoURL: "/images/Challenges/LHI/Description_Is.png",
          companyLinkURL: "https://www.lhi.is/",
          criteriaPhotoEnURL: "/images/Challenges/LHI/Criteria_En.png",
          criteriaPhotoIsURL:"/images/Challenges/LHI/Criteria_Is.png",
          prizesEnURL: null,
          prizesIsURL: null,
          displayDetails: true,
          descriptionParagraph1En:"We stand at a critical juncture in time. Life on Earth will be completely transformed in the next years and decades if nothing is done to battle the climate crisis caused by humans.",
          descriptionParagraph1Is:"Við stöndum á tímamótum. Lífið á Jörðinni mun gjörbreytast á næstu árum og áratugum ef ekkert verður gert til að sporna við yfirvofandi loftslagshamförum af mannavöldum.",
          descriptionParagraph2En:"Climate catastrophe is considered humanity’s greatest challenge and the future outlook of people, animals, nature and ecosystems hangs in the balance.",
          descriptionParagraph2Is:"Hamfararhlýnun er talin stærsta áskorun samtímans og framtíðarhorfur manna, dýra, náttúru og vistkerfa virðast daprar.",
          descriptionParagraph3En:"How could design and art with the help of technology affect individuals, institutions and corporations when it comes to battling the climate crisis, build awareness on climate change, affect the way we live and increase social responsibility?",
          descriptionParagraph3Is:"Hvernig gætu hönnun og listir með hjálp tækni nýst einstaklingum, stofnunum og stórfyrirtækjum að sporna við loftslagshamförum, aukið meðvitund um loftslagsmál, haft áhrif á lifnaðarhætti fólks og aukið samfélagsábyrgð?",
          Criteria1En: "Creativity",
          Criteria1Is: "Sköpunarkrafti",
          Criteria2En: "Imagination",
          Criteria2Is: "Hugmyndaauðgi",
          Criteria3En: "Drive",
          Criteria3Is: "Drifnaði",
          Criteria4En: "Viability",
          Criteria4Is: "Hagkvæmni",
          Criteria5En: "Persuasiveness",
          Criteria5Is: "Sannfæringarkrafti",
          Criteria6En: "Technical and visual implementation",
          Criteria6Is: "Tæknilegri og sjónrænni útfærslu",
          Criteria7En: "Presentation",
          Criteria7Is: "Framsetningu og framsögu"
        },
        {
          id: 7,
          titleEn: "How will tech make sale and manufacturing at Ölgerðin more sustainable?",
          titleIs: "Hvernig mun tækni gera sölu og framleiðslu Ölgerðarinnar sjálfbærari?",
          textEn: "Ölgerðin is both a highly developed and progressive manufacturing company, and a determined sales and marketing organisation. We are in partnership with leading global suppliers.  All of our suppliers have one thing in common - they are leaders in their fields, or they have the potential to become the best. New ways to grow the business and achieve greater productivity are constantly sought by doing things better and sooner than others.",
          textIs: "Ölgerðin er stærsta drykkjavörufyrirtæki landsins. Fyrirtækið framleiðir, flytur inn, dreifir og selur yfir 1000 vörunúmera. Áhersla er lögð á að vörur fyrirtækisins séu fyrsta flokks og að viðskiptavinir þess geti gengið að hágæða þjónustu vísri. Stöðugt er leitað nýrra leiða til að efla starfsemina og ná fram meiri framleiðni með því að gera hlutina betur og fyrr en aðrir.",
          company: "Ölgerðin",
          vodeoURL: null,
          companyPhotoURL: "/images/sponsors/restart/olgerdinLogoSVGResizedV2.svg",
          detailsEnPhotoURL: "/images/Challenges/Olgerdin/Description_En.png",
          detailsIsPhotoURL: "/images/Challenges/Olgerdin/Description_Is.png",
          companyLinkURL: 'https://www.olgerdin.is/',
          criteriaPhotoEnURL: "/images/Challenges/Olgerdin/Criteria_En.png",
          criteriaPhotoIsURL:"/images/Challenges/Olgerdin/Criteria_Is.png",
          prizesEnURL: null,
          prizesIsURL: null,
          displayDetails: true,
          descriptionParagraph1En:"Ölgerðin is both a highly developed and progressive manufacturing company, and a determined sales and marketing organisation. We are in partnership with leading global suppliers.  All of our suppliers have one thing in common - they are leaders in their fields, or they have the potential to become the best. New ways to grow the business and achieve greater productivity are constantly sought by doing things better and sooner than others.",
          descriptionParagraph1Is:"Ölgerðin er stærsta drykkjavörufyrirtæki landsins. Fyrirtækið framleiðir, flytur inn, dreifir og selur yfir 1000 vörunúmera. Áhersla er lögð á að vörur fyrirtækisins séu fyrsta flokks og að viðskiptavinir þess geti gengið að hágæða þjónustu vísri. Stöðugt er leitað nýrra leiða til að efla starfsemina og ná fram meiri framleiðni með því að gera hlutina betur og fyrr en aðrir.",
          descriptionParagraph2En:"Sustainability: How will the environmental factor affect the development of the supply chain? How can technology be used to respond to changing consumer habits towards more sustainable options?",
          descriptionParagraph2Is:"Sjálfbærni: Hvernig mun umhverfisþátturinn hafa áhrif á þróun aðfangakeðjunnar? Hvernig er hægt að nota tækni til að svara breyttum neysluvenjum í átt að sjálfbærari valkostum?",
          descriptionParagraph3En:"Smart future: What does the future salesman look like? What will the future wholesaler look like? How can technology be used to increase productivity? How can technology be used to increase information flow to internal and external parties?",
          descriptionParagraph3Is:"Snjöll framtíð: Hvernig lítur framtíðar sölumaðurinn út? Hvernig mun framtíðar heildsala líta út? Hvernig er hægt að nýta tækni til að auka framleiðni? Hvernig er hægt að nota tækni til að auka upplýsingaflæði til innri og ytri aðila?",
          Criteria1En: "Value for customer",
          Criteria1Is: "Virðir fyrir viðskiptavin",
          Criteria2En: "Progressiveness",
          Criteria2Is: "Framsækni",
          Criteria3En: "Completeness of idea",
          Criteria3Is: "Framkvæmanleg hugmynd",
          Criteria4En: null,
          Criteria4Is: null,
          Criteria5En: null,
          Criteria5Is: null,
          Criteria6En: null,
          Criteria6Is: null,
          Criteria7En: null,
          Criteria7Is: null
        }
      ]
    };
  }
  
  render() {

    var upcomingChallenges, challangesText, challengeInfo, moreDetails, postedByText, detailsText, criteriaText;

    if(Cookies.get('language')=='is'){
      moreDetails = "Meiri upplýsingar";
      upcomingChallenges = "Fleiri áskoranir munu birtast á næstu dögum, fylgstu með! :)";
      challangesText = "Áskoranir";
      challengeInfo = "Hakkaþon snúast ekki um að “hakka” heldur um að skapa. Hægt er að hugsa um hakkaþon sem uppfinningamaraþon eða nýsköpunarkeppni þar sem þátttakendur keppa saman í hópum og vinna í 24 tíma að lausn við þeim áskorunum sem kynntar eru hér fyrir neðan. Verðlaun eru veitt þeim teymum sem finna bestu lausn við hverri og einni áskorun.";
      postedByText = "Skrifað af ";
      detailsText = "Smáatriði:";
      criteriaText = "Matsatriði:";
    }
    else{
      moreDetails = "More details";
      upcomingChallenges = "There will be some more upcoming challenges, so make sure to re-visit the webiste :)";
      challangesText = "Challenges";
      challengeInfo = "Hackathons are not about “hacking” but rather creating. Hackathon can be thought of as an invention marathon where students compete in groups and work for 24 hours to develop a solution from scratch, based on challenges presented here below. A prize will be awarded to the team that comes up with the best solution to each challenge.";
      postedByText = "Posted by ";
      detailsText = "Details:";
      criteriaText = "Judging criteria:"
    }

    var challengeSection = this.state.challenges.map(
      (challenge) => {

        return (
          <div key={challenge.id} id={challenge.company} className={style.my_element+" "+style.challenge_padding}>
            <h3 className={generalStyle.header_style+" "+style.header_size_modified_on_mobile}>{Cookies.get('language')=='is' ? challenge.titleIs : challenge.titleEn}</h3>
            <h5 className={generalStyle.header_style+" row "+generalStyle.spacing_after_company+" "+style.vertical_padding_on_logo}>{challenge.companyPhotoURL==null ? null : <a href={challenge.companyLinkURL} target="_blank"><img className={(challenge.id == 0 ? style.extra_height+" " : "")+style.image+" img-fluid"+(challenge.id==7 ? " "+ style.image_bigger : null)} src={challenge.companyPhotoURL}/></a>} </h5>
            <p className={style.text_justify+" "+generalStyle.header_style+" "+generalStyle.paragraph_style}>{Cookies.get('language')=='is' ? challenge.textIs : challenge.textEn}</p>

            <div className={style.text_align_center}>
              <button type="button" className={style.my_button+" btn btn-outline-primary btn-lg "+buttonStyle.apply_button} data-toggle="modal" data-target={"#Modal"+challenge.id}>
                {moreDetails}
              </button>
            </div>


            <div className={"modal fade"} id={"Modal"+challenge.id} tabIndex="-1" role="dialog" aria-labelledby={"Modal"+challenge.id} aria-hidden="true">
              <div className={style.my_modal_dialog+" modal-dialog"} role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <div className={style.modal_header_style+" row"}>
                      
                      <h5 className={"modal-title"} id={"Modal"+challenge.id}> {Cookies.get('language')=='is' ? challenge.titleIs : challenge.titleEn}</h5>
                     
                    </div>
                    <button type="button" className={style.button_close+" close"} data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className={style.modal_body+" modal-body"}>
                    <div className={generalStyle.header_style+" row "+generalStyle.spacing_after_company+" "+style.vertical_padding_on_logo}>{challenge.companyPhotoURL==null ? null : <a href={challenge.companyLinkURL} target="_blank"><img className={(challenge.id == 0 ? style.extra_height+" " : "")+style.image+" img-fluid"+(challenge.id==7 ? " "+ style.image_bigger : null)} src={challenge.companyPhotoURL}/></a>} </div>
                    <p>{detailsText} </p> <img className={"img-fluid"} src={Cookies.get('language')=='is' ? challenge.detailsIsPhotoURL : challenge.detailsEnPhotoURL}/>
                    <p>{criteriaText} </p> <img className={"img-fluid"} src={Cookies.get('language')=='is' ? challenge.criteriaPhotoIsURL : challenge.criteriaPhotoEnURL}/>
                    {/* <p>Prizes: </p> <img className={"img-fluid"} src={Cookies.get('language')=='is' ? challenge.prizesIsURL : challenge.prizesEnURL}/> */}
                    
                  </div>
                 
                </div>
              </div>
            </div>

          </div>
        );
    });

   

    return (
        <div className={"container "+style.padding_bottom_after_div}>
          <h1 className={generalStyle.text_styling+" "+generalStyle.text_align+" "+style.challenge_text_style}>{challangesText}</h1>
            <p  className={generalStyle.text_styling+" "+generalStyle.dark_gray_color}>{challengeInfo}</p>
          <div className={style.myDiv}>
            {challengeSection}
          </div>
          {/* <p className={generalStyle.header_syle+" "+generalStyle.paragraph_style}>{upcomingChallenges}</p> */}
        </div>
    );
  }
}


export default Challenges;