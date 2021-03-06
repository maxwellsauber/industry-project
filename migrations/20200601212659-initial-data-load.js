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
        timeStart: '1985-08-18',
        timeEnd: '2100-08-18',
        EIRSpecialty: 'EIR Specialty',
        EIRJobTitle: 'EIR JobTitle',
        NAICSLaborCode: '12345',
        DOLAnnualSalary: 123456.78,
        DOLHourlySalary: 77.77,
        weeklyHours: 40,
        OESSOCCode: 'Code',
        EIRDegree: 'MATH',
        isExternalRecruiter: false,
        isOfferedSigningBonus: false,
        isOfferedRelocationBonus: false,
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
      { title: 'Corporate Recruiter', hourlyRate: 32.41, hourlyBenefits: 11.34 },
      { title: 'Director of Engineering - Hiring Manager', hourlyRate: 84.33, hourlyBenefits: 29.52 },
      { title: 'IT Technician', hourlyRate: 21.79, hourlyBenefits: 7.63 },
      { title: 'Human Resources Manager', hourlyRate: 40.79, hourlyBenefits: 14.28 },
      { title: 'CEO, Executives/Decision-Maker', hourlyRate: 84.16, hourlyBenefits: 29.46 },
      { title: 'Peer Worker - Estimated 3 people', hourlyRate: 48.09, hourlyBenefits: 16.83 },
    ])

    await queryInterface.bulkInsert('tasks', [
      { task: 'R&H', name: 'Position Description', hours: 2, salaryId: 1 },
      { task: 'R&H', name: 'Posting & Marketing', hours: 5, salaryId: 1 },
      { task: 'R&H', name: 'Resume Screening', hours: 15, salaryId: 1 },
      { task: 'R&H', name: 'Internal meetings & Phone Screening', hours: 20, salaryId: 1 },
      { task: 'R&H', name: 'Position Description', hours: 2, salaryId: 2 },
      { task: 'R&H', name: 'Interviewing', hours: 24, salaryId: 2 },
      { task: 'OnBoarding', name: 'Technical Training', hours: 20, salaryId: 2 },
      { task: 'OnBoarding', name: 'Orientation', hours: 2, salaryId: 3 },
      { task: 'Exit', name: 'Conducting Exit Interview', hours: 2, salaryId: 4 },
      { task: 'Exit', name: 'Completing Exit Paperwork', hours: 2, salaryId: 4 },
      { task: 'R&H', name: 'Position Description', hours: 2, salaryId: 4 },
      { task: 'R&H', name: 'References, Background and Certification/ Degree checks', hours: 4, salaryId: 4 },
      { task: 'R&H', name: 'Interviewing', hours: 12, salaryId: 4 },
      { task: 'R&H', name: 'Benefits Packages, Relocation Coordination', hours: 2, salaryId: 4 },
      { task: 'OnBoarding', name: 'Orientation', hours: 5, salaryId: 4 },
      { task: 'R&H', name: 'Interviewing', hours: 9, salaryId: 5 },
      { task: 'R&H', name: 'Overtime to Cover Employee Vacancy', hours: 64, salaryId: 6 },
      { task: 'R&H', name: 'Interviewing', hours: 9, salaryId: 6 },
      { task: 'OnBoarding', name: 'Technical Training', hours: 30, salaryId: 6 },
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

    await queryInterface.bulkDelete('tasks')

    return queryInterface.bulkDelete('signingBonus')
  },
}
