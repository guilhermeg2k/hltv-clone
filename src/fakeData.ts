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
const fakeData = {
  teamsData,
  eventsData,
  playerOfTheWeek
};

export default fakeData;
