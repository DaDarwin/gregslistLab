import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { loadState, saveState } from "../utils/Store.js"





class HouseService{

    addHouse(formData){
        console.log(formData)
        console.log(new House(formData))
        AppState.houses.push(new House(formData))
        console.log(AppState.houses)
    }
    
    removeHouse(houseID){
        const indexToRemove = AppState.houses.findIndex(house => house.id == houseID)
        if(indexToRemove > -1){
            AppState.houses.splice(indexToRemove,1)
            this.saveHouses()
        }
    }
    
    saveHouses(){
        saveState('houses', AppState.houses)
    }
    
    loadHouses(){
        let loadedHouses = loadState('houses', [House]) // the [] tell loadState we ar pulling out an array, with 'Car's inside
        AppState.houses = loadedHouses
    }
    
}




export const houseService = new HouseService