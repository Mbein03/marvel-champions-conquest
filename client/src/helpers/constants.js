const None = 'None';
const TierCBasic = 'Tier C Basic';
const TierBRoll = 'Tier B Roll';
const TierARoll = 'Tier A Roll';
const TierSRoll = 'Tier S Roll';
const Shawarma = 'Shawarma';

// Tier select options
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

// Faction options
export const factions = [
  { id: 'Basic', name: 'Basic' },
  { id: 'Protection', name: 'Protection' },
  { id: 'Leadership', name: 'Leadership' },
  { id: 'Aggression', name: 'Aggression' },
  { id: 'Justice', name: 'Justice' },
  { id: 'Your Choice', name: 'Your Choice' },
];

// Primary loot table rolls
export const rewardTable = [
  {
    drop: 'T1',
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
    drop: 'T1+',
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
    drop: 'T2',
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
    drop: 'T2+',
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
    drop: 'T3',
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
    drop: 'T3+',
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
    drop: 'T4',
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
    drop: 'T4+',
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
