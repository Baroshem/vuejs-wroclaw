# i18n/

`pl.json` (default, `/`) and `en.json` (`/en`). **Both files must always have identical key structure.**

- Keys are built dynamically (`` k(`speakers.${id}.meta`) ``, `venue.facts.${i}.k`), so grep for a full key can look "unused". Search the data factory before deleting a key.
- Lists are `key.0`, `key.1`, … (not JSON arrays), read via `list()`; counts are hardcoded in the factories.
- Edition copy lives under `editions.<year>.*`, read by `data/editions/<year>.ts`. Adding a speaker/talk/sponsor: add keys in **both** locales, then reference them in the factory.
