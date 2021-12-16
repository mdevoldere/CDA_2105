import { Cereal } from './Cereal.js';
import { CerealCategory } from './CerealCategory.js';
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

    // 0 1 2 
    findByCategory(_cat, _data) {
        let expression;
        switch(_cat) 
        {
            case CerealCategory.NOSUGAR: 
                expression = (item => item.isSugarFree);
            break;
            case CerealCategory.LOWSALT: 
                expression = (item => item.isLowSalt);
            break;
            case CerealCategory.BOOST: 
                expression = (item => item.isBoost);
            break;
            default:
                expression = (item => true)
            break;
            
        }

        return _data.filter(expression);
    }

    // ['A', 'B']
    findByNutriscore(_nutriscores, _data) {

        return _data.filter(item => _nutriscores.includes(item.nutriscore));
    }

    filterCereals(_name, _cat, _nutriscore) {
        
        let result = this.findByCategory(_cat, this.data);
        
        if(_name.length > 2) {
            result = this.findByName(_name, result);
        }
        
        return this.findByNutriscore(_nutriscore, result);
    }

    deleteById(_id)  {

        this.data = this.data.filter(item => item.id != _id);
    }
}

export { DbCereals }