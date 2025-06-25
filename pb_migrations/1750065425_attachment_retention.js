/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const snapshot = [
    {
      "fields": [
        {
            "hidden": false,
            "id": "number539298631",
            "max": 999,
            "min": 0,
            "name": "retention_limit",
            "onlyInt": true,
            "presentable": false,
            "required": false,
            "system": false,
            "type": "number"
        },
        {
            "hidden": false,
            "id": "select984971280",
            "maxSelect": 1,
            "name": "retention_type",
            "presentable": false,
            "required": true,
            "system": false,
            "type": "select",
            "values": [
                "downloads",
                "hours",
                "days",
                "weeks",
                "months"
            ]
        },
      ],
      "id": "pbc_913941788",
      "name": "forms",
    },
  ];

  return app.importCollections(snapshot, false);
}, (app) => {
  return null;
})
