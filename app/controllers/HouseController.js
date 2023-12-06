import { AppState } from "../AppState.js"
import { houseService } from "../services/HouseServices.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"




export class HouseController{
    constructor(){
        // houseService.loadHouses()
        this.drawHouses()
        AppState.on('houses', this.drawHouses)
        
    }

    drawHouses(){
        console.log('Draw Houses', AppState.houses)
        const houses = AppState.houses
        let content = ''
        houses.forEach(house => content += house.houseListing)
        document.getElementById('house-list').innerHTML = content
    }

    addHouse(){
        event.preventDefault()
        console.log(event)
        const form = event.target
        const formData = getFormData(form)
        formData.year = parseInt(formData.year)
        formData.bedrooms = parseInt(formData.bedrooms)
        formData.sqft = parseInt( formData.sqft)
        formData.price = parseInt(formData.price)
        houseService.addHouse(formData)
        form.reset()
    }

    async removeHouse(houseId){
        let isConfirmed = await Pop.confirm("Are you sure you want to delete this?", "This can't be undone", 'Yes', 'error')
        if( isConfirmed){
              houseService.removeHouse(houseId)
            }

    }
}