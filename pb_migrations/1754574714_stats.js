/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const snapshot = [
    {
      "id": "pbc_2617366849",
      "listRule": null,
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "name": "stats",
      "type": "base",
      "fields": [
        {
          "autogeneratePattern": "[a-z0-9]{15}",
          "hidden": false,
          "id": "text3208210256",
          "max": 15,
          "min": 15,
          "name": "id",
          "pattern": "^[a-z0-9]+$",
          "presentable": false,
          "primaryKey": true,
          "required": true,
          "system": true,
          "type": "text"
        },
        {
          "hidden": false,
          "id": "number2394296326",
          "max": 300000,
          "min": 200000,
          "name": "month",
          "onlyInt": true,
          "presentable": false,
          "required": true,
          "system": false,
          "type": "number"
        },
        {
          "hidden": false,
          "id": "number3133418153",
          "max": null,
          "min": 0,
          "name": "sent",
          "onlyInt": true,
          "presentable": false,
          "required": false,
          "system": false,
          "type": "number"
        }
      ],
      "indexes": [
        "CREATE UNIQUE INDEX `idx_ruUu1Kwl8u` ON `stats` (`month`)"
      ],
      "system": false
    }
  ];

  return app.importCollections(snapshot, false);
}, (app) => {
  return null;
})
