// requires all the database models
const db = require ('./models');

// categories
const flower_list = [
    {
        name: 'abutilon',
        scientificName: 'Abutilon',
        meaning: 'meditation',
        description: 'Also known as flowering maple, parlor maple, Chinese lantern or Chinese bellflower, abutilon is an upright, branching plant with leaves that resemble maple leaves; however, abutilon isn’t a maple and is actually a member of the mallow family. This plant is often grown as a houseplant.',
        image: 'https://q7i2y6d5.stackpathcdn.com/wp-content/uploads/2017/08/abutilon.jpg',
        sources: 'https://www.gardeningknowhow.com/houseplants/flowering-maple/flowering-maple-care-outdoors.htm',
        imageSource: 'https://www.istockphoto.com/photo/macro-of-a-beautiful-abutilon-pictum-flower-gm519219198-90425865'
    },
    {
        name: 'acacia',
        scientificName: 'Acacia',
        meaning: 'secret love',
        description: 'Acacia Flowers are typically small, yellow and fragrant with many stamens, giving the flower a fuzzy appearance. The Acacia flower heads are actually lots of little flowers bundled together. Acacia Flowers can vary in color from cream, pale yellow through to gold. One species, Acacia purpureapetala, has purple flowers whilst a form of Acacia leprosa has red flowers. Individual Acacia Flowers are arranged in inflorescences that may be either globular heads or cylindrical spikes. Each Acacia inflorescence may comprise from as few as 3 individual flowers (e.g. Acacia lunata) to as many as 130 or more (e.g. Acacia anceps).',
        image: 'https://curiousprovence.com/wp-content/uploads/2015/05/ontreecurious.jpg',
        sources: 'https://www.theflowerexpert.com/content/growingflowers/flowersandgeography/acacia-flowers',
        imageSource: 'https://curiousprovence.com'
    },
    {
        name: 'acanthus',
        scientificName: 'Acanthus',
        meaning: 'artifice',
        description: 'Acanthus is a Mediterranean plant that boasts magnificent blooming all summer long. Its large pink, purple or white panicles are perfect for filling in a flower bed. Care, pruning and planting must all follow good practices to have your acanthus bear very nice flowers.',
        image: 'https://www.jardiner-malin.fr/wp-content/uploads/2018/08/acanthus.jpg',
        sources: 'https://www.nature-and-garden.com/gardening/acanthus.html',
        imageSource: 'https://www.nature-and-garden.com/gardening/acanthus.html'
    },
    {
        name: 'agapanthus',
        scientificName: 'Agapanthus',
        meaning: 'love letter',
        description: 'Agapanthus is also commonly known as the Lily of the Nile, African Blue Lily, and African Lily. Agapanthus are lily-like blooms and come in clusters made up of many bell-shaped flowers. The Agapanthus clusters are globe-shaped or pendular. Agapanthus flowers are in various shades of blue, from a dusky, powder blue to an almost indigo-purple, but there are some white varieties as well.',
        image: 'https://www.saga.co.uk/contentlibrary/saga/publishing/verticals/home-and-garden/gardening/plants/perennials/agapanthus/how_to_grow_agapanthus_533494744_768.jpg',
        sources: 'https://www.theflowerexpert.com/content/growingflowers/flowersandseasons/agapanthus',
        imageSource: 'https://www.saga.co.uk/magazine/home-garden/gardening/plants/perennials/how-to-grow-agapanthus'
    },
    {
        name: 'allium',
        scientificName: 'Allium',
        meaning: 'prosperity',
        description: 'Allium plants vary in height between 5 cm and 150 cm. The flowers of allium form an umbel at the top of a leafless stalk. Alliums have strappy, undistinguished leaves and straight tubular flower stalks. The flower form in clusters and are best known in the round pom-pom form, but they can be start shaped, cup-shaped, semi-circular or pendulous. ',
        image: 'https://www.whiteflowerfarm.com/mas_assets/cache/image/4/7/5/6/18262.Jpg',
        sources: 'https://www.theflowerexpert.com/content/growingflowers/growingflowers/allium',
        imageSource: 'https://www.whiteflowerfarm.com'
    },
    {
        name: 'almond blossom',
        scientificName: 'Amygdalus communis',
        meaning: 'indiscretion',
        description: 'The almond is a species of tree native to Iran and surrounding countries as well as Central Asia, but widely cultivated elsewhere. The almond is also the name of the edible and widely cultivated seed of this tree. The fruit of the almond is a drupe, consisting of an outer hull and a hard shell with the seed, which is not a true nut, inside.',
        image: 'https://imgc.artprintimages.com/img/print/blossoming-almond-blossoms-with-blue-sky-close-up-spring-santa-maria-del-cami-majorca_u-l-q11vrp30.jpg?h=550&w=550',
        sources: 'https://en.wikipedia.org/wiki/Almond',
        imageSource: 'https://www.art.com/products/p45200902057-sa-i10376248/p-kaczynski-blossoming-almond-blossoms-with-blue-sky-close-up-spring-santa-maria-del-cami-majorca.htm'
    },
    {
        name: 'aloe',
        scientificName: 'Aloe vera',
        meaning: 'grief',
        description: 'Aloe vera (also known as medicinal aloe plant) is a very popular plant that is best known for the healing qualities of the gel. They are common succulent plants, and aloe vera is just one of hundreds of different types of aloe plants. Most people are already very familiar with the medicinal and healing benefits of aloe vera plants. These days you’ll find aloe vera gel in everything from skin and haircare products, to drinks, supplements, and food products.',
        image: 'https://cdn1.medicalnewstoday.com/content/images/articles/318/318591/aloe-vera-plants.jpg',
        sources: 'https://getbusygardening.com/aloe-vera-plant-care/',
        imageSource: 'https://www.medicalnewstoday.com/articles/318591.php'
    },
    {
        name: 'alstroemeria',
        scientificName: 'Alstroemeria',
        meaning: 'devotion',
        description: 'Alstroemeria, commonly called the Peruvian Lily or Lily of the Incas or Parrot Lily is a South American genus of about 50 species of flowering plants, mainly from the cool, mountainous regions in the Andes. Alstroemeria is more like grass where the veins go up the leaves but none branching across. This can also be seen in grasses, Irises and Lilies. Alstroemeria leaves are upside down. The leaf twists as it leaves the stem, so that the bottom is facing upwards.',
        image: 'https://www.thompson-morgan.com/product_images/100/zoom/z-z-Alstroemeria_2.jpg',
        sources: 'https://www.theflowerexpert.com/content/mostpopularflowers/morepopularflowers/alstroemeria',
        imageSource: 'https://www.thompson-morgan.com/p/alstroemeria-indian-summer/p94168TM'
    },
    {
        name: 'alyssum',
        scientificName: 'Lobularia maritima',
        meaning: 'worth beyond beauty',
        description: 'Sweet alyssum flowers (Lobularia maritima syn. Alyssum maritimum) are useful in alpine rock gardens, borders, planters, hanging baskets and dry zones. They are small plants that may get 3 to 6 inches tall and produce clusters of tiny flowers in clumps. The blooms come in pink, salmon, purple, white and yellow. Flowers arise in June to October and can be encouraged to rebloom by cutting back spent flowers.',
        image: 'https://www.edenbrothers.com/store/media/Seeds-Flowers/SFALY113-1.jpg',
        sources: 'https://www.gardeningknowhow.com/ornamental/flowers/alyssum/growing-sweet-alyssum.htm',
        imageSource: 'https://www.edenbrothers.com/store/sweet_alyssum_tall_white_seeds.html'
    },
    {
        name: 'amaranth',
        scientificName: 'Amaranthus',
        meaning: 'immortality',
        description: 'Amaranthus is a showy and exotic plant, ideal for beds and borders. Amaranthus are the best accent plants, especially in dried flower arrangements. The long, rope like Amaranthus flowers cascade to the ground from tall, erect branching stems. Amaranthus flowers are breathtaking tassels of the darkest red or green.',
        image: 'https://cdn.shopify.com/s/files/1/2550/8730/products/v-amaranth-hopi-red-dye_620x.jpg?v=1546689580',
        sources: 'https://www.theflowerexpert.com/content/growingflowers/flowersandseasons/amaranthus',
        imageSource: 'https://sowtrueseed.com/products/amaranth-hopi-red-dye'
    },
    {
        name: 'amaryllis',
        scientificName: 'Hippeastrum',
        meaning: 'pride',
        description: ' Ornamental plants of Amaryllidaceae family are mistakenly called lilies. Amaryllidaceae species are considered more advanced in evolution than the lilies. Sometimes the amaryllis family is included in the Liliaceae. Amaryllis is cultivated for its beautiful and colorful flowers. The Amaryllis flower stem is erect, 5-60 cm tall, 1-3 cm in diameter, and hollow. A stunning amaryllis flower has dark red markings or different colors appearing on the stalks.',
        image: 'https://images.homedepot-static.com/productImages/4e853726-1fcf-41c6-b36a-fd734cf8b664/svn/van-zyverden-flower-bulbs-21409-64_1000.jpg',
        sources: 'https://www.theflowerexpert.com/content/aboutflowers/exoticflowers/amaryllis',
        imageSource: 'https://www.homedepot.com/p/Van-Zyverden-Amaryllis-Bulbs-Blossom-Peacock-Set-of-1-Bulb-21409/302432302'
    },
    {
        name: 'anemone',
        scientificName: 'Anemone',
        meaning: 'forsaken',
        description: ' The name Anemone comes from Greek and roughly means wind flower, which signifies that the wind that blows the petal open will also, eventually, blow the dead petals away. The Anemone plants are perennial herbs with an underground rootstock, and radical, more or less deeply cut leaves. The elongated flower stem bears one or several, white, red, blue or rarely yellow flowers. There is an involucre of three leaflets below each flower.',
        image: 'https://images.homedepot-static.com/productImages/f5e53c22-237e-45b2-9ebf-206f374f8fbd/svn/van-zyverden-flower-bulbs-834051-64_1000.jpg',
        sources: 'https://www.theflowerexpert.com/content/mostpopularflowers/morepopularflowers/anemone',
        imageSource: 'https://www.homedepot.com/p/Van-Zyverden-Wind-Flowers-Anemones-Meron-Bordeaux-Bulbs-Set-of-25-834051/301135348'
    },
    {
        name: 'angelica',
        scientificName: 'Angelica pachycarpa',
        meaning: 'inspiration',
        description: 'Angelica is a stunning white flower that looks like a white starburst exploding across the green hillsides. One of Iceland’s most cherished herbs, it is not only beautiful, but also appreciated as a nutritious food, a liqueur and an herbal remedy. The roots and stems can be boiled or pickled and are considered a delicacy in all of Scandinavia. The stems were used to make a musical flute, as well as flavor reindeer milk or be crystallized in sugar for desserts. Norwegians use the roots in cooking bread and Finns eat the stems cooked in hot ashes, while also drinking a tea infusion of them.',
        image: 'https://cdn.shopify.com/s/files/1/0223/5181/files/Angelica1.jpg?v=1521496104',
        sources: 'https://www.lotuswei.com/blogs/blog/flowers-angelica-flower-essence',
        imageSource: 'https://www.lotuswei.com/blogs/blog/flowers-angelica-flower-essence'
    },
    {
        name: 'apple',
        scientificName: 'Malus domestica',
        meaning: 'temptation',
        description: 'An apple is a sweet, edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today. Apples have been grown for thousands of years in Asia and Europe and were brought to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek and European Christian traditions.',
        image: 'https://images.homedepot-static.com/productImages/fba55797-ad00-4770-a995-fbe0e9f6fc5d/svn/gurney-s-fruit-trees-plants-61653-64_1000.jpg',
        sources: 'https://en.wikipedia.org/wiki/Apple',
        imageSource: 'https://www.homedepot.com/p/Gurney-s-2-65-Qt-Fuji-Reachables-Apple-Malus-Dwarf-Variety-Live-Fruiting-Tree-1-Pack-61653/307354015'
    },
    {
        name: 'apple blossom',
        scientificName: 'Malus domestica',
        meaning: 'preference',
        description: 'Apple blossom tree is a well-known tree, growing from 20 to 40 feet high, with rigid, crooked, spreading branches, and a rough, blackish bark. The apple tree is a native of Europe, and the Apple blossoms come from April to June. From the fruit, cider is manufactured, and both the fruit and its cider are much used for domestic and medicinal purposes.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Apple_blossoms.jpg',
        sources: 'https://www.theflowerexpert.com/content/aboutflowers/stateflowers/michigan-state-flowers',
        imageSource: 'https://en.wikipedia.org/wiki/Washington_State_Apple_Blossom_Festival'
    },
    {
        name: 'aster',
        scientificName: 'Aster',
        meaning: 'patience',
        description: 'Asters are also called as Starworts, Michaelmas Daisies, or Frost Flowers. Asters are found chiefly in North America, with some species extending into South America; others are distributed throughout Europe and Asia. The word Aster is of Greek derivation and refers to the Starlike flowers that can be white, red, pink, purple, lavender and blue, mostly with yellow centers. ',
        image: 'https://www.ftd.com/blog/content/uploads/2016/08/hero-aster-meanings-720x480.jpg',
        sources: 'https://www.theflowerexpert.com/content/growingflowers/flowersandseasons/aster',
        imageSource: 'https://www.ftd.com/blog/share/aster-meaning-and-symbolism'
    },
    {
        name: 'azalea',
        scientificName: 'Rhododendron',
        meaning: 'fragile and ephemeral passion',
        description: 'Azaleas are flowering shrubs in the genus Rhododendron, particularly the former sections Tsutsuji (evergreen) and Pentanthera (deciduous). Azaleas bloom in the spring (May and June in the temperate Northern Hemisphere),[1] their flowers often lasting several weeks. Shade tolerant, they prefer living near or under trees. They are part of the family Ericaceae.',
        image: 'https://www.directgardening.com/1718-thickbox_default/pink-azalea.jpg',
        sources: 'https://en.wikipedia.org/wiki/Azalea',
        imageSource: 'https://www.directgardening.com/742-shrubs/7180-pink-azalea#/quantity-1'
    },
    {
        name: `baby's breath`,
        scientificName: 'Gypsophila paniculata',
        meaning: 'everlasting love',
        description: `Baby's Breath, is a bushy plant with branching habit bearing dainty small flowers on long slender stems. It is native to Central and Eastern Europe. Baby's Breath is a tender and delicate annual. Baby's Breath is a popular flower to accent bouquets, corsages and flower vases, especially as dried flower, besides being a popular flower in the home garden as well.`,
        image: 'https://www.partiesbymartins.com/image/cache/data/Floral%20March%202014/Bulk%20Floral/Floral%20Babys%20Breath-600x600.jpg',
        sources: 'https://www.theflowerexpert.com/content/mostpopularflowers/morepopularflowers/gypsophilia',
        imageSource: 'https://www.partiesbymartins.com/babys-breath'
    },
    {
        name: `bachelor's button`,
        scientificName: 'Centaurea cyanus',
        meaning: 'single blessedness',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'basil',
        scientificName: 'Ocimum basilicum',
        meaning: 'hate',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'bay leaf',
        scientificName: 'Laurus nobilis',
        meaning: 'i change but in death',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'begonia',
        scientificName: 'Begonia',
        meaning: 'caution',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'bellflower',
        scientificName: 'Campanula',
        meaning: 'gratitude',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'bells of Ireland',
        scientificName: 'Moluccella laevis',
        meaning: 'good luck',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'bird of paradise',
        scientificName: 'Strelitzia reginae',
        meaning: 'magnificence',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'blackberry',
        scientificName: 'Rubus',
        meaning: 'envy',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'black-eyed Susan',
        scientificName: 'Rudbeckia',
        meaning: 'justice',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'bluebell',
        scientificName: 'Hyacinthoides non-scripta',
        meaning: 'constancy',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'bougainvillea',
        scientificName: 'Bougainvillea spectabilis',
        meaning: 'passion',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'bouvardia',
        scientificName: 'Bouvardia',
        meaning: 'enthusiasm',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'broom',
        scientificName: 'Cytisus',
        meaning: 'humility',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'buttercup',
        scientificName: 'Ranunculus acris',
        meaning: 'ingratitude',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'cabbage',
        scientificName: 'Brassica oleracea',
        meaning: 'profit',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'cactus',
        scientificName: 'Opuntia',
        meaning: 'ardent love',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'calla lily',
        scientificName: 'Zantedeschia aethiopica',
        meaning: 'modesty',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'camellia',
        scientificName: 'Camellia',
        meaning: 'my destiny is in your hands',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'candytuft',
        scientificName: 'Iberis',
        meaning: 'indifference',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'canterbury bells',
        scientificName: 'Campanula medium',
        meaning: 'constancy',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'carnation (pink)',
        scientificName: 'Dianthus caryophyllus',
        meaning: 'i will never forget you',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'carnation (red)',
        scientificName: 'Dianthus caryophyllus',
        meaning: 'my heart breaks',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'carnation (striped)',
        scientificName: 'Dianthus caryophyllus',
        meaning: 'i cannot be with you',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'carnation (white)',
        scientificName: 'Dianthus caryophyllus',
        meaning: 'sweet and lovely',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'carnation (yellow)',
        scientificName: 'Dianthus caryophyllus',
        meaning: 'disdain',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'celandine',
        scientificName: 'Chelidonium majus',
        meaning: 'joys to come',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'chamomile',
        scientificName: 'Matricaria recutita',
        meaning: 'energy in adversity',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'cherry blossom',
        scientificName: 'Prunus cerasus',
        meaning: 'impermanence',
        description: 'Cherry Blossoms are some of the most beautiful flowers, coming in bright colors. The Cherry Blossom tree in full bloom, during the arrival of spring, is one of the most beautiful sights to behold. The Japanese Cherry starts flowering profusely from the first warmer days in April, heralding the coming of spring. The pink or white flowers grow in racemose clusters at nodes on short spurs. They are past flowering early in May.',
        image: 'https://d384u2mq2suvbq.cloudfront.net/public/spree/products/1597/jumbo/Japanese-Cherry-Blossom-Fragrance-Oil.jpg?1529607178',
        sources: 'https://www.theflowerexpert.com/content/mostpopularflowers/morepopularflowers/cherry-blossom',
        imageSource: 'https://www.candlescience.com/fragrance/japanese-cherry-blossom-fragrance-oil'
    },
    {
        name: 'chervil',
        scientificName: 'Anthriscus',
        meaning: 'sincerity',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'chestnut',
        scientificName: 'Castanea sativa',
        meaning: 'do me justice',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'chicory',
        scientificName: 'Cichorium intybus',
        meaning: 'frugality',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'chrysanthemum',
        scientificName: 'Chrysanthemum',
        meaning: 'truth',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'cinquefoil',
        scientificName: 'Potentilla',
        meaning: 'beloved daughter',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'clematis',
        scientificName: 'Clematis',
        meaning: 'poverty',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'clove',
        scientificName: 'Syzgium aromaticum',
        meaning: 'i have loved you and you have not known it',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'clover (white)',
        scientificName: 'Trifolium',
        meaning: 'think of me',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'cockscomb',
        scientificName: 'Celosia',
        meaning: 'affectation',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'columbine',
        scientificName: 'Aquilegia',
        meaning: 'desertion',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'coreopsis',
        scientificName: 'Coreopsis',
        meaning: 'always cheerful',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'coriander',
        scientificName: 'Coriandrum sativum',
        meaning: 'hidden Worth',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'corn',
        scientificName: 'Zea mays',
        meaning: 'riches',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'cosmos',
        scientificName: 'Cosmos bipinnatus',
        meaning: 'joy in love and life',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'cowslip',
        scientificName: 'Primula veris',
        meaning: 'pensiveness',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'crab-apple blossom',
        scientificName: 'Malus hupehensis',
        meaning: 'ill-tempered',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'cranberry',
        scientificName: 'Vaccinium',
        meaning: 'cure for heartache',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'crocus',
        scientificName: 'Crocus',
        meaning: 'youthful gladness',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'currant',
        scientificName: 'Ribes',
        meaning: 'thy frown will kill me',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'cyclamen',
        scientificName: 'Cyclamen',
        meaning: 'timid hope',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'cypress',
        scientificName: 'Cupressus',
        meaning: 'mourning',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'daffodil',
        scientificName: 'Narcissus',
        meaning: 'new beginnings',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'dahlia',
        scientificName: 'Dahlia',
        meaning: 'dignity',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'daisy',
        scientificName: 'Bellis',
        meaning: 'innocence',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'daisy, gerber',
        scientificName: 'Gerbera',
        meaning: 'cheerfulness',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'dandelion',
        scientificName: 'Taraxacum',
        meaning: 'rustic oracle',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'daphne',
        scientificName: 'Daphne',
        meaning: 'i would not have you otherwise',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'daylily',
        scientificName: 'Hemerocallis',
        meaning: 'coquetry',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'delphinium',
        scientificName: 'Delphinium',
        meaning: 'levity',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'dianthus',
        scientificName: 'Dianthus',
        meaning: 'make haste',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'dittany',
        scientificName: 'Dictamnus albus',
        meaning: 'childbirth',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'dogwood',
        scientificName: 'Cornus',
        meaning: 'love undiminished by adversity',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'dragon plant',
        scientificName: 'Dracaena',
        meaning: 'you are near a snare',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'edelweiss',
        scientificName: 'Leontopodium alpinum',
        meaning: 'noble courage',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'elder',
        scientificName: 'Sambucus',
        meaning: 'compassion',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'eucalyptus',
        scientificName: 'Eucalyptus',
        meaning: 'protection',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'euphorbia',
        scientificName: 'Euphorbia',
        meaning: 'persistence',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'evening primrose',
        scientificName: 'Oenothera biennis',
        meaning: 'inconstancy',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'everlasting pea',
        scientificName: 'Lathyrus latifolius',
        meaning: 'lasting pleasure',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'fennel',
        scientificName: 'Foeniculum vulgare',
        meaning: 'strength',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'fern',
        scientificName: 'Polypodiophyta',
        meaning: 'sincerity',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'fern, maidenhair',
        scientificName: 'Adiantum capillus-veneris',
        meaning: 'secrecy',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'feverfew',
        scientificName: 'Tanacetum parthenium',
        meaning: 'warmth',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'fig',
        scientificName: 'Ficus carica',
        meaning: 'argument',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'flax',
        scientificName: 'Linum usitatissimum',
        meaning: 'i feel your kindness',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'forget-me-not',
        scientificName: 'Myosotis',
        meaning: 'forget me not',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'forsythia',
        scientificName: 'Forsythia',
        meaning: 'anticipation',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'foxglove',
        scientificName: 'Digitalis purpurea',
        meaning: 'insincerity',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'freesia',
        scientificName: 'Freesia',
        meaning: 'lasting friendship',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'fuchsia',
        scientificName: 'Fuchsia',
        meaning: 'humble love',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'gardenia',
        scientificName: 'Gardenia',
        meaning: 'refinement',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'gentian',
        scientificName: 'Gentiana',
        meaning: 'intrinsic worth',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'geranium, oak-leaf',
        scientificName: 'Pelargonium',
        meaning: 'true friendship',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'geranium, pencil-leaf',
        scientificName: 'Pelargonium',
        meaning: 'ingenuity',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'geranium, scarlett',
        scientificName: 'Pelargonium',
        meaning: 'stupidity',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'geranium, wild',
        scientificName: 'Pelargonium',
        meaning: 'steadfast piety',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'ginger',
        scientificName: 'Zingiber',
        meaning: 'strength',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'gladiolus',
        scientificName: 'Gladiolus',
        meaning: 'you pierce my heart',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'goldenrod',
        scientificName: 'Solidago',
        meaning: 'careful encouragement',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'grapevine',
        scientificName: 'Vitid vinifera',
        meaning: 'abundance',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'grass',
        scientificName: 'Poaceae',
        meaning: 'submission',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'hawthorn',
        scientificName: 'Crataegus monogyna',
        meaning: 'hope',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'hazel',
        scientificName: 'Corylus',
        meaning: 'reconciliation',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'heath',
        scientificName: 'Erica',
        meaning: 'solitude',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'heather',
        scientificName: 'Calluna vugaris',
        meaning: 'protection',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'helenium',
        scientificName: 'Helenium',
        meaning: 'tears',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'heliotrope',
        scientificName: 'Heliotropium',
        meaning: 'devoted affection',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'hibiscus',
        scientificName: 'Hibiscus',
        meaning: 'delicate beauty',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'holly',
        scientificName: 'Ilex',
        meaning: 'foresight',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'hollyhock',
        scientificName: 'Alcea',
        meaning: 'ambition',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'honesty',
        scientificName: 'Lunaria annua',
        meaning: 'honesty',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'honeysuckle',
        scientificName: 'Lonicera',
        meaning: 'devotion',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'hyacinth (blue)',
        scientificName: 'Hyacinthus orientalis',
        meaning: 'constancy',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'hyacinth (purple)',
        scientificName: 'Hyacinthus orientalis',
        meaning: 'please forgive me',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'hyacinth (white)',
        scientificName: 'Hyacinthus orientalis',
        meaning: 'beauty',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'hydrangea',
        scientificName: 'Hydrangea',
        meaning: 'dispassion',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'ice plant',
        scientificName: 'Carpobrotus chilensis',
        meaning: 'your looks freeze me',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'impatiens',
        scientificName: 'Impatiens',
        meaning: 'impatience',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'iris',
        scientificName: 'Iris',
        meaning: 'message',
        description: 'Irises are wonderful garden plants. The word Iris means rainbow. Irises come in many colors such as blue and purple, white and yellow, pink and orange, brown and red, and even black. The genus Iris has about 200 species and is native to the North Temperate regions of the world. The habitat of irises also varies a lot. Some irises grow in deserts, some in swamps, some in the cold far north, and many in temperate climates. Bearded Iris and Siberian Iris are two of the most common types of irises grown.',
        image: 'https://images.homedepot-static.com/productImages/cc37562f-15e0-40ca-8713-f83c7a0cb31e/svn/breck-s-perennials-67716-64_1000.jpg',
        sources: 'https://www.theflowerexpert.com/content/mostpopularflowers/morepopularflowers/iris',
        imageSource: 'https://www.homedepot.com/p/Breck-s-Fatal-Attraction-Bearded-Iris-2-Toned-Blue-Flowers-Live-Bareroot-Plant-67716/307472721'
    },
    {
        name: 'ivy',
        scientificName: 'Hedera helix',
        meaning: 'fidelity',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: `jacob's ladder`,
        scientificName: 'Polemonium',
        meaning: 'come down',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'jasmine, carolina',
        scientificName: 'Gelsemium sempervirens',
        meaning: 'separation',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'jasmine, indian',
        scientificName: 'Jasminum multiflorum',
        meaning: 'attachment',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'jasmine (white)',
        scientificName: 'Jasminum officinale',
        meaning: 'amiability',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'jonquil',
        scientificName: 'Narcissus jonquilla',
        meaning: 'desire',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'laburnum',
        scientificName: 'Laburnum anagyroides',
        meaning: 'pensive beauty',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: `lady's slipper`,
        scientificName: 'Cypripedium',
        meaning: 'capricious beauty',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'lantana',
        scientificName: 'Lantana',
        meaning: 'rigor',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'larch',
        scientificName: 'Larix decidua',
        meaning: 'audacity',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'larkspur',
        scientificName: 'Consolida',
        meaning: 'lightness',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'laurel',
        scientificName: 'Laurus nobilis',
        meaning: 'glory and success',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'lavender',
        scientificName: 'Lavandula',
        meaning: 'mistrust',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'lemon',
        scientificName: 'Citrus limon',
        meaning: 'zest',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'lemon blossom',
        scientificName: 'Citrus limon',
        meaning: 'discretion',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'lettuce',
        scientificName: 'Lactuca sativa',
        meaning: 'coldheartedness',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'liatris',
        scientificName: 'Liatrus',
        meaning: 'i will try again',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'lichen',
        scientificName: 'Parmelia',
        meaning: 'dejection',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'lilac',
        scientificName: 'Syringa',
        meaning: 'first emotions of love',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'lily',
        scientificName: 'Lilum',
        meaning: 'majesty',
        description: ' Lilies of different kinds are commonly found all across the globe. Lilies come in different shapes, sizes and colors. Lilies are really excellent plants for beds and borders. Lilies are suitable for use in a shrub border, as accent plants, a formal or naturalized pool planting. Even some of the small species would fit perfectly in an alpine rock garden.',
        image: 'https://www.whiteflowerfarm.com/mas_assets/cache/image/5/1/c/d/20941.Jpg',
        sources: 'https://www.whiteflowerfarm.com/lily-flower-bulbs',
        imageSource: ''
    },
    {
        name: 'lily of the valley',
        scientificName: 'Convallaria majalis',
        meaning: 'return of happiness',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'linden tree',
        scientificName: 'Tilia',
        meaning: 'conjugal love',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'lisianthus',
        scientificName: 'Eustoma',
        meaning: 'appreciation',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'lobelia',
        scientificName: 'Lobelia',
        meaning: 'malevolence',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'lotus',
        scientificName: 'Nelumbo nucifera',
        meaning: 'purity',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'love-in-a-mist',
        scientificName: 'Nigella damascena',
        meaning: 'perplexity',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'love-lies-bleeding',
        scientificName: 'Amaranthus caudatus',
        meaning: 'hopeless but not helpness',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'lungworth',
        scientificName: 'Pulmonaria',
        meaning: 'you are my life',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'lupine',
        scientificName: 'Lupinus',
        meaning: 'imagination',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'magnolia',
        scientificName: 'Magnolia',
        meaning: 'dignity',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'marigold',
        scientificName: 'Calendula',
        meaning: 'grief',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'marjoram',
        scientificName: 'Origanum',
        meaning: 'blushes',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'marsh marigold',
        scientificName: 'Caltha palustris',
        meaning: 'desire for riches',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'meadow saffron',
        scientificName: 'Colchicum autumnale',
        meaning: 'my best days are past',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'meadowsweet',
        scientificName: 'Filipendula ulmaria',
        meaning: 'uselessness',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'michaelmas daisy',
        scientificName: 'Aster amellus',
        meaning: 'farewell',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'mignonette',
        scientificName: 'Reseda odorata',
        meaning: 'your qualities surpass your charms',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'mimosa',
        scientificName: 'Mimosa',
        meaning: 'sensitivity',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'mistletoe',
        scientificName: 'Viscum',
        meaning: 'i surmount all obstacles',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'mock orange',
        scientificName: 'Pittosporum undulatum',
        meaning: 'counterfeit',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'monkshood',
        scientificName: 'Aconitum',
        meaning: 'chivalry',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'morning glory',
        scientificName: 'Ipomoea',
        meaning: 'coquetry',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'moss',
        scientificName: 'Bryopsida',
        meaning: 'maternal love',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'mulletin',
        scientificName: 'Verbascum',
        meaning: 'take courage',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'mustard',
        scientificName: 'Brassica',
        meaning: 'i am hurt',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'myrtle',
        scientificName: 'Myrtus',
        meaning: 'love',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'narcissus',
        scientificName: 'Narcissus',
        meaning: 'self-love',
        description: ' Narcissus is one of the most popular flowers in the world and the most popular flower in Germany. Narcissus JonquilaA spring-flowering bulb, Narcissus is the name of a genus which includes flower bulbs like Daffodils, Jonquils, Paper whites and so forth. Narcissi (plural form of Narcissus) are easily grown from bulbs. The word Narcissus is derived from the Greek word narke, meaning numbness or stupor. Some attribute the naming of the flower to its narcotic fragrance while others debate that it is associated with the poisonous nature of the Narcissus bulbs.',
        image: 'https://images.homedepot-static.com/productImages/0f1bedcb-8b6a-455f-a953-a3ee53e97c47/svn/van-bourgondien-flower-bulbs-87828-64_1000.jpg',
        sources: 'https://www.theflowerexpert.com/content/mostpopularflowers/narcissus',
        imageSource: 'https://www.homedepot.com/p/Van-Bourgondien-Ice-Follies-Large-Cupped-Daffodil-Narcissus-Bulbs-25-Pack-87828/307775088'
    },
    {
        name: 'nasturtium',
        scientificName: 'Tropaelum majus',
        meaning: 'impetuous love',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'nettle',
        scientificName: 'Urtica',
        meaning: 'cruelty',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'oats',
        scientificName: 'Avena sativa',
        meaning: 'the witching soul of music',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'oleander',
        scientificName: 'Nerim oleander',
        meaning: 'beware',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'olive',
        scientificName: 'Olea europaea',
        meaning: 'peace',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'orange',
        scientificName: 'Citrus sinesis',
        meaning: 'generosity',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'orange blossom',
        scientificName: 'Citrus sinensis',
        meaning: 'your purity equals your loveliness',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'orchid',
        scientificName: 'Orchidaceae',
        meaning: 'refined beauty',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'oregano',
        scientificName: 'Origanum vulgare',
        meaning: 'joy',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'pansy',
        scientificName: 'Viola',
        meaning: 'think of me',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'parsley',
        scientificName: 'Petroselinum crispum',
        meaning: 'festivity',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'passionflower',
        scientificName: 'Passiflora',
        meaning: 'faith',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'peach',
        scientificName: 'Prunus persica',
        meaning: 'your charms are unequaled',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'peach blossom',
        scientificName: 'Prunus persica',
        meaning: 'i am your captive',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'pear',
        scientificName: 'Pyrus',
        meaning: 'affection',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'pear blossom',
        scientificName: 'Pyrus',
        meaning: 'comfort',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'peony',
        scientificName: 'Paeonia',
        meaning: 'anger',
        description: 'Peonies produce large, often fragrant flowers. Blooming in late Spring and early summer, Peonies come in shades of red to white or yellow. Peonies are native to Asia, Southern Europe and Western North America. Peonies are hardy flowering plants that need little care and live through severe winters. After becoming established in a garden, Peonies bloom each spring for many years. Peonies are also extensively grown as ornamental plants for their very large, often scented cut flowers.',
        image: 'https://images.homedepot-static.com/productImages/78eb16ea-7e7a-457b-86fc-8b517d39c5ed/svn/van-zyverden-flower-bulbs-21551-64_1000.jpg',
        sources: 'https://www.theflowerexpert.com/content/mostpopularflowers/morepopularflowers/peonies',
        imageSource: 'https://www.homedepot.com/p/Van-Zyverden-Peonies-Bulbs-Sarah-Bernhardt-Set-of-3-Roots-21551/302432286'
    },
    {
        name: 'peppermint',
        scientificName: 'Mentha',
        meaning: 'warmth of feeling',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'perwinkle',
        scientificName: 'Vinca minor',
        meaning: 'tender recollections',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'persimmon',
        scientificName: 'Diospyros kaki',
        meaning: `bury me amid nature's beauty`,
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'petunia',
        scientificName: 'Petunia',
        meaning: 'your prensence soothes me',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'phlox',
        scientificName: 'Phlox',
        meaning: 'our souls are united',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'pineapple',
        scientificName: 'Amanas comosus',
        meaning: 'you are perfect',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'pink',
        scientificName: 'Dianthus',
        meaning: 'pure love',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'plum',
        scientificName: 'Prunus domestica',
        meaning: 'keep your promises',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'poinsettia',
        scientificName: 'Euphorbia pulcherrima',
        meaning: 'be of good cheer',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'polyanthus',
        scientificName: 'Primula',
        meaning: 'confidence',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'pomegranate',
        scientificName: 'Punica granatum',
        meaning: 'foolishness',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'pomegranate blossom',
        scientificName: 'Punica granatum',
        meaning: 'mature elegance',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'poplar (black)',
        scientificName: 'Populus nigra',
        meaning: 'courage',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'poplar (white)',
        scientificName: 'Populus alba',
        meaning: 'time',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'poppy',
        scientificName: 'Papaver',
        meaning: 'fantastic Extravagance',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'potato',
        scientificName: 'Solanum tuberosum',
        meaning: 'benevolence',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'potato vine',
        scientificName: 'Solanum jasminoides',
        meaning: 'you are delicious',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'primrose',
        scientificName: 'Primula',
        meaning: 'childhood',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'protea',
        scientificName: 'Protea',
        meaning: 'courage',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'purple cornflower',
        scientificName: 'Echinacea purpurea',
        meaning: 'strength and health',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: `queen anne's lace`,
        scientificName: 'Ammi majus',
        meaning: 'fantasy',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'quince',
        scientificName: 'Cydonia oblonga',
        meaning: 'temptation',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'ranunculus',
        scientificName: 'Ranunculus asiaticus',
        meaning: 'you are radiant with charms',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'raspberry',
        scientificName: 'Rubus',
        meaning: 'remorse',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'redbud',
        scientificName: 'Cercis',
        meaning: 'betrayal',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'rhododendron',
        scientificName: 'Rhododendron',
        meaning: 'beware',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'rhubarb',
        scientificName: 'Rheum',
        meaning: 'advice',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'rose (burgundy)',
        scientificName: 'Rosa',
        meaning: 'unconscious beauty',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'rose (moss)',
        scientificName: 'Rosa',
        meaning: 'confession of love',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'rose (orange)',
        scientificName: 'Rosa',
        meaning: 'fascination',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'rose (pale peach)',
        scientificName: 'Rosa',
        meaning: 'modesty',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'rose (pink)',
        scientificName: 'Rosa',
        meaning: 'grace',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'rose (purple)',
        scientificName: 'Rosa',
        meaning: 'enchantment',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'rose (red)',
        scientificName: 'Rosa',
        meaning: 'love',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'rose (white)',
        scientificName: 'Rosa',
        meaning: 'a heart unacquainted with love',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'rose (yellow)',
        scientificName: 'Rosa',
        meaning: 'infidelity',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'rosemary',
        scientificName: 'Rosmarinus officinalis',
        meaning: 'remembrance',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'saffron',
        scientificName: 'Crocus sativus',
        meaning: 'beware of excess',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'sage',
        scientificName: 'Salvia officinalis',
        meaning: 'good health and long life',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: `saint-John's-wort`,
        scientificName: 'Hypericum perforatum',
        meaning: 'superstition',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'saxifraga',
        scientificName: 'Saxifraga',
        meaning: 'affection',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'scabiosa',
        scientificName: 'Scabiosa',
        meaning: 'unfortunate love',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'scarlet pimpernel',
        scientificName: 'Anagallis arvensis',
        meaning: 'change',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'snapdragon',
        scientificName: 'Antirrhinum majus',
        meaning: 'presumption',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'snowdrop',
        scientificName: 'Galanthus',
        meaning: 'consolation and hope',
        description: ' There are 75 different species and varieties of Snowdrops. They are all white. This is probably why only two species are commonly cultivated. The first is Galanthus nivalis, usually known as the Garden Snowdrop. A Snowdrop plant looks like three drops of milk hanging from a stem. This accounts for the Latin name Galanthus which means milk-white flowers. These Snowdrop bulbs, are originally from Europe and Asia Minor.',
        image: 'https://images.homedepot-static.com/productImages/45d914f3-b469-46d2-876b-69bf1588a03f/svn/van-zyverden-flower-bulbs-21487-64_1000.jpg',
        sources: 'https://www.theflowerexpert.com/content/aboutflowers/wildflowers/snow-drop',
        imageSource: 'https://www.homedepot.com/p/Van-Zyverden-Galanthus-Bulbs-Snowdrops-Set-of-25-21487/302431547'
    },
    {
        name: 'sorrel',
        scientificName: 'Rumex acetosa',
        meaning: 'parental affection',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'speedwell',
        scientificName: 'Veronica',
        meaning: 'fidelity',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'spirea',
        scientificName: 'Spiraea',
        meaning: 'victory',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'star-of-bethlehem',
        scientificName: 'Ornithogalum umbellatum',
        meaning: 'purity',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'starwort',
        scientificName: 'Stellaria',
        meaning: 'welcome',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'stephanotis',
        scientificName: 'Stephanotis floribunda',
        meaning: 'happiness in marriage',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'stock',
        scientificName: 'Malcolmia maritima',
        meaning: 'you will always be beautiful to me',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'stonecrop',
        scientificName: 'Sedum',
        meaning: 'tranquility',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'strawberry',
        scientificName: 'Fragaria',
        meaning: 'perfection',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'sunflower',
        scientificName: 'Helianthus annuus',
        meaning: 'false riches',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'sweet briar',
        scientificName: 'Rosa rubiginosa',
        meaning: 'simplicity',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'sweet pea',
        scientificName: 'Lathyrus odoratus',
        meaning: 'delicate pleasures',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'sweet william',
        scientificName: 'Dianthus barbatus',
        meaning: 'gallantry',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'tansy',
        scientificName: 'Tanacetum',
        meaning: 'i declare war against you',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'thistle',
        scientificName: 'Cirsium',
        meaning: 'misanthropy',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'thrift',
        scientificName: 'Armeria',
        meaning: 'sympathy',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'thyme',
        scientificName: 'Thymus',
        meaning: 'activity',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'trachelium',
        scientificName: 'Trachelium',
        meaning: 'neglected beauty',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'trillium',
        scientificName: 'Trillium',
        meaning: 'modest beauty',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'trumpet vine',
        scientificName: 'Campsis radicans',
        meaning: 'fame',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'tuberose',
        scientificName: 'Polianthes tuberosa',
        meaning: 'dangerous pleasures',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'tulip',
        scientificName: 'Tulipa',
        meaning: 'declaration of love',
        description: 'The tulip is the most popular of the spring-flowering bulbs. It also offers the greatest variety in color, shape, and form of any bulb. Although tulips are associated with Holland, they actually are not native there; tulips descend mostly from species originating in the Middle East. Tulips typically bear cup-shaped flowers in almost every shade but true blue. They can be double or single, fringed or twisted, perfumed or nonscented. The plants range in size from rock garden miniatures to 2 1/2 feet or more in height. Most have broad leaves that quickly fade away in summer heat. Individual flowers last barely two weeks. However, since tulips offer various flowering seasons, you can have tulips in bloom from snow melt to the beginning of summer.',
        image: 'https://images.homedepot-static.com/productImages/71c23308-8d69-46bd-b9d3-af5a40c6e45c/svn/garden-state-bulb-flower-bulbs-hof18-05-64_1000.jpg',
        sources: 'https://home.howstuffworks.com/tulip.htm',
        imageSource: 'homedepot-static.com'
    },
    {
        name: 'turnip',
        scientificName: 'Brassica rapa',
        meaning: 'charity',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'verbena',
        scientificName: 'Verbena',
        meaning: 'pray for me',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'vetch',
        scientificName: 'Vicia',
        meaning: 'i cling to thee',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'violet',
        scientificName: 'Viola',
        meaning: 'modest worth',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'wallflower',
        scientificName: 'Cheiranthus',
        meaning: 'fidelity in adversity',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'water lily',
        scientificName: 'Nymphaea',
        meaning: 'purity of heart',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'waxflower',
        scientificName: 'Hoya',
        meaning: 'susceptibility',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'wheat',
        scientificName: 'Triticum',
        meaning: 'prosperity',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'white Monte Casino',
        scientificName: 'Aster',
        meaning: 'patience',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'willow herb',
        scientificName: 'Epilobium',
        meaning: 'pretension',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'winter cherry',
        scientificName: 'Physalis alkekengi',
        meaning: 'deception',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'wisteria',
        scientificName: 'Wisteria',
        meaning: 'welcome',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'witch hazel',
        scientificName: 'Hamamelis',
        meaning: 'a spell',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'yarrow',
        scientificName: 'Achillea millefolium',
        meaning: 'cure for a broken heart',
        description: '',
        image: '',
        sources: '',
        imageSource: ''
    },
    {
        name: 'zinnia',
        scientificName: 'Zinnia',
        meaning: 'i mourn your absence',
        description: '',
        image: '',
        sources: '',
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