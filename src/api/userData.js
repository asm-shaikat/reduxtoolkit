import Chance from "chance"
const chance = new Chance();
const userName = () =>{
    return chance.name()
}

export {userName}