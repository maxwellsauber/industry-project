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

    await queryInterface.bulkInsert('postingFees', [
      { postingName: 'Jobs.com', value: 398 },
      { postingName: 'Glassdoor', value: 498 },
      { postingName: 'Monster', value: 399 },
      { postingName: 'Career Builder', value: 398 },
      { postingName: 'Simply Hired', value: 0 },
      { postingName: 'LinkedIn', value: 990 },
      { postingName: 'Dice', value: 395 },
      { postingName: 'SnagAJob', value: 178 },
      { postingName: 'Craigslist', value: 45 },
      { postingName: 'Indeed', value: 300 },
      { postingName: 'Workable', value: 198 },
      { postingName: 'Proven', value: 203 },
      { postingName: 'ZipRecruiter', value: 178 },

    ])
    await queryInterface.bulkInsert('recruiterFees', [
      { majorDiscipline: 'Finance and Banking', avgPercent: 0.21, avgSalary: 166250 },
      { majorDiscipline: 'Scientific', avgPercent: 0.20, avgSalary: 127466 },
      { majorDiscipline: 'Engineering', avgPercent: 0.23, avgSalary: 105831 },
      { majorDiscipline: 'IT/Information Systems/Data Processing', avgPercent: 0.22, avgSalary: 98437 },
      { majorDiscipline: 'Sales and Marketing', avgPercent: 0.20, avgSalary: 101485 },
    ])

    await queryInterface.bulkInsert('salaries', [
      { title: 'Corporate Recruiter', hourlyRate: 43.75 },
      { title: 'Director of Engineering - Hiring Manager', hourlyRate: 113.85 },
      { title: 'IT Technician', hourlyRate: 10.42 },
      { title: 'Human Resources Manager', hourlyRate: 55.07 },
      { title: 'CEO, Executives/Decision-Maker', hourlyRate: 113.62 },
      { title: 'Peer Worker - Estimated 3 people', hourlyRate: 64.92 },

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

    await queryInterface.bulkDelete('postingFees')

    await queryInterface.bulkDelete('recruiterFees')

    await queryInterface.bulkDelete('salaries')

    return queryInterface.bulkDelete('signingBonus')
  },
}
