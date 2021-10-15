class Traveler {
    constructor(name){
        this._name = name;
        this._food = 1;
        this._isHealthy = true;
    }
    get name () {
        return this._name;
    }
    get food () {
        return this._food;
    }
    get isHealthy () {
        return this._isHealthy;
    }
    set name (name) {
        this._name = name;
    }
    set food (food) {
        this._food = food;
    }
    set isHealthy (isHealthy) {
        this._isHealthy = isHealthy;
    }
    hunt(){
        this.food += 2;
    }
    eat(){
        if (this.food > 0) {
            this.food -= 1;
            this.isHealthy = true;
        }else{
            this.isHealthy = false;
        }
    }
}