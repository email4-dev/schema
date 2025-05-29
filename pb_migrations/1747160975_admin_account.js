migrate((app) => {
    let superusers = app.findCollectionByNameOrId("_superusers")

    let record = new Record(superusers)

    // note: the values can be eventually loaded via $os.getenv(key)
    // or from a special local config file
    record.set("email", $os.getenv("POCKETBASE_EMAIL"))
    record.set("password", $os.getenv("POCKETBASE_PASS"))

    app.save(record)
}, (app) => { // optional revert operation
    try {
        let record = app.findAuthRecordByEmail("_superusers", $os.getenv("POCKETBASE_EMAIL"))
        app.delete(record)
    } catch {
        // silent errors (probably already deleted)
    }
})