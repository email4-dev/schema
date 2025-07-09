/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const snapshot = [
    {
      "fields": [
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text1579384326",
          "max": 0,
          "min": 0,
          "name": "name",
          "pattern": "",
          "presentable": true,
          "primaryKey": false,
          "required": true,
          "system": false,
          "type": "text"
        },
      ],
      "indexes": [
        "CREATE INDEX `idx_XIiU7RWUD9` ON `handlers` (`name`)"
      ],
      "id": "pbc_3188112906",
      "name": "handlers",
    },
    {
      "fields": [
        {
          "autogeneratePattern": "",
          "hidden": false,
          "id": "text1579384326",
          "max": 0,
          "min": 0,
          "name": "name",
          "pattern": "",
          "presentable": true,
          "primaryKey": false,
          "required": true,
          "system": false,
          "type": "text"
        },
      ],
      "indexes": [
        "CREATE INDEX `idx_HL5HPAIxcr` ON `templates` (`name`)"
      ],
      "id": "pbc_184785686",
      "name": "templates",
    },
  ];

  return app.importCollections(snapshot, false);
}, (app) => {
  return null;
})
