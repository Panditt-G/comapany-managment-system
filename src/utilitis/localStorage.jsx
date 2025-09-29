const Database = { 
  admin: {
    id: 123,
    employeeName: "System Admin",
    email: "admin@company.com",
    password: "123",
  },    

  employees: [
    {
      employeeId: 1,
      employeeName: "Rohit Sharma",
      email: "rohit@company.com",   
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
              priority: "High",
              description: "Create login form structure",
              region: "India",
              date: "2025-09-20",
            },
            {
              id: 1002,
              name: "Style with Tailwind",
              done: false,
              priority: "Medium",
              description: "Add Tailwind classes for styling",
              region: "USA",
              date: "2025-09-22",
            },
          ],
          taskSummary: {
            new: 1,
            active: 8,
            completed: 1,
            failed: 0
          }
        },
      ],
    },
    {
      employeeId: 2,
      employeeName: "Priya Verma",
      email: "priya@company.com",
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
              priority: "High",
              description: "Integrate JWT for auth",
              region: "India",
              date: "2025-09-18",
            },
            {
              id: 2002,
              name: "Protect Routes",
              done: false,
              priority: "Low",
              description: "Secure private routes",
              region: "UK",
              date: "2025-09-23",
            },
          ],
          taskSummary: {
            new: 0,
            active: 1,
            completed: 2,
            failed: 1
          }
        },
      ],
    },
    {
      employeeId: 3,
      employeeName: "Amit Patel",
      email: "amit@company.com",
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
              priority: "High",
              description: "Build backend API routes",
              region: "Germany",
              date: "2025-09-25",
            },
            {
              id: 3002,
              name: "Connect Database",
              done: true,
              priority: "Medium",
              description: "Link API with database",
              region: "India",
              date: "2025-09-21",
            },
          ],
          taskSummary: {
            new: 5,
            active: 1,
            completed: 2,
            failed: 1
          }
        },
      ],
    },
    {
      employeeId: 4,
      employeeName: "Neha Singh",
      email: "neha@company.com",
      password: "123",
      tasks: [
        {
          id: 104,
          name: "Dashboard Design",
          category: "Design",
          subtasks: [
           
          ],
          taskSummary: {
            new: 0,
            active: 5,
            completed: 2,
            failed: 5
          }
        },
      ],
    },
  ]
}

export default Database;

export const setlocalStorage = () => {
  localStorage.setItem("Database", JSON.stringify(Database));
}

export const getlocalStorage = () => {
  const data = JSON.parse(localStorage.getItem("Database"));
  return data;
}
