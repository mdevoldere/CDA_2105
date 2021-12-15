class Cereal 
{
    /**
     * 
     * @param {Object} c un object litéral Céreal
     */
    constructor(c) {
       this.id = parseInt(c.id);
       this.name = c.name;
       this.calories = c.calories;
       this.protein = c.protein;
       this.sodium = c.sodium;
       this.fiber = c.fiber;
       this.carbo = c.carbo;
       this.sugars = c.sugars;
       this.potass = c.potass;
       this.vitamins = c.vitamins;
       this.rating = parseFloat(c.rating);
       this.nutriscore = this.calculateNutriscore();
       this.isSugarFree = this.sugars >= 0 && this.sugars < 1;
       this.isLowSalt = this.sodium > 0 && this.sodium <= 50;
       this.isBoost = this.vitamins >= 25 && this.fiber >= 10;
    }

    calculateNutriscore() 
    {
        if(this.rating < 35) {
            return 'E';
        }
        else if(this.rating < 55) {
            return 'D';
        }
        else if(this.rating < 70) {
            return 'C';
        }
        else if(this.rating < 80) {
            return 'B';
        } 
        else {
            return 'A';
        }
    }

    
}

export { Cereal }