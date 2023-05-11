export type TypeGunsVariants = "AK-12" | "PM" | "KALASHNIKOV ULTIMA" | "SG Vityaz"

interface IGun {
    name: TypeGunsVariants
}

export const gunsList: IGun[] = [
    {name: 'AK-12'},
    {name: 'PM'},
    {name: 'KALASHNIKOV ULTIMA'},
    {name: 'SG Vityaz'},
]

export interface IGunsSpecifications {
    name: string,
    damage: number,
    range: number,
    firerate: number,
    accuracy: number,
    recoil: number,
    rounds: number,
    img: string
}

export const gunsSpecifications: IGunsSpecifications[] = [
    {
        name: "AK-12",
        damage: 86,
        range: 17,
        firerate: 600,
        accuracy: 31,
        recoil: 50,
        rounds: 30,
        img: 'ak12.png'
    },
    {
        name: "PM",
        damage: 135,
        range: 11,
        firerate: 300,
        accuracy: 15,
        recoil: 100,
        rounds: 8,
        img: 'pm.png'
    },
    {
        name: "KALASHNIKOV ULTIMA",
        damage: 690,
        range: 7,
        firerate: 200,
        accuracy: 76,
        recoil: 50,
        rounds: 7,
        img: 'ultima.png'
    },
    {
        name: "SG Vityaz",
        damage: 89,
        range: 11,
        firerate: 750,
        accuracy: 31,
        recoil: 20,
        rounds: 30,
        img: 'vityaz.png'
    },
]

export default gunsList