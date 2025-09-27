const Database = { 
  admin: {
    id: 123,
    employeeName: "Admin@com",
    password: "123",
  },    

   employees :[
    {
      employeeId: 1,
      employeeName: "Rohit@s",
      password: "123",
      tasks: [
        {
          id: 101,
          name: "Build Login Page",
          category: "UI",
          subtasks: [
            {
              id: 1001,
              name: "Design Form Layout",
              done: true,
              region: "India",
              date: "2025-09-20",
            },
            {
              id: 1002,
              name: "Style with Tailwind",
              done: false,
              region: "USA",
              date: "2025-09-22",
            },
          ],
        },
      ],
    },
    {
      employeeId: 2,
      employeeName: "Priya@s",
      password: "123",
      tasks: [
        {
          id: 102,
          name: "User Authentication",
          category: "Auth",
          subtasks: [
            {
              id: 2001,
              name: "Setup JWT",
              done: true,
              region: "India",
              date: "2025-09-18",
            },
            {
              id: 2002,
              name: "Protect Routes",
              done: false,
              region: "UK",
              date: "2025-09-23",
            },
          ],
        },
      ],
    },
    {
      employeeId: 3,
      employeeName: "Amit@s",
      password: "123",
      tasks: [
        {
          id: 103,
          name: "API Integration",
          category: "Backend",
          subtasks: [
            {
              id: 3001,
              name: "Create REST Endpoints",
              done: false,
              region: "Germany",
              date: "2025-09-25",
            },
            {
              id: 3002,
              name: "Connect Database",
              done: true,
              region: "India",
              date: "2025-09-21",
            },
          ],
        },
      ],
    },
    {
      employeeId: 4,
      employeeName: "Neha@s",
      password: "123",
      tasks: [
        {
          id: 104,
          name: "Dashboard Design",
          category: "Design",
          subtasks: [
            {
              id: 4001,
              name: "Wireframe Layout",
              done: true,
              region: "USA",
              date: "2025-09-15",
            },
            {
              id: 4002,
              name: "UI Components",
              done: false,
              region: "India",
              date: "2025-09-27",
            },
          ],
        },
      ],
    },
  ]
    
}
export default Database;
export const setlocalStorage=() =>{
  localStorage.setItem("Database",JSON.stringify(Database))
}
export const getlocalStorage=() =>{
  const data =JSON.parse(localStorage.getItem("Database"))
  return data;
}
