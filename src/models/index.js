/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import sequelize from './sequelize';
import Country from './Country';
import Location from './Location';
import Company from './Company';
import JobOffer from './JobOffer';
import Category from './Category';
import ContractType from './ContractType';
import ScheduleType from './ScheduleType';
import Tag from './Tag';

// You can define relations here.
// =============================================================================

// Country
Country.Locations = Country.hasMany(Location, {
  foreignKey: 'countryId',
  as: 'locations',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

// Location
Location.Country = Location.belongsTo(Country, {
  foreignKey: 'countryId',
  as: 'country',
  foreignKey: {
      allowNull: false
  },
});

// Company
Company.Offers = Company.hasMany(JobOffer, {
  foreignKey: 'companyId',
  as: 'offers',
});

// Job Offer
JobOffer.Company = JobOffer.belongsTo(Company, {
  foreignKey: 'companyId',
  as: 'company',
  foreignKey: {
      allowNull: false
  },
});

JobOffer.Category = JobOffer.belongsTo(Category, {
  foreignKey: 'categoryId',
  as: 'category',
  foreignKey: {
      allowNull: false
  },
});

JobOffer.ContractType = JobOffer.belongsTo(ContractType, {
  foreignKey: 'contractTypeId',
  as: 'contractType',
});

JobOffer.ScheduleType = JobOffer.belongsTo(ScheduleType, {
  foreignKey: 'scheduleTypeId',
  as: 'scheduleType',
});

JobOffer.Tags = JobOffer.belongsToMany(Tag, {
  foreignKey: 'tagId',
  through: 'JobOffer_Tag',
  as: 'tags',
});

// Category
Category.Offers = Category.hasMany(JobOffer, {
  foreignKey: 'categoryId',
  as: 'offers',
});

// Contract Type
ContractType.Offers = ContractType.hasMany(JobOffer, {
  foreignKey: 'contractTypeId',
  as: 'offers',
});

// Schedule Type
ScheduleType.Offers = ScheduleType.hasMany(JobOffer, {
  foreignKey: 'scheduleTypeId',
  as: 'offers',
});

// Tag
Tag.Offers = Tag.belongsToMany(JobOffer, {
  foreignKey: 'jobOfferId',
  through: 'JobOffer_Tag',
  as: 'offers',
});


function sync(...args) {
  return sequelize.sync(...args);
}

export default { sync };
export {
  Country,
  Location,
  Company,
  JobOffer,
  Category,
  ContractType,
  ScheduleType,
  Tag,
 };
