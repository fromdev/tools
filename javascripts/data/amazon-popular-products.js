    'use strict';
    const AmazonPopularProducts = {};
    AmazonPopularProducts.LIMIT = 10;
    AmazonPopularProducts.showProducts = (context) => {
        const rows = [];
        rows.push(context.createTableHeader());
        const cleanList = AmazonPopularProducts.list.filter(e => e && e.asin && e.name);
        const someRandomProducts = (ArrayUtils) 
            ? ArrayUtils.someRandomItems(cleanList, AmazonPopularProducts.LIMIT)
            : [];
        someRandomProducts.forEach(r => rows.push(context.createRow(r)));
        $(context.containerId).html(`<table class="table table-hover"></table>`);
        const $table = $(`${context.containerId} table`);
        $table.append(rows.join(''));
    };
    AmazonPopularProducts.list = [
        {
            name: 'Apple EarPods with Lightning Connector - White',
            asin: 'B01M0GB8CC'
        },
        {
            name: 'Kindle Paperwhite ? Now Waterproof with 2x the Storage ? Ad-Supported',
            asin: 'B07CXG6C9W'
        },
        {
            name: 'Apple iPhone SE (2nd Generation), 64GB, Black - Unlocked (Renewed Premium)',
            asin: 'B08R98BFZS'
        },
        {
            name: 'SAMSUNG 65-inch Class Q80A Series ? QLED 4K UHD Smart TV with Alexa Built-in',
            asin: 'B093KSGPK3'
        },
        {
            name: '2020 Apple MacBook Pro with Intel Processor (13-inch, 16GB RAM, 1TB SSD Storage) - Silver',
            asin: 'B08821611Y'
        },
        {
            name: 'SENNHEISER Momentum 3 Wireless Noise Cancelling Headphones with Alexa, Auto On/Off, Smart Pause Functionality and Smart Control App, Black',
            asin: 'B07VW98ZKG'
        },
        {
            name: 'Fire TV Stick 4K streaming device with Alexa Voice Remote (includes TV controls) | Dolby Vision',
            asin: 'B079QHML21'
        },
        {
            name: 'SanDisk Ultra 128GB SDXC UHS-I Memory Card up to 80MB/s (SDSDUNC-128G-GN6IN), Black',
            asin: 'B0143IISD0'
        },
        {
            name: 'Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal',
            asin: 'B07FZ8S74R'
        },
        {
            name: 'TeeTurtle | The Original Reversible Octopus Plushie | Patented Design | Black + Gray | Happy + Angry | Show your mood without saying a word!',
            asin: 'B07H4YQF3Q'
        },
        {
            name: '$10 PlayStation Store Gift Card [Digital Code]',
            asin: 'B00GAC1D2G'
        },
        {
            name: 'Crocs Mens and Womens Classic Clog',
            asin: 'B08KHCJJMF'
        },
        {
            name: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
            asin: '0735211299'
        },
        {
            name: 'GE Profile OPAL01GEPKT Opal | Countertop Nugget Ice Maker, Stainless Steel Wrap with Gray Accents & LED Lighting',
            asin: 'B07YF9SGBW'
        },
        {
            name: 'Paper Mate Flair Felt Tip Pens',
            asin: 'B000J09CO6'
        },
        {
            name: 'Soft Tape Measure Double Scale Body 60-inch?White)',
            asin: 'B07MT89MCW'
        },
        {
            name: 'Elmers Glue Stick (E579), Disappearing Purple, 12 Sticks',
            asin: 'B003ULCZ7M'
        },
        {
            name: 'Pampers Sensitive Water Based Baby Diaper Wipes',
            asin: 'B01C3H4ZTY'
        },
        {
            name: 'Hydrocolloid Acne Pimple Patch for Zits and Blemishes',
            asin: 'B074PVTPBW'
        },
        {
            name: 'Schick Hydro Silk Touch-Up Multipurpose Exfoliating Dermaplaning Tool, Eyebrow Razor, and Facial Razor with Precision Cover',
            asin: 'B0787GLBMV'
        },
        {
            name: 'Blink Mini ? Compact indoor plug-in smart security camera, 1080 HD',
            asin: 'B07X6C9RMF'
        },
        {
            name: 'Ear Wax Removal Endoscope Otoscope, Earwax Remover Tools',
            asin: 'B08PV15RGG'
        },
        {
            name: 'Compact Binoculars with Clear Low Light Vision',
            asin: 'B0756BXDTX'
        },
        {
            name: 'Apple 20W USB-C Power Adapter',
            asin: 'B08L5M9BTJ'
        },
        {
            name: 'Gildan Mens Crew T-Shirts, Multipack',
            asin: 'B07CX4V3CW'
        },
        {
            name: 'Dickies Mens Dri-tech Moisture Control Crew Socks Multipack',
            asin: 'B01N6YAVNM'
        },
        {
            name: 'Instant Indian Head Cent Collection - 10 Different More Than 100 Year Old Dates',
            asin: 'B00ZDH0K5A'
        },
        {
            name: 'Sabrent 4-Port USB 2.0 Hub with Individual LED lit Power Switches (HB-UMLS)',
            asin: 'B00BWF5U0M'
        },
        {
            name: 'ASUS Chromebook CX1, 11.6" HD NanoEdge Display, Intel Celeron N3350 Processor, 32GB eMMC,  4GB RAM, Spill-resistant Keyboard, Chrome OS, Transparent Silver, CX1100CNA-AS42',
            asin: 'B08XTB1NNH'
        },
        {
            name: 'Fire 7 Kids Tablet, 7" Display, ages 3-7, 16 GB, Blue Kid-Proof Case',
            asin: 'B07H8WS1FT'
        },
        {
            name: 'Amazon Basics 4 Pack AA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack',
            asin: 'B07NVTGRVZ'
        },
        {
            name: 'Bounty Quick-Size Paper Towels, 16 Family Rolls = 40 Regular Rolls',
            asin: 'B079VP6DH5'
        },
        {
            name: 'Vital Proteins Chocolate Hydrolyzed Collagen Powder Supplement (Type I, III) for Skin Hair Nail Joint',
            asin: 'B098RX87V2'
        },
        {
            name: 'Lysol Disinfectant Wipes, Multi-Surface Antibacterial Cleaning Wipes',
            asin: 'B00Q70RCW6'
        },
        {
            name: 'Garden of Life Probiotic Supplement Capsules for Women, Dr. Formulated Once Daily for Digestive Health, Shelf Stable, 30 Count',
            asin: 'B00Y8MP4G6'
        },
        {
            name: 'Listerine Total Care Anticavity Mouthwash, 6 Benefit Fluoride Mouthwash for Bad Breath and Enamel Strength, Fresh Mint Flavor, 1 L',
            asin: 'B00495Q5OW'
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        },
        {
            name: '',
            asin: ''
        }
    ]
    ;