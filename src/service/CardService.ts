import pgp from 'pg-promise'
import Card from '../entity/Card'

export default class CardService{
    constructor(){}

    async getCards(idColumn: number ) {
        const connection = pgp()('postgres://kemiocode:postgres123!@@localhost:5432/app')
        const cardsData = await connection.query('select * from public.card where id_column = $1',[idColumn])
        const cards:Card[] = []
        for (const cardData of cardsData){
            cards.push(new Card(cardData.title,cardData.estimative))
        }
        await connection.$pool.end()
        return cards
    }
}