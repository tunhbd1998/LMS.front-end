const initStates = {
  labs: {
    totalPage: 1,
    page: 1,
    list: [
      {
        id: '1',
        labImage: null,
        name: 'Robotics',
        university: 'hcmus',
        address: {
          province: 'hcm'
        },
        specialize: 'it'
      },
      {
        id: '2',
        labImage: null,
        name: 'Hoa hoc',
        university: 'hcmus',
        address: {
          province: 'hcm'
        },
        specialize: 'chemistry'
      },
      {
        id: '3',
        labImage: null,
        name: 'Vat ly',
        university: 'hcmus',
        address: {
          province: 'hcm'
        },
        specialize: 'physics'
      },
      {
        id: '4',
        labImage: null,
        name: 'Lab IOT',
        university: 'hcmus',
        address: {
          province: 'hcm'
        },
        specialize: 'it'
      }
    ]
  },
  projects: {
    totalPage: 1,
    page: 1,
    list: [
      {
        id: '1',
        name: 'project 01',
        lab: {
          name: 'Robotics'
        },
        members: 10,
        createdDate: '2019-11-11'
      },
      {
        id: '2',
        name: 'project 02',
        lab: {
          name: 'Robotics'
        },
        members: 10,
        createdDate: '2019-11-11'
      },
      {
        id: '3',
        name: 'project 03',
        lab: {
          name: 'Robotics'
        },
        members: 10,
        createdDate: '2019-11-11'
      },
      {
        id: '4',
        name: 'project 04',
        lab: {
          name: 'Robotics'
        },
        members: 10,
        createdDate: '2019-11-11'
      }
    ]
  },
  activities: {
    totalPage: 1,
    page: 1,
    list: [
      {
        id: '1',
        name: 'activity 01',
        address: 'address',
        lab: {
          name: 'Robotics'
        },
        startTime: '2019-11-11',
        endTime: '2019-11-12'
      },
      {
        id: '2',
        name: 'activity 01',
        address: 'address',
        lab: {
          name: 'Robotics'
        },
        startTime: '2019-11-11',
        endTime: '2019-11-12'
      },
      {
        id: '3',
        name: 'activity 01',
        address: 'address',
        lab: {
          name: 'Robotics'
        },
        startTime: '2019-11-11',
        endTime: '2019-11-12'
      },
      {
        id: '4',
        name: 'activity 01',
        address: 'address',
        lab: {
          name: 'Robotics'
        },
        startTime: '2019-11-11',
        endTime: '2019-11-12'
      }
    ]
  },
  recruitments: {
    totalPage: 1,
    page: 1,
    list: [
      {
        id: '1',
        position: 'recruitment 01',
        lab: {
          name: 'Robotics'
        },
        createdDate: '2019-11-11'
      },
      {
        id: '2',
        position: 'recruitment 01',
        lab: {
          name: 'Robotics'
        },
        createdDate: '2019-11-11'
      },
      {
        id: '3',
        position: 'recruitment 01',
        lab: {
          name: 'Robotics'
        },
        createdDate: '2019-11-11'
      },
      {
        id: '4',
        position: 'recruitment 01',
        lab: {
          name: 'Robotics'
        },
        createdDate: '2019-11-11'
      }
    ]
  }
};

export const mainReducer = (state = initStates, { type, payload }) => {
  switch (type) {
    default:
      return { ...state };
  }
};
