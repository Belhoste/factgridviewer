import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedLangService {
  // The selected language, defaulting to 'en' if not set in localStorage
  selectedLang: string = localStorage['selectedLang'] ?? "en";

  /**
   * Centralized translation table.
   * Each key corresponds to a label, each value is an object mapping language codes to translations.
   * 'zh' is Simplified Chinese.
   */
  private translations: { [key: string]: { [lang: string]: string } } = {
    formerVisitsTitle: {
      de: "Sie haben besucht:",
      fr: "vous avez visité :",
      es: "has visitado :",
      it: "hai visitato :",
      en: "You have visited:",
      hu: "Ön meglátogatta:",
      zh: "您访问过："
    },
    subtitle: {
      de: "eine Databank für Historiker*innen",
      fr: "une base de données pour historien.nes",
      es: "una base de datos para historiadores",
      it: "un database per gli storici",
      en: "a database for historians",
      hu: "történészeknek szóló adatbázis",
      zh: "历史学家的数据库"
    },
    advanced_search: {
      de: "erweiterte Suche",
      fr: "recherche avancée",
      es: "búsqueda avanzada",
      it: "ricerca avanzata",
      en: "advanced search",
      hu: "összetett keresés",
      zh: "高级搜索"
    },
    projects: {
      de: "Forschungsprojekten",
      fr: "projets de recherche",
      es: "proyectos de investigación",
      it: "progetti di ricerca",
      en: "research projects",
      hu: "kutatási projektek",
      zh: "研究项目"
    },
    fields: {
      de: "Forschungsfelder",
      fr: "domaines de recherche",
      es: "campos de investigación",
      it: "aree di ricerca",
      en: "fields of research",
      hu: "kutatási területek",
      zh: "研究领域"
    },
    biblioHU: {
      de: "Bibliografie Harmonia Universalis",
      fr: "Bibliographie Harmonia Universalis",
      es: "Bibliografía Harmonia Universalis",
      it: "Bibliografia Harmonia Universalis",
      en: "Bibliography Harmonia Universalis",
      hu: "Harmonia Universalis bibliográfia",
      zh: "Harmonia Universalis 书目"
    },
    authorHeader: {
      de: "Autor",
      fr: "Auteur",
      es: "Autor",
      hu: "Szerző",
      it: "Autore",
      en: "Author",
      zh: "作者"
    },
    titleHeader: {
      de: "Titel",
      fr: "Titre",
      es: "Título",
      hu: "Cím",
      it: "Titolo",
      en: "Title",
      zh: "标题"
    },
    locationHeader: {
      de: "Ort",
      fr: "Lieu",
      es: "Lugar",
      hu: "Közzététel helye",
      it: "Luogo",
      en: "Location",
      zh: "地点"
    },
    dateHeader: {
      de: "Datum",
      fr: "Date",
      es: "Fecha",
      hu: "Dátuma",
      it: "Data",
      en: "Date",
      zh: "日期"
    },
    newSearch: {
      de: "neue Suche",
      fr: "nouvelle recherche",
      es: "nueva búsqueda",
      hu: "új keresés",
      it: "nuova ricerca",
      en: "new search",
      zh: "新搜索"
    },
    linkedPagesTitle: {
      de: "verlinkte Seiten",
      fr: "pages liées",
      es: "páginas enlazadas",
      hu: "kapcsolódó oldalak",
      it: "pagine collegate",
      en: "linked pages",
      zh: "相关页面"
    },
    mainPage: {
      de: "HauptSeite",
      fr: "page principale",
      es: "página principal",
      hu: "főoldal",
      it: "pagina principale",
      en: "main page",
      zh: "主页"
    },
    factGridQuery: {
      de: "FactGrid Abfrage",
      fr: "Requête FactGrid",
      es: "Consulta FactGrid",
      hu: "FactGrid lekérdezés",
      it: "Interrogazione FactGrid",
      en: "FactGrid query",
      zh: "FactGrid 查询"
    },
    externalLinksTitle: {
      de: "Externe Links",
      fr: "Liens externes",
      es: "Enlaces externos",
      hu: "Külső hivatkozások",
      it: "Collegamenti esterni",
      en: "external links",
      zh: "外部链接"
    },
    clickToDisplay: {
      de: "Klicken Sie zum Anzeigen",
      fr: "cliquez pour afficher",
      es: "haga clic para mostrar",
      hu: "kattintson a megtekintéshezr",
      it: "fare clic per visualizzare",
      en: "click to display",
      zh: "点击显示"
    },
    clickToDownload: {
      de: "Klicken Sie zum Download",
      fr: "cliquez pour télécharger",
      es: "haga clic para descargarlo",
      hu: "kattintson a letöltéshez",
      it: "fare clic per scaricare",
      en: "click to download",
      zh: "点击下载"
    },
    stemma: {
      de: "Stemma_aufwärts",
      fr: "Précédent_dans_le_stemma",
      es: "Precedente_en_el_stemma",
      hu: "Preceding_in_stemma",
      it: "Precedente_in_stemma",
      en: "Previous in stemma",
      zh: "谱系上一个"
    },
    activity: {
      en: "Activity",
      de: "Aktivität",
      fr: "Activité",
      es: "Actividad",
      it: "Attività",
      hu: "Aktivitással",
      zh: "活动"
    },
    instancesListTitle: {
      de: "Instanzen (Limit: 200):",
      fr: "Instances (limite: 200):",
      es: "Entidades (limite: 200):",
      it: "Entità (limite: 200):",
      hu: "Entitások (korlát: 200):",
      en: "Instances (limit: 200):",
      zh: "实例（上限：200）："
    },
    instancesListTitle_50: {
      de: "Instanzen (Limit: 50):",
      fr: "Instances (limite: 50):",
      es: "Entidades (limite: 50):",
      it: "Entità (limite: 50):",
      hu: "Entitások (korlát: 50):",
      en: "Instances (limit: 50):",
      zh: "实例（上限：50）："
    },
    subclassesListTitle: {
      de: "Unterklassen:",
      fr: "Sous-classes:",
      es: "Subclases:",
      hu: "Alosztályok:",
      it: "Sottoclassi:",
      en: "Subclasses:",
      zh: "子类："
    },
    classesListTitle: {
      de: "SuperKlassen:",
      fr: "Superclasses:",
      es: "Superclases:",
      it: "Superclassi:",
      hu: "Szuperosztályok:",
      en: "Superclasses:",
      zh: "超类："
    },
    natureOfListTitle: {
      de: "Instanz von ",
      fr: "Instance de ",
      es: "Instancia de ",
      it: "Istanza de ",
      hu: "Példánya a ",
      en: "Instance of ",
      zh: "属于："
    },
    subInfoTitle: {
      de: "Q-Item Information",
      fr: "Information sur l'élément",
      es: "Información sobre el elemento",
      it: "Informazioni sull'elemento",
      hu: "Az elemre vonatkozó információk",
      en: "Q-Item Information",
      zh: "Q项目信息"
    },
    prefix1: {
      de: "Klassenhierarchie: abhängige Klasse von ",
      fr: "hiérarchie des classes: classe dépendante de ",
      es: "jerarquía de clases: clase dependiente de ",
      it: "gerarchia delle classe: classe dipendente da ",
      hu: "osztályhierarchia: osztály függő ",
      en: "Class hierarchy: dependent class of ",
      zh: "类层次结构：依赖类 "
    },
    prefix2: {
      de: "Klassenhierarchie: Klasse mit",
      fr: "hiérarchie des classes: classe dotée de ",
      es: "jerarquía de clases: clase con ",
      it: "gerarchia delle classe: classe con ",
      hu: "osztályhierarchia: osztály a ",
      en: "Class hierarchy: class with ",
      zh: "类层次结构：具有 "
    },
    suffix1: {
      de: "Klassen:",
      fr: "classes:",
      es: "clases:",
      it: "classi:",
      hu: "osztályok:",
      en: "classes:",
      zh: "类："
    },
    buildingTitle: {
      de: "Gebäude und Denkmäler:",
      fr: "Edifices et monuments:",
      es: "Edificios y monumentos:",
      it: "Edifici e monumenti:",
      hu: "Épületek és emlékmű:",
      en: "Buildings and monuments:",
      zh: "建筑和纪念碑："
    },
    familyNameTitle: {
      de: "Mit diesem Familiennamen:",
      fr: "Portant ce nom de famille:",
      es: "Llevando este apellido:",
      it: "Portando questo cognome:",
      hu: "Ezt a vezetéknevet viselve:",
      en: "With this family name:",
      zh: "拥有此姓氏："
    },
    contextTitle: {
      de: "In diesem Kontext anwesend:",
      fr: "Présents dans ce contexte:",
      es: "Presentes en este contexto:",
      it: "Presente in questo contesto:",
      hu: "Ebben az összefüggésben jelen van:",
      en: "Present in this context:",
      zh: "在此情境中出现："
    },
    organisationTitle: {
      de: "Mitglieder:",
      fr: "Membres:",
      es: "Membres:",
      it: "Membri:",
      hu: "Tagok:",
      en: "Members:",
      zh: "成员："
    },
    activityTitle: {
      de: "Mit dieser Aktivität:",
      fr: "Ayant cette activité:",
      es: "Con esta actividad:",
      it: "Con questa attività:",
      hu: "Ezzel az aktivitással:",
      en: "With this activity:",
      zh: "具有此活动："
    },
    addressTitle: {
      de: "An dieser Adresse wohnhaft:",
      fr: "Domicilié.e.s à cette adresse:",
      es: "Residente en esta dirección:",
      it: "Residente a questo indirizzo:",
      hu: "Ezen a címen lakó személyd:",
      en: "Residing at this address:",
      zh: "居住在此地址："
    },
    workTitle: {
      de: "Werke",
      fr: "Œuvres",
      es: "Obras",
      it: "Opere",
      hu: "Müvek",
      en: "Works",
      zh: "作品"
    },
    pupilTitle: {
      de: "Schüler/innen",
      fr: "Élèves et disciples",
      es: "Alumnos y discípulos",
      it: "Studenti e discepoli",
      hu: "Müvek",
      en: "Pupils and disciples",
      zh: "学生和弟子"
    },
    patientsTitle: {
      de: "Patienten/innen",
      fr: "Patient.e.s",
      es: "Pacientes",
      it: "Pazienti",
      hu: "Páciensek",
      en: "Patients",
      zh: "病人"
    },
    listTitle: {
      de: "Liste",
      fr: "Liste",
      es: "Lista",
      it: "Lista",
      hu: "Lista",
      en: "List",
      zh: "列表"
    },
    setTitle: {
      de: "Erhalten:",
      fr: "Inclus :",
      es: "Incluye:",
      it: "Include:",
      hu: "Tartalmazza:",
      en: "Included:",
      zh: "包含："
    },
    currentAddress: {
      de: "Aktuelle Adresse:",
      fr: "Adresse actuelle :",
      es: "Dirección actual:",
      it: "Indirizzo attuale:",
      hu: "Jelenlegi cím:",
      en: "Current address:",
      zh: "当前地址："
    },
    noneLabel: {
      en: "none",
      fr: "aucune",
      de: "keine",
      es: "ninguno",
      it: "nessuno",
      hu: "nincs",
      zh: "无"
    }
  };

  /**
   * Generic translation getter.
   * Returns the translation for the given key and the currently selected language.
   * Falls back to English or the first available translation if needed.
   */
  private t(key: string): string {
    const lang = this.selectedLang;
    const entry = this.translations[key];
    if (!entry) return key;
    return entry[lang] ?? entry['en'] ?? Object.values(entry)[0] ?? key;
  }

  // Public API: one method per label, returning the translation for the current language
  formerVisitsTitle() { return this.t('formerVisitsTitle'); }
  subtitle() { return this.t('subtitle'); }
  advanced_search() { return this.t('advanced_search'); }
  projects() { return this.t('projects'); }
  fields() { return this.t('fields'); }
  noneLabel() { return this.t('noneLabel'); }
  biblioHU() { return this.t('biblioHU'); }
  authorHeader() { return this.t('authorHeader'); }
  titleHeader() { return this.t('titleHeader'); }
  locationHeader() { return this.t('locationHeader'); }
  dateHeader() { return this.t('dateHeader'); }
  newSearch() { return this.t('newSearch'); }
  linkedPagesTitle() { return this.t('linkedPagesTitle'); }
  mainPage() { return this.t('mainPage'); }
  factGridQuery() { return this.t('factGridQuery'); }
  externalLinksTitle() { return this.t('externalLinksTitle'); }
  clickToDisplay() { return this.t('clickToDisplay'); }
  clickToDownload() { return this.t('clickToDownload'); }
  stemma() { return this.t('stemma'); }
  activity() { return this.t('activity'); }
  instancesListTitle() { return this.t('instancesListTitle'); }
  instancesListTitle_50() { return this.t('instancesListTitle_50'); }
  subclassesListTitle() { return this.t('subclassesListTitle'); }
  classesListTitle() { return this.t('classesListTitle'); }
  natureOfListTitle() { return this.t('natureOfListTitle'); }
  subInfoTitle() { return this.t('subInfoTitle'); }
  prefix1() { return this.t('prefix1'); }
  prefix2() { return this.t('prefix2'); }
  suffix1() { return this.t('suffix1'); }
  buildingTitle() { return this.t('buildingTitle'); }
  familyNameTitle() { return this.t('familyNameTitle'); }
  contextTitle() { return this.t('contextTitle'); }
  organisationTitle() { return this.t('organisationTitle'); }
  activityTitle() { return this.t('activityTitle'); }
  addressTitle() { return this.t('addressTitle'); }
  workTitle() { return this.t('workTitle'); }
  pupilTitle() { return this.t('pupilTitle'); }
  patientsTitle() { return this.t('patientsTitle'); }
  listTitle() { return this.t('listTitle'); }
  setTitle() { return this.t('setTitle'); }
  currentAddress() { return this.t('currentAddress'); }

  // Example usage in a component:
  // this.selectedLangService.subtitle()
}
