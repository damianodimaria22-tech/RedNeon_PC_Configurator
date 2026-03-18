const compatibility = 
{
    cpu_mobo: 
    {
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
    gpu_psu: 
    {
        'rtx5070': 750, 'rtx5070ti': 800, 'rtx5080': 850, 'rtx5090': 1000,
        'rtx4060': 550, 'rtx4070': 700, 'rtx4070ti': 750, 'rtx4080': 850, 'rtx4090': 1000,
        'rtx3060': 650, 'rtx3070': 700, 'rtx3080': 800,
        'rx7600': 600, 'rx7700xt': 700, 'rx7800xt': 750, 'rx7900gre': 800, 'rx7900xt': 900, 'rx7900xtx': 950,
        'rx8070xt': 750, 'rx8090xt': 1000,
        'arc-b580': 650, 'arc-a750': 600
    }
}

const components = 
{
    cpu: 
    [
        { id: 'i3-14100f', name: 'Intel Core i3-14100F', price: 130, socket: 'LGA1700' },
        { id: 'i3-14100', name: 'Intel Core i3-14100K', price: 180, socket: 'LGA1700' },
        { id: 'i5-14400f', name: 'Intel Core i5-14400F', price: 220, socket: 'LGA1700' },
        { id: 'i5-14600k', name: 'Intel Core i5-14600K', price: 280, socket: 'LGA1700' },
        { id: 'i7-14700k', name: 'Intel Core i7-14700K', price: 450, socket: 'LGA1700' },
        { id: 'i7-14700kf', name: 'Intel Core i7-14700KF', price: 400, socket: 'LGA1700' },
        { id: 'i9-14900k', name: 'Intel Core i9-14900K', price: 680, socket: 'LGA1700' },
        { id: 'i9-14900kf', name: 'Intel Core i9-14900KF', price: 620, socket: 'LGA1700' },
        { id: 'i9-13900ks', name: 'Intel Core i9-13900KS', price: 750, socket: 'LGA1700' },
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
        { id: 'r5-8500', name: 'AMD Ryzen 5 8500 (Zen 5)', price: 220, socket: 'AM5' },
        { id: 'r7-8700', name: 'AMD Ryzen 7 8700 (Zen 5)', price: 340, socket: 'AM5' },
        { id: 'r9-8900', name: 'AMD Ryzen 9 8900 (Zen 5)', price: 520, socket: 'AM5' },
        { id: 'r9-9950x', name: 'AMD Ryzen 9 9950X (Zen 5)', price: 700, socket: 'AM5' }
    ],
    mobo: 
    [
        { id: 'z790-e', name: 'ASUS ROG STRIX Z790-E', price: 320, socket: 'LGA1700' },
        { id: 'z790-master', name: 'Gigabyte Z790 MASTER', price: 280, socket: 'LGA1700' },
        { id: 'z790-aorus', name: 'Gigabyte AORUS Z790 Master', price: 350, socket: 'LGA1700' },
        { id: 'msi-z790-edge', name: 'MSI MPG Z790 EDGE WiFi', price: 310, socket: 'LGA1700' },
        { id: 'asrock-z790', name: 'ASRock Z790 EXTREME', price: 270, socket: 'LGA1700' },
        { id: 'z890-ace', name: 'ASUS ROG Z890-ACE', price: 450, socket: 'LGA1700' },
        { id: 'z890-tuf', name: 'ASUS TUF Z890-PRO', price: 380, socket: 'LGA1700' },
        { id: 'z890-msi', name: 'MSI MPG Z890 EDGE WiFi', price: 400, socket: 'LGA1700' },
        { id: 'b850-prime', name: 'ASUS PRIME B850-PLUS', price: 180, socket: 'AM5' },
        { id: 'b850-tuf', name: 'ASUS TUF B850M-PLUS', price: 210, socket: 'AM5' },
        { id: 'x870e-e', name: 'ASUS ROG STRIX X870E-E Gaming WiFi', price: 450, socket: 'AM5' },
        { id: 'x870e-f', name: 'ASUS ROG STRIX X870E-F Gaming WiFi', price: 380, socket: 'AM5' },
        { id: 'msi-x870e', name: 'MSI MPG X870E-E Creator WiFi', price: 420, socket: 'AM5' },
        { id: 'gigabyte-x870e', name: 'Gigabyte X870E MASTER', price: 400, socket: 'AM5' },
        { id: 'asrock-x870e', name: 'ASRock X870E-CREATOR', price: 350, socket: 'AM5' },
        { id: 'x950e', name: 'ASUS ROG X950E (Zen 5)', price: 520 },
        { id: 'msi-x950e', name: 'MSI X950E EDGE WiFi', price: 480 }
    ],
    gpu: 
    [
        { id: 'rtx5070', name: 'NVIDIA RTX 5070 12GB', price: 650 },
        { id: 'rtx5070ti', name: 'NVIDIA RTX 5070 Ti 16GB', price: 900 },
        { id: 'rtx5080', name: 'NVIDIA RTX 5080 16GB', price: 1200 },
        { id: 'rtx5090', name: 'NVIDIA RTX 5090 32GB', price: 2400 },
        { id: 'rtx4060', name: 'NVIDIA RTX 4060 8GB', price: 280 },
        { id: 'rtx4070', name: 'NVIDIA RTX 4070 12GB', price: 620 },
        { id: 'rtx4070ti', name: 'NVIDIA RTX 4070 Ti 12GB', price: 800 },
        { id: 'rtx4080', name: 'NVIDIA RTX 4080 16GB', price: 1100 },
        { id: 'rtx4090', name: 'NVIDIA RTX 4090 24GB', price: 1600 },
        { id: 'rtx3060', name: 'NVIDIA RTX 3060 12GB', price: 320 },
        { id: 'rtx3070', name: 'NVIDIA RTX 3070 8GB', price: 450 },
        { id: 'rtx3080', name: 'NVIDIA RTX 3080 10GB', price: 750 },
        { id: 'rx7600', name: 'AMD RX 7600 16GB', price: 220 },
        { id: 'rx7700xt', name: 'AMD RX 7700 XT 12GB', price: 400 },
        { id: 'rx7800xt', name: 'AMD RX 7800 XT 16GB', price: 480 },
        { id: 'rx7900gre', name: 'AMD RX 7900 GRE 12GB', price: 550 },
        { id: 'rx7900xt', name: 'AMD RX 7900 XT 20GB', price: 750 },
        { id: 'rx7900xtx', name: 'AMD RX 7900 XTX 24GB', price: 850 },
        { id: 'rx8070xt', name: 'AMD RX 8070 XT 16GB', price: 700 },
        { id: 'rx8090xt', name: 'AMD RX 8090 XT 24GB', price: 1400 },
        { id: 'arc-b580', name: 'Intel Arc B580 12GB', price: 350 },
        { id: 'arc-a750', name: 'Intel Arc A750 8GB', price: 290 }
    ],
    ram: 
    [
        { id: '16-ddr5-6000', name: '16GB DDR5 6000MHz', price: 85 },
        { id: '32-ddr5-6000', name: '32GB DDR5 6000MHz', price: 160 },
        { id: '48-ddr5-6000', name: '48GB DDR5 6000MHz', price: 240 },
        { id: '64-ddr5-6000', name: '64GB DDR5 6000MHz', price: 320 },
        { id: '96-ddr5-6000', name: '96GB DDR5 6000MHz', price: 480 },

        { id: '32-ddr5-7000', name: '32GB DDR5 7000MHz', price: 200 },
        { id: '32-ddr5-7200', name: '32GB DDR5 7200MHz', price: 210 },
        { id: '64-ddr5-7200', name: '64GB DDR5 7200MHz', price: 420 },
        { id: '32-ddr5-7600', name: '32GB DDR5 7600MHz', price: 240 },
        { id: '64-ddr5-7600', name: '64GB DDR5 7600MHz', price: 480 },
        { id: '32-ddr5-8000', name: '32GB DDR5 8000MHz', price: 280 },
        { id: '64-ddr5-8000', name: '64GB DDR5 8000MHz', price: 560 },
        { id: '16-ddr5-5600', name: '16GB DDR5 5600MHz', price: 70 }
    ],
    cooler: 
    [
        { id: 'noctua-nh-d15', name: 'Noctua NH-D15 Chromax', price: 110 },
        { id: 'noctua-nh-u14s', name: 'Noctua NH-U14S TR4-SP3', price: 85 },
        { id: 'dark-rock-pro4', name: 'be quiet! Dark Rock Pro 4', price: 90 },
        { id: 'dark-rock-elite', name: 'be quiet! Dark Rock Elite', price: 105 },
        { id: 'scythe-fuma', name: 'Scythe Fuma 3', price: 75 },
        { id: 'thermalright-peerless', name: 'Thermalright Peerless Assassin 120 SE', price: 40 },
        { id: 'arctic-freezer', name: 'ARCTIC Freezer 34 eSports DUO', price: 50 },
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
    storage: 
    [
        { id: 'ssd-500gb-g4', name: 'SSD NVMe 500GB Gen4', price: 45 },
        { id: 'ssd-1tb-g4', name: 'SSD NVMe 1TB Gen4', price: 85 },
        { id: 'ssd-2tb-g4', name: 'SSD NVMe 2TB Gen4', price: 160 },
        { id: 'ssd-4tb-g4', name: 'SSD NVMe 4TB Gen4', price: 340 },
        { id: 'ssd-500gb-g5', name: 'SSD NVMe 500GB Gen5', price: 60 },
        { id: 'ssd-1tb-g5', name: 'SSD NVMe 1TB Gen5', price: 110 },
        { id: 'ssd-2tb-g5', name: 'SSD NVMe 2TB Gen5', price: 200 },
        { id: 'ssd-4tb-g5', name: 'SSD NVMe 4TB Gen5', price: 420 },
        { id: 'ssd-8tb-g5', name: 'SSD NVMe 8TB Gen5', price: 900 },
        { id: 'ssd-1tb-sata', name: 'SSD SATA 1TB', price: 65 },
        { id: 'ssd-2tb-sata', name: 'SSD SATA 2TB', price: 130 },
        { id: 'hdd-2tb', name: 'HDD 2TB 7200RPM', price: 55 },
        { id: 'hdd-4tb', name: 'HDD 4TB 7200RPM', price: 95 },
        { id: 'hdd-8tb', name: 'HDD 8TB 7200RPM', price: 180 }
    ],
    case: 
    [
        { id: 'case-mini-nr200', name: 'Cooler Master NR200P Mini', price: 85 },
        { id: 'case-mini-lian-li', name: 'Lian Li LANCOOL 205 Mini', price: 75 },
        { id: 'case-matx-corsair', name: 'Corsair Crystal 280X', price: 110 },
        { id: 'case-matx-fractal', name: 'Fractal Design Core 1000', price: 55 },
        { id: 'case-mid-lian-li', name: 'Lian Li Lancool 216 RGB', price: 95 },
        { id: 'case-mid-corsair-5000t', name: 'Corsair Crystal 5000T RGB', price: 180 },
        { id: 'case-mid-nzxt', name: 'NZXT H510 Elite', price: 120 },
        { id: 'case-mid-fractal', name: 'Fractal Design Torrent RGB', price: 250 },
        { id: 'case-mid-be-quiet', name: 'be quiet! Pure Base 500DX', price: 95 },
        { id: 'case-mid-phanteks', name: 'Phanteks Eclipse P500A D-RGB', price: 115 },
        { id: 'case-mid-asus', name: 'ASUS ProArt PA120', price: 140 },
        { id: 'case-full-corsair-5000d', name: 'Corsair Crystal 5000D Airflow', price: 160 },
        { id: 'case-full-lian-li', name: 'Lian Li Lancool 3', price: 130 },
        { id: 'case-full-nzxt-h7', name: 'NZXT H7 Flow RGB', price: 170 },
        { id: 'case-full-corsair-5000x', name: 'Corsair Obsidian 5000X RGB', price: 230 },
        { id: 'case-full-phanteks-eclipse', name: 'Phanteks Evolv X', price: 240 }
    ],
    psu: 
    [
        { id: 'psu-650-corsair-rm', name: 'Corsair RM750W 80+ Gold', price: 120 },
        { id: 'psu-650-evga', name: 'EVGA SuperNOVA 650W Gold', price: 85 },
        { id: 'psu-650-seasonic', name: 'Seasonic Focus GX-650W Gold', price: 95 },
        { id: 'psu-750-corsair', name: 'Corsair RM750e 80+ Gold', price: 140 },
        { id: 'psu-750-seasonic', name: 'Seasonic FOCUS PX-750W Platinum', price: 130 },
        { id: 'psu-750-msi', name: 'MSI MAG A750GL 750W Gold', price: 110 },
        { id: 'psu-850-corsair', name: 'Corsair HX850e 80+ Platinum', price: 170 },
        { id: 'psu-850-seasonic', name: 'Seasonic PRIME PX-850W Platinum', price: 150 },
        { id: 'psu-1000-corsair', name: 'Corsair HX1000e 80+ Platinum', price: 220 },
        { id: 'psu-1000-seasonic', name: 'Seasonic PRIME PX-1000W Platinum', price: 200 },
        { id: 'psu-1000-evga-titanium', name: 'EVGA SuperNOVA 1000G6 80+ Gold', price: 180 },
        { id: 'psu-1200-evga', name: 'EVGA SuperNOVA 1200W Titanium', price: 280 },
        { id: 'psu-1200-corsair-ax', name: 'Corsair AX1200 80+ Titanium', price: 320 },
        { id: 'psu-1500-seasonic', name: 'Seasonic PRIME TX-1500W Titanium', price: 400 },
        { id: 'psu-650-budget', name: 'MSI MAG A650GL 650W Gold', price: 80 },
        { id: 'psu-750-budget', name: 'EVGA N1 750W Bronze', price: 65 }
    ]
}


const selects = 
{
    cpu: document.getElementById('cpuSelect'),
    mobo: document.getElementById('moboSelect'),
    gpu: document.getElementById('gpuSelect'),
    ram: document.getElementById('ramSelect'),
    cooler: document.getElementById('coolerSelect'),
    storage: document.getElementById('storageSelect'),
    case: document.getElementById('caseSelect'),
    psu: document.getElementById('psuSelect')
}

const summaryListEl = document.getElementById('summaryList')
const summaryTotalEl = document.getElementById('summaryTotal')
const compatInfoEl = document.getElementById('compatInfo')
const noteTextEl = document.getElementById('noteText')
const btnSummary = document.getElementById('btnSummary')

let productModal = null
let productModalTitle = null
let productImage = null
let productSize = null
let productPrice = null
let productDesc = null
let productLink = null

const state = 
{
    cpu: null,
    mobo: null,
    gpu: null,
    ram: null,
    cooler: null,
    storage: null,
    case: null,
    psu: null
}

function formatPrice(v) 
{
    return v.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })
}

function getProductDetails(type, component) 
{
    if (!component) return null

    const details = 
    {
        size: '',
        image: `https://via.placeholder.com/400x300?text=${encodeURIComponent(component.name.substring(0, 20))}`,
        purchaseUrl: 'https://www.amazon.it/s?k=' + encodeURIComponent(component.name)
    }

    switch (type) 
    {
        case 'cpu':
            if (component.id.startsWith('i')) 
            {
                details.size = `Socket: LGA1700 | TDP: 65-125W | Produttore: Intel`
            } 
            else 
            {
                details.size = `Socket: AM5 | TDP: 65-170W | Produttore: AMD`
            }
            break
        case 'mobo':
            if (component.socket === 'LGA1700') 
            {
                details.size = `ATX ~ 305x244mm | Socket: LGA1700 | Chipset: Z790-Z890`
            } 
            else 
            {
                details.size = `ATX ~ 305x244mm | Socket: AM5 | Chipset: B850-X870E`
            }
            break
        case 'gpu':
            details.size = `Lunghezza: 25-35cm | Larghezza: 10-12cm | Peso: 600-1200g`
            break
        case 'ram':
            details.size = `DDR5 | Dimensioni: 288mm x 32mm | Type: UDIMM`
            break
        case 'cooler':
            if (component.id.includes('liquid') || component.id.includes('kraken') || component.id.includes('h1')) 
            {
                details.size = `AIO Liquid | 240/360mm | Pompa 65-80dB`
            } 
            else 
            {
                details.size = `Air Cooler | 150-200mm x 160mm | Silenzioso 15-30dB`
            }
            break
        case 'storage':
            if (component.id.includes('nvme') || component.id.includes('g4') || component.id.includes('g5')) 
            {
                details.size = `M.2 NVMe | Dimensioni: 80x22x11.5mm | Velocità: 3-7GB/s`
            } 
            else if (component.id.includes('sata')) 
            {
                details.size = `SATA 2.5" | Dimensioni: 100x70x7mm | Velocità: ~550MB/s`
            } 
            else 
            {
                details.size = `3.5" HDD | Dimensioni: 147x102x26mm | 7200 RPM`
            }
            break
        case 'case':
            if (component.id.includes('mini')) 
            {
                details.size = `Mini ITX | Piccolo ~20L | 40-50cm di profondità`
            } 
            else if (component.id.includes('matx')) 
            {
                details.size = `Micro ATX | Compatto ~35L | 45-50cm di profondità`
            } 
            else if (component.id.includes('mid')) 
            {
                details.size = `Mid Tower | Standard ~60L | 50-55cm di profondità`
            }
            else 
            {
                details.size = `Full Tower | Grande ~80L+ | 55-65cm di profondità`
            }
            break
        case 'psu':
            const watt = parseInt(component.name.match(/\d+/)?.[0] || '0', 10)
            details.size = `${watt}W | Dimensioni: 150x90x180mm | Efficienza: 80+ Gold/Platinum`
            break
    }

    return details
}

function showProductDetails(type, selectId)
{
    const selectEl = document.getElementById(selectId)
    const componentId = selectEl.value
    
    if (!componentId)
    {
        alert('Seleziona un componente prima di visualizzare i dettagli')
        return
    }

    const component = findComponent(type, componentId)
    if (!component) return

    const details = getProductDetails(type, component)
    if (!details) return

    if (productModalTitle) productModalTitle.textContent = component.name
    if (productImage)
    {
        productImage.src = details.image
        productImage.alt = component.name
    }
    if (productSize) productSize.innerHTML = `<strong>Dimensioni:</strong> ${details.size}`
    if (productPrice) productPrice.innerHTML = `<strong>Prezzo indicativo:</strong> ${formatPrice(component.price)}`
    if (productDesc) productDesc.innerHTML = `<strong>Descrizione:</strong> ${component.name} - Componente di qualità per PC gaming e workstation`
    if (productLink)
    {
        productLink.href = details.purchaseUrl
        productLink.textContent = 'Visualizza su Amazon'
    }

    if (productModal)
    {
        productModal.show()
    }
}

function formatPrice(v) 
{
    return v.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })
}

function getSimpleHint(type, comp)
{
    const defaults = 
    {
        cpu: 'Scegli la CPU in base a budget e uso.',
        mobo: 'Scegli una scheda madre compatibile con la CPU.',
        gpu: 'Scegli una GPU in base a risoluzione e giochi.',
        ram: 'Più RAM significa più spazio per programmi e gioco.',
        cooler: 'Un buon raffreddamento mantiene la CPU silenziosa e stabile.',
        storage: 'Scegli tra SSD veloci e capienza per file e giochi.',
        case: 'Scegli un case con spazio e flusso d’aria adatto.',
        psu: 'Scegli un alimentatore con wattaggio sufficiente per il tuo sistema.'
    }

    if (!comp) return defaults[type] || ''

    switch (type) 
    {
        case 'cpu':
        {
            if (/^i3|^r5/.test(comp.id)) return 'Ottimo per office e gaming 1080p.'
            if (/^i5|^r7/.test(comp.id)) return 'Perfetta per gaming FHD e produttività.'
            if (/^i7|^i9|^r9/.test(comp.id)) return 'Ideale per editing video e lavori pesanti.'
            return defaults.cpu
        }
        case 'gpu':
        {
            if (/^(rtx3|rx7|arc)/.test(comp.id)) return 'Ottima per gaming 1080p/1440p.'
            if (/^(rtx4|rx7.8|rx8)/.test(comp.id)) return 'Perfetta per gaming 1440p/4K.'
            if (/^(rtx5|rx8|rx9)/.test(comp.id)) return 'Top per 4K, streaming e rendering.'
            return defaults.gpu
        }
        case 'ram':
        {
            if (/^16-/.test(comp.id)) return 'Buona per uso quotidiano e gaming leggero.'
            if (/^32-/.test(comp.id)) return 'Ottima per multitasking e giochi moderni.'
            return 'Molto RAM per editing e programmi pesanti.'
        }
        case 'storage':
        {
            if (comp.id.includes('gen5')) return 'SSD super veloce per caricare tutto in un attimo.'
            if (comp.id.includes('gen4')) return 'Velocità ideale per giochi e programmi.'
            if (comp.id.includes('sata')) return 'Buono per archiviazione e backup economico.'
            if (comp.id.includes('hdd')) return 'Capiente e ideale per archiviazione di massa.'
            return defaults.storage
        }
        case 'psu':
        {
            const watt = parseInt(comp.name.match(/\d+/)?.[0] || '0', 10)
            if (watt >= 1000) return 'Ottimo per sistemi high-end e overclock.'
            if (watt >= 800) return 'Perfetto per gaming e schede video potenti.'
            return 'Adatto per build mainstream e office.'
        }
        default:
            return defaults[type] || ''
    }
}

function updateDescriptions()
{
    Object.keys(state).forEach(type => 
    {
        const el = document.getElementById(`${type}Desc`)
        if (!el) return
        el.textContent = getSimpleHint(type, state[type])
    })
}

function populateSelect(selectEl, items)
{
    items.forEach(item => 
    {
        const opt = document.createElement('option')
        opt.value = item.id
        opt.textContent = item.name + ' (' + formatPrice(item.price) + ')'
        selectEl.appendChild(opt)
    })
}

function initSelects()
{
    populateSelect(selects.cpu, components.cpu)
    populateSelect(selects.mobo, components.mobo)
    populateSelect(selects.gpu, components.gpu)
    populateSelect(selects.ram, components.ram)
    populateSelect(selects.cooler, components.cooler)
    populateSelect(selects.storage, components.storage)
    populateSelect(selects.case, components.case)
    populateSelect(selects.psu, components.psu)
}

function findComponent(type, id)
{
    return components[type].find(c => c.id === id) || null
}

function updateState()
{
    state.cpu = findComponent('cpu', selects.cpu.value)
    state.mobo = findComponent('mobo', selects.mobo.value)
    state.gpu = findComponent('gpu', selects.gpu.value)
    state.ram = findComponent('ram', selects.ram.value)
    state.cooler = findComponent('cooler', selects.cooler.value)
    state.storage = findComponent('storage', selects.storage.value)
    state.case = findComponent('case', selects.case.value)
    state.psu = findComponent('psu', selects.psu.value)
}

function calcTotal()
{
    let total = 0
    Object.values(state).forEach(comp => 
    {
        if (comp) total += comp.price
    })
    return total
}

function isComplete()
{
    return Object.values(state).every(comp => comp !== null)
}

function updatePriceUI()
{
    const total = calcTotal()
    summaryTotalEl.textContent = formatPrice(total)

    if (isComplete())
    {
        compatInfoEl.innerHTML = 'Stato configurazione: <span class="badge bg-success">Completa</span>'
        noteTextEl.textContent = 'Configurazione completa!'
    } 
    else
    {
        compatInfoEl.innerHTML = 'Stato configurazione: <span class="badge bg-secondary">Incompleta</span>'
        noteTextEl.textContent = 'Seleziona tutti i componenti.'
    }
}

function updateSummaryUI()
{
    const values = [state.cpu, state.mobo, state.gpu, state.ram, state.cooler, state.storage, state.case, state.psu]
    const items = summaryListEl.querySelectorAll('.summary-item .value')
    items.forEach((el, idx) => 
    {
        const comp = values[idx]
        el.textContent = comp ? comp.name : '–'
        el.classList.toggle('text-muted', !comp)
    })
}

function handleChange(activeStep)
{
    updateState()
    updatePriceUI()
    updateSummaryUI()
    updateDescriptions()
    checkCompatibility()

    if (activeStep)
    {
        setActiveStep(activeStep)
    }
}

function normalizeStep(step)
{
    const mapping = 
    {
        mobo: 'cpu',
        cooler: 'gpu',
        case: 'storage',
        psu: 'storage'
    }
    return mapping[step] || step
}

function setActiveStep(step)
{
    const normalized = normalizeStep(step)
    document.querySelectorAll('.step').forEach(btn => 
    {
        btn.classList.toggle('active', btn.dataset.step === normalized)
    })
}

function scrollToStep(step)
{
    const normalized = normalizeStep(step)
    const target = document.getElementById(normalized === 'summary' ? 'step-summary' : `step-${normalized}`)
    if (target)
    {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}

function checkCompatibility()
{
    let cpuCompatMsg = ''
    if (state.cpu && state.mobo)
    {
        const compatMobos = compatibility.cpu_mobo[state.cpu.id] || []
        if (!compatMobos.includes(state.mobo.id))
        {
            cpuCompatMsg = '⚠️ CPU e Mobo potrebbero non essere compatibili!'
        } 
        else
        {
            cpuCompatMsg = '✓ Compatibile'
        }
    }
    document.getElementById('cpuCompat').textContent = cpuCompatMsg

    let gpuCompatMsg = ''
    if (state.gpu && state.psu)
    {
        const requiredWattage = compatibility.gpu_psu[state.gpu.id] || 600
        const psuWattage = parseInt(state.psu.name.match(/\d+/)[0]) || 0
        if (psuWattage < requiredWattage)
        {
            gpuCompatMsg = `⚠️ PSU insufficiente! Richiesto: ${requiredWattage}W`
        } 
        else 
        {
            gpuCompatMsg = '✓ Compatibile'
        }
    }
    document.getElementById('gpuCompat').textContent = gpuCompatMsg

    let moboCompatMsg = ''
    if (state.mobo && state.cpu && state.mobo.socket === state.cpu.socket)
    {
        moboCompatMsg = '✓ Socket compatibile'
    } 
    else if (state.mobo && state.cpu)
    {
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

document.addEventListener('DOMContentLoaded', () =>
{
    productModal = new bootstrap.Modal(document.getElementById('productModal'), {})
    productModalTitle = document.getElementById('productModalTitle')
    productImage = document.getElementById('productImage')
    productSize = document.getElementById('productSize')
    productPrice = document.getElementById('productPrice')
    productDesc = document.getElementById('productDesc')
    productLink = document.getElementById('productLink')

    initSelects()
    updatePriceUI()
    updateSummaryUI()

    Object.entries(selects).forEach(([type, selectEl]) =>
    {
        selectEl.addEventListener('change', () => handleChange(type))
        selectEl.addEventListener('focus', () => setActiveStep(type))
    })

    document.querySelectorAll('.info-btn').forEach(btn =>
    {
        btn.addEventListener('click', () => 
        {
            const type = btn.dataset.type
            const selectId = btn.dataset.select
            showProductDetails(type, selectId)
        })
    })

    document.querySelectorAll('.step').forEach(btn => 
    {
        btn.addEventListener('click', () => 
        {
            const step = btn.dataset.step
            setActiveStep(step)
            scrollToStep(step)
        })
    })

    btnSummary.addEventListener('click', () => 
    {
        handleChange('summary')
        scrollToStep('summary')
    })

    updateDescriptions()
    setActiveStep('cpu')
})
