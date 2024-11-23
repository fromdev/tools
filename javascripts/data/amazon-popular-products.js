    'use strict';
    const AmazonPopularProducts = {};
    AmazonPopularProducts.LIMIT = 15;
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
            name: 'Crocs Mens and Womens Classic Clog',
            asin: 'B08KHCJJMF'
        },
        {
            name: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
            asin: '0735211299'
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
          name: "DEWALT 20V MAX Cordless Drill and Impact Driver, Power Tool Combo Kit with 2 Batteries and Charger (DCK240C2)",
          asin: "B00IJ0ALYS"
        },
        {
          name: "Breville the Smart Oven® Air Fryer Pro, Convection Countertop Oven, Air Fryer Toaster Oven Combo, BOV900BSS, Brushed Stainless Steel",
          asin: "B01N5UPTZS"
        },
        {
          name: "SanDisk 256GB High Endurance Video microSDXC Card with Adapter for Dash Cam and Home Monitoring systems - C10, U3, V30, 4K UHD, Micro SD Card - SDSQQNR-256G-GN6IA",
          asin: "B07P4HBRMV"
        },
        {
          name: "Philips Sonicare ProtectiveClean 5300 Rechargeable Electric Toothbrush, with Pressure Sensor, 3 Cleaning Modes, SmarTimer and QuadPacer, with 2 Bonus Brush Heads, Travel Case, Black, Model HX6423/34",
          asin: "B084TM4XKG"
        },
        {
          name: "Apple AirPods Max Wireless Over-Ear Headphones, Active Noise Cancelling, Transparency Mode, Personalized Spatial Audio, Dolby Atmos, Bluetooth Headphones for iPhone – Space Gray",
          asin: "B08PZHYWJS"
        },
        {
          name: "AMD Ryzen 7 5700X 8-Core, 16-Thread Unlocked Desktop Processor",
          asin: "B09VCHQHZ6"
        },
        {
          name: "WD 20TB Elements Desktop External Hard Drive, USB 3.0 drive for plug-and-play storage - WDBWLG0200HBK-NESN",
          asin: "B09VCXWPQG"
        },
        {
          name: "Sony WH-1000XM5 The Best Wireless Noise Canceling Headphones, Made Of Soft Fit Synthetic Leather, Integrated Processor V1, With 4 Beamforming Microphones, Up To 30-Hour Battery Life, Black",
          asin: "B09XS7JWHH"
        },
        {
          name: "Apple iPad (10th Generation): with A14 Bionic chip, 10.9-inch Liquid Retina Display, 64GB, Wi-Fi 6, 12MP front/12MP Back Camera, Touch ID, All-Day Battery Life – Silver",
          asin: "B0BJLCWFNM"
        },
        {
          name: "Bose QuietComfort Ultra Bluetooth Headphones, Wireless Headphones with Spatial Audio, Over Ear Noise Cancelling Headphones with Mic, Up To 24 Hours of Battery Life, Black",
          asin: "B0CCZ1L489"
        },
        {
          name: "Bose QuietComfort Bluetooth Headphones, Wireless Headphones, Over Ear Noise Cancelling Headphones with Mic, Up To 24 Hours of Battery Life, Black",
          asin: "B0CCZ26B5V"
        },
        {
          name: "PlayStation®5 console (slim)",
          asin: "B0CL61F39H"
        },
        {
          name: "Beats Solo 4 - Wireless Bluetooth On-Ear Headphones, Apple & Android Compatible, Up to 50 Hours of Battery Life - Matte Black",
          asin: "B0CZPLV566"
        },
        {
          name: "MSI GeForce RTX 4070 Ti Super 16G Ventus 3X Black OC Graphics Card (NVIDIA RTX 4070 Ti Super, 256-Bit, Extreme Clock: 2655 MHz, 16GB GDRR6X 21Gbps, HDMI/DP, Ada Lovelace Architecture)",
          asin: "B0D6ZN2P1J"
        },
        {
          name: "Apple AirTag 4 Pack",
          asin: "B0D54JZTHY"
        },
        {
          name: "Apple Watch Series 10 [GPS 46mm case] Smartwatch with Jet Black Aluminium Case with Black Sport Band - M/L. Fitness Tracker, ECG App, Always-On Retina Display, Water Resistant",
          asin: "B0DGHQ2QH6"
        },
        {
          name: "All-new Amazon Kindle Paperwhite Signature Edition (32 GB) – Our fastest Kindle with auto-adjusting front light, wireless charging, and weeks of battery life – Metallic Black",
          asin: "B0C8RR4WN3"
        },
        {
          name: "New Amazon Kindle (16 GB) - Lightest and most compact Kindle, with glare-free display, faster page turns, adjustable front light, and long battery life - Black",
          asin: "B0CNV9F72P"
        },
        {
          name: "All-new Amazon Kindle Paperwhite (16 GB) – Our fastest Kindle ever, with new 7\" glare-free display and weeks of battery life – Black",
          asin: "B0CFPJYX7P"
        },
        {
          name: "Apple 2024 MacBook Air 13-inch Laptop with M3 chip: Built for Apple Intelligence, 13.6-inch Liquid Retina Display, 16GB Unified Memory, 256GB SSD Storage, Backlit Keyboard, Touch ID; Midnight",
          asin: "B0D7ZX2JNV"
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
