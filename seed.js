// requires all the database models
const db = require ('./models');

// categories
const flower_list = [
    {
        name: 'abutilon',
        scientificName: 'abutilon',
        meaning: 'meditation',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'acacia',
        scientificName: 'acacia',
        meaning: 'secret love',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'acanthus',
        scientificName: 'Acanthus',
        meaning: 'artifice',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'agapanthus',
        scientificName: 'Agapanthus',
        meaning: 'love letter',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'allium',
        scientificName: 'Allium',
        meaning: 'prosperity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'almond Blossom',
        scientificName: 'Amygdalus communis',
        meaning: 'indiscretion',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'aloe',
        scientificName: 'Aloe vera',
        meaning: 'grief',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'alstroemeria',
        scientificName: 'Alstroemeria',
        meaning: 'devotion',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'alyssum',
        scientificName: 'Lobularia maritima',
        meaning: 'worth beyond beauty',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'amaranth',
        scientificName: 'Amaranthus',
        meaning: 'immortality',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'amaryllis',
        scientificName: 'Hippeastrum',
        meaning: 'pride',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'anemone',
        scientificName: 'Anemone',
        meaning: 'forsaken',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'angelica',
        scientificName: 'Angelica pachycarpa',
        meaning: 'inspiration',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'apple',
        scientificName: 'Malus domestica',
        meaning: 'temptation',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'apple blossom',
        scientificName: 'Malus domestica',
        meaning: 'preference',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'aster',
        scientificName: 'Aster',
        meaning: 'patience',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'azalea',
        scientificName: 'Rhododendron',
        meaning: 'fragile and ephemeral passion',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: `baby's breath`,
        scientificName: 'Gypsophila paniculata',
        meaning: 'everlasting love',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: `bachelor's button`,
        scientificName: 'Centaurea cyanus',
        meaning: 'single blessedness',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'basil',
        scientificName: 'Ocimum basilicum',
        meaning: 'hate',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'bay leaf',
        scientificName: 'Laurus nobilis',
        meaning: 'i change but in death',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'begonia',
        scientificName: 'Begonia',
        meaning: 'caution',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'bellflower',
        scientificName: 'Campanula',
        meaning: 'gratitude',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'bells of Ireland',
        scientificName: 'Moluccella laevis',
        meaning: 'good luck',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'bird of paradise',
        scientificName: 'Strelitzia reginae',
        meaning: 'magnificence',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'blackberry',
        scientificName: 'Rubus',
        meaning: 'envy',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'black-eyed Susan',
        scientificName: 'Rudbeckia',
        meaning: 'justice',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'bluebell',
        scientificName: 'Hyacinthoides non-scripta',
        meaning: 'constancy',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'bougainvillea',
        scientificName: 'Bougainvillea spectabilis',
        meaning: 'passion',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'bouvardia',
        scientificName: 'Bouvardia',
        meaning: 'enthusiasm',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'broom',
        scientificName: 'Cytisus',
        meaning: 'humility',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'buttercup',
        scientificName: 'Ranunculus acris',
        meaning: 'ingratitude',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'cabbage',
        scientificName: 'Brassica oleracea',
        meaning: 'profit',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'cactus',
        scientificName: 'Opuntia',
        meaning: 'ardent love',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'calla lily',
        scientificName: 'Zantedeschia aethiopica',
        meaning: 'modesty',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'camellia',
        scientificName: 'Camellia',
        meaning: 'my destiny is in your hands',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'candytuft',
        scientificName: 'Iberis',
        meaning: 'indifference',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'canterbury bells',
        scientificName: 'Campanula medium',
        meaning: 'constancy',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'carnation (pink)',
        scientificName: 'Dianthus caryophyllus',
        meaning: 'i will never forget you',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'carnation (red)',
        scientificName: 'Dianthus caryophyllus',
        meaning: 'my heart breaks',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'carnation (striped)',
        scientificName: 'Dianthus caryophyllus',
        meaning: 'i cannot be with you',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'carnation (white)',
        scientificName: 'Dianthus caryophyllus',
        meaning: 'sweet and lovely',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'carnation (yellow)',
        scientificName: 'Dianthus caryophyllus',
        meaning: 'disdain',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'celandine',
        scientificName: 'Chelidonium majus',
        meaning: 'joys to come',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'chamomile',
        scientificName: 'Matricaria recutita',
        meaning: 'energy in adversity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'cherry blossom',
        scientificName: 'Prunus cerasus',
        meaning: 'impermanence',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'chervil',
        scientificName: 'Anthriscus',
        meaning: 'sincerity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'chestnut',
        scientificName: 'Castanea sativa',
        meaning: 'do me justice',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'chicory',
        scientificName: 'Cichorium intybus',
        meaning: 'frugality',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'chrysanthemum',
        scientificName: 'Chrysanthemum',
        meaning: 'truth',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'cinquefoil',
        scientificName: 'Potentilla',
        meaning: 'beloved daughter',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'clematis',
        scientificName: 'Clematis',
        meaning: 'poverty',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'clove',
        scientificName: 'Syzgium aromaticum',
        meaning: 'i have loved you and you have not known it',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'clover (white)',
        scientificName: 'Trifolium',
        meaning: 'think of me',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'cockscomb',
        scientificName: 'Celosia',
        meaning: 'affectation',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'columbine',
        scientificName: 'Aquilegia',
        meaning: 'desertion',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'coreopsis',
        scientificName: 'Coreopsis',
        meaning: 'always cheerful',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'coriander',
        scientificName: 'Coriandrum sativum',
        meaning: 'hidden Worth',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'corn',
        scientificName: 'Zea mays',
        meaning: 'riches',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'cosmos',
        scientificName: 'Cosmos bipinnatus',
        meaning: 'joy in love and life',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'cowslip',
        scientificName: 'Primula veris',
        meaning: 'pensiveness',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'crab-apple blossom',
        scientificName: 'Malus hupehensis',
        meaning: 'ill-tempered',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'cranberry',
        scientificName: 'Vaccinium',
        meaning: 'cure for heartache',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'crocus',
        scientificName: 'Crocus',
        meaning: 'youthful gladness',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'currant',
        scientificName: 'Ribes',
        meaning: 'thy frown will kill me',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'cyclamen',
        scientificName: 'Cyclamen',
        meaning: 'timid hope',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'cypress',
        scientificName: 'Cupressus',
        meaning: 'mourning',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'daffodil',
        scientificName: 'Narcissus',
        meaning: 'new beginnings',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'dahlia',
        scientificName: 'Dahlia',
        meaning: 'dignity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'daisy',
        scientificName: 'Bellis',
        meaning: 'innocence',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'daisy, gerber',
        scientificName: 'Gerbera',
        meaning: 'cheerfulness',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'dandelion',
        scientificName: 'Taraxacum',
        meaning: 'rustic oracle',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'daphne',
        scientificName: 'Daphne',
        meaning: 'i would not have you otherwise',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'daylily',
        scientificName: 'Hemerocallis',
        meaning: 'coquetry',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'delphinium',
        scientificName: 'Delphinium',
        meaning: 'levity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'dianthus',
        scientificName: 'Dianthus',
        meaning: 'make haste',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'dittany',
        scientificName: 'Dictamnus albus',
        meaning: 'childbirth',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'dogwood',
        scientificName: 'Cornus',
        meaning: 'love undiminished by adversity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'dragon plant',
        scientificName: 'Dracaena',
        meaning: 'you are near a snare',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'edelweiss',
        scientificName: 'Leontopodium alpinum',
        meaning: 'noble courage',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'elder',
        scientificName: 'Sambucus',
        meaning: 'compassion',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'eucalyptus',
        scientificName: 'Eucalyptus',
        meaning: 'protection',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'euphorbia',
        scientificName: 'Euphorbia',
        meaning: 'persistence',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'evening primrose',
        scientificName: 'Oenothera biennis',
        meaning: 'inconstancy',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'everlasting pea',
        scientificName: 'Lathyrus latifolius',
        meaning: 'lasting pleasure',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'fennel',
        scientificName: 'Foeniculum vulgare',
        meaning: 'strength',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'fern',
        scientificName: 'Polypodiophyta',
        meaning: 'sincerity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'fern, maidenhair',
        scientificName: 'Adiantum capillus-veneris',
        meaning: 'secrecy',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'feverfew',
        scientificName: 'Tanacetum parthenium',
        meaning: 'warmth',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'fig',
        scientificName: 'Ficus carica',
        meaning: 'argument',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'flax',
        scientificName: 'Linum usitatissimum',
        meaning: 'i feel your kindness',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'forget-me-not',
        scientificName: 'Myosotis',
        meaning: 'forget me not',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'forsythia',
        scientificName: 'Forsythia',
        meaning: 'anticipation',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'foxglove',
        scientificName: 'Digitalis purpurea',
        meaning: 'insincerity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'freesia',
        scientificName: 'Freesia',
        meaning: 'lasting friendship',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'fuchsia',
        scientificName: 'Fuchsia',
        meaning: 'humble love',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'gardenia',
        scientificName: 'Gardenia',
        meaning: 'refinement',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'gentian',
        scientificName: 'Gentiana',
        meaning: 'intrinsic worth',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'geranium, oak-leaf',
        scientificName: 'Pelargonium',
        meaning: 'true friendship',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'geranium, pencil-leaf',
        scientificName: 'Pelargonium',
        meaning: 'ingenuity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'geranium, scarlett',
        scientificName: 'Pelargonium',
        meaning: 'stupidity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'geranium, wild',
        scientificName: 'Pelargonium',
        meaning: 'steadfast piety',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'ginger',
        scientificName: 'Zingiber',
        meaning: 'strength',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'gladiolus',
        scientificName: 'Gladiolus',
        meaning: 'you pierce my heart',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'goldenrod',
        scientificName: 'Solidago',
        meaning: 'careful encouragement',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'grapevine',
        scientificName: 'Vitid vinifera',
        meaning: 'abundance',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'grass',
        scientificName: 'Poaceae',
        meaning: 'submission',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'hawthorn',
        scientificName: 'Crataegus monogyna',
        meaning: 'hope',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'hazel',
        scientificName: 'Corylus',
        meaning: 'reconciliation',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'heath',
        scientificName: 'Erica',
        meaning: 'solitude',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'heather',
        scientificName: 'Calluna vugaris',
        meaning: 'protection',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'helenium',
        scientificName: 'Helenium',
        meaning: 'tears',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'heliotrope',
        scientificName: 'Heliotropium',
        meaning: 'devoted affection',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'hibiscus',
        scientificName: 'Hibiscus',
        meaning: 'delicate beauty',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'holly',
        scientificName: 'Ilex',
        meaning: 'foresight',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'hollyhock',
        scientificName: 'Alcea',
        meaning: 'ambition',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'honesty',
        scientificName: 'Lunaria annua',
        meaning: 'honesty',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'honeysuckle',
        scientificName: 'Lonicera',
        meaning: 'devotion',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'hyacinth (blue)',
        scientificName: 'Hyacinthus orientalis',
        meaning: 'constancy',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'hyacinth (purple)',
        scientificName: 'Hyacinthus orientalis',
        meaning: 'please forgive me',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'hyacinth (white)',
        scientificName: 'Hyacinthus orientalis',
        meaning: 'beauty',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'hydrangea',
        scientificName: 'Hydrangea',
        meaning: 'dispassion',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'ice plant',
        scientificName: 'Carpobrotus chilensis',
        meaning: 'your looks freeze me',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'impatiens',
        scientificName: 'Impatiens',
        meaning: 'impatience',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'iris',
        scientificName: 'Iris',
        meaning: 'message',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'ivy',
        scientificName: 'Hedera helix',
        meaning: 'fidelity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: `jacob's ladder`,
        scientificName: 'Polemonium',
        meaning: 'come down',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'jasmine, carolina',
        scientificName: 'Gelsemium sempervirens',
        meaning: 'separation',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'jasmine, indian',
        scientificName: 'Jasminum multiflorum',
        meaning: 'attachment',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'jasmine (white)',
        scientificName: 'Jasminum officinale',
        meaning: 'amiability',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'jonquil',
        scientificName: 'Narcissus jonquilla',
        meaning: 'desire',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'laburnum',
        scientificName: 'Laburnum anagyroides',
        meaning: 'pensive beauty',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: `lady's slipper`,
        scientificName: 'Cypripedium',
        meaning: 'capricious beauty',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'lantana',
        scientificName: 'Lantana',
        meaning: 'rigor',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'larch',
        scientificName: 'Larix decidua',
        meaning: 'audacity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'larkspur',
        scientificName: 'Consolida',
        meaning: 'lightness',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'laurel',
        scientificName: 'Laurus nobilis',
        meaning: 'glory and success',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'lavender',
        scientificName: 'Lavandula',
        meaning: 'mistrust',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'lemon',
        scientificName: 'Citrus limon',
        meaning: 'zest',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'lemon blossom',
        scientificName: 'Citrus limon',
        meaning: 'discretion',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'lettuce',
        scientificName: 'Lactuca sativa',
        meaning: 'coldheartedness',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'liatris',
        scientificName: 'Liatrus',
        meaning: 'i will try again',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'lichen',
        scientificName: 'Parmelia',
        meaning: 'dejection',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'lilac',
        scientificName: 'Syringa',
        meaning: 'first emotions of love',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'lily',
        scientificName: 'Lilum',
        meaning: 'majesty',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'lily of the valley',
        scientificName: 'Convallaria majalis',
        meaning: 'return of happiness',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'linden tree',
        scientificName: 'Tilia',
        meaning: 'conjugal love',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'lisianthus',
        scientificName: 'Eustoma',
        meaning: 'appreciation',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'lobelia',
        scientificName: 'Lobelia',
        meaning: 'malevolence',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'lotus',
        scientificName: 'Nelumbo nucifera',
        meaning: 'purity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'love-in-a-mist',
        scientificName: 'Nigella damascena',
        meaning: 'perplexity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'love-lies-bleeding',
        scientificName: 'Amaranthus caudatus',
        meaning: 'hopeless but not helpness',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'lungworth',
        scientificName: 'Pulmonaria',
        meaning: 'you are my life',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'lupine',
        scientificName: 'Lupinus',
        meaning: 'imagination',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'magnolia',
        scientificName: 'Magnolia',
        meaning: 'dignity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'marigold',
        scientificName: 'Calendula',
        meaning: 'grief',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'marjoram',
        scientificName: 'Origanum',
        meaning: 'blushes',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'marsh marigold',
        scientificName: 'Caltha palustris',
        meaning: 'desire for riches',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'meadow saffron',
        scientificName: 'Colchicum autumnale',
        meaning: 'my best days are past',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'meadowsweet',
        scientificName: 'Filipendula ulmaria',
        meaning: 'uselessness',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'michaelmas daisy',
        scientificName: 'Aster amellus',
        meaning: 'farewell',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'mignonette',
        scientificName: 'Reseda odorata',
        meaning: 'your qualities surpass your charms',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'mimosa',
        scientificName: 'Mimosa',
        meaning: 'sensitivity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'mistletoe',
        scientificName: 'Viscum',
        meaning: 'i surmount all obstacles',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'mock orange',
        scientificName: 'Pittosporum undulatum',
        meaning: 'counterfeit',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'monkshood',
        scientificName: 'Aconitum',
        meaning: 'chivalry',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'morning glory',
        scientificName: 'Ipomoea',
        meaning: 'coquetry',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'moss',
        scientificName: 'Bryopsida',
        meaning: 'maternal love',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'mulletin',
        scientificName: 'Verbascum',
        meaning: 'take courage',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'mustard',
        scientificName: 'Brassica',
        meaning: 'i am hurt',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'myrtle',
        scientificName: 'Myrtus',
        meaning: 'love',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'narcissus',
        scientificName: 'Narcissus',
        meaning: 'self-love',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'nasturtium',
        scientificName: 'Tropaelum majus',
        meaning: 'impetuous love',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'nettle',
        scientificName: 'Urtica',
        meaning: 'cruelty',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'oats',
        scientificName: 'Avena sativa',
        meaning: 'the witching soul of music',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'oleander',
        scientificName: 'Nerim oleander',
        meaning: 'beware',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'olive',
        scientificName: 'Olea europaea',
        meaning: 'peace',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'orange',
        scientificName: 'Citrus sinesis',
        meaning: 'generosity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'orange blossom',
        scientificName: 'Citrus sinensis',
        meaning: 'your purity equals your loveliness',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'orchid',
        scientificName: 'Orchidaceae',
        meaning: 'refined beauty',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'oregano',
        scientificName: 'Origanum vulgare',
        meaning: 'joy',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'pansy',
        scientificName: 'Viola',
        meaning: 'think of me',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'parsley',
        scientificName: 'Petroselinum crispum',
        meaning: 'festivity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'passionflower',
        scientificName: 'Passiflora',
        meaning: 'faith',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'peach',
        scientificName: 'Prunus persica',
        meaning: 'your charms are unequaled',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'peach blossom',
        scientificName: 'Prunus persica',
        meaning: 'i am your captive',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'pear',
        scientificName: 'Pyrus',
        meaning: 'affection',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'pear blossom',
        scientificName: 'Pyrus',
        meaning: 'comfort',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'peony',
        scientificName: 'Paeonia',
        meaning: 'anger',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'peppermint',
        scientificName: 'Mentha',
        meaning: 'warmth of feeling',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'perwinkle',
        scientificName: 'Vinca minor',
        meaning: 'tender recollections',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'persimmon',
        scientificName: 'Diospyros kaki',
        meaning: `bury me amid nature's beauty`,
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'petunia',
        scientificName: 'Petunia',
        meaning: 'your prensence soothes me',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'phlox',
        scientificName: 'Phlox',
        meaning: 'our souls are united',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'pineapple',
        scientificName: 'Amanas comosus',
        meaning: 'you are perfect',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'pink',
        scientificName: 'Dianthus',
        meaning: 'pure love',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'plum',
        scientificName: 'Prunus domestica',
        meaning: 'keep your promises',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'poinsettia',
        scientificName: 'Euphorbia pulcherrima',
        meaning: 'be of good cheer',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'polyanthus',
        scientificName: 'Primula',
        meaning: 'confidence',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'pomegranate',
        scientificName: 'Punica granatum',
        meaning: 'foolishness',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'pomegranate blossom',
        scientificName: 'Punica granatum',
        meaning: 'mature elegance',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'poplar (black)',
        scientificName: 'Populus nigra',
        meaning: 'courage',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'poplar (white)',
        scientificName: 'Populus alba',
        meaning: 'time',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'poppy',
        scientificName: 'Papaver',
        meaning: 'fantastic Extravagance',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'potato',
        scientificName: 'Solanum tuberosum',
        meaning: 'benevolence',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'potato vine',
        scientificName: 'Solanum jasminoides',
        meaning: 'you are delicious',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'primrose',
        scientificName: 'Primula',
        meaning: 'childhood',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'protea',
        scientificName: 'Protea',
        meaning: 'courage',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'purple cornflower',
        scientificName: 'Echinacea purpurea',
        meaning: 'strength and health',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: `queen anne's lace`,
        scientificName: 'Ammi majus',
        meaning: 'fantasy',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'quince',
        scientificName: 'Cydonia oblonga',
        meaning: 'temptation',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'ranunculus',
        scientificName: 'Ranunculus asiaticus',
        meaning: 'you are radiant with charms',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'raspberry',
        scientificName: 'Rubus',
        meaning: 'remorse',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'redbud',
        scientificName: 'Cercis',
        meaning: 'betrayal',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'rhododendron',
        scientificName: 'Rhododendron',
        meaning: 'beware',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'rhubarb',
        scientificName: 'Rheum',
        meaning: 'advice',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'rose (burgundy)',
        scientificName: 'Rosa',
        meaning: 'unconscious beauty',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'rose (moss)',
        scientificName: 'Rosa',
        meaning: 'confession of love',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'rose (orange)',
        scientificName: 'Rosa',
        meaning: 'fascination',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'rose (pale peach)',
        scientificName: 'Rosa',
        meaning: 'modesty',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'rose (pink)',
        scientificName: 'Rosa',
        meaning: 'grace',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'rose (purple)',
        scientificName: 'Rosa',
        meaning: 'enchantment',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'rose (red)',
        scientificName: 'Rosa',
        meaning: 'love',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'rose (white)',
        scientificName: 'Rosa',
        meaning: 'a heart unacquainted with love',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'rose (yellow)',
        scientificName: 'Rosa',
        meaning: 'infidelity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'rosemary',
        scientificName: 'Rosmarinus officinalis',
        meaning: 'remembrance',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'saffron',
        scientificName: 'Crocus sativus',
        meaning: 'beware of excess',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'sage',
        scientificName: 'Salvia officinalis',
        meaning: 'good health and long life',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: `saint-John's-wort`,
        scientificName: 'Hypericum perforatum',
        meaning: 'superstition',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'saxifraga',
        scientificName: 'Saxifraga',
        meaning: 'affection',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'scabiosa',
        scientificName: 'Scabiosa',
        meaning: 'unfortunate love',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'scarlet pimpernel',
        scientificName: 'Anagallis arvensis',
        meaning: 'change',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'snapdragon',
        scientificName: 'Antirrhinum majus',
        meaning: 'presumption',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'snowdrop',
        scientificName: 'Galanthus',
        meaning: 'consolation and hope',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'sorrel',
        scientificName: 'Rumex acetosa',
        meaning: 'parental affection',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'speedwell',
        scientificName: 'Veronica',
        meaning: 'fidelity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'spirea',
        scientificName: 'Spiraea',
        meaning: 'victory',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'star-of-bethlehem',
        scientificName: 'Ornithogalum umbellatum',
        meaning: 'purity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'starwort',
        scientificName: 'Stellaria',
        meaning: 'welcome',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'stephanotis',
        scientificName: 'Stephanotis floribunda',
        meaning: 'happiness in marriage',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'stock',
        scientificName: 'Malcolmia maritima',
        meaning: 'you will always be beautiful to me',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'stonecrop',
        scientificName: 'Sedum',
        meaning: 'tranquility',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'strawberry',
        scientificName: 'Fragaria',
        meaning: 'perfection',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'sunflower',
        scientificName: 'Helianthus annuus',
        meaning: 'false riches',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'sweet briar',
        scientificName: 'Rosa rubiginosa',
        meaning: 'simplicity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'sweet pea',
        scientificName: 'Lathyrus odoratus',
        meaning: 'delicate pleasures',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'sweet william',
        scientificName: 'Dianthus barbatus',
        meaning: 'gallantry',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'tansy',
        scientificName: 'Tanacetum',
        meaning: 'i declare war against you',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'thistle',
        scientificName: 'Cirsium',
        meaning: 'misanthropy',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'thrift',
        scientificName: 'Armeria',
        meaning: 'sympathy',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'thyme',
        scientificName: 'Thymus',
        meaning: 'activity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'trachelium',
        scientificName: 'Trachelium',
        meaning: 'neglected beauty',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'trillium',
        scientificName: 'Trillium',
        meaning: 'modest beauty',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'trumpet vine',
        scientificName: 'Campsis radicans',
        meaning: 'fame',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'tuberose',
        scientificName: 'Polianthes tuberosa',
        meaning: 'dangerous pleasures',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'tulip',
        scientificName: 'Tulipa',
        meaning: 'declaration of love',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'turnip',
        scientificName: 'Brassica rapa',
        meaning: 'charity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'verbena',
        scientificName: 'Verbena',
        meaning: 'pray for me',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'vetch',
        scientificName: 'Vicia',
        meaning: 'i cling to thee',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'violet',
        scientificName: 'Viola',
        meaning: 'modest worth',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'wallflower',
        scientificName: 'Cheiranthus',
        meaning: 'fidelity in adversity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'water lily',
        scientificName: 'Nymphaea',
        meaning: 'purity of heart',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'waxflower',
        scientificName: 'Hoya',
        meaning: 'susceptibility',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'wheat',
        scientificName: 'Triticum',
        meaning: 'prosperity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'white Monte Casino',
        scientificName: 'Aster',
        meaning: 'patience',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'willow herb',
        scientificName: 'Epilobium',
        meaning: 'pretension',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'winter cherry',
        scientificName: 'Physalis alkekengi',
        meaning: 'deception',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'wisteria',
        scientificName: 'Wisteria',
        meaning: 'welcome',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'witch hazel',
        scientificName: 'Hamamelis',
        meaning: 'a spell',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'yarrow',
        scientificName: 'Achillea millefolium',
        meaning: 'cure for a broken heart',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'zinnia',
        scientificName: 'Zinnia',
        meaning: 'i mourn your absence',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    }
]

db.Flower.deleteMany({}, function(err, flowers) {
    console.log('removed all flowers');
    db.Flower.create(flower_list, (err, flowers) => {
        if (err) {throw err;}
        console.log('created all flowers');
        console.log(`created ${flowers.length} flowers`);
    })
});