export interface SNPImage {
  id: string;
  title: string;
  branch: 'Main' | 'First L238' | 'Norwegian' | 'Swedish / Scandinavian' | 'British / Norwegian-British' | 'Continental';
  date: string;
  path: string;
  version: string;
  keySNPs: string[];
  keyAncestors: { name: string; date?: string; place?: string; country?: string }[];
  countries: string[];
  description: string;
  notes?: string;
}

export const BRANCH_INFO = {
  'Main': {
    title: 'Main SNP Tree',
    description: 'The master lineage of the R1b-L238 haplogroup, tracing the earliest branching events from around 2593 BCE. It illustrates the primary splits into the First L238 Branch, the Continental-British Branch, and early Scandinavian lineages, with ancient DNA (aDNA) references such as Etruscan remains from Italy (380-240 BCE).',
    color: 'border-amber-500/30 text-amber-700 bg-amber-50/50'
  },
  'First L238': {
    title: 'First L238 Branch',
    description: 'An early-diverging branch characterized by a deep chronological history, starting from 2050 BCE (FTB73368) and 1250 BCE. It features lines that settled in France (Avernes, Seraincourt), Canada (Quebec), Poland (Lezajsk, Sabnie), Mexico (Mier), and Texas, USA, showcasing a truly global migration pattern.',
    color: 'border-blue-500/30 text-blue-700 bg-blue-50/50'
  },
  'Norwegian': {
    title: 'Norwegian Branch',
    description: 'Focuses on lineages that remained in or migrated back to Norway, including branches connected to historical locations like Rogaland, Agder, Telemark, Hordaland, and Sogn og Fjordane. This branch shows high genetic density in coastal Norway, tracing lineages from 100 AD to modern times.',
    color: 'border-emerald-500/30 text-emerald-700 bg-emerald-50/50'
  },
  'Swedish / Scandinavian': {
    title: 'Swedish & Scandinavian Branch',
    description: 'A massive cluster of Scandinavian lineages spanning Sweden, Norway, and Finland. Includes major subclades like BY4675 (dating to 500 CE) and Y11662/BY4659 (dating to 450 CE). This branch showcases early medieval Scandinavian expansion, including interesting sub-branches like the "Third Scandinavian Branch" (FTD61300) with links to Scotland and Ireland.',
    color: 'border-indigo-500/30 text-indigo-700 bg-indigo-50/50'
  },
  'British / Norwegian-British': {
    title: 'British & Norwegian-British Branch',
    description: 'Tracks the genetic connections between Scandinavia and the British Isles, highlighting the historical impact of the Viking Age, Danelaw, and the Norman Conquest. Features early lineages in Lincolnshire, England, and major American colonial immigrant lines like the Mincey/Minchew family.',
    color: 'border-rose-500/30 text-rose-700 bg-rose-50/50'
  },
  'Continental': {
    title: 'Continental Branch',
    description: 'Represents the Continental European lineages of R1b-L238, focusing on the CTS11638 branch (2106 BCE) and its descendants in Central and Southern Europe, including the Czech Republic, Ukraine, and Liguria, Italy (Bianchi line).',
    color: 'border-teal-500/30 text-teal-700 bg-teal-50/50'
  }
};

export const SNP_IMAGES: SNPImage[] = [
  {
    id: 'main-tree-2025',
    title: 'R1b-L238 Main SNP Tree',
    branch: 'Main',
    date: 'July 24, 2025',
    version: 'July 24th, 2025',
    path: '/manus-storage/520942521_10163458493198910_1285320563360036707_n_bbfeceb2.jpg',
    keySNPs: ['L238', 'Z2247', 'Z2248', 'CTS11638', 'Y11663', 'Y10824', 'BY781'],
    keyAncestors: [
      { name: 'Etruscan Ancient DNA (2 x aDNA)', date: '380-240 BCE', place: 'Italy', country: 'Italy' },
      { name: 'Bianchi', place: 'La Spezia Region, Liguria', country: 'Italy' },
      { name: 'Silny', place: 'Czech Republic', country: 'Czech Republic' },
      { name: 'Mikola Poltavtsev', country: 'Ukraine' }
    ],
    countries: ['Italy', 'Czech Republic', 'Ukraine', 'Denmark', 'Sweden', 'UK'],
    description: 'The definitive root tree for R1b-L238. It details the deep Bronze Age origins starting around 2593 BCE. Crucially, it notes ancient DNA matches (aDNA) from Etruscan tombs in Italy (380-240 BCE), proving early L238 presence in Southern Europe before branching north into Scandinavia and the British Isles.',
    notes: 'Features the "Horner-Hornor Branch", "Early Continental-British Branch", and "Early British-Continental Branch".'
  },
  {
    id: 'first-l238-jan-2026',
    title: 'First L238 Branch (Latest)',
    branch: 'First L238',
    date: 'January 29, 2026',
    version: 'January 29th, 2026',
    path: '/manus-storage/623366781_10164293384688910_4655881263349947646_n_e357b69c.jpg',
    keySNPs: ['L238', 'FT393255', 'FTB73368', 'FTC14998', 'FTC14754', 'Y92763', 'FTB775', 'FTB1210', 'BY178002', 'FTB73316'],
    keyAncestors: [
      { name: 'Francois Sirois dit Duplessis', date: 'b. 1673', place: 'Seraincourt, France / d. 1737 Quebec', country: 'France' },
      { name: 'Jehan Siroye', date: 'b. ca. 1520', place: 'Avernes', country: 'France' },
      { name: 'W. Jakobek', date: 'b. 1853', place: 'Lezajsk', country: 'Poland' },
      { name: 'Ludwik Winlarski', date: 'b. 1845', place: 'Sabnie', country: 'Poland' },
      { name: 'Jose Antonio Garcia', date: 'b. 1738', place: 'Mier, Tamaulipas', country: 'Mexico' },
      { name: 'Thomas Tozier', date: 'b. 1570', place: 'England', country: 'UK' },
      { name: 'James Dryver', date: 'd. 1568', place: 'England', country: 'UK' }
    ],
    countries: ['France', 'Canada', 'Poland', 'Mexico', 'USA', 'UK', 'Germany'],
    description: 'The most updated chart of the "First L238 Branch", incorporating new test kits and revised mutation distances. It traces the French-Canadian Sirois line back to Jehan Siroye (b. 1520 in Avernes, France), and outlines a distinct Iberian Peninsular migration route leading to Mexico (Jose Antonio Garcia, b. 1738) and Texas.',
    notes: 'Highlights "NEW!" Lancaster and George Lancaster Y-DNA37 matches.'
  },
  {
    id: 'first-l238-nov-2025',
    title: 'First L238 Branch (Mid-2025)',
    branch: 'First L238',
    date: 'November 22, 2025',
    version: 'November 22nd, 2025',
    path: '/manus-storage/587184013_10164003524413910_4493989375737430351_n_9cb2940b.jpg',
    keySNPs: ['L238', 'FT393255', 'FTB73368', 'Y92763', 'FTB775', 'BY178002'],
    keyAncestors: [
      { name: 'Francois Sirois dit Duplessis', date: 'b. 1673', place: 'Seraincourt, France', country: 'France' },
      { name: 'Jehan Siroye', date: 'b. ca. 1520', place: 'Avernes, France', country: 'France' },
      { name: 'W. Jakobek', date: 'b. 1853', place: 'Lezajsk', country: 'Poland' }
    ],
    countries: ['France', 'Canada', 'Poland', 'Mexico', 'USA', 'UK'],
    description: 'An intermediate version of the First L238 Branch. It highlights "BigY700 in process" for the Lancaster (England) and Belanger (Quebec) lines, suggesting potential Norman connections ("Originally Normans?").',
    notes: 'Useful for tracking the research progression of the Lancaster/Belanger kits.'
  },
  {
    id: 'first-l238-oct-2025',
    title: 'First L238 Branch (Early)',
    branch: 'First L238',
    date: 'October 26, 2025',
    version: 'October 26th, 2025',
    path: '/manus-storage/571239136_10163895008223910_5419839114844369462_n_e3943411.jpg',
    keySNPs: ['L238', 'FT393255', 'FTB73368', 'FTC14998', 'Y92763'],
    keyAncestors: [
      { name: 'Kevin Jordan (NEW!)', country: 'USA' },
      { name: 'Thomas Berkett', date: 'b. 1670', place: 'England', country: 'UK' },
      { name: 'Joseph W. Burkett', date: 'b. 1813', country: 'USA' }
    ],
    countries: ['France', 'Canada', 'Poland', 'Mexico', 'USA', 'UK'],
    description: 'The earliest cataloged version of the First L238 Branch in this collection. It features the "NEW!" placement of Kevin Jordan under the FTC14754 node alongside Aaron Burgett, confirming a shared English ancestor in the 17th century.',
    notes: 'Includes an informative introductory note regarding SNP trees being based on FTDNA Haplotrees.'
  },
  {
    id: 'norwegian-branch-may-2026',
    title: 'Norwegian Branch: FT49026 Connected Lines B',
    branch: 'Norwegian',
    date: 'May 4, 2026',
    version: 'May 4th, 2026',
    path: '/manus-storage/689238415_10164728334963910_2086392030804773885_n_09bbccd6.jpg',
    keySNPs: ['FT49026', 'FT65632', 'Y22494', 'BY4661', 'BY31792', 'Y130865', 'BY177977', 'A6291', 'A6292', 'BY4660', 'Y10827'],
    keyAncestors: [
      { name: 'Aasmund S. H. Flakk', date: 'b. 1670', country: 'Norway' },
      { name: 'Kaasen', date: 'b. 1685', place: 'Skafså, Telemark', country: 'Norway' },
      { name: 'Notto S. Hornnes', date: 'd. 1637', place: 'Hornnes, Aust-Agder', country: 'Norway' },
      { name: 'P. Jåtun', date: 'b. 1580', place: 'Hetland, Rogaland', country: 'Norway' },
      { name: 'På Heinoen', date: 'b. 1680', place: 'Tärendö, Norrbotten', country: 'Sweden' },
      { name: 'Matts Bro', date: 'b. 1704', place: 'Malax', country: 'Finland' },
      { name: 'Matz Eriksson Stormas', date: 'b. 1665', place: 'Malax', country: 'Finland' },
      { name: 'Johannes Thomae Bernerus', date: 'b. 1627', place: 'Räisälä', country: 'Finland' },
      { name: 'Evert Lyömiö', date: 'b. 1877', place: 'Mäntyharju', country: 'Finland' }
    ],
    countries: ['Norway', 'Sweden', 'Finland', 'USA', 'Australia'],
    description: 'An incredibly detailed map of the Norwegian-origin lines under FT49026 that migrated into Finland and Northern Sweden. It showcases the "Finland" cluster under BY4661 (dating to 1400 CE) and details the Berner/Saloheimo lineages in Räisälä, Finland, along with the "NEW!" Lyömiö line.',
    notes: 'Highlights the timeline milestones: 100 AD (Y10827), 310 AD (A6292), 800 AD (Y22494), 1400 CE (BY4661), 1650 CE (BY31792), and 1808 CE (Y130865).'
  },
  {
    id: 'norwegian-branch-by193914',
    title: 'Norwegian Branch: BY193914 Sub-Branch',
    branch: 'Norwegian',
    date: 'March 26, 2023',
    version: 'March 26th, 2023',
    path: '/manus-storage/557635641_10226592231305635_6633501597100033191_n_ff45a470.jpg',
    keySNPs: ['BY193914', 'BY91294', 'Y88014', 'FT415988', 'A6292', 'A6291', 'BY4660', 'Y10827'],
    keyAncestors: [
      { name: 'Braathen', date: 'b. 1892', place: 'Ramnes, Vestfold', country: 'Norway' },
      { name: 'E. Hegna', date: 'b. 1920', place: 'Notodden, Telemark', country: 'Norway' },
      { name: 'Gunnar T. Vangestad', date: '1604-1674', place: 'Flesberg, Buskerud', country: 'Norway' },
      { name: 'P. Korpberget', date: 'ca. 1773-1851', place: 'N-Fron, Oppland', country: 'Norway' },
      { name: 'George Tolson', date: 'b. 1560', place: 'England', country: 'UK' },
      { name: 'Peder Jensen Bjerg', date: 'ca. 1590', place: 'Erritsö', country: 'Denmark' }
    ],
    countries: ['Norway', 'Denmark', 'UK', 'USA'],
    description: 'This tree covers the BY193914 branch (dating to 632 AD) and its sub-branches, notably the Y88014 branch (987 AD). It maps lineages originating in the historic counties of Vestfold, Telemark, Buskerud, and Oppland in Norway, alongside a branch leading to Denmark and England.',
    notes: 'Marks the "NEW RESULT!" for Clarence A. Johnson (b. 1906, USA).'
  },
  {
    id: 'norwegian-branch-by90747',
    title: 'Norwegian Branch: BY90747 Connected Lines',
    branch: 'Norwegian',
    date: 'May 18, 2025',
    version: 'May 18th, 2025',
    path: '/manus-storage/499110615_10163072783943910_2497659881542502354_n_49dade73.jpg',
    keySNPs: ['BY90747', 'BY78471', 'A6292', 'A6291', 'BY4660', 'Y10827'],
    keyAncestors: [
      { name: 'Gulbrand P. Gylterud', date: 'b. ca. 1675', place: 'Gylterud Vinger, Hedmark', country: 'Norway' },
      { name: 'Aaron Nikander', date: 'b. 1847', place: 'Loppi', country: 'Finland' },
      { name: 'Nils O. Gram', date: 'b. 1640', place: 'Grambo Trysil, Hedmark', country: 'Norway' },
      { name: 'Olov Tranberg', date: 'b. 1817', country: 'Norway' },
      { name: 'Kjell Rongard', date: 'b. 1827', country: 'Norway' }
    ],
    countries: ['Norway', 'Finland', 'USA'],
    description: 'Focuses on the BY90747 branch, highlighting lineages from Hedmark, Norway (Vinger and Trysil) that split in the early medieval period. It also features a migration to Loppi, Finland (the Nikander family).',
    notes: 'Highlights a mean value for FTDNA\'s timing around 700 AD for the BY90747 split.'
  },
  {
    id: 'scandinavian-by4675-sep-2025',
    title: 'Scandinavian Branch: BY4675 (Latest)',
    branch: 'Swedish / Scandinavian',
    date: 'September 19, 2025',
    version: 'September 19th, 2025',
    path: '/manus-storage/554902982_10163741196743910_8257578527475903969_n_2fff5ccc.jpg',
    keySNPs: ['BY4675', 'Y101604', 'Y81319', 'Y100259', 'Y132108', 'FGC86663', 'BY155681', 'BY154716', 'FT177260', 'FT173914', 'FT237258', 'FT28652', 'Y10827'],
    keyAncestors: [
      { name: 'N. Nilsson', date: 'b. c. 1730', place: 'Finnerödja, Västra Götaland', country: 'Sweden' },
      { name: 'Pehr W Almlöv', date: 'b. ca. 1835', place: 'Norrköping', country: 'Sweden' },
      { name: 'Nils Persson', date: '1743-1810', place: 'Sweden', country: 'Sweden' },
      { name: 'W. Tindlund', date: 'b. 1702', place: 'Tune, Østfold', country: 'Norway' },
      { name: 'O. Persson', date: 'b. 1730', place: 'Tegneby, Bohuslän', country: 'Sweden' },
      { name: 'Olof Johansson', date: 'b. 1911', place: 'Bodum', country: 'Sweden' },
      { name: 'Erik Ersson', date: 'b. 1788', country: 'Sweden' },
      { name: 'M. Olsson', date: 'b. 1535', place: 'Botne, Vestfold', country: 'Norway' },
      { name: 'Olle Diedricksson aka Derickson', date: '1639-1695', place: 'Sweden / New Sweden Colony', country: 'Sweden' },
      { name: 'John Derrickson', date: 'b. 1788', place: 'Gloucester County, NJ', country: 'USA' }
    ],
    countries: ['Sweden', 'Norway', 'Finland', 'USA'],
    description: 'The comprehensive chart of the major Scandinavian subclade BY4675 (500 CE). This tree is particularly famous for tracing the "Derickson" family back to Olle Diedricksson (1639-1695), a Swedish settler in the historic "New Sweden Colony" in Delaware/New Jersey, USA.',
    notes: 'Highlights "NEW!" Anders Erik Fallgren line and "19th Century entry to Finland" (Hannu Vainikainen line).'
  },
  {
    id: 'scandinavian-by4675-jun-2025',
    title: 'Scandinavian Branch: BY4675 (Early)',
    branch: 'Swedish / Scandinavian',
    date: 'June 21, 2025',
    version: 'June 21st, 2025',
    path: '/manus-storage/510909388_10163217185083910_1731698812357781638_n_2fff5ccc.jpg',
    keySNPs: ['BY4675', 'Y101604', 'Y81319', 'Y100259', 'Y132108', 'BY155681', 'FT177260', 'FT173914'],
    keyAncestors: [
      { name: 'Olle Diedricksson aka Derickson', date: '1639-1695', place: 'Sweden / New Sweden Colony', country: 'Sweden' },
      { name: 'John Derrickson', date: 'b. 1788', place: 'Gloucester County, NJ', country: 'USA' },
      { name: 'John Penrose Derickson', date: 'b. 1823', place: 'Delaware', country: 'USA' }
    ],
    countries: ['Sweden', 'Norway', 'Finland', 'USA'],
    description: 'An earlier, less-populated version of the BY4675 branch from June 2025. It serves as an excellent comparison point showing how genetic genealogy researchers added several new lines (like the Fallgren and Vainikainen lines) over the subsequent three months.',
    notes: 'Focuses heavily on the New Sweden Colony "Derickson" cluster.'
  },
  {
    id: 'scandinavian-a8150',
    title: 'Scandinavian Branch: A8150 - Y17456',
    branch: 'Swedish / Scandinavian',
    date: 'September 18, 2025',
    version: 'September 18th, 2025',
    path: '/manus-storage/550215928_10163708682058910_768037061121611482_n_2125d7ba.jpg',
    keySNPs: ['A8150', 'Y17456', 'Y17457', 'BY3451', 'Y47252', 'BY148963', 'Y52060', 'FTB48720', 'BY41532', 'FT124475', 'FTD58602', 'BY127095', 'BY96530', 'BY4659', 'Y11662', 'FT28652'],
    keyAncestors: [
      { name: 'Andersson Hansson', date: 'b. 1596', place: 'Skallsjö, Älvsborg', country: 'Sweden' },
      { name: 'Ronald Nelson', place: 'Washington', country: 'USA' },
      { name: 'Hans Jensen', date: 'b. ca. 1621', place: 'Melose', country: 'Denmark' },
      { name: 'Ivar Mikkelson Sperre', date: 'b. 1745', country: 'Norway' },
      { name: 'Räihä Toiwakainen', date: 'b. 1723', place: 'Ii', country: 'Finland' },
      { name: 'Lars Andersson', date: '1777-1857', country: 'Sweden' },
      { name: 'Pehr Nilsson', date: '1722-1783', place: 'Eda, Värmland', country: 'Sweden' },
      { name: 'Viljo Helin', date: '1900-1949', country: 'Finland' },
      { name: 'J. Vetlejord', date: 'b. 1636', place: 'Vaksdal, Hordaland', country: 'Norway' },
      { name: 'Pierre Lemoyne', date: 'b. 1593', place: 'Normandy', country: 'France' },
      { name: 'Torgersen', date: 'b. ca. 1663', place: 'Sem, Vestfold', country: 'Norway' },
      { name: 'Ole Jensen', date: 'b. ca. 1685', country: 'Denmark' }
    ],
    countries: ['Sweden', 'Denmark', 'Norway', 'Finland', 'France', 'Canada', 'USA'],
    description: 'A major Scandinavian branch diverging around 498 CE (A8150). It includes the "Anderson Branch" and outlines an extraordinary connection to Normandy, France (Pierre Lemoyne, b. 1593 in Normandy), labeled "Normans in Normandy", suggesting Viking settlers who integrated into French society.',
    notes: 'Highlights "NEW TEST!" for Kim Hovgaard Andreassen. Notes the timeline milestones of 250 CE (BY3451), 699 CE, 750 CE, and 900 CE (BY96530).'
  },
  {
    id: 'scandinavian-ftd61300',
    title: 'Third Scandinavian Branch: FTD61300',
    branch: 'Swedish / Scandinavian',
    date: 'June 21, 2025',
    version: 'June 21st, 2025',
    path: '/manus-storage/509424202_10163217172678910_5395324834131951922_n_ac169513.jpg',
    keySNPs: ['FTD61300', 'FTD32648', 'FTG34906', 'FTD47594', 'FTG10290', 'BY4675', 'BY4676', 'FT90422', 'BY4677', 'BY4678', 'FT28652', 'Y10827'],
    keyAncestors: [
      { name: 'John Young', date: 'b. 1715', place: 'Dundee Area', country: 'Scotland' },
      { name: 'William Irvine', date: 'b. 1731', place: 'Shetland', country: 'Scotland' },
      { name: 'Alexander Young', date: 'b. 1799', place: 'Dundee Area', country: 'Scotland' },
      { name: 'John Irvine', date: 'b. 1809', place: 'Shetland', country: 'Scotland' },
      { name: 'Redman Garph O\'Byrne', place: 'Co. Wicklow', country: 'Ireland' }
    ],
    countries: ['Scotland', 'Ireland', 'Australia', 'Sweden'],
    description: 'Diverging from the BY4675 node around 550 CE, this branch represents a significant migration of Scandinavian L238 lines into Scotland (Dundee, Shetland) and Ireland (Wicklow), likely via Viking age expansion. It features the Young and Irvine families.',
    notes: 'Highlights "NEW!" Laurie A. Irvine and Thomas Irvine kits from Australia.'
  },
  {
    id: 'scandinavian-by137601',
    title: 'Third Scandinavian Branch: BY137601',
    branch: 'Swedish / Scandinavian',
    date: 'August 8, 2025',
    version: 'August 8th, 2025',
    path: '/manus-storage/528903753_10163528602163910_8023399010909709159_n_e25b098f.jpg',
    keySNPs: ['BY137601', 'BY112354', 'BY4675', 'BY4676', 'FT90422', 'BY4677', 'BY4678', 'FT28652', 'Y10827'],
    keyAncestors: [
      { name: 'Pleasant V. Rhea', date: 'b. 1821', country: 'USA' },
      { name: 'Wilson Ray', date: 'b. 1828', place: 'Tennessee', country: 'USA' },
      { name: 'John Keeling Braniff', date: 'b. 1855', place: 'Graves, Kentucky', country: 'USA' },
      { name: 'George W. Ray', date: 'b. 1824', place: 'Tennessee', country: 'USA' },
      { name: 'John McRee', date: '1788-1854', place: 'South Carolina / Mississippi', country: 'USA' }
    ],
    countries: ['USA', 'Sweden'],
    description: 'Another branch under BY4675 (500 CE) that traces families who immigrated to the American South (Tennessee, Kentucky, South Carolina, Mississippi). It features a prominent note about John McRee, who moved from South Carolina to Mississippi and had at least eight children.',
    notes: 'Highlights the "NEW" placement of John McRee.'
  },
  {
    id: 'swedish-by4659-aug-2025',
    title: 'Swedish Branch: Y11662 - BY4659 (Latest)',
    branch: 'Swedish / Scandinavian',
    date: 'August 9, 2025',
    version: 'August 9th, 2025',
    path: '/manus-storage/531618313_10163539861573910_624892876430709923_n_ce2c0a37.jpg',
    keySNPs: ['Y11662', 'BY4659', 'BY3451', 'BY4656', 'FT121892', 'FT121278', 'BY65599', 'FT134471', 'Y49713', 'Y46114', 'BY3516', 'FT126250', 'BY112843'],
    keyAncestors: [
      { name: 'Robert Asher B.', date: 'b. 1810', place: 'Virginia', country: 'USA' },
      { name: 'John Asher', date: 'b. ca. 1715', place: 'Virginia', country: 'USA' },
      { name: 'Ambrose Asher', date: 'b. ca. 1857', place: 'Illinois', country: 'USA' },
      { name: 'William Ashe', date: 'b. 1817', place: 'County Armagh', country: 'Ireland' },
      { name: 'Olof Asmundsson', date: 'b. 1560', place: 'Rörvall, Brastad, Västra Götaland', country: 'Sweden' },
      { name: 'Philip Scarffe', date: '1728-1805', place: 'Isle of Man', country: 'Isle of Man' },
      { name: 'Anders Andersson', date: 'b. 1833', country: 'Sweden' },
      { name: 'Källqvist Jonsson', date: 'b. 1783', place: 'Fredsberg, Skaraborg', country: 'Sweden' },
      { name: 'A. Tronstrøm', date: 'b. 1798', place: 'Trøgstad, Østfold', country: 'Norway' },
      { name: 'H. Muller', date: 'b. 1838', place: 'Brandenburg', country: 'Germany' },
      { name: 'Andersson Andersson', date: 'b. 1793', place: 'Dagsås, Halland', country: 'Sweden' },
      { name: 'Francis McFall', date: '1710-1759', country: 'Ireland' },
      { name: 'J. Pettersen', date: 'b. ca. 1614', country: 'Denmark' },
      { name: 'Arne S. Eriksson', date: 'b. 1912', country: 'Sweden' }
    ],
    countries: ['Sweden', 'Norway', 'Denmark', 'Germany', 'Ireland', 'Isle of Man', 'USA', 'Iceland'],
    description: 'A detailed chart of the Swedish Branch Y11662 / BY4659 (450 CE). It showcases a highly diverse geographical spread, linking Västra Götaland and Halland in Sweden with lines in Norway, Denmark, Germany (Brandenburg), Ireland (Armagh), the Isle of Man (Scarffe family), and Iceland (TGS-A1).',
    notes: 'Features "NEW RESULT!" for Francis McFall (1710-1759, Ireland). Mentions BY3516 tested positive by M. Strøm.'
  },
  {
    id: 'swedish-by4659-jun-2025',
    title: 'Swedish Branch: Y11662 - BY4659 (Mid-2025)',
    branch: 'Swedish / Scandinavian',
    date: 'June 4, 2025',
    version: 'June 4th, 2025',
    path: '/manus-storage/518017927_10163318231308910_593574726200874402_n_409c59da.jpg',
    keySNPs: ['Y11662', 'BY4659', 'BY3451', 'BY4656', 'FT121892', 'FT121278', 'BY65599', 'FT134471', 'Y46114', 'BY3516'],
    keyAncestors: [
      { name: 'Randall Asher', country: 'USA' },
      { name: 'Terry Wayne Asher', country: 'USA' },
      { name: 'Jeffrey Asher', country: 'USA' },
      { name: 'Craig McCullough', country: 'USA' },
      { name: 'Lyle Maxdale Asher', country: 'USA' },
      { name: 'Titerud', date: 'b. 1778', place: 'Aurskog, Akershus', country: 'Norway' }
    ],
    countries: ['Sweden', 'Norway', 'Denmark', 'Germany', 'Ireland', 'Isle of Man', 'USA', 'Iceland'],
    description: 'An earlier version of the BY4659 branch from June 2025. It notes an ancient DNA reference (aDNA, TGS-A1) from Tunga, North Iceland, dated to 943-1024 AD, which is "Surely Y10827, likely BY4659+", linking Viking Age Iceland directly to this Swedish branch.',
    notes: 'Highlights the Titerud (b. 1778, Norway) line.'
  },
  {
    id: 'swedish-by4659-ft126250',
    title: 'Swedish Branch: Y11662 - FT126250 Sub-Branch',
    branch: 'Swedish / Scandinavian',
    date: 'July 7, 2025',
    version: 'July 7th, 2025',
    path: '/manus-storage/517034802_10163318221513910_7556847332115796686_n_2bd7582b.jpg',
    keySNPs: ['FT126250', 'BY112843', 'FTC30310', 'BY38880', 'Y11662', 'BY4659', 'BY3451', 'BY4656'],
    keyAncestors: [
      { name: 'Reidar Larsen', country: 'Norway' },
      { name: 'Arve Ytre-Eide', country: 'Norway' },
      { name: 'C. Pedersen', date: 'b. 1667', country: 'Norway' },
      { name: 'Anders T. Ytre-Eide', date: 'b. ca. 1495', place: 'Stryn, Sogn og Fjordane', country: 'Norway' },
      { name: 'Edward Oliver Johnson', date: 'b. 1854', place: 'Dane County, WI', country: 'USA' },
      { name: 'Ole Eriksen Meersunde', date: 'b. ca. 1727', place: 'Stryn', country: 'Norway' },
      { name: 'Simonsen', date: 'b. ca. 1700', country: 'Denmark' },
      { name: 'A. Knott', date: 'b. 1770', place: 'Brevik', country: 'Sweden' },
      { name: 'Esbjörnsson', date: 'b. 1719', place: 'Varnhem', country: 'Sweden' }
    ],
    countries: ['Norway', 'Denmark', 'Sweden', 'USA'],
    description: 'A deep dive into the FT126250 sub-branch (750 CE). This branch represents a highly specific West-Norwegian cluster, tracing multiple families back to Stryn, Sogn og Fjordane, Norway, including the Ytre-Eide and Meersunde families, alongside a parallel Swedish line in Varnhem.',
    notes: 'Highlights David Alexander Johnson, Stian Sunde, Jeffrey Jacobsen, and Kjell Trygg.'
  },
  {
    id: 'norwegian-british-by4663',
    title: 'Norwegian-British Branch: BY4663 Part II',
    branch: 'British / Norwegian-British',
    date: 'January 23, 2026',
    version: 'January 23rd, 2026',
    path: '/manus-storage/618799546_10164266956103910_831706363502609193_n_664f89ad.jpg',
    keySNPs: ['BY4663', 'BY3452', 'BY4664', 'BY4665', 'BY4666', 'BY18415', 'BY18416', 'BY618418', 'Y68225', 'FT101758', 'BY130708', 'BY112520'],
    keyAncestors: [
      { name: 'John Bill', date: 'b. 1702', place: 'England', country: 'UK' },
      { name: 'Parker', date: 'b. 1598', place: 'England', country: 'UK' },
      { name: 'Abraham Mincey', date: 'b. 1737', place: 'North Carolina', country: 'USA' },
      { name: 'Shadrick Mincey', date: 'b. 1813', country: 'USA' },
      { name: 'Aaron Mincey', date: 'b. 1803', country: 'USA' },
      { name: 'Abraham Minchew', date: 'b. 1773', country: 'USA' },
      { name: 'de Minshall', date: 'b. 1561', place: 'England', country: 'UK' }
    ],
    countries: ['UK', 'USA', 'Norway'],
    description: 'This tree covers the "Norwegian-British Branch" under BY4663, specifically focusing on the English and American colonial lines. It traces the massive Mincey/Minchew immigrant family in North Carolina and Georgia back to English roots, alongside the de Minshall (b. 1561) and Parker (b. 1598) lines.',
    notes: 'Features "NEW!" Kevin Mercer (Thomas J Mercer 1855-1917, Georgia).'
  },
  {
    id: 'british-branch-big-cluster',
    title: 'British Branch: "Big Cluster" & Mincey Lines',
    branch: 'British / Norwegian-British',
    date: 'September 2, 2024',
    version: 'September 2nd, 2024',
    path: '/manus-storage/468934751_10162521574903910_5797997094363870121_n_181ce250.jpg',
    keySNPs: ['BY4663', 'BY3452', 'BY4664', 'BY4665', 'BY4666', 'Y133875', 'BY18415', 'BY18416', 'BY18418', 'BY130708', 'BY112520', 'Y51567', 'BY38750', 'BY38747'],
    keyAncestors: [
      { name: 'Thomas Summers', date: 'b. ca. 1735', place: 'Virginia', country: 'USA' },
      { name: 'John Summers', date: 'b. c. 1738', place: 'North Carolina', country: 'USA' },
      { name: 'A. Knudsen Mjelde', date: 'b. 1859', place: 'Haus, Hordaland', country: 'Norway' },
      { name: 'A. Otterstad', date: 'b. 1602', place: 'Modalen', country: 'Norway' },
      { name: 'John Fletcher', date: 'b. 1857', place: 'England', country: 'UK' },
      { name: 'George Floyd', date: 'b. 1779', place: 'South Carolina', country: 'USA' },
      { name: 'J. Wright', date: 'b. 1750', place: 'Virginia', country: 'USA' }
    ],
    countries: ['Norway', 'UK', 'USA'],
    description: 'A beautiful overview of the "Big Cluster" showing how the Norwegian West Coast lines (Hordaland, Modalen) split from lines that settled in Lincolnshire, England, likely during the Viking Age / Danelaw era. It traces the English lines as they immigrated to the American colonies (Summers, Fletcher, Floyd, Wright, Mincey).',
    notes: 'Highlights the split at BY4663 (266 AD) and BY4664 (514 AD, "Lincolnshire in Danelaw?").'
  },
  {
    id: 'continental-cts11638',
    title: 'Continental Branch: CTS11638',
    branch: 'Continental',
    date: 'July 26, 2025',
    version: 'July 26th, 2025',
    path: '/manus-storage/539530344_10163610305983910_1573887374271831182_n_3835e4a3.jpg',
    keySNPs: ['CTS11638', 'Y187259', 'FTA48422', 'Z2248', 'Z2247', 'Z2245', 'Z2251', 'Z2250', 'Z2249', 'Z2246', 'Z2244', 'A5618', 'L238'],
    keyAncestors: [
      { name: 'Silny', place: 'Czech Republic', country: 'Czech Republic' },
      { name: 'Stork', date: 'b. 1866', place: 'Czech Republic', country: 'Czech Republic' },
      { name: 'M. Nadpaga', date: 'b. 1924', place: 'Ukraine', country: 'Ukraine' },
      { name: 'Bianchi', place: 'La Spezia Region, Liguria', country: 'Italy' }
    ],
    countries: ['Czech Republic', 'Ukraine', 'Italy'],
    description: 'Dedicated exclusively to the Continental Branch under CTS11638 (2106 BCE). This branch is critical for understanding the pre-Scandinavian history of L238, showcasing lines that settled in Bohemia (Czech Republic), Ukraine, and Northern Italy.',
    notes: 'Notes the branching from L238 (2593 BCE) through Z2247 (2200 BCE) to CTS11638 (2106 BCE).'
  }
];

export const COUNTRIES = [
  { code: 'NO', name: 'Norway', flag: '🇳🇴', count: 9 },
  { code: 'SE', name: 'Sweden', flag: '🇸🇪', count: 7 },
  { code: 'FI', name: 'Finland', flag: '🇫🇮', count: 5 },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', count: 6 },
  { code: 'US', name: 'United States', flag: '🇺🇸', count: 8 },
  { code: 'FR', name: 'France', flag: '🇫🇷', country: 'France', count: 3 },
  { code: 'CA', name: 'Canada', flag: '🇨🇦', count: 2 },
  { code: 'PL', name: 'Poland', flag: '🇵🇱', count: 1 },
  { code: 'CZ', name: 'Czech Republic', flag: '🇨🇿', count: 2 },
  { code: 'IT', name: 'Italy', flag: '🇮🇹', count: 2 },
  { code: 'UA', name: 'Ukraine', flag: '🇺🇦', count: 1 },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽', count: 1 },
  { code: 'IS', name: 'Iceland', flag: '🇮🇸', count: 2 }
];

export const TIMELINE_EVENTS = [
  { year: '2593 BCE', title: 'The Genesis of L238', description: 'The R1b-L238 haplogroup emerges, likely in Central or Western Europe, as a subclade of R1b.' },
  { year: '2200 BCE', title: 'Z2247 Mutation', description: 'Major branching event in the Bronze Age, splitting early continental lines.' },
  { year: '2106 BCE', title: 'Continental Split (CTS11638)', description: 'Divergence of the Continental Branch, leading to lines in modern Czech Republic, Ukraine, and Italy.' },
  { year: '2050 BCE', title: 'First L238 Branching', description: 'The FTB73368 mutation establishes the First L238 Branch, which later migrates to France, Poland, and the Americas.' },
  { year: '380-240 BCE', title: 'Etruscan Presence', description: 'Ancient DNA (aDNA) from Etruscan tombs in Italy confirms L238 carriers in the pre-Roman Mediterranean.' },
  { year: '100 AD', title: 'The Y10827 Scandinavian Founder', description: 'The Y10827 mutation marks the consolidation of L238 in Scandinavia, becoming the progenitor of almost all modern Nordic branches.' },
  { year: '266 AD', title: 'BY4663 Mutation', description: 'Emergence of the Norwegian-British branch in Hordaland, Western Norway.' },
  { year: '310 AD', title: 'Norwegian Branch Consolidates', description: 'A6292 mutation consolidates the Norwegian branch, giving rise to coastal lines.' },
  { year: '450 AD', title: 'Swedish Founder BY4659', description: 'Emergence of the Swedish Branch in Västra Götaland and Halland.' },
  { year: '500 AD', title: 'BY4675 Scandinavian Split', description: 'Divergence of the massive BY4675 branch, spreading across Sweden, Norway, and Finland.' },
  { year: '514 AD', title: 'Viking Pre-Migration', description: 'BY4664 mutation splits; lines appear in Lincolnshire, England, indicating early contacts/Danelaw settlements.' },
  { year: '550 AD', title: 'Viking Incursions to British Isles', description: 'BY4675 carriers split into Scotland (Young/Irvine lines) and Ireland (O\'Byrne lines).' },
  { year: '943-1024 AD', title: 'Icelandic Settlement', description: 'Viking age burial in Tunga, North Iceland, confirms a L238 carrier (TGS-A1) living in Iceland.' },
  { year: '1400 CE', title: 'Finnish Expansion', description: 'BY4661 mutation establishes the prominent Finnish cluster in Räisälä and Malax.' },
  { year: '1639 CE', title: 'New Sweden Colony', description: 'Olle Diedricksson (Derickson) settles in Delaware/New Jersey, establishing the L238 line in America.' },
  { year: '1673 CE', title: 'French-Canadian Pioneer', description: 'Francois Sirois dit Duplessis is born in Seraincourt, France, later immigrating to Quebec, Canada.' },
  { year: '1737 CE', title: 'Colonial American Southern Migration', description: 'Abraham Mincey settles in North Carolina, starting the massive Mincey/Minchew Southern clan.' },
  { year: '2023-2026 CE', title: 'The Era of BigY700 Discovery', description: 'DNA testers and genetic genealogists map out the R1b-L238 haplogroup tree in unprecedented detail, publishing updates up to May 2026.' }
];
