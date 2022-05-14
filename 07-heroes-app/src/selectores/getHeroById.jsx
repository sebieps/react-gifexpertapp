import { heroes } from "../data/heroes"

export const getHeroById = (id = '' ) => {
    console.log('Fue llamado getherobyid')
    return heroes.find( heroes => heroes.id === id);
}