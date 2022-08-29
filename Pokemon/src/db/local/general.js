import Realm from 'realm';

const general = new Realm({
    path: 'General.realm',
    schemaVersion: 1,
    schema: [{
        name: "General",
        properties: {
            pokeLastUpdDt: 'date'
        }
    }]
});

export function createGen() {
    //make sure there isn't already a general record for this user
    if (getGen().length > 0) {
        return false
        //else go ahead and create the record
    } else {
        general.write(() => {
            general.create('General', {
                pokeLastUpdDt: new Date('2015-03-25'),
            });
        });
        return true
    }
}

export function getGen() {
    return general.objects("General")
}

export function editGen(genObj) {
    const genRec = general.objects("General")[0]
    general.write(() => {
        if ('pokeLastUpdDt' in genObj) {
            genRec.pokeLastUpdDt = genObj.pokeLastUpdDt
        }
    })
}