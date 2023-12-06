import { generateId } from "../utils/GenerateId.js"




export class House {
    constructor(data) {
        this.id = data.id || generateId()
        this.year = data.year
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl
    }

    get houseListing(){
        return `
        <div class="col-6 col-md-4 w-fit card d-flex justify-content-center align-items-center text-center w-10 p-0 m-2 bg-dark text-light border-greg">

            <div class="w-100 house-listing p-1  border-greg">
                <img class="img-fluid rounded" src="${this.imgUrl}" alt="">
            </div>
            
            <div class="w-75 p-2 d-flex justify-content-center flex-column align-items-center">
                <h5>${this.year} ${this.bedrooms} Bed ${this.bathrooms} Bath</h3>
                <h6>${this.description}</h4>
                <h6>${this.sqft}sqft Price:${this.price},</h4>
            </div>

            <div class="d-flex justify-content-evenly w-75 pb-2">
                <button onclick="app.HouseController.addLikes()" class="btn btn-outline-greg w-25"><i class="mdi mdi-thumb-up"></i></button>
                <button onclick="app.HouseController.removeHouse('${this.id}')" class="btn btn-outline-danger w-25"> <i <i class="mdi mdi-trash-can-outline"></i></button>
            </div>
        </div>`
    }
}