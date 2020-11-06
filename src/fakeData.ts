const teamsData = [
  {
    rank: 1,
    name: 'FURIA',
    logoUrl: 'https://img-cdn.hltv.org/teamlogo/mvNQc4csFGtxXk5guAh8m1.svg?ixlib=java-2.1.0&s=11e5056829ad5d6c06c5961bbe76d20c',
  },
  {
    rank: 2,
    name: 'Astralis',
    logoUrl: 'https://img-cdn.hltv.org/teamlogo/9bgXHp-oh1oaXr7F0mTGmd.svg?ixlib=java-2.1.0&s=f567161ab183001be33948b98c4b2067',
  },
  {
    rank: 3,
    name: 'Vitality',
    logoUrl: 'https://img-cdn.hltv.org/teamlogo/P-nn64asnwkfr-t4zy4-56.svg?ixlib=java-2.1.0&s=bf04a800f490bd93ee377c5daf72e3ac',
  },
  {
    rank: 4,
    name: 'Heroic',
    logoUrl: 'https://img-cdn.hltv.org/teamlogo/ffSPDr5mbWSKI4yruyfVtx.svg?ixlib=java-2.1.0&s=2b0a91cf4a31e6eec7a5928b10465f32',
  },
  {
    rank: 5,
    name: 'Natus Vincere',
    logoUrl: 'https://img-cdn.hltv.org/teamlogo/kixzGZIb9IYAAv-1vGrGev.svg?ixlib=java-2.1.0&s=8f9986a391fcb1adfbfff021b824a937',
  }
]

const eventsData = [
  {
    name: 'Blast Fall',
    daysToStart: "2 days",
    logoUrl: 'https://static.hltv.org/images/eventLogos/5207.png'
  },
  {
    name: 'IEM Beijing EU',
    daysToStart: "8 days",
    logoUrl: 'https://static.hltv.org/images/eventLogos/5524.png'
  },
  {
    name: 'IEM Beijing NA',
    daysToStart: "8 days",
    logoUrl: 'https://static.hltv.org/images/eventLogos/5524.png'
  },
  {
    name: 'Blast Fall Showdown',
    daysToStart: "25 days",
    logoUrl: 'https://static.hltv.org/images/eventLogos/5207.png'
  },
]

const playerOfTheWeek = {
  name: "Martin 'stavn' Lund",
  nickName: "stavn",
  photoUrl: "https://img-cdn.hltv.org/playerbodyshot/ebX1nyC7pzo5bLwDtkmabc.png?ixlib=java-2.1.0&s=01e6ca081ed78357ab670bf6c92714cc",
  team: {
    name: "heroic",
    iconUrl: "https://img-cdn.hltv.org/teamlogo/ffSPDr5mbWSKI4yruyfVtx.svg?ixlib=java-2.1.0&s=2b0a91cf4a31e6eec7a5928b10465f32"
  },
  data: {
    name: "Opening duels Won",
    value: "74.2%"
  }
}

const gallerie = {
  photoUrl: 'https://img-cdn.hltv.org/gallerypicture/jLP5WCBPx8mHpgz3BJFs3t.jpg?ixlib=java-2.1.0&w=500&s=a3dbd7c5a4ef7bcab17d7febdca96727',
  photoDescription: 'EMS One Katowice 2014 - Day 1',
}

const matches = [
  {
    teams: {
      1: {
        name: "BIG",
        icon: "https://www.hltv.org/img/static/flags/30x20/DE.gif",
        mapPoints: 0,
        roundPoints: 10,
      },
      2: {
        name: "Vitality",
        icon: "https://www.hltv.org/img/static/flags/30x20/FR.gif",
        mapPoints: 1,
        roundPoints: 14,
      }
    }
  },
  {
    teams: {
      1: {
        name: "Illuminar",
        icon: "https://www.hltv.org/img/static/flags/30x20/PL.gif",
        mapPoints: 0,
        roundPoints: 7,
      },
      2: {
        name: "Sprout",
        icon: "https://www.hltv.org/img/static/flags/30x20/DE.gif",
        mapPoints: 0,
        roundPoints: 11,
      }
    }
  },
  {
    time: "15:30",
    teams: {
      1: {
        name: "Complexity",
        icon: "https://www.hltv.org/img/static/flags/30x20/EU.gif",
      },
      2: {
        name: "Sprout",
        icon: "https://www.hltv.org/img/static/flags/30x20/EU.gif",
      }
    }
  },
  {
    time: "08:00",
    teams: {
      1: {
        name: "Spirit",
        icon: "https://www.hltv.org/img/static/flags/30x20/RU.gif",
      },
      2: {
        name: "North",
        icon: "https://www.hltv.org/img/static/flags/30x20/DK.gif",
      }
    }
  },
  {
    time: "18:00",
    teams: {
      1: {
        name: "Liquid",
        icon: "https://www.hltv.org/img/static/flags/30x20/US.gif",
      },
      2: {
        name: "Rugratz",
        icon: "https://www.hltv.org/img/static/flags/30x20/US.gif",
      }
    }
  },
  {
    time: "20:00",
    teams: {
      1: {
        name: "MiBR",
        icon: "https://www.hltv.org/img/static/flags/30x20/BR.gif",
      },
      2: {
        name: "FURIA",
        icon: "https://www.hltv.org/img/static/flags/30x20/BR.gif",
      }
    }
  },
];

const matchesResults = [
  {
    title: "LOOT.BET Season 8",
    teams: {
      1: {
        name: "Gambit",
        icon: "https://www.hltv.org/img/static/flags/30x20/RU.gif",
        mapPoints: 2,
      },
      2: {
        name: "sAw",
        icon: "https://www.hltv.org/img/static/flags/30x20/PT.gif",
        mapPoints: 0,
      }
    }
  },
  {
    title: "ESEA MDL Season 35 North America",
    teams: {
      1: {
        name: "Secret Club",
        icon: "https://www.hltv.org/img/static/flags/30x20/US.gif",
        mapPoints: 2,
      },
      2: {
        name: "Mythic",
        icon: "https://www.hltv.org/img/static/flags/30x20/US.gif",
        mapPoints: 0,
      }
    }
  },
  {
    title: "DreamHack Master Winter Qualify",
    teams: {
      1: {
        name: "EndPoint",
        icon: "https://www.hltv.org/img/static/flags/30x20/EU.gif",
        mapPoints: 0,
      },
      2: {
        name: "Gambit",
        icon: "https://www.hltv.org/img/static/flags/30x20/RU.gif",
        mapPoints: 2,
      }
    }
  },
  {
    title: "BLAST Premier Fall Series 2020 ",
    teams: {
      1: {
        name: "Astralis",
        icon: "https://www.hltv.org/img/static/flags/30x20/DK.gif",
        mapPoints: 0,
      },
      2: {
        name: "G2",
        icon: "https://www.hltv.org/img/static/flags/30x20/EU.gif",
        mapPoints: 2,
      }
    }
  },
  {
    title: "BLAST Premier Fall Series 2020 ",
    teams: {
      1: {
        name: "MiBR",
        icon: "https://www.hltv.org/img/static/flags/30x20/BR.gif",
        mapPoints: 1,
      },
      2: {
        name: "G2",
        icon: "https://www.hltv.org/img/static/flags/30x20/EU.gif",
        mapPoints: 2,
      }
    }
  },
  {
    title: "BLAST Premier Fall Series 2020 ",
    teams: {
      1: {
        name: "Vitality",
        icon: "https://www.hltv.org/img/static/flags/30x20/FR.gif",
        mapPoints: 1,
      },
      2: {
        name: "BIG",
        icon: "https://www.hltv.org/img/static/flags/30x20/DE.gif",
        mapPoints: 2,
      }
    }
  },
  {
    title: "BLAST Premier Fall Series 2020 ",
    teams: {
      1: {
        name: "BIG",
        icon: "https://www.hltv.org/img/static/flags/30x20/DE.gif",
        mapPoints: 2,
      },
      2: {
        name: "FaZe",
        icon: "https://www.hltv.org/img/static/flags/30x20/EU.gif",
        mapPoints: 1,
      }
    }
  },
];

const streamers = [
  {
    typeIcon: 'https://static.hltv.org/images/mod_csgo_caster.png',
    flagIcon: 'https://www.hltv.org/img/static/flags/30x20/BR.gif',
    name: 'gaules',
    viewers: 234030
  },
  {
    typeIcon: 'https://static.hltv.org/images/mod_csgo_caster.png',
    flagIcon: 'https://www.hltv.org/img/static/flags/30x20/GB.gif',
    name: 'ESL TV',
    viewers: 39448
  },
  {
    typeIcon: 'https://static.hltv.org/images/mod_csgo_caster.png',
    flagIcon: 'https://www.hltv.org/img/static/flags/30x20/RU.gif',
    name: 'MainCast',
    viewers: 18448
  },
  {
    typeIcon: 'https://static.hltv.org/images/mod_csgo_caster.png',
    flagIcon: 'https://www.hltv.org/img/static/flags/30x20/FR.gif',
    name: 'ESL TV',
    viewers: 5953
  },
  {
    typeIcon: 'https://static.hltv.org/images/mod_csgo_caster.png',
    flagIcon: 'https://www.hltv.org/img/static/flags/30x20/ES.gif',
    name: 'ESL TV',
    viewers: 2158
  },
  {
    typeIcon: 'https://static.hltv.org/images/mod_csgo_player.png',
    flagIcon: 'https://www.hltv.org/img/static/flags/30x20/BR.gif',
    name: 'nak',
    viewers: 1448
  },
  {
    typeIcon: 'https://static.hltv.org/images/mod_csgo_player.png',
    flagIcon: 'https://www.hltv.org/img/static/flags/30x20/FI.gif',
    name: 'alu',
    viewers: 1446
  },
  {
    typeIcon: 'https://static.hltv.org/images/mod_csgo_player.png',
    flagIcon: 'https://www.hltv.org/img/static/flags/30x20/US.gif',
    name: 'fl0m',
    viewers: 490
  },
  {
    typeIcon: 'https://static.hltv.org/images/mod_csgo_player.png',
    flagIcon: 'https://www.hltv.org/img/static/flags/30x20/RU.gif',
    name: 'WorldEdit',
    viewers: 108
  },
  {
    typeIcon: 'https://static.hltv.org/images/mod_csgo_female.png',
    flagIcon: 'https://www.hltv.org/img/static/flags/30x20/RS.gif',
    name: 'zoniQ',
    viewers: 38
  },
  {
    typeIcon: 'https://static.hltv.org/images/mod_csgo_caster.png',
    flagIcon: 'https://www.hltv.org/img/static/flags/30x20/BR.gif',
    name: 'ferreiran1',
    viewers: 5
  },
]

const recentActivities = [
  {
    type: 0,
    title: "-kennyS +???",
    comments: 148
  },
  {
    type: 0,
    title: "#FreeVSM",
    comments: 432
  },
  {
      type: 0,
      title: "Stolen election",
      comments: 5
  },
  {
    type: 0,
    title: "NaVi Fix",
    comments: 26
  },
  {
    type: 1,
    title: "FaZe vs OG",
    comments: 154
  },
  {
    type: 0,
    title: "Brazilians come here",
    comments: 25
  },
  {
    type: 0,
    title: "Zywoo #1",
    comments: 54
  },
  {
    type: 0,
    title: "Big Era 1 week",
    comments: 35
  },
  {
    type: 0,
    title: "trk top 1 NA player",
    comments: 4
  },
  {
    type: 0,
    title: "FAZE HUGE FIX",
    comments: 11
  },
  {
    type: 2,
    title: "EUROPEAN DEVELOPMENT CHAMPIONSHIP SERIES ANNOUNCED WITH $150,000",
    comments: 43
  },
  {
    type: 0,
    title: "Banned from discord server",
    comments: 25
  },
  {
    type: 2,
    title: "ENCE SIGN DOTO ON TWO-YEAR DEAL; SAW JOINS AS HEAD COACH",
    comments: 243
  },
  {
    type: 0,
    title: "PC build neeed advice",
    comments: 243
  },
  {
    type: 0,
    title: "Leftist come here",
    comments: 143
  },
  {
    type: 0,
    title: "Which GPU to buy?",
    comments: 7
  },
]

const latestReplays = [
  {
    time: "DEMO",
    teams: {
      1: {
        name: "PACT",
        icon: "https://www.hltv.org/img/static/flags/30x20/PL.gif",
      },
      2: {
        name: "PGE Turow",
        icon: "https://www.hltv.org/img/static/flags/30x20/PL.gif",
      }
    }
  },
  {
    time: "DEMO",
    teams: {
      1: {
        name: "Vitality",
        icon: "https://www.hltv.org/img/static/flags/30x20/FR.gif",
      },
      2: {
        name: "Spirit",
        icon: "https://www.hltv.org/img/static/flags/30x20/RU.gif",
      }
    }
  },
  {
    time: "DEMO",
    teams: {
      1: {
        name: "Gambit",
        icon: "https://www.hltv.org/img/static/flags/30x20/RU.gif",
      },
      2: {
        name: "sAw",
        icon: "https://www.hltv.org/img/static/flags/30x20/PT.gif",
      }
    }
  },
  {
    time: "DEMO",
    teams: {
      1: {
        name: "Secret Club",
        icon: "https://www.hltv.org/img/static/flags/30x20/US.gif",
      },
      2: {
        name: "Mythic",
        icon: "https://www.hltv.org/img/static/flags/30x20/US.gif",
      }
    }
  },
  {
    time: "DEMO",
    teams: {
      1: {
        name: "c0ntact",
        icon: "https://www.hltv.org/img/static/flags/30x20/EU.gif",
      },
      2: {
        name: "Poland",
        icon: "https://www.hltv.org/img/static/flags/30x20/PL.gif",
      }
    }
  },
  {
    time: "DEMO",
    teams: {
      1: {
        name: "G2",
        icon: "https://www.hltv.org/img/static/flags/30x20/EU.gif",
      },
      2: {
        name: "MiBR",
        icon: "https://www.hltv.org/img/static/flags/30x20/BR.gif",
      }
    }
  },
  {
    time: "DEMO",
    teams: {
      1: {
        name: "Virtus.pro",
        icon: "https://www.hltv.org/img/static/flags/30x20/CIS.gif",
      },
      2: {
        name: "ForZe",
        icon: "https://www.hltv.org/img/static/flags/30x20/RU.gif",
      }
    }
  },
]

const fakeData = {
  teamsData,
  eventsData,
  playerOfTheWeek,
  gallerie,
  matches,
  matchesResults,
  streamers,
  recentActivities,
  latestReplays,
};

export default fakeData;
