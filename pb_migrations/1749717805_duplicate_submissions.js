/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const snapshot = [
    {
      "fields": [
        {
          "hidden": false,
          "id": "bool982893218",
          "name": "allow_duplicates",
          "presentable": false,
          "required": false,
          "system": false,
          "type": "bool"
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
