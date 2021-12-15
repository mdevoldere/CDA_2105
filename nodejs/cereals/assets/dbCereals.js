import { Cereal } from './Cereal.js';
import { Db } from './db.js';

class DbCereals extends Db
{
    loadData() {
        return super.loadData()
        .then(data => {
            /*data.forEach((item, idx) => {
                this.data[idx] = new Cereal(item);
            });*/

            for(let idx in data) {
                this.data[idx] = new Cereal(data[idx]);
            }

            return this.data;
        });
    }

    sortBy(column, cereals) {
        cereals.sort((a, b) => a[column] - b[column]);
    }

    findByName(_name, _data) 
    {
        return _data.filter(
            item => item.name.toLowerCase().includes(_name.toLowerCase())
            );
    }

    // isBoost, isSugarFree, isLowSalt
    findByCategory(_cat, _data) 
    {
        return _data.filter(item => item[_cat]);
    }

    // ['A', 'B']
    findByNutriscore(_nutriscores, _data) 
    {
        return _data.filter(item => _nutriscores.includes(item.nutriscore));
    }

    filter(_name, _cat, _nutriscore) {
        let result = this.findByName(_name, this.data);
        result = this.findByCategory(_cat, result);
        return this.findByNutriscore(_nutriscore, result);
    }

    deleteById(_id) 
    {
        this.data = this.data.filter(item => item.id != _id);
    }
}

export { DbCereals }