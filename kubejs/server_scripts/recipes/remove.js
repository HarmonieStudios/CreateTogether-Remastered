ServerEvents.recipes(event => {
    const removals = [
        {
            id: /refinedstorage:(?!controller|cable|crafting_grid|external_storage|quartz_enriched_iron|quartz_enriched_iron_block)\w+/
        }
    ];
    removals.forEach((removal) => {
        event.remove(removal);
    });
});
