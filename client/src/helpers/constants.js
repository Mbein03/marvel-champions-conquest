const None = 'None';
const TierCBasic = 'Tier C Basic';
const TierBRoll = 'Tier B Roll';
const TierARoll = 'Tier A Roll';
const TierSRoll = 'Tier S Roll';
const Shawarma = 'Shawarma';

export const storeCardTiers = ['B', 'A', 'S'];

export const lootDrops = [
  { id: 'T1', name: 'T1' },
  { id: 'T1+', name: 'T1+' },
  { id: 'T2', name: 'T2' },
  { id: 'T2+', name: 'T2+' },
  { id: 'T3', name: 'T3' },
  { id: 'T3+', name: 'T3+' },
  { id: 'T4', name: 'T4' },
  { id: 'T4+', name: 'T4+' },
];

export const factionRolls = [
  { id: 'Basic', name: 'Basic' },
  { id: 'Aggression', name: 'Aggression' },
  { id: 'Justice', name: 'Justice' },
  { id: 'Leadership', name: 'Leadership' },
  { id: 'Protection', name: 'Protection' },
  { id: 'Your Choice', name: 'Your Choice' },
];

export const factionOrder = { Basic: 1, Aggression: 2, Justice: 3, Leadership: 4, Protection: 5 };
export const factions = factionRolls.slice(0, -1);

export const tierOrder = { S: 1, A: 2, B: 3, C: 4 };
export const tiers = [
  { id: 'S', name: 'S' },
  { id: 'A', name: 'A' },
  { id: 'B', name: 'B' },
  { id: 'C', name: 'C' },
];

export const rewardTable = [
  {
    lootDrop: 'T1',
    results: [
      None,
      None,
      None,
      None,
      TierCBasic,
      TierCBasic,
      TierCBasic,
      TierCBasic,
      TierCBasic,
      TierCBasic,
      TierBRoll,
      TierBRoll,
    ],
  },
  {
    lootDrop: 'T1+',
    results: [
      None,
      TierCBasic,
      TierCBasic,
      TierCBasic,
      TierCBasic,
      TierCBasic,
      TierCBasic,
      TierBRoll,
      TierBRoll,
      TierBRoll,
      TierBRoll,
      TierARoll,
    ],
  },
  {
    lootDrop: 'T2',
    results: [
      TierCBasic,
      TierCBasic,
      TierCBasic,
      TierCBasic,
      TierBRoll,
      TierBRoll,
      TierBRoll,
      TierBRoll,
      TierBRoll,
      TierBRoll,
      TierARoll,
      TierARoll,
    ],
  },
  {
    lootDrop: 'T2+',
    results: [
      TierCBasic,
      TierBRoll,
      TierBRoll,
      TierBRoll,
      TierBRoll,
      TierBRoll,
      TierBRoll,
      TierARoll,
      TierARoll,
      TierARoll,
      TierARoll,
      TierSRoll,
    ],
  },
  {
    lootDrop: 'T3',
    results: [
      TierBRoll,
      TierBRoll,
      TierBRoll,
      TierBRoll,
      TierARoll,
      TierARoll,
      TierARoll,
      TierARoll,
      TierARoll,
      TierARoll,
      TierSRoll,
      TierSRoll,
    ],
  },
  {
    lootDrop: 'T3+',
    results: [
      TierARoll,
      TierARoll,
      TierARoll,
      TierARoll,
      TierARoll,
      TierARoll,
      TierARoll,
      TierARoll,
      TierSRoll,
      TierSRoll,
      TierSRoll,
      TierSRoll,
    ],
  },
  {
    lootDrop: 'T4',
    results: [
      TierARoll,
      TierARoll,
      TierARoll,
      TierARoll,
      TierSRoll,
      TierSRoll,
      TierSRoll,
      TierSRoll,
      TierSRoll,
      TierSRoll,
      TierSRoll,
      Shawarma,
    ],
  },
  {
    lootDrop: 'T4+',
    results: [
      TierSRoll,
      TierSRoll,
      TierSRoll,
      TierSRoll,
      TierSRoll,
      TierSRoll,
      TierSRoll,
      TierSRoll,
      TierSRoll,
      TierSRoll,
      Shawarma,
      Shawarma,
    ],
  },
];
