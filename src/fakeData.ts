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

const todayNews = [
  {
    flagUrl: 'https://www.hltv.org/img/static/flags/30x20/BR.gif',
    title: 'mat1czera Manquit\'s ex rifler-star joins MIBR',
    time: '1 hour ago',
    comments: 1325
  },
  {
    flagUrl: 'https://www.hltv.org/img/static/flags/30x20/EU.gif',
    title: 'CS:GO Elite Series announced for Benelux teams',
    time: 'an hour ago',
    comments: 45
  },
  {
    flagUrl: 'https://www.hltv.org/img/static/flags/30x20/EU.gif',
    title: 'BLAST Premier Fall 2020 Showdown Fantasy goes live',
    time: '4 hour ago',
    comments: 17
  },
  {
    flagUrl: 'https://www.hltv.org/img/static/flags/30x20/BR.gif',
    title: 'mat1czera departs with Manquit',
    time: '4 hour ago',
    comments: 856
  },
  {
    flagUrl: 'https://www.hltv.org/img/static/flags/30x20/DE.gif',
    title: 'Video: syrsoN vs. NiP',
    time: '8 hour ago',
    comments: 156
  },
  {
    flagUrl: 'https://www.hltv.org/img/static/flags/30x20/BR.gif',
    title: '[VOD] Talking FURIA\'s European campaign and future of Brazilian CS on HLTV Confirmed with arT',
    time: '16 hour ago',
    comments: 856
  },
];

const yesterdayNews = [
  {
    flagUrl: 'https://www.hltv.org/img/static/flags/30x20/EU.gif',
    title: 'BLAST Premier Fall Showdown talent announced',
    time: 'a day ago',
    comments: 115
  },
  {
    flagUrl: 'https://www.hltv.org/img/static/flags/30x20/CA.gif',
    title: '[VOD] Online CS problems and solutions on HLTV Confirmed: Gamechanger with launders',
    time: 'a day ago',
    comments: 54
  },
  {
    flagUrl: 'https://www.hltv.org/img/static/flags/30x20/FI.gif',
    title: 'sergej benched in ENCE; SADDYX to stand in',
    time: 'a day ago',
    comments: 507
  }
];

const previousNews = [
  {
    flagUrl: 'https://www.hltv.org/img/static/flags/30x20/BR.gif',
    title: 'zmb to join FURIA in Serbia bootcamp',
    time: '2 day ago',
    comments: 71
  },
  {
    flagUrl: 'https://www.hltv.org/img/static/flags/30x20/EU.gif',
    title: 'BIG round out IEM Beijing-Haidian playoffs team list with win over NiP',
    time: '2 day ago',
    comments: 56
  },
  {
    flagUrl: 'https://www.hltv.org/img/static/flags/30x20/EU.gif',
    title: 'G2 eliminate mousesports to reach IEM Beijing-Haidian quarter-finals',
    time: '2 day ago',
    comments: 97
  },
  {
    flagUrl: 'https://www.hltv.org/img/static/flags/30x20/DE.gif',
    title: 'GODSENT bench kRYSTAL',
    time: '3 day ago',
    comments: 343
  },
  {
    flagUrl: 'https://www.hltv.org/img/static/flags/30x20/NL.gif',
    title: 'Video: chrisJ vs. Astralis',
    time: '3 day ago',
    comments: 79
  },
  {
    flagUrl: 'https://www.hltv.org/img/static/flags/30x20/DK.gif',
    title: 'Astralis secure IEM Beijing-Haidian playoffs spot with victory over mousesports',
    time: '4 day ago',
    comments: 77
  },
  {
    flagUrl: 'https://www.hltv.org/img/static/flags/30x20/US.gif',
    title: 'ex-Cloud9 to retain oSee; round out roster with Infinite',
    time: '5 day ago',
    comments: 103
  },
  {
    flagUrl: 'https://www.hltv.org/img/static/flags/30x20/BR.gif',
    title: 'MIBR defeat Envy at Flashpoint 2',
    time: '5 day ago',
    comments: 79
  },
  {
    flagUrl: 'https://www.hltv.org/img/static/flags/30x20/EU.gif',
    title: 'Nine to Five 6 Fantasy live with prizes',
    time: '5 day ago',
    comments: 11
  },
  {
    flagUrl: 'https://www.hltv.org/img/static/flags/30x20/EU.gif',
    title: 'Astralis coast past ENCE in IEM Beijing-Haidian',
    time: '5 day ago',
    comments: 67
  },
  {
    flagUrl: 'https://www.hltv.org/img/static/flags/30x20/SE.gif',
    title: 'THREAT signs new deal with NiP',
    time: '5 day ago',
    comments: 56
  },
  {
    flagUrl: 'https://www.hltv.org/img/static/flags/30x20/EU.gif',
    title: 'BIG move past forZe; advance to Flashpoint 2 playoffs',
    time: '6 day ago',
    comments: 16
  },
  {
    flagUrl: 'https://www.hltv.org/img/static/flags/30x20/EU.gif',
    title: 'NiP ease past G2 in IEM Beijing-Haidian',
    time: '6 day ago',
    comments: 97
  },
  {
    flagUrl: 'https://www.hltv.org/img/static/flags/30x20/EU.gif',
    title: 'Gen.G upset OG in Flashpoint 2 Group C opening match',
    time: '6 day ago',
    comments: 89
  },
  {
    flagUrl: 'https://www.hltv.org/img/static/flags/30x20/EU.gif',
    title: 'Virtus.pro spoil new-look Cloud9 debut',
    time: '6 day ago',
    comments: 165
  },
  {
    flagUrl: 'https://www.hltv.org/img/static/flags/30x20/EU.gif',
    title: 'NAVI eliminate Spirit from IEM Beijing-Haidian to clinch playoff spot',
    time: '6 day ago',
    comments: 35
  },
];

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
  todayNews,
  yesterdayNews,
  previousNews
};

export default fakeData;
