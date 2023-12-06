import { AppState } from "../AppState.js"
import { houseService } from "../services/HouseServices.js"
import { getFormData } from "../utils/FormHandler.js"




export class HouseController{
    constructor(){
        this.drawHouses()
        AppState.on('houses', this.drawHouses)
    }

    drawHouses(){
        console.log('Draw Houses')
        let content = ''
        AppState.houses.forEach(house => content += house.houseListing)
        document.getElementById('house-list').innerHTML = content
    }

    addHouse(event){
        event.preventDefault()
        const form = event.target
        const formData = getFormData(form)
        formData.year = parseInt(formData.year)
        formData.bedrooms = parseInt(formData.bedrooms)
        formData.sqft = parseInt( formData.sqft)
        formData.price = parseInt(formData.price)
        houseService.addHouse(formData)
        form.reset()
    }
 = 