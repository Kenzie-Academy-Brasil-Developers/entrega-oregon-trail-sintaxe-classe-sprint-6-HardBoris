class Wagon {
    constructor (capacity) {
        this._capacity = capacity;
        this._travelers = [];
    }
    getAvailableSeatCount(){
        if (this._travelers.length < this._capacity) {
            return this._capacity - this._travelers.length;
        } else {
            return 0;
        }
    }
    join (traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this._travelers.push(traveler);
        }
    }
    shouldQuarantine () {
        for (let i = 0; i < this._travelers.length; i++) {
            const element = this._travelers[i];
            if (!element.isHealthy) {
                return true 
            }
        }
        return false;
    }
    totalFood () {
        let total = 0;
        for (let i = 0; i < this._travelers.length; i++) {
            const element = this._travelers[i];
            total += element.food;
        }
        return total;
    }
}