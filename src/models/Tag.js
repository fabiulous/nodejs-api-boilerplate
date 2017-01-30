import DataType from 'sequelize';
import Model from './sequelize';

const Tag = Model.define('Tag', {

  id: {
    type: DataType.UUID,
    primaryKey: true,
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

export default Tag;
