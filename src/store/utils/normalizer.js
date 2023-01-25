export const normalizer = (entities, idKey = 'id') => {
    return {
        entities: entities.reduce((acc, entity) => {
            acc[entity[idKey]] = entity;

            return acc;
        }, {}),
        ids: entities.map((entity) => entity[idKey]),
    }
}