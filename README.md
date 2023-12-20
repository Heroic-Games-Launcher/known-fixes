## Collaborations

1. Add a JSON file following the file name convention with the list of winetricks packages and the game title as the content
2. Update this README adding the title of the game to the Store's list in alphabetical order

### Filename

`<appName>-<store>.json` where appName is the appName used by Heroic and store is one of `epic`, `gog`, or `amazon`

### JSON content

```json
{
  "title": "Alan Wake's American Nightmare",
  "winetricks": ["d3dcompiler_47", "vcrun2019"]
}
```

The value of the `winetricks` property is an array of the names that Winetricks understands.

## Fixes in the repo

### Epic:

- 20XX
- Alan Wake's American Nightmare
- BioShock Remastered
- Blair Witch
- Core
- Darksiders II Deathinitive Edition
- Defense Grid: The Awakening
- Epistory - Typing Chronicles
- Europa Universalis IV
- Galactic Civilizations III
- Galactic Civilizations III (Test branch)
- Hob
- Horizon Zero Dawn Complete Edition
- Hyper Light Drifter
- MudRunner
- Next Up Hero
- PC Building Simulator
- Redout: Enhanced Edition
- Rogue Legacy
- Shadow Tactics - Aiko's Choice
- Them's Fightin' Herds
- Train Sim World 2
- Unrailed

### GOG:

- Alien Breed: Impact
- Alien Breed 2: Assault
- Alien Breed 3: Descent
- Beyond Good & Evil™
- Hitman: Absolution
- SpellForce 2 - Anniversary Edition
- SpellForce 2: Demons Of The Past
- SpellForce 2: Faith in Destiny
- Venetica - Gold Edition

### Amazon:
