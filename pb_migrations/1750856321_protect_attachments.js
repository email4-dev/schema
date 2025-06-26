/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const snapshot = [
    {
      "fields": [
        {
            "hidden": false,
            "id": "bool1236190488",
            "name": "protect_attachments",
            "presentable": false,
            "required": false,
            "system": false,
            "type": "bool"
        },
        {
            "hidden": false,
            "id": "bool2969310318",
            "name": "recipient_can_delete_attachments",
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
