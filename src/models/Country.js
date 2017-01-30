import DataType from 'sequelize';
import Model from './sequelize';

const Country = Model.define('Country', {

  id: {
    type: DataType.UUID,
    primaryKey: true,
  },

  slug: {
    type: DataType.STRING,
    unique: true,
  },

  name: {
    type: DataType.STRING,
    unique: true,
  },

}, {

  defaultScope: {
    limit: 20
  },

});

export default Country;
