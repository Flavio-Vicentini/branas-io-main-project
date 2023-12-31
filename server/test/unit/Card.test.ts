import Card from "../../src/domain/entity/Card"

test('Deve criar um cartão', function(){
    const card = new Card('Atividade 1',3)
    expect(card.title).toBe('Atividade 1')
    expect(card.estimative).toBe(3)
})

test('Não deve criar um cartão sem título', function(){
    expect(() => new Card('',3)).toThrow(new Error('Title is required'))
})

test('Não deve criar um cartão com estimativa negativa', function(){
    expect(() => new Card('Atividade 1',-1)).toThrow(new Error('Estimative must be a positive number'))
})