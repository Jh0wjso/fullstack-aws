interface Session {
  sessionId: string;
  hostname: string;
  players: number;
  map: string;
  mode: string;
}

export const fakeSessions: Session[] = [
  {
    sessionId: "1",
    hostname: "Server1",
    players: 4,
    map: "Island",
    mode: "Survival",
  },
  {
    sessionId: "2",
    hostname: "Server2",
    players: 2,
    map: "Desert",
    mode: "Deathmatch",
  },
  {
    sessionId: "3",
    hostname: "Server3",
    players: 6,
    map: "Forest",
    mode: "Battle Royale",
  },
  {
    sessionId: "4",
    hostname: "Server4",
    players: 8,
    map: "City",
    mode: "Capture the Flag",
  },
  {
    sessionId: "5",
    hostname: "Server5",
    players: 10,
    map: "Mountain",
    mode: "King of the Hill",
  },
];
