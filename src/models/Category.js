import DataType from 'sequelize';
import Model from './sequelize';

const Category = Model.define('Category', {

  id: {
    type: DataType.UUID,
    primaryKey: true,
  },

  slug: {
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  },

  name: {
    type: DataType.STRING,
    allowNull: false,
  },

}, {

  defaultScope: {
    limit: 20
  },

});

export default Category;
