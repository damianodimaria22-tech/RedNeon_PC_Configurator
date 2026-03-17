const compatibility = {
    cpu_mobo: {
        'i3-14100f': ['z790-e', 'z790-master', 'z790-aorus', 'msi-z790-edge', 'asrock-z790', 'z890-ace', 'z890-tuf', 'z890-msi'],
        'i3-14100': ['z790-e', 'z790-master', 'z790-aorus', 'msi-z790-edge', 'asrock-z790', 'z890-ace', 'z890-tuf', 'z890-msi'],
        'i5-14400f': ['z790-e', 'z790-master', 'z790-aorus', 'msi-z790-edge', 'asrock-z790', 'z890-ace', 'z890-tuf', 'z890-msi'],
        'i5-14600k': ['z790-e', 'z790-master', 'z790-aorus', 'msi-z790-edge', 'asrock-z790', 'z890-ace', 'z890-tuf', 'z890-msi'],
        'i7-14700k': ['z790-e', 'z790-master', 'z790-aorus', 'msi-z790-edge', 'asrock-z790', 'z890-ace', 'z890-tuf', 'z890-msi'],
        'i7-14700kf': ['z790-e', 'z790-master', 'z790-aorus', 'msi-z790-edge', 'asrock-z790', 'z890-ace', 'z890-tuf', 'z890-msi'],
        'i9-14900k': ['z790-e', 'z790-master', 'z790-aorus', 'msi-z790-edge', 'asrock-z790', 'z890-ace', 'z890-tuf', 'z890-msi'],
        'i9-14900kf': ['z790-e', 'z790-master', 'z790-aorus', 'msi-z790-edge', 'asrock-z790', 'z890-ace', 'z890-tuf', 'z890-msi'],
        'i9-13900ks': ['z790-e', 'z790-master', 'z790-aorus', 'msi-z790-edge', 'asrock-z790'],
        'r5-7600': ['b850-prime', 'b850-tuf', 'x870e-e', 'x870e-f', 'msi-x870e', 'gigabyte-x870e', 'asrock-x870e'],
        'r5-7600x': ['b850-prime', 'b850-tuf', 'x870e-e', 'x870e-f', 'msi-x870e', 'gigabyte-x870e', 'asrock-x870e'],
        'r7-7700': ['b850-prime', 'b850-tuf', 'x870e-e', 'x870e-f', 'msi-x870e', 'gigabyte-x870e', 'asrock-x870e'],
        'r7-7700x': ['b850-prime', 'b850-tuf', 'x870e-e', 'x870e-f', 'msi-x870e', 'gigabyte-x870e', 'asrock-x870e'],
        'r7-7700x3d': ['b850-prime', 'b850-tuf', 'x870e-e', 'x870e-f', 'msi-x870e', 'gigabyte-x870e', 'asrock-x870e'],
        'r9-7900': ['b850-prime', 'b850-tuf', 'x870e-e', 'x870e-f', 'msi-x870e', 'gigabyte-x870e', 'asrock-x870e'],
        'r9-7900x': ['b850-prime', 'b850-tuf', 'x870e-e', 'x870e-f', 'msi-x870e', 'gigabyte-x870e', 'asrock-x870e'],
        'r9-7900x3d': ['x870e-e', 'x870e-f', 'msi-x870e', 'gigabyte-x870e', 'asrock-x870e'],
        'r9-7950x': ['x870e-e', 'x870e-f', 'msi-x870e', 'gigabyte-x870e', 'asrock-x870e'],
        'r9-7950x3d': ['x870e-e', 'x870e-f', 'msi-x870e', 'gigabyte-x870e', 'asrock-x870e'],
        'r5-8500': ['b850-prime', 'b850-tuf', 'x870e-e', 'x870e-f', 'msi-x870e', 'gigabyte-x870e', 'asrock-x870e'],
        'r7-8700': ['b850-prime', 'b850-tuf', 'x870e-e', 'x870e-f', 'msi-x870e', 'gigabyte-x870e', 'asrock-x870e'],
        'r9-8900': ['x870e-e', 'x870e-f', 'msi-x870e', 'gigabyte-x870e', 'asrock-x870e'],
        'r9-9950x': ['x870e-e', 'x870e-f', 'msi-x870e', 'gigabyte-x870e', 'asrock-x870e']
    },
    gpu_psu: {
        'rtx5070': 750, 'rtx5070ti': 800, 'rtx5080': 850, 'rtx5090': 1000,
        'rtx4060': 550, 'rtx4070': 700, 'rtx4070ti': 750, 'rtx4080': 850, 'rtx4090': 1000,
        'rtx3060': 650, 'rtx3070': 700, 'rtx3080': 800,
        'rx7600': 600, 'rx7700xt': 700, 'rx7800xt': 750, 'rx7900gre': 800, 'rx7900xt': 900, 'rx7900xtx': 950,
        'rx8070xt': 750, 'rx8090xt': 1000,
        'arc-b580': 650, 'arc-a750': 600
    }
}

const components = {
    cpu: [
        // Intel 14th Gen
        { id: 'i3-14100f', name: 'Intel Core i3-14100F', price: 130, socket: 'LGA1700' },
        { id: 'i3-14100', name: 'Intel Core i3-14100K', price: 180, socket: 'LGA1700' },
        { id: 'i5-14400f', name: 'Intel Core i5-14400F', price: 220, socket: 'LGA1700' },
        { id: 'i5-14600k', name: 'Intel Core i5-14600K', price: 280, socket: 'LGA1700' },
        { id: 'i7-14700k', name: 'Intel Core i7-14700K', price: 450, socket: 'LGA1700' },
        { id: 'i7-14700kf', name: 'Intel Core i7-14700KF', price: 400, socket: 'LGA1700' },
        { id: 'i9-14900k', name: 'Intel Core i9-14900K', price: 680, socket: 'LGA1700' },
        { id: 'i9-14900kf', name: 'Intel Core i9-14900KF', price: 620, socket: 'LGA1700' },
        { id: 'i9-13900ks', name: 'Intel Core i9-13900KS', price: 750, socket: 'LGA1700' },
        // AMD Ryzen 7000/8000 Series
        { id: 'r5-7600', name: 'AMD Ryzen 5 7600', price: 180, socket: 'AM5' },
        { id: 'r5-7600x', name: 'AMD Ryzen 5 7600X', price: 240, socket: 'AM5' },
        { id: 'r7-7700', name: 'AMD Ryzen 7 7700', price: 290, socket: 'AM5' },
        { id: 'r7-7700x', name: 'AMD Ryzen 7 7700X', price: 360, socket: 'AM5' },
        { id: 'r7-7700x3d', name: 'AMD Ryzen 7 7700X3D', price: 380, socket: 'AM5' },
        { id: 'r9-7900', name: 'AMD Ryzen 9 7900', price: 420, socket: 'AM5' },
        { id: 'r9-7900x', name: 'AMD Ryzen 9 7900X', price: 480, socket: 'AM5' },
        { id: 'r9-7900x3d', name: 'AMD Ryzen 9 7900X3D', price: 540, socket: 'AM5' },
        { id: 'r9-7950x', name: 'AMD Ryzen 9 7950X', price: 550, socket: 'AM5' },
        { id: 'r9-7950x3d', name: 'AMD Ryzen 9 7950X3D', price: 650, socket: 'AM5' },
        // AMD Ryzen 8000 Series (Zenith+ expected)
        { id: 'r5-8500', name: 'AMD Ryzen 5 8500 (Zen 5)', price: 220, socket: 'AM5' },
        { id: 'r7-8700', name: 'AMD Ryzen 7 8700 (Zen 5)', price: 340, socket: 'AM5' },
        { id: 'r9-8900', name: 'AMD Ryzen 9 8900 (Zen 5)', price: 520, socket: 'AM5' },
        { id: 'r9-9950x', name: 'AMD Ryzen 9 9950X (Zen 5)', price: 700, socket: 'AM5' }
    ],

    mobo: [
        // Intel LGA1700 (Z790, Z890)
        { id: 'z790-e', name: 'ASUS ROG STRIX Z790-E', price: 320, socket: 'LGA1700' },
        { id: 'z790-master', name: 'Gigabyte Z790 MASTER', price: 280, socket: 'LGA1700' },
        { id: 'z790-aorus', name: 'Gigabyte AORUS Z790 Master', price: 350, socket: 'LGA1700' },
        { id: 'msi-z790-edge', name: 'MSI MPG Z790 EDGE WiFi', price: 310, socket: 'LGA1700' },
        { id: 'asrock-z790', name: 'ASRock Z790 EXTREME', price: 270, socket: 'LGA1700' },
        // Intel Z890 (New 2026)
        { id: 'z890-ace', name: 'ASUS ROG Z890-ACE', price: 450, socket: 'LGA1700' },
        { id: 'z890-tuf', name: 'ASUS TUF Z890-PRO', price: 380, socket: 'LGA1700' },
        { id: 'z890-msi', name: 'MSI MPG Z890 EDGE WiFi', price: 400, socket: 'LGA1700' },
        // AMD AM5 (B850, X870E)
        { id: 'b850-prime', name: 'ASUS PRIME B850-PLUS', price: 180, socket: 'AM5' },
        { id: 'b850-tuf', name: 'ASUS TUF B850M-PLUS', price: 210, socket: 'AM5' },
        { id: 'x870e-e', name: 'ASUS ROG STRIX X870E-E Gaming WiFi', price: 450, socket: 'AM5' },
        { id: 'x870e-f', name: 'ASUS ROG STRIX X870E-F Gaming WiFi', price: 380, socket: 'AM5' },
        { id: 'msi-x870e', name: 'MSI MPG X870E-E Creator WiFi', price: 420, socket: 'AM5' },
        { id: 'gigabyte-x870e', name: 'Gigabyte X870E MASTER', price: 400, socket: 'AM5' },
        { id: 'asrock-x870e', name: 'ASRock X870E-CREATOR', price: 350, socket: 'AM5' },
        // AMD AM5 Next Gen
        { id: 'x950e', name: 'ASUS ROG X950E (Zen 5)', price: 520 },
        { id: 'msi-x950e', name: 'MSI X950E EDGE WiFi', price: 480 }
    ],

    gpu: [
        // NVIDIA RTX 50 Series (Latest 2026)
        { id: 'rtx5070', name: 'NVIDIA RTX 5070 12GB', price: 650 },
        { id: 'rtx5070ti', name: 'NVIDIA RTX 5070 Ti 16GB', price: 900 },
        { id: 'rtx5080', name: 'NVIDIA RTX 5080 16GB', price: 1200 },
        { id: 'rtx5090', name: 'NVIDIA RTX 5090 32GB', price: 2400 },
        // NVIDIA RTX 40 Series
        { id: 'rtx4060', name: 'NVIDIA RTX 4060 8GB', price: 280 },
        { id: 'rtx4070', name: 'NVIDIA RTX 4070 12GB', price: 620 },
        { id: 'rtx4070ti', name: 'NVIDIA RTX 4070 Ti 12GB', price: 800 },
        { id: 'rtx4080', name: 'NVIDIA RTX 4080 16GB', price: 1100 },
        { id: 'rtx4090', name: 'NVIDIA RTX 4090 24GB', price: 1600 },
        // NVIDIA RTX 30 Series (Budget)
        { id: 'rtx3060', name: 'NVIDIA RTX 3060 12GB', price: 320 },
        { id: 'rtx3070', name: 'NVIDIA RTX 3070 8GB', price: 450 },
        { id: 'rtx3080', name: 'NVIDIA RTX 3080 10GB', price: 750 },
        // AMD RX 7000 Series
        { id: 'rx7600', name: 'AMD RX 7600 16GB', price: 220 },
        { id: 'rx7700xt', name: 'AMD RX 7700 XT 12GB', price: 400 },
        { id: 'rx7800xt', name: 'AMD RX 7800 XT 16GB', price: 480 },
        { id: 'rx7900gre', name: 'AMD RX 7900 GRE 12GB', price: 550 },
        { id: 'rx7900xt', name: 'AMD RX 7900 XT 20GB', price: 750 },
        { id: 'rx7900xtx', name: 'AMD RX 7900 XTX 24GB', price: 850 },
        // AMD RDNA 4 (2026)
        { id: 'rx8070xt', name: 'AMD RX 8070 XT 16GB', price: 700 },
        { id: 'rx8090xt', name: 'AMD RX 8090 XT 24GB', price: 1400 },
        // Intel Arc (2026)
        { id: 'arc-b580', name: 'Intel Arc B580 12GB', price: 350 },
        { id: 'arc-a750', name: 'Intel Arc A750 8GB', price: 290 }
    ],

    ram: [
        // DDR5 6000MHz
        { id: '16-ddr5-6000', name: '16GB DDR5 6000MHz', price: 85 },
        { id: '32-ddr5-6000', name: '32GB DDR5 6000MHz', price: 160 },
        { id: '48-ddr5-6000', name: '48GB DDR5 6000MHz', price: 240 },
        { id: '64-ddr5-6000', name: '64GB DDR5 6000MHz', price: 320 },
        { id: '96-ddr5-6000', name: '96GB DDR5 6000MHz', price: 480 },
        // DDR5 7000-7600MHz (High Performance)
        { id: '32-ddr5-7000', name: '32GB DDR5 7000MHz', price: 200 },
        { id: '32-ddr5-7200', name: '32GB DDR5 7200MHz', price: 210 },
        { id: '64-ddr5-7200', name: '64GB DDR5 7200MHz', price: 420 },
        { id: '32-ddr5-7600', name: '32GB DDR5 7600MHz', price: 240 },
        { id: '64-ddr5-7600', name: '64GB DDR5 7600MHz', price: 480 },
        // DDR5 8000MHz+ (Extreme)
        { id: '32-ddr5-8000', name: '32GB DDR5 8000MHz', price: 280 },
        { id: '64-ddr5-8000', name: '64GB DDR5 8000MHz', price: 560 },
        // Budget DDR5 5600MHz
        { id: '16-ddr5-5600', name: '16GB DDR5 5600MHz', price: 70 }
    ],

    cooler: [
        // Air Coolers
        { id: 'noctua-nh-d15', name: 'Noctua NH-D15 Chromax', price: 110 },
        { id: 'noctua-nh-u14s', name: 'Noctua NH-U14S TR4-SP3', price: 85 },
        { id: 'dark-rock-pro4', name: 'be quiet! Dark Rock Pro 4', price: 90 },
        { id: 'dark-rock-elite', name: 'be quiet! Dark Rock Elite', price: 105 },
        { id: 'scythe-fuma', name: 'Scythe Fuma 3', price: 75 },
        { id: 'thermalright-peerless', name: 'Thermalright Peerless Assassin 120 SE', price: 40 },
        { id: 'arctic-freezer', name: 'ARCTIC Freezer 34 eSports DUO', price: 50 },
        // Liquid Coolers (AIO)
        { id: 'arctic-liquid-240', name: 'ARCTIC Liquid Freezer II 240', price: 75 },
        { id: 'arctic-liquid-360', name: 'ARCTIC Liquid Freezer II 360', price: 95 },
        { id: 'corsair-h100i', name: 'Corsair iCUE H100i Elite', price: 120 },
        { id: 'corsair-h150i', name: 'Corsair iCUE H150i PRO XT', price: 180 },
        { id: 'corsair-h170i', name: 'Corsair iCUE H170i ELITE', price: 200 },
        { id: 'nzxt-kraken-x63', name: 'NZXT Kraken X63', price: 165 },
        { id: 'nzxt-kraken-z73', name: 'NZXT Kraken Z73', price: 220 },
        { id: 'ek-aio-360', name: 'EK Basic 360 D-RGB', price: 110 },
        { id: 'msi-mag-360', name: 'MSI MAG CORELIQUID 360R', price: 130 },
        { id: 'gigabyte-aorus-360', name: 'Gigabyte AORUS Liquid Cooler 360', price: 150 }
    ],

    storage: [
        // NVMe Gen 4
        { id: 'ssd-500gb-g4', name: 'SSD NVMe 500GB Gen4', price: 45 },
        { id: 'ssd-1tb-g4', name: 'SSD NVMe 1TB Gen4', price: 85 },
        { id: 'ssd-2tb-g4', name: 'SSD NVMe 2TB Gen4', price: 160 },
        { id: 'ssd-4tb-g4', name: 'SSD NVMe 4TB Gen4', price: 340 },
        // NVMe Gen 5
        { id: 'ssd-500gb-g5', name: 'SSD NVMe 500GB Gen5', price: 60 },
        { id: 'ssd-1tb-g5', name: 'SSD NVMe 1TB Gen5', price: 110 },
        { id: 'ssd-2tb-g5', name: 'SSD NVMe 2TB Gen5', price: 200 },
        { id: 'ssd-4tb-g5', name: 'SSD NVMe 4TB Gen5', price: 420 },
        { id: 'ssd-8tb-g5', name: 'SSD NVMe 8TB Gen5', price: 900 },
        // SATA SSD (Budget)
        { id: 'ssd-1tb-sata', name: 'SSD SATA 1TB', price: 65 },
        { id: 'ssd-2tb-sata', name: 'SSD SATA 2TB', price: 130 },
        // HDD (Backup/Storage)
        { id: 'hdd-2tb', name: 'HDD 2TB 7200RPM', price: 55 },
        { id: 'hdd-4tb', name: 'HDD 4TB 7200RPM', price: 95 },
        { id: 'hdd-8tb', name: 'HDD 8TB 7200RPM', price: 180 }
    ],

    case: [
        // Mini ITX
        { id: 'case-mini-nr200', name: 'Cooler Master NR200P Mini', price: 85 },
        { id: 'case-mini-lian-li', name: 'Lian Li LANCOOL 205 Mini', price: 75 },
        // Micro ATX
        { id: 'case-matx-corsair', name: 'Corsair Crystal 280X', price: 110 },
        { id: 'case-matx-fractal', name: 'Fractal Design Core 1000', price: 55 },
        // Mid Tower
        { id: 'case-mid-lian-li', name: 'Lian Li Lancool 216 RGB', price: 95 },
        { id: 'case-mid-corsair-5000t', name: 'Corsair Crystal 5000T RGB', price: 180 },
        { id: 'case-mid-nzxt', name: 'NZXT H510 Elite', price: 120 },
        { id: 'case-mid-fractal', name: 'Fractal Design Torrent RGB', price: 250 },
        { id: 'case-mid-be-quiet', name: 'be quiet! Pure Base 500DX', price: 95 },
        { id: 'case-mid-phanteks', name: 'Phanteks Eclipse P500A D-RGB', price: 115 },
        { id: 'case-mid-asus', name: 'ASUS ProArt PA120', price: 140 },
        // Full Tower
        { id: 'case-full-corsair-5000d', name: 'Corsair Crystal 5000D Airflow', price: 160 },
        { id: 'case-full-lian-li', name: 'Lian Li Lancool 3', price: 130 },
        { id: 'case-full-nzxt-h7', name: 'NZXT H7 Flow RGB', price: 170 },
        { id: 'case-full-corsair-5000x', name: 'Corsair Obsidian 5000X RGB', price: 230 },
        { id: 'case-full-phanteks-eclipse', name: 'Phanteks Evolv X', price: 240 }
    ],

    psu: [
        // 650W
        { id: 'psu-650-corsair-rm', name: 'Corsair RM750W 80+ Gold', price: 120 },
        { id: 'psu-650-evga', name: 'EVGA SuperNOVA 650W Gold', price: 85 },
        { id: 'psu-650-seasonic', name: 'Seasonic Focus GX-650W Gold', price: 95 },
        // 750W
        { id: 'psu-750-corsair', name: 'Corsair RM750e 80+ Gold', price: 140 },
        { id: 'psu-750-seasonic', name: 'Seasonic FOCUS PX-750W Platinum', price: 130 },
        { id: 'psu-750-msi', name: 'MSI MAG A750GL 750W Gold', price: 110 },
        // 850W
        { id: 'psu-850-corsair', name: 'Corsair HX850e 80+ Platinum', price: 170 },
        { id: 'psu-850-seasonic', name: 'Seasonic PRIME PX-850W Platinum', price: 150 },
        // 1000W
        { id: 'psu-1000-corsair', name: 'Corsair HX1000e 80+ Platinum', price: 220 },
        { id: 'psu-1000-seasonic', name: 'Seasonic PRIME PX-1000W Platinum', price: 200 },
        { id: 'psu-1000-evga-titanium', name: 'EVGA SuperNOVA 1000G6 80+ Gold', price: 180 },
        // 1200W+
        { id: 'psu-1200-evga', name: 'EVGA SuperNOVA 1200W Titanium', price: 280 },
        { id: 'psu-1200-corsair-ax', name: 'Corsair AX1200 80+ Titanium', price: 320 },
        { id: 'psu-1500-seasonic', name: 'Seasonic PRIME TX-1500W Titanium', price: 400 },
        // Budget Options
        { id: 'psu-650-budget', name: 'MSI MAG A650GL 650W Gold', price: 80 },
        { id: 'psu-750-budget', name: 'EVGA N1 750W Bronze', price: 65 }
    ]
}


const selects = {
    cpu: document.getElementById('cpuSelect'),
    mobo: document.getElementById('moboSelect'),
    gpu: document.getElementById('gpuSelect'),
    ram: document.getElementById('ramSelect'),
    cooler: document.getElementById('coolerSelect'),
    storage: document.getElementById('storageSelect'),
    case: document.getElementById('caseSelect'),
    psu: document.getElementById('psuSelect')
}

const totalPriceEl = document.getElementById('totalPrice')
const baseInfoEl = document.getElementById('baseInfo')
const summaryListEl = document.getElementById('summaryList')
const summaryTotalEl = document.getElementById('summaryTotal')
const compatInfoEl = document.getElementById('compatInfo')
const noteTextEl = document.getElementById('noteText')
const btnSummary = document.getElementById('btnSummary')

const state = {
    cpu: null,
    mobo: null,
    gpu: null,
    ram: null,
    cooler: null,
    storage: null,
    case: null,
    psu: null
}

function formatPrice(v) {
    return v.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })
}

function populateSelect(selectEl, items) {
    items.forEach(item => {
        const opt = document.createElement('option')
        opt.value = item.id
        opt.textContent = item.name + ' (' + formatPrice(item.price) + ')'
        selectEl.appendChild(opt)
    })
}

function initSelects() {
    populateSelect(selects.cpu, components.cpu)
    populateSelect(selects.mobo, components.mobo)
    populateSelect(selects.gpu, components.gpu)
    populateSelect(selects.ram, components.ram)
    populateSelect(selects.cooler, components.cooler)
    populateSelect(selects.storage, components.storage)
    populateSelect(selects.case, components.case)
    populateSelect(selects.psu, components.psu)
}

function findComponent(type, id) {
    return components[type].find(c => c.id === id) || null
}

function updateState() {
    state.cpu = findComponent('cpu', selects.cpu.value)
    state.mobo = findComponent('mobo', selects.mobo.value)
    state.gpu = findComponent('gpu', selects.gpu.value)
    state.ram = findComponent('ram', selects.ram.value)
    state.cooler = findComponent('cooler', selects.cooler.value)
    state.storage = findComponent('storage', selects.storage.value)
    state.case = findComponent('case', selects.case.value)
    state.psu = findComponent('psu', selects.psu.value)
}

function calcTotal() {
    let total = 0
    Object.values(state).forEach(comp => {
        if (comp) total += comp.price
    })
    return total
}

function isComplete() {
    return Object.values(state).every(comp => comp !== null)
}

function updatePriceUI() {
    const total = calcTotal()
    totalPriceEl.textContent = formatPrice(total)
    summaryTotalEl.textContent = formatPrice(total)

    if (total === 0) {
        baseInfoEl.textContent = 'Seleziona i componenti per iniziare'
    } else {
        baseInfoEl.textContent = 'Prezzo stimato configurazione'
    }

    if (isComplete()) {
        compatInfoEl.innerHTML = 'Stato configurazione: <span class="badge bg-success">Completa</span>'
        noteTextEl.textContent = 'Configurazione completa!'
    } else {
        compatInfoEl.innerHTML = 'Stato configurazione: <span class="badge bg-secondary">Incompleta</span>'
        noteTextEl.textContent = 'Seleziona tutti i componenti.'
    }
}

function updateSummaryUI() {
    const values = [state.cpu, state.mobo, state.gpu, state.ram, state.cooler, state.storage, state.case, state.psu]
    const items = summaryListEl.querySelectorAll('.summary-item .value')
    items.forEach((el, idx) => {
        const comp = values[idx]
        el.textContent = comp ? comp.name : '–'
        el.classList.toggle('text-muted', !comp)
    })
}

function handleChange() {
    updateState()
    updatePriceUI()
    updateSummaryUI()
    checkCompatibility()
}

function checkCompatibility() {
    // CPU-Mobo compatibility
    let cpuCompatMsg = ''
    if (state.cpu && state.mobo) {
        const compatMobos = compatibility.cpu_mobo[state.cpu.id] || []
        if (!compatMobos.includes(state.mobo.id)) {
            cpuCompatMsg = '⚠️ CPU e Mobo potrebbero non essere compatibili!'
        } else {
            cpuCompatMsg = '✓ Compatibile'
        }
    }
    document.getElementById('cpuCompat').textContent = cpuCompatMsg

    // GPU-PSU compatibility
    let gpuCompatMsg = ''
    if (state.gpu && state.psu) {
        const requiredWattage = compatibility.gpu_psu[state.gpu.id] || 600
        const psuWattage = parseInt(state.psu.name.match(/\d+/)[0]) || 0
        if (psuWattage < requiredWattage) {
            gpuCompatMsg = `⚠️ PSU insufficiente! Richiesto: ${requiredWattage}W`
        } else {
            gpuCompatMsg = '✓ Compatibile'
        }
    }
    document.getElementById('gpuCompat').textContent = gpuCompatMsg

    // Mobo-CPU socket check
    let moboCompatMsg = ''
    if (state.mobo && state.cpu && state.mobo.socket === state.cpu.socket) {
        moboCompatMsg = '✓ Socket compatibile'
    } else if (state.mobo && state.cpu) {
        moboCompatMsg = `⚠️ Socket: ${state.cpu.socket} vs ${state.mobo.socket}`
    }
    document.getElementById('moboCompat').textContent = moboCompatMsg

    document.getElementById('gpuCompat').textContent = gpuCompatMsg
    document.getElementById('ramCompat').textContent = state.ram ? '✓ DDR5 selezionata' : ''
    document.getElementById('coolerCompat').textContent = state.cooler ? '✓ Raffreddamento OK' : ''
    document.getElementById('storageCompat').textContent = state.storage ? '✓ Storage OK' : ''
    document.getElementById('caseCompat').textContent = state.case ? '✓ Case OK' : ''
    document.getElementById('psuCompat').textContent = gpuCompatMsg ? '' : (state.psu ? '✓ PSU OK' : '')
}

document.addEventListener('DOMContentLoaded', () => {
    initSelects()
    updatePriceUI()
    updateSummaryUI()

    Object.values(selects).forEach(selectEl => {
        selectEl.addEventListener('change', handleChange)
    })

    btnSummary.addEventListener('click', () => {
        handleChange()
        summaryListEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
})
