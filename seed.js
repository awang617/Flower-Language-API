// requires all the database models
const db = require ('./models');

// categories
const flower_list = [
    {
        name: 'Abutilon',
        scientificName: 'Abutilon',
        meaning: 'Meditation',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Acacia',
        scientificName: 'Acacia',
        meaning: 'Secret love',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Acanthus',
        scientificName: 'Acanthus',
        meaning: 'Artifice',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Agapanthus',
        scientificName: 'Agapanthus',
        meaning: 'Love letter',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Allium',
        scientificName: 'Allium',
        meaning: 'Prosperity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Almond Blossom',
        scientificName: 'Amygdalus communis',
        meaning: 'Indiscretion',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Aloe',
        scientificName: 'Aloe vera',
        meaning: 'Grief',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Alstroemeria',
        scientificName: 'Alstroemeria',
        meaning: 'Devotion',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Alyssum',
        scientificName: 'Lobularia maritima',
        meaning: 'Worth beyond beauty',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Amaranth',
        scientificName: 'Amaranthus',
        meaning: 'Immortality',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Amaryllis',
        scientificName: 'Hippeastrum',
        meaning: 'Pride',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Anemone',
        scientificName: 'Anemone',
        meaning: 'Forsaken',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Angelica',
        scientificName: 'Angelica pachycarpa',
        meaning: 'Inspiration',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Apple',
        scientificName: 'Malus domestica',
        meaning: 'Temptation',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Apple blossom',
        scientificName: 'Malus domestica',
        meaning: 'Preference',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Aster',
        scientificName: 'Aster',
        meaning: 'Patience',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Azalea',
        scientificName: 'Rhododendron',
        meaning: 'Fragile and ephemeral passion',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: `Baby's breath`,
        scientificName: 'Gypsophila paniculata',
        meaning: 'Everlasting love',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: `Bachelor's button`,
        scientificName: 'Centaurea cyanus',
        meaning: 'Single blessedness',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Basil',
        scientificName: 'Ocimum basilicum',
        meaning: 'Hate',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Bay leaf',
        scientificName: 'Laurus nobilis',
        meaning: 'I change but in death',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Begonia',
        scientificName: 'Begonia',
        meaning: 'Caution',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Bellflower',
        scientificName: 'Campanula',
        meaning: 'Gratitude',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Bells of Ireland',
        scientificName: 'Moluccella laevis',
        meaning: 'Good luck',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Bird of paradise',
        scientificName: 'Strelitzia reginae',
        meaning: 'Magnificence',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Blackberry',
        scientificName: 'Rubus',
        meaning: 'Envy',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Black-eyed Susan',
        scientificName: 'Rudbeckia',
        meaning: 'Justice',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Bluebell',
        scientificName: 'Hyacinthoides non-scripta',
        meaning: 'Constancy',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Bougainvillea',
        scientificName: 'Bougainvillea spectabilis',
        meaning: 'Passion',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Bouvardia',
        scientificName: 'Bouvardia',
        meaning: 'Enthusiasm',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Broom',
        scientificName: 'Cytisus',
        meaning: 'Humility',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Buttercup',
        scientificName: 'Ranunculus acris',
        meaning: 'Ingratitude',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Cabbage',
        scientificName: 'Brassica oleracea',
        meaning: 'Profit',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Cactus',
        scientificName: 'Opuntia',
        meaning: 'Ardent love',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Calla lily',
        scientificName: 'Zantedeschia aethiopica',
        meaning: 'Modesty',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Camellia',
        scientificName: 'Camellia',
        meaning: 'My destiny is in your hands',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Candytuft',
        scientificName: 'Iberis',
        meaning: 'Indifference',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Canterbury bells',
        scientificName: 'Campanula medium',
        meaning: 'Constancy',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Carnation (pink)',
        scientificName: 'Dianthus caryophyllus',
        meaning: 'I will never forget you',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Carnation (red)',
        scientificName: 'Dianthus caryophyllus',
        meaning: 'My heart breaks',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Carnation (striped)',
        scientificName: 'Dianthus caryophyllus',
        meaning: 'I cannot be with you',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Carnation (white)',
        scientificName: 'Dianthus caryophyllus',
        meaning: 'Sweet and lovely',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Carnation (yellow)',
        scientificName: 'Dianthus caryophyllus',
        meaning: 'Disdain',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Celandine',
        scientificName: 'Chelidonium majus',
        meaning: 'Joys to come',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Chamomile',
        scientificName: 'Matricaria recutita',
        meaning: 'Energy in adversity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Cherry blossom',
        scientificName: 'Prunus cerasus',
        meaning: 'Impermanence',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Chervil',
        scientificName: 'Anthriscus',
        meaning: 'Sincerity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Chestnut',
        scientificName: 'Castanea sativa',
        meaning: 'Do me justice',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Chicory',
        scientificName: 'Cichorium intybus',
        meaning: 'Frugality',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Chrysanthemum',
        scientificName: 'Chrysanthemum',
        meaning: 'Truth',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Cinquefoil',
        scientificName: 'Potentilla',
        meaning: 'Beloved daughter',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Clematis',
        scientificName: 'Clematis',
        meaning: 'Poverty',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Clove',
        scientificName: 'Syzgium aromaticum',
        meaning: 'I have loved you and you have not known it',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Clover (white)',
        scientificName: 'Trifolium',
        meaning: 'Think of me',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Cockscomb',
        scientificName: 'Celosia',
        meaning: 'Affectation',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Columbine',
        scientificName: 'Aquilegia',
        meaning: 'Desertion',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Coreopsis',
        scientificName: 'Coreopsis',
        meaning: 'Always cheerful',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Coriander',
        scientificName: 'Coriandrum sativum',
        meaning: 'Hidden Worth',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Corn',
        scientificName: 'Zea mays',
        meaning: 'Riches',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Cosmos',
        scientificName: 'Cosmos bipinnatus',
        meaning: 'Joy in love and life',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Cowslip',
        scientificName: 'Primula veris',
        meaning: 'Pensiveness',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Crab-apple blossom',
        scientificName: 'Malus hupehensis',
        meaning: 'Ill-tempered',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Cranberry',
        scientificName: 'Vaccinium',
        meaning: 'Cure for heartache',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Crocus',
        scientificName: 'Crocus',
        meaning: 'Youthful gladness',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Currant',
        scientificName: 'Ribes',
        meaning: 'Thy frown will kill me',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Cyclamen',
        scientificName: 'Cyclamen',
        meaning: 'Timid hope',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Cypress',
        scientificName: 'Cupressus',
        meaning: 'Mourning',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Daffodil',
        scientificName: 'Narcissus',
        meaning: 'New beginnings',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Dahlia',
        scientificName: 'Dahlia',
        meaning: 'Dignity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Daisy',
        scientificName: 'Bellis',
        meaning: 'Innocence',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Daisy, Gerber',
        scientificName: 'Gerbera',
        meaning: 'Cheerfulness',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Dandelion',
        scientificName: 'Taraxacum',
        meaning: 'Rustic Oracle',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Daphne',
        scientificName: 'Daphne',
        meaning: 'I would not have you otherwise',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Daylily',
        scientificName: 'Hemerocallis',
        meaning: 'coquetry',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Delphinium',
        scientificName: 'Delphinium',
        meaning: 'Levity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Dianthus',
        scientificName: 'Dianthus',
        meaning: 'Make haste',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Dittany',
        scientificName: 'Dictamnus albus',
        meaning: 'Childbirth',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Dogwood',
        scientificName: 'Cornus',
        meaning: 'Love undiminished by adversity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Dragon plant',
        scientificName: 'Dracaena',
        meaning: 'You are near a snare',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Edelweiss',
        scientificName: 'Leontopodium alpinum',
        meaning: 'Noble courage',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Elder',
        scientificName: 'Sambucus',
        meaning: 'Compassion',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Eucalyptus',
        scientificName: 'Eucalyptus',
        meaning: 'Protection',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Euphorbia',
        scientificName: 'Euphorbia',
        meaning: 'Persistence',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Evening primrose',
        scientificName: 'Oenothera biennis',
        meaning: 'Inconstancy',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Everlasting pea',
        scientificName: 'Lathyrus latifolius',
        meaning: 'Lasting pleasure',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Fennel',
        scientificName: 'Foeniculum vulgare',
        meaning: 'Strength',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Fern',
        scientificName: 'Polypodiophyta',
        meaning: 'Sincerity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Fern, maidenhair',
        scientificName: 'Adiantum capillus-veneris',
        meaning: 'Secrecy',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Feverfew',
        scientificName: 'Tanacetum parthenium',
        meaning: 'Warmth',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Fig',
        scientificName: 'Ficus carica',
        meaning: 'Argument',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Flax',
        scientificName: 'Linum usitatissimum',
        meaning: 'I feel your kindness',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Forget-me-not',
        scientificName: 'Myosotis',
        meaning: 'Forget me not',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Forsythia',
        scientificName: 'Forsythia',
        meaning: 'Anticipation',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Foxglove',
        scientificName: 'Digitalis purpurea',
        meaning: 'Insincerity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Freesia',
        scientificName: 'Freesia',
        meaning: 'Lasting friendship',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Fuchsia',
        scientificName: 'Fuchsia',
        meaning: 'Humble love',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Gardenia',
        scientificName: 'Gardenia',
        meaning: 'Refinement',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Gentian',
        scientificName: 'Gentiana',
        meaning: 'Intrinsic worth',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Geranium, oak-leaf',
        scientificName: 'Pelargonium',
        meaning: 'True friendship',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Geranium, pencil-leaf',
        scientificName: 'Pelargonium',
        meaning: 'Ingenuity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Geranium, scarlett',
        scientificName: 'Pelargonium',
        meaning: 'Stupidity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Geranium, wild',
        scientificName: 'Pelargonium',
        meaning: 'Steadfast piety',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Ginger',
        scientificName: 'Zingiber',
        meaning: 'Strength',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Gladiolus',
        scientificName: 'Gladiolus',
        meaning: 'You pierce my heart',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Goldenrod',
        scientificName: 'Solidago',
        meaning: 'Careful encouragement',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Grapevine',
        scientificName: 'Vitid vinifera',
        meaning: 'Abundance',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Grass',
        scientificName: 'Poaceae',
        meaning: 'Submission',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Hawthorn',
        scientificName: 'Crataegus monogyna',
        meaning: 'Hope',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Hazel',
        scientificName: 'Corylus',
        meaning: 'Reconciliation',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Heath',
        scientificName: 'Erica',
        meaning: 'Solitude',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Heather',
        scientificName: 'Calluna vugaris',
        meaning: 'Protection',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Helenium',
        scientificName: 'Helenium',
        meaning: 'Tears',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Heliotrope',
        scientificName: 'Heliotropium',
        meaning: 'Devoted affection',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Hibiscus',
        scientificName: 'Hibiscus',
        meaning: 'Delicate beauty',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Holly',
        scientificName: 'Ilex',
        meaning: 'Foresight',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Hollyhock',
        scientificName: 'Alcea',
        meaning: 'Ambition',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Honesty',
        scientificName: 'Lunaria annua',
        meaning: 'Honesty',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Honeysuckle',
        scientificName: 'Lonicera',
        meaning: 'Devotion',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Hyacinth (blue)',
        scientificName: 'Hyacinthus orientalis',
        meaning: 'Constancy',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Hyacinth (purple)',
        scientificName: 'Hyacinthus orientalis',
        meaning: 'Please forgive me',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Hyacinth (white)',
        scientificName: 'Hyacinthus orientalis',
        meaning: 'Beauty',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Hydrangea',
        scientificName: 'Hydrangea',
        meaning: 'Dispassion',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Ice plant',
        scientificName: 'Carpobrotus chilensis',
        meaning: 'Your looks freeze me',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Impatiens',
        scientificName: 'Impatiens',
        meaning: 'Impatience',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Iris',
        scientificName: 'Iris',
        meaning: 'Message',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Ivy',
        scientificName: 'Hedera helix',
        meaning: 'Fidelity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: `Jacob's ladder`,
        scientificName: 'Polemonium',
        meaning: 'Come down',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Jasmine, Carolina',
        scientificName: 'Gelsemium sempervirens',
        meaning: 'Separation',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Jasmine, Indian',
        scientificName: 'Jasminum multiflorum',
        meaning: 'Attachment',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Jasmine (white)',
        scientificName: 'Jasminum officinale',
        meaning: 'Amiability',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Jonquil',
        scientificName: 'Narcissus jonquilla',
        meaning: 'Desire',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Laburnum',
        scientificName: 'Laburnum anagyroides',
        meaning: 'Pensive beauty',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: `Lady's slipper`,
        scientificName: 'Cypripedium',
        meaning: 'Capricious beauty',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Lantana',
        scientificName: 'Lantana',
        meaning: 'Rigor',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Larch',
        scientificName: 'Larix decidua',
        meaning: 'Audacity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Larkspur',
        scientificName: 'Consolida',
        meaning: 'Lightness',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Laurel',
        scientificName: 'Laurus nobilis',
        meaning: 'Glory and success',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Lavender',
        scientificName: 'Lavandula',
        meaning: 'Mistrust',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Lemon',
        scientificName: 'Citrus limon',
        meaning: 'Zest',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Lemon blossom',
        scientificName: 'Citrus limon',
        meaning: 'Discretion',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Lettuce',
        scientificName: 'Lactuca sativa',
        meaning: 'Coldheartedness',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Liatris',
        scientificName: 'Liatrus',
        meaning: 'I will try again',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Lichen',
        scientificName: 'Parmelia',
        meaning: 'Dejection',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Lilac',
        scientificName: 'Syringa',
        meaning: 'First emotions of love',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Lily',
        scientificName: 'Lilum',
        meaning: 'Majesty',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Lily of the valley',
        scientificName: 'Convallaria majalis',
        meaning: 'Return of happiness',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Linden tree',
        scientificName: 'Tilia',
        meaning: 'Conjugal love',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Lisianthus',
        scientificName: 'Eustoma',
        meaning: 'Appreciation',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Lobelia',
        scientificName: 'Lobelia',
        meaning: 'Malevolence',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Lotus',
        scientificName: 'Nelumbo nucifera',
        meaning: 'Purity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Love-in-a-mist',
        scientificName: 'Nigella damascena',
        meaning: 'Perplexity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Love-lies-bleeding',
        scientificName: 'Amaranthus caudatus',
        meaning: 'Hopeless but not helpness',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Lungworth',
        scientificName: 'Pulmonaria',
        meaning: 'You are my life',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Lupine',
        scientificName: 'Lupinus',
        meaning: 'Imagination',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Magnolia',
        scientificName: 'Magnolia',
        meaning: 'Dignity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Marigold',
        scientificName: 'Calendula',
        meaning: 'Grief',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Marjoram',
        scientificName: 'Origanum',
        meaning: 'Blushes',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Marsh marigold',
        scientificName: 'Caltha palustris',
        meaning: 'Desire for riches',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Meadow saffron',
        scientificName: 'Colchicum autumnale',
        meaning: 'My best days are past',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Meadowsweet',
        scientificName: 'Filipendula ulmaria',
        meaning: 'Uselessness',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Michaelmas daisy',
        scientificName: 'Aster amellus',
        meaning: 'Farewell',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Mignonette',
        scientificName: 'Reseda odorata',
        meaning: 'Your qualities surpass your charms',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Mimosa',
        scientificName: 'Mimosa',
        meaning: 'Sensitivity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Mistletoe',
        scientificName: 'Viscum',
        meaning: 'I surmount all obstacles',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Mock orange',
        scientificName: 'Pittosporum undulatum',
        meaning: 'Counterfeit',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Monkshood',
        scientificName: 'Aconitum',
        meaning: 'Chivalry',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Morning glory',
        scientificName: 'Ipomoea',
        meaning: 'Coquetry',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Moss',
        scientificName: 'Bryopsida',
        meaning: 'Maternal love',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Mulletin',
        scientificName: 'Verbascum',
        meaning: 'Take courage',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Mustard',
        scientificName: 'Brassica',
        meaning: 'I am hurt',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Myrtle',
        scientificName: 'Myrtus',
        meaning: 'Love',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Narcissus',
        scientificName: 'Narcissus',
        meaning: 'Self-love',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Nasturtium',
        scientificName: 'Tropaelum majus',
        meaning: 'Impetuous love',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Nettle',
        scientificName: 'Urtica',
        meaning: 'Cruelty',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Oats',
        scientificName: 'Avena sativa',
        meaning: 'The witching soul of music',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Oleander',
        scientificName: 'Nerim oleander',
        meaning: 'Beware',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Olive',
        scientificName: 'Olea europaea',
        meaning: 'Peace',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Orange',
        scientificName: 'Citrus sinesis',
        meaning: 'Generosity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Orange blossom',
        scientificName: 'Citrus sinensis',
        meaning: 'Your purity equals your loveliness',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Orchid',
        scientificName: 'Orchidaceae',
        meaning: 'Refined beauty',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Oregano',
        scientificName: 'Origanum vulgare',
        meaning: 'Joy',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Pansy',
        scientificName: 'Viola',
        meaning: 'Think of me',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Parsley',
        scientificName: 'Petroselinum crispum',
        meaning: 'Festivity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Passionflower',
        scientificName: 'Passiflora',
        meaning: 'Faith',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Peach',
        scientificName: 'Prunus persica',
        meaning: 'Your charms are unequaled',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Peach blossom',
        scientificName: 'Prunus persica',
        meaning: 'I am your captive',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Pear',
        scientificName: 'Pyrus',
        meaning: 'Affection',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Pear blossom',
        scientificName: 'Pyrus',
        meaning: 'Comfort',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Peony',
        scientificName: 'Paeonia',
        meaning: 'Anger',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Peppermint',
        scientificName: 'Mentha',
        meaning: 'Warmth of feeling',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Perwinkle',
        scientificName: 'Vinca minor',
        meaning: 'Tender recollections',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Persimmon',
        scientificName: 'Diospyros kaki',
        meaning: `Bury me amid nature's beauty`,
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Petunia',
        scientificName: 'Petunia',
        meaning: 'Your prensence soothes me',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Phlox',
        scientificName: 'Phlox',
        meaning: 'Our souls are united',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Pineapple',
        scientificName: 'Amanas comosus',
        meaning: 'You are perfect',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Pink',
        scientificName: 'Dianthus',
        meaning: 'Pure love',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Plum',
        scientificName: 'Prunus domestica',
        meaning: 'Keep your promises',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Poinsettia',
        scientificName: 'Euphorbia pulcherrima',
        meaning: 'Be of good cheer',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Polyanthus',
        scientificName: 'Primula',
        meaning: 'Confidence',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Pomegranate',
        scientificName: 'Punica granatum',
        meaning: 'Foolishness',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Pomegranate blossom',
        scientificName: 'Punica granatum',
        meaning: 'Mature elegance',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Poplar (black)',
        scientificName: 'Populus nigra',
        meaning: 'Courage',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Poplar (white)',
        scientificName: 'Populus alba',
        meaning: 'Time',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Poppy',
        scientificName: 'Papaver',
        meaning: 'Fantastic Extravagance',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Potato',
        scientificName: 'Solanum tuberosum',
        meaning: 'Benevolence',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Potato vine',
        scientificName: 'Solanum jasminoides',
        meaning: 'You are delicious',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Primrose',
        scientificName: 'Primula',
        meaning: 'Childhood',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Protea',
        scientificName: 'Protea',
        meaning: 'Courage',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Purple cornflower',
        scientificName: 'Echinacea purpurea',
        meaning: 'Strength and health',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: `Queen Anne's lace`,
        scientificName: 'Ammi majus',
        meaning: 'Fantasy',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Quince',
        scientificName: 'Cydonia oblonga',
        meaning: 'Temptation',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Ranunculus',
        scientificName: 'Ranunculus asiaticus',
        meaning: 'You are radiant with charms',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Raspberry',
        scientificName: 'Rubus',
        meaning: 'Remorse',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Redbud',
        scientificName: 'Cercis',
        meaning: 'Betrayal',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Rhododendron',
        scientificName: 'Rhododendron',
        meaning: 'Beware',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Rhubarb',
        scientificName: 'Rheum',
        meaning: 'Advice',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Rose (burgundy)',
        scientificName: 'Rosa',
        meaning: 'Unconscious beauty',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Rose (moss)',
        scientificName: 'Rosa',
        meaning: 'Confession of love',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Rose (orange)',
        scientificName: 'Rosa',
        meaning: 'Fascination',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Rose (pale peach)',
        scientificName: 'Rosa',
        meaning: 'Modesty',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Rose (pink)',
        scientificName: 'Rosa',
        meaning: 'Grace',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Rose (purple)',
        scientificName: 'Rosa',
        meaning: 'Enchantment',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Rose (red)',
        scientificName: 'Rosa',
        meaning: 'Love',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Rose (white)',
        scientificName: 'Rosa',
        meaning: 'A heart unacquainted with love',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Rose (yellow)',
        scientificName: 'Rosa',
        meaning: 'Infidelity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Rosemary',
        scientificName: 'Rosmarinus officinalis',
        meaning: 'Remembrance',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Saffron',
        scientificName: 'Crocus sativus',
        meaning: 'Beware of excess',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Sage',
        scientificName: 'Salvia officinalis',
        meaning: 'Good health and long life',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: `Saint-John's-wort`,
        scientificName: 'Hypericum perforatum',
        meaning: 'Superstition',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Saxifraga',
        scientificName: 'Saxifraga',
        meaning: 'Affection',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Scabiosa',
        scientificName: 'Scabiosa',
        meaning: 'Unfortunate love',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Scarlet Pimpernel',
        scientificName: 'Anagallis arvensis',
        meaning: 'Change',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Snapdragon',
        scientificName: 'Antirrhinum majus',
        meaning: 'Presumption',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Snowdrop',
        scientificName: 'Galanthus',
        meaning: 'Consolation and hope',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Sorrel',
        scientificName: 'Rumex acetosa',
        meaning: 'Parental affection',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Speedwell',
        scientificName: 'Veronica',
        meaning: 'Fidelity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Spirea',
        scientificName: 'Spiraea',
        meaning: 'Victory',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Star-of-Bethlehem',
        scientificName: 'Ornithogalum umbellatum',
        meaning: 'Purity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Starwort',
        scientificName: 'Stellaria',
        meaning: 'Welcome',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Stephanotis',
        scientificName: 'Stephanotis floribunda',
        meaning: 'Happiness in marriage',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Stock',
        scientificName: 'Malcolmia maritima',
        meaning: 'You will always be beautiful to me',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Stonecrop',
        scientificName: 'Sedum',
        meaning: 'Tranquility',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Strawberry',
        scientificName: 'Fragaria',
        meaning: 'Perfection',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Sunflower',
        scientificName: 'Helianthus annuus',
        meaning: 'False riches',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Sweet briar',
        scientificName: 'Rosa rubiginosa',
        meaning: 'Simplicity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Sweet pea',
        scientificName: 'Lathyrus odoratus',
        meaning: 'Delicate pleasures',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Sweet William',
        scientificName: 'Dianthus barbatus',
        meaning: 'Gallantry',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Tansy',
        scientificName: 'Tanacetum',
        meaning: 'I declare war against you',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Thistle',
        scientificName: 'Cirsium',
        meaning: 'Misanthropy',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Thrift',
        scientificName: 'Armeria',
        meaning: 'Sympathy',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Thyme',
        scientificName: 'Thymus',
        meaning: 'Activity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Trachelium',
        scientificName: 'Trachelium',
        meaning: 'Neglected beauty',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Trillium',
        scientificName: 'Trillium',
        meaning: 'Modest beauty',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Trumpet vine',
        scientificName: 'Campsis radicans',
        meaning: 'Fame',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Tuberose',
        scientificName: 'Polianthes tuberosa',
        meaning: 'Dangerous pleasures',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Tulip',
        scientificName: 'Tulipa',
        meaning: 'Declaration of love',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Turnip',
        scientificName: 'Brassica rapa',
        meaning: 'Charity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Verbena',
        scientificName: 'Verbena',
        meaning: 'Pray for me',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Vetch',
        scientificName: 'Vicia',
        meaning: 'I cling to thee',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Violet',
        scientificName: 'Viola',
        meaning: 'Modest worth',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Wallflower',
        scientificName: 'Cheiranthus',
        meaning: 'Fidelity in adversity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Water lily',
        scientificName: 'Nymphaea',
        meaning: 'Purity of heart',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Waxflower',
        scientificName: 'Hoya',
        meaning: 'Susceptibility',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Wheat',
        scientificName: 'Triticum',
        meaning: 'Prosperity',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'White Monte Casino',
        scientificName: 'Aster',
        meaning: 'Patience',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Willow herb',
        scientificName: 'Epilobium',
        meaning: 'Pretension',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Winter cherry',
        scientificName: 'Physalis alkekengi',
        meaning: 'Deception',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Wisteria',
        scientificName: 'Wisteria',
        meaning: 'Welcome',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Witch hazel',
        scientificName: 'Hamamelis',
        meaning: 'A spell',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Yarrow',
        scientificName: 'Achillea millefolium',
        meaning: 'Cure for a broken heart',
        description: '',
        image: '',
        sources: [],
        imageSource: ''
    },
    {
        name: 'Zinnia',
        scientificName: 'Zinnia',
        meaning: 'I mourn your absence',
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