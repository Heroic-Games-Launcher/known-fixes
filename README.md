## Known Game Fixes

This repo keeps track of known fixes for games running with Heroic Games Launcher.

Note that this information applies to using up to date versions of the different tools. Make sure to use the latest version of Heroic and Wine-GE-Proton.

Keep in mind that some games may need extra fixes and not only the ones automated here, and that information is not yet mapped/supported.

## Collaborations

1. Add a JSON file following the file name convention with the game title, the list of fixes, the list of files to install, and notes as the content. **The file must be added twice temporarily: in the root of the project and in the folder of the corresponding store. Read below for more details.**
2. Update this README adding the title of the game to the Store's list in alphabetical order

### Duplicated files

This repository was created for the feature introduced in Heroic 2.12.0 which reads from the root of the projects. Heroic 2.13.0 will change to look for files in a folder and not in the root.

Files must be added in both places to work for users of both versions of Heroic transparently.

Some time after the release of Heroic 2.13, all files from the root folder will be deleted and only the files inside the folders will be needed after that.

Once that happens, all this documentation can be deleted too.

### Filename

`<appName>-<store>.json` where appName is the appName used by Heroic and store is one of `epic`, `gog`, or `amazon`

### JSON content

```json
{
  "title": "Empire Earth 3",
  "notes": {
    "physx": "Fix game crashing while booting",
    "d3dx9_30": "Fix crash opening the setting and visual glitches in game"
  },
  "winetricks": ["physx", "d3dx9_30"]
}
```

```json
{
  "title": "Fall Guys",
  "notes": {
    "vcrun2022": "Game prompts to install it, but we can prevent the need of user interaction.",
    "EpicOnlineServices/EpicOnlineServicesInstaller.exe": "Solves 'Missing Files' error. This is required but not listed as a pre-requisite"
  },
  "winetricks": ["vcrun2022"],
  "runInPrefix": ["EpicOnlineServices/EpicOnlineServicesInstaller.exe"]
}
```

The value of the `winetricks` property is an array of the names that Winetricks understands.

The value of the `runInPrefix` property is an array of strings with the paths of executables to install in the prefix, relative to the game's install folder.

Both `winetricks` and `runInPrefix` properties are optional, but at least one of them should be defined for a file to be useful.

Optional (but encouraged) `"notes"` property can be used to add notes about what each Winetricks package is fixing. This is useful so in the future we can check if a package is still needed. We could eventually show that information to the user inside Heroic for transparency of what we are installing and why.

### Removals

When a fix is not needed anymore, remove the json file and strike-through the title in the Readme with a mention of why it's removed if the reason is known.

## Fixes in the repo

### Epic:

- 20XX
- Alan Wake's American Nightmare
- ~BioShock Remastered~ (not needed since Heroic 2.12.0)
- Blair Witch
- Core
- Dakar Desert Rally
- Darksiders II Deathinitive Edition
- Defense Grid: The Awakening
- Epistory - Typing Chronicles
- Europa Universalis IV
- Fall Guys (fixes will be supported starting with Heroic 2.13.0)
- Galactic Civilizations III
- Galactic Civilizations III (Test branch)
- Ghostrunner
- Hob
- Hogwarts Legacy
- Horizon Zero Dawn Complete Edition
- Hyper Light Drifter
- Kao the Kangaroo
- MudRunner
- Neverwinter
- ~Next Up Hero~ (not needed anymore)
- PC Building Simulator
- Q.U.B.E. 10th Anniversary
- Q.U.B.E. 2 (shows up as Deluxe Edition in the store)
- Redout: Enhanced Edition
- Rogue Legacy
- ~Shadow Tactics - Aiko's Choice~ (not needed anymore)
- The Elder Scrolls Online
- The Expanse: A Telltale Series
- Thief
- Them's Fightin' Herds
- Train Sim World 2
- Unrailed

### GOG:

v2.13.0 means that the dependencies are installed automatically based on GOG manifest instead of using winetricks

- Alien Breed: Impact
- Alien Breed 2: Assault
- Alien Breed 3: Descent
- ~Batman Arkham Asylum Game of the Year Edition~ (v2.13.0)
- Beyond Good & Evil™
- ~Empire Earth 3~ (v2.13.0)
- Evil West
- Ghost Master
- Hitman: Absolution
- Horizon Zero Dawn Complete Edition
- ~LEGO® Batman 2 DC Super Heroes™~ (v2.13.0)
- ~LEGO® Star Wars™ - The Complete Saga~ (v2.13.0)
- ~Monkey Island™ 2 Special Edition: LeChuck’s Revenge™~ (v2.13.0)
- ~SpellForce 2 - Anniversary Edition~ (v2.13.0)
- ~SpellForce 2: Demons Of The Past~ (v2.13.0)
- ~SpellForce 2: Faith in Destiny~ (v2.13.0)
- ~STAR WARS™ - The Force Unleashed™ Ultimate Sith Edition~ (v2.13.0)
- ~Venetica - Gold Edition~ (v2.13.0)
- The Expanse: A Telltale Series Deluxe Edition
- The Witcher: Enhanced Edition
- ~The Witcher 2: Assassins of Kings Enhanced Edition~ (v2.13.0)

### Amazon:
