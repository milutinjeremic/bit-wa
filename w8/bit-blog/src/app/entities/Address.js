class Address {
    constructor(address){
        this.street = address.street;
        this.city = address.city;
        this.zipcode = address.zipcode;
        this.lat = address.geo.lat;
        this.long = address.geo.lng;
    }
}

export default Address;