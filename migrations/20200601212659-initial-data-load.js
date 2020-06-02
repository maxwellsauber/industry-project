module.exports = {
  up: async (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    await queryInterface.bulkInsert('leads', [
      {
        firstName: 'Bob',
        lastName: 'McLastName',
        email: 'bob@bob.com',
      },
    ])

    return queryInterface.bulkInsert('signingBonus', [
      { companyName: 'Facebook', value: 45708 },
      { companyName: 'Amazon', value: 41340 },
      { companyName: 'Pinterest', value: 33376 },
      { companyName: 'Dropbox', value: 32833 },
      { companyName: 'Twitter', value: 26144 },
      { companyName: 'Salesforce', value: 28314 },
      { companyName: 'Fitbit', value: 25459 },
      { companyName: 'Google', value: 27547 },
      { companyName: 'Apple', value: 27201 },
      { companyName: 'Airbnb', value: 23250 },
      { companyName: 'Snap', value: 23705 },
      { companyName: 'Vmware', value: 18851 },
      { companyName: 'LinkedIn', value: 25418 },
      { companyName: 'Microsoft', value: 20191 },
      { companyName: 'Pandora', value: 18886 },
      { companyName: 'Square', value: 17996 },
      { companyName: 'Arista Network', value: 18652 },
      { companyName: 'Spotify', value: 22492 },
      { companyName: 'Tesla Motors', value: 19447 },
      { companyName: 'Capital One', value: 8568 },
      { companyName: 'Hewlett Packard Enterprise', value: 8265 },
      { companyName: 'Oculus', value: 6926 },
      { companyName: 'Uber', value: 1807 },
      { companyName: 'Netflix', value: 2520 },
      { companyName: 'CSRA', value: 1186 },
      { companyName: 'UnitedHealth Grop', value: 118 },
    ])
  },

  down: async (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.bulkDelete('leads')

    return queryInterface.bulkDelete('signingBonus')
  },
}
