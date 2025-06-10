export const PLACE_DISPLAY_PROPERTIES = [
  { property: 'P48', comment: 'geographic coordinates' },
  { property: 'P58', comment: 'number of inhabitants' },
  { property: 'P297', comment: 'territorial affiliation' },
  { property: 'P466', comment: 'capital of' },
  { property: 'P538', comment: 'historical county' },
  { property: 'P461', comment: 'named after' },
  { property: 'P140', comment: 'Illuminati code name (ng ser)' },
  { property: 'P139', comment: 'Illuminati code name of' },
  { property: 'P267', comment: 'organisational context' }
];

export const CAREER_DISPLAY_PROPERTIES = [ //by display order
  { property: 'P164', comment: 'position' },
  { property: 'P165', comment: 'activities' },
  { property: 'P865', comment: 'professional address' },
  { property: 'P315', comment: 'employer' },
  { property: 'P242', comment: 'events witness' },
  { property: 'P119', comment: 'active participant to' },
  { property: 'P776', comment: 'business partner' },
];

export const ACTIVITY_DISPLAY_PROPERTIES = [ //by display order
  { property: 'P267', comment: 'organisational context' },
];

export const DOCUMENT_DISPLAY_PROPERTIES = [ //by display order
  { property: 'P21', comment: 'author' },
  { property: 'P20', comment: 'author as (misleadingly) stated' },
  { property: 'P561', comment: 'quality of author identification' },
  { property: 'P24', comment: 'translated by' },
  { property: 'P583', comment: 'translator as (misleading) stated' },
  { property: 'P584', comment: 'quality of translator identification' },
  { property: 'P25', comment: 'handwritten by' },
  { property: 'P11', comment: 'title' },
  { property: 'P5', comment: 'title page transcript' },
  { property: 'P572', comment: 'focus title' },
  { property: 'P39', comment: 'begin of composition' },
  { property: 'P106', comment: 'date' },
  { property: 'P15', comment: 'media type' },
  { property: 'P121', comment: 'type of work (standardised)' },
  { property: 'P107', comment: 'number of pages/leafs/sheets' },
  { property: 'P93', comment: 'format' },
  { property: 'P95', comment: 'place of origin' },
  { property: 'P28', comment: 'recipient' },
  { property: 'P410', comment: 'was co-signed by' },
  { property: 'P33', comment: 'persons mentioned' },
  { property: 'P306', comment: 'quoting' },
  { property: 'P72', comment: 'digest in German' },
  { property: 'P204', comment: 'extract' },
  { property: 'P144', comment: 'type of publication' },
  { property: 'P115', comment: 'originality of the item' },
  { property: 'P578', comment: 'original publication' },
  { property: 'P233', comment: 'preceding in stemma' },
  { property: 'P222', comment: 'date of publication according to imprint' },
  { property: 'P241', comment: 'place of pubication (without fictitious information)' },
  { property: 'P240', comment: 'place of publication as misleading stated' },
  { property: 'P122', comment: 'wilder field of genre' },
  { property: 'P576', comment: 'genre/subject' },
  { property: 'P568', comment: 'plot ingredient' },
  { property: 'P565', comment: 'self-statement on historicity/fictionality' },
  { property: 'P18', comment: 'language' },
  { property: 'P126', comment: 'owner' },
  { property: 'P47', comment: 'localisation' },
  { property: 'P329', comment: 'holding institution' },
  { property: 'P323', comment: 'next higher archival level' },
  { property: 'P101', comment: 'position in sequence <string>' },
  { property: 'P30', comment: 'old shelf mark' },
  { property: 'P125', comment: 'document accessibility' },
  { property: 'P229', comment: 'provenance' },
  { property: 'P136', comment: 'history of provenance' },
  { property: 'P64', comment: 'published in' },
  { property: 'P124', comment: 'listed in' },
  { property: 'P251', comment: 'FactGrid transcript' },
  { property: 'P226', comment: 'FactGrid transcript' },
  { property: 'P138', comment: 'Online Digitalisation' },
];

export const EDUCATION_DISPLAY_PROPERTIES = [
  { property: 'P160', comment: 'educating institutions' },
  { property: 'P304', comment: 'subjects studied at university' },
  { property: 'P170', comment: 'academic degree' },
  { property: 'P161', comment: 'teachers' }
];

export const EVENT_DISPLAY_PROPERTIES = [
  { property: 'P47', comment: 'localisation' },
  { property: 'P106', comment: 'date' },
  { property: 'P66', comment: 'institution signing responsible' },
  { property: 'P133', comment: 'participants' }
];

export const ORG_DISPLAY_PROPERTIES = [
  { property: 'P8', comment: 'part of' },
  { property: 'P83', comment: 'place' },
  // { property: 'P208', comment: 'address' }, // commenté dans le service
  { property: 'P49', comment: 'begin date' },
  { property: 'P6', comment: 'continuation of' },
  { property: 'P50', comment: 'end date' },
  { property: 'P7', comment: 'continued by' },
  { property: 'P449', comment: 'partner organizations' },
  { property: 'P428', comment: 'next higher hierarchy level' },
  { property: 'P14', comment: 'in leading positions' },
  { property: 'P465', comment: 'capital' },
  { property: 'P297', comment: 'territorial affiliation' },
  { property: 'P9', comment: 'includes' },
  { property: 'P268', comment: 'founded by' },
  { property: 'P327', comment: 'documented list of members' },
  { property: 'P137', comment: 'history' },
  { property: 'P34', comment: 'name history' },
  { property: 'P521', comment: 'system adhered to' },
  // { property: 'P320', comment: 'FactGrid list of members' }, // commenté dans le service
  { property: 'P338', comment: 'founding members' },
  { property: 'P342', comment: 'worshipful master (masonic lodge)' },
  { property: 'P319', comment: 'organisational roof' },
  { property: 'P267', comment: 'organisational context' },
  { property: 'P430', comment: 'grand lodge (masonic lodge)' },
  { property: 'P422', comment: 'subclass' }
];

export const PERSON_DISPLAY_PROPERTIES = [
  { property: 'P154', comment: 'sex' },
  { property: 'P247', comment: 'name' },
  { property: "Q266694", comment: 'birth name' },
  { property: "Q468366", comment: 'married name' },
  { property: 'P248', comment: 'forenames' },
  { property: 'P140', comment: 'Illuminati code name' },
  { property: 'P139', comment: 'Illuminati code name of' },
  { property: 'P363', comment: 'Strict Observance code name' },
  { property: 'P148', comment: 'Strict Observance order name of' },
  { property: 'P530', comment: 'Name with the Asiatic Brethren' },
  { property: 'P354', comment: 'Rosicrucian code name' },
  { property: 'P77', comment: 'birthday' },
  { property: 'P37', comment: 'date of baptism' },
  { property: 'P82', comment: 'birthplace' },
  { property: 'P290', comment: 'life span (at least) from' },
  { property: 'P186', comment: 'medical conditions' },
  { property: 'P580', comment: 'escape/emigration to' },
  { property: 'P38', comment: 'deathday' },
  { property: 'P168', comment: 'deathplace' },
  { property: 'P162', comment: 'cause of death' },
  { property: 'P40', comment: 'burialdate' },
  { property: 'P79', comment: 'grave' },
  { property: 'P141', comment: 'father' },
  { property: 'P142', comment: 'mother' },
  { property: 'P203', comment: 'siblings' },
  { property: 'P84', comment: 'marriage' },
  { property: 'P200', comment: 'number of children' },
  { property: 'P150', comment: 'children' },
  { property: 'P150', comment: 'brother or sister-in-law' },
  { property: 'Q400624', comment: 'children' },
  { property: 'P172', comment: 'religion' },
  { property: 'P83', comment: 'place (residence)' },
  { property: 'P296', comment: 'sejour' },
  { property: 'P208', comment: 'address' },
  { property: 'P1267', comment: 'signature' },
];

export const EXTERNAL_LINKS_DISPLAY_PROPERTIES = [
  // Cette liste est très longue et dynamique dans le service, mais voici les plus explicites :
  { property: 'P146', comment: 'Online information' },
  { property: 'P378', comment: 'id Viaf' },
  { property: 'P76', comment: 'id GND' },
  { property: 'P500', comment: 'id Data BnF' },
  { property: 'P346', comment: 'id PPN' },
  { property: 'P367', comment: 'BnF ID' },
  { property: 'P366', comment: 'IRef ID' },
  { property: 'P418', comment: 'id Geonames' },
  { property: 'P368', comment: 'id VD16' },
  { property: 'P369', comment: 'id VD17' },
  { property: 'P370', comment: 'id VD18' },
  { property: 'P424', comment: 'id Harmonia Universalis' },
  { property: 'P533', comment: 'id Amburger' },
  { property: 'P374', comment: 'id Geni.com' },
  { property: 'P414', comment: 'INSEE municipality code' },
  // ... ajoutez d'autres propriétés selon vos besoins
];

export const SOCIABILITY_DISPLAY_PROPERTIES = [
  { property: 'P91', comment: 'member of' },
  { property: 'P454', comment: 'proposed to become a member of' },
  { property: 'P192', comment: 'friendship' },
  { property: 'P703', comment: 'personal connections' },
  { property: 'P447', comment: 'masonic degree' },
  { property: 'P497', comment: 'interested in' },
  { property: 'P167', comment: 'contributor to' },
  { property: 'P278', comment: 'subscriptions signed' }
];

export const HEADER_DISPLAY_PROPERTIES = [
  { property: 'P2', comment: 'instance of' },
  { property: 'P3', comment: 'subclass of' },
  { property: 'P8', comment: 'part of' },
  { property: 'P97', comment: 'field of research' },
  { property: 'P131', comment: 'research projects that contributed to this data set' }
];

export const SOURCES_DISPLAY_PROPERTIES = [
  { property: 'P12', comment: 'literature' },
  { property: 'P51', comment: 'primary source' },
  { property: 'P143', comment: 'mentioned in' },
  { property: 'P185', comment: 'archives at' },
  { property: 'P146', comment: 'on line information' }
];


