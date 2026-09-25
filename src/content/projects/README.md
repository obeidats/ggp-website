# Adding a project

1. Copy `_template.json` to a new file, e.g. `sohar-substation-upgrade.json`.
   The file name becomes the page address: `/en/projects/sohar-substation-upgrade/`.
2. Fill in both `en` and `ar` for every text field.
3. `sector` must be one of:
   `civil-infrastructure`, `electrical-power`, `electrical-power-telecom`,
   `roads-civil-infrastructure`, `telecom-network`, `utilities-infrastructure`,
   `water-utility-networks`.
4. `status` is `completed` or `ongoing`.
5. Put photos in `src/assets/projects/` and reference them relative to this folder
   (`"../../assets/projects/my-photo.jpg"`). Remove `cover` if there is no photo yet.
6. Optional fields (`client`, `location`, `startYear`, `endYear`, `valueOMR`, `scope`,
   `gallery`) can simply be left out.

The build checks every file and stops with a clear message if something is missing.
