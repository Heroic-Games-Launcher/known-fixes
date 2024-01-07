## Known Game Fixes

This repo keeps track of known fixes for games (currently we are tracking only winetricks fixes) running with Heroic Games Launcher.

Note that this information applies to using up to date versions of the different tools. Make sure to use the latest version of Heroic and Wine-GE-Proton.

Keep in mind that some games may need extra fixes and not only winetricks (like Empire Earth 3 needs DXVK disabled) and that information is not yet mapped here.

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

### Removals

When a fix is not needed anymore, remove the json file and strike-through the title in the Readme with a mention of why it's removed if the reason is known.

## Fixes in the repo

### Epic:

- 20XX
- Alan Wake's American Nightmare
- ~BioShock Remastered~ (not needed since Heroic 2.12.0)
- Blair Witch
- Core
- Darksiders II Deathinitive Edition
- Defense Grid: The Awakening
- Epistory - Typing Chronicles
- Europa Universalis IV
- Galactic Civilizations III
- Galactic Civilizations III (Test branch)
- Ghostrunner
- Hob
- Horizon Zero Dawn Complete Edition
- Hyper Light Drifter
- MudRunner
- ~Next Up Hero~ (not needed anymore)
- PC Building Simulator
- Q.U.B.E. 10th Anniversary
- Q.U.B.E. 2 (shows up as Deluxe Edition in the store)
- Redout: Enhanced Edition
- Rogue Legacy
- ~Shadow Tactics - Aiko's Choice~ (not needed anymore)
- Them's Fightin' Herds
- Train Sim World 2
- Unrailed

### GOG:

- Alien Breed: Impact
- Alien Breed 2: Assault
- Alien Breed 3: Descent
- Batman Arkham Asylum Game of the Year Edition
- Beyond Good & Evil™
- Empire Earth 3
- Hitman: Absolution
- Horizon Zero Dawn Complete Edition
- LEGO® Star Wars™ - The Complete Saga
- SpellForce 2 - Anniversary Edition
- SpellForce 2: Demons Of The Past
- SpellForce 2: Faith in Destiny
- Venetica - Gold Edition
- The Witcher 2: Assassins of Kings Enhanced Edition

### Amazon:
