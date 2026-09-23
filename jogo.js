const SISTEMAS = {
atari2600: {
pasta: "Atari-2600",
core: "atari2600",
extensoes: [".a26", ".zip"]
},

atari5200: {
    pasta: "Atari-5200",
    core: "atari5200",
    extensoes: [".a52", ".zip"]
},

atari7800: {
    pasta: "Atari-7800",
    core: "atari7800",
    extensoes: [".a78", ".zip"]
},

nes: {
    pasta: "NES",
    core: "fceumm",
    extensoes: [".nes", ".zip"]
},

snes: {
    pasta: "SNES",
    core: "snes",
    extensoes: [".sfc", ".smc", ".zip", ".7z"]
},

gba: {
    pasta: "Game-Boy-Advance",
    core: "gba",
    extensoes: [".gba", ".zip"]
},

n64: {
    pasta: "Nintendo-64",
    core: "n64",
    extensoes: [".z64", ".n64", ".v64", ".zip"]
},

nds: {
    pasta: "Nintendo-DS",
    core: "desmume",
    extensoes: [".nds", ".zip", ".7z", ".rar"]
},

psx: {
    pasta: "PlayStation-1",
    core: "mednafen_psx_hw",
    extensoes: [".bin", ".cue", ".iso", ".chd", ".7z", ".zip"]
}

};

const JOGOS = {
"aceattorney": {
nome: "Phoenix Wright: Ace Attorney",
sistema: "nds",
url: "Jogos/ace-attorney/aceattorney/Phoenix Wright - Ace Attorney (USA).zip",
partes: 2
},

"justiceforall": {
    nome: "Phoenix Wright: Ace Attorney - Justice for All",
    sistema: "nds",
    url: "Jogos/ace-attorney/Phoenix Wright - Ace Attorney - Justice for All (USA)/Phoenix Wright - Ace Attorney - Justice for All (USA).zip",
    partes: 1
},

"trialsandtribulations": {
    nome: "Phoenix Wright: Ace Attorney - Trials and Tribulations",
    sistema: "nds",
    url: "Jogos/ace-attorney/Phoenix Wright - Ace Attorney - Trials and Tribulations (USA)/Phoenix Wright - Ace Attorney - Trials and Tribulations (USA).zip",
    partes: 1
},

"apollojustice": {
    nome: "Apollo Justice: Ace Attorney",
    sistema: "nds",
    url: "Jogos/ace-attorney/apollojustice/Apollo Justice - Ace Attorney (USA).zip",
    partes: 3
},

"milesedgeworth": {
    nome: "Ace Attorney Investigations: Miles Edgeworth",
    sistema: "nds",
    url: "Jogos/ace-attorney/milesedgeworth/Ace Attorney Investigations - Miles Edgeworth (USA).zip",
    partes: 2
},

"pokemon-emerald": {
    nome: "Pokémon Emerald",
    sistema: "gba",
    url: "Jogos/Game-Boy-Advance/Pokemon - Emerald Version/Pokemon - Emerald Version.zip",
    partes: 10
},

"pokemon-fire-red-leaf-green": {
    nome: "Pokémon FireRed & LeafGreen",
    sistema: "gba",
    url: "Jogos/Game-Boy-Advance/Pokemon - Leaf Green Version & Fire Red Version/Pokemon - Leaf Green Version & Fire Red Version.zip",
    partes: 17
},

"final-fantasy-dawn-of-souls": {
    nome: "Final Fantasy I & II: Dawn of Souls",
    sistema: "gba",
    url: "Jogos/Game-Boy-Advance/Final Fantasy I & II - Dawn of Souls/Final Fantasy I & II - Dawn of Souls.zip",
    partes: 4
},

"mario-luigi-superstar-saga": {
    nome: "Mario & Luigi: Superstar Saga",
    sistema: "gba",
    url: "Jogos/Game-Boy-Advance/Mario & Luigi - Superstar Saga/Mario & Luigi - Superstar Saga.zip",
    partes: 5
},

"mario-golf-advance-tour": {
    nome: "Mario Golf: Advance Tour",
    sistema: "gba",
    url: "Jogos/Game-Boy-Advance/Mario Golf - Advance Tour/Mario Golf - Advance Tour.zip",
    partes: 4
},

"mario-kart-super-circuit": {
    nome: "Mario Kart: Super Circuit",
    sistema: "gba",
    url: "Jogos/Game-Boy-Advance/Mario Kart Super Circuit/Mario Kart Super Circuit.zip",
    partes: 2
},

"mario-vs-donkey-kong": {
    nome: "Mario vs. Donkey Kong",
    sistema: "gba",
    url: "Jogos/Game-Boy-Advance/Mario vs. Donkey Kong/Mario vs. Donkey Kong.zip",
    partes: 2
},

"sonic-advance": {
    nome: "Sonic Advance",
    sistema: "gba",
    url: "Jogos/Game-Boy-Advance/Sonic Advance/Sonic Advance.zip",
    partes: 1
},

"sonic-advance-2": {
    nome: "Sonic Advance 2",
    sistema: "gba",
    url: "Jogos/Game-Boy-Advance/Sonic Advance 2/Sonic Advance 2.zip",
    partes: 2
},

"sonic-advance-3": {
    nome: "Sonic Advance 3",
    sistema: "gba",
    url: "Jogos/Game-Boy-Advance/Sonic Advance 3/Sonic Advance 3.zip",
    partes: 2
},

"super-mario-advance": {
    nome: "Super Mario Advance",
    sistema: "gba",
    url: "Jogos/Game-Boy-Advance/Super Mario Advance/Super Mario Advance.zip",
    partes: 3
},

"super-mario-advance-2": {
    nome: "Super Mario Advance 2: Super Mario World",
    sistema: "gba",
    url: "Jogos/Game-Boy-Advance/Super Mario Advance 2 - Super Mario World/Super Mario Advance 2 - Super Mario World.zip",
    partes: 3
},

"super-mario-advance-3": {
    nome: "Super Mario Advance 3: Yoshi's Island",
    sistema: "gba",
    url: "Jogos/Game-Boy-Advance/Super Mario Advance 3 - Yoshi's Island/Super Mario Advance 3 - Yoshi's Island.zip",
    partes: 2
},

"super-mario-advance-4": {
    nome: "Super Mario Advance 4: Super Mario Bros. 3",
    sistema: "gba",
    url: "Jogos/Game-Boy-Advance/Super Mario Advance 4 - Super Mario Bros. 3/Super Mario Advance 4 - Super Mario Bros. 3.zip",
    partes: 3
},

"tomodachi-collection": {
    nome: "Tomodachi Collection",
    sistema: "nds",
    url: "Jogos/Nintendo/tomodachi-collection/tomodashi-collection-english.7z",
    partes: 2
},

"warioware-touched": {
    nome: "WarioWare: Touched!",
    sistema: "nds",
    url: "Jogos/Nintendo/warioware-touched/ww.zip",
    partes: 2
},

"nfscarbon": {
    nome: "Need for Speed: Carbon",
    sistema: "gba",
    url: "Jogos/need-for-speed/nfscabron/nfscarbon.zip",
    partes: 2
},

"nfsmostwanted": {
    nome: "Need for Speed: Most Wanted",
    sistema: "gba",
    url: "Jogos/need-for-speed/nfsmostwanted/nfsmostwanted.zip",
    partes: 1
},

"nfsunderground2": {
    nome: "Need for Speed: Underground 2",
    sistema: "gba",
    url: "Jogos/need-for-speed/nfsnderground2/nfsunderground2.zip",
    partes: 1
},

"san-andreas": {
    nome: "Grand Theft Auto: San Andreas",
    sistema: "psx",
    url: "Jogos/san-andreas/san-andreas.iso",
    partes: 217
}

};