localStorage.clear()
const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      fname: "Aarav",
      taskNumbers: {
        active: 1,
        newTask: 1,
        completed: 0,
        failed: 0,
      },
      tasks: [
        {
          taskTitle: "Prepare monthly sales report",
          taskDescription: "Compile and analyze sales data for the past month to create a detailed report.",
          taskDate: "2024-11-30",
          categories: ["Sales", "Reports"],
          active: true,
          newTask: false,
          completed: false,
          failed: false,
        },
        {
          taskTitle: "Update client contact details",
          taskDescription: "Review and update contact details of existing clients in the CRM system.",
          taskDate: "2024-11-29",
          categories: ["CRM", "Data"],
          active: false,
          newTask: true,
          completed: false,
          failed: false,
        },
      ],
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      fname: "Ishita",
      taskNumbers: {
        active: 1,
        newTask: 1,
        completed: 2,
        failed: 0,
      },
      tasks: [
        {
          taskTitle: "Organize team meeting",
          taskDescription: "Schedule and prepare an agenda for the upcoming team meeting.",
          taskDate: "2024-12-01",
          categories: ["Meetings", "Team"],
          active: true,
          newTask: false,
          completed: true,
          failed: false,
        },
        {
          taskTitle: "Submit timesheet for review",
          taskDescription: "Complete and submit the timesheet for the current pay period.",
          taskDate: "2024-11-30",
          categories: ["Admin", "HR"],
          active: false,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          taskTitle: "Follow up with vendor",
          taskDescription: "Contact the vendor to discuss outstanding orders and delivery schedules.",
          taskDate: "2024-11-29",
          categories: ["Procurement", "Follow-ups"],
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        },
      ],
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      fname: "Rohan",
      taskNumbers: {
        active: 1,
        newTask: 0,
        completed: 0,
        failed: 0,
      },
      tasks: [
        {
          taskTitle: "Update website content",
          taskDescription: "Revise and upload the latest content to the company website.",
          taskDate: "2024-12-02",
          categories: ["Web", "Content"],
          active: true,
          newTask: false,
          completed: false,
          failed: false,
        },
      ],
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      fname: "Priya",
      taskNumbers: {
        active: 1,
        newTask: 1,
        completed: 1,
        failed: 1,
      },
      tasks: [
        {
          taskTitle: "Prepare budget forecast",
          taskDescription: "Create a budget forecast for the upcoming quarter.",
          taskDate: "2024-12-01",
          categories: ["Finance", "Planning"],
          active: false,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          taskTitle: "Complete product testing",
          taskDescription: "Conduct thorough testing of the latest product prototype.",
          taskDate: "2024-11-30",
          categories: ["Testing", "QA"],
          active: true,
          newTask: false,
          completed: true,
          failed: false,
        },
        {
          taskTitle: "Fix critical bug",
          taskDescription: "Resolve the critical bug affecting the login functionality.",
          taskDate: "2024-11-29",
          categories: ["Development", "Bugs"],
          active: false,
          newTask: false,
          completed: false,
          failed: true,
        },
      ],
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      fname: "Kavya",
      taskNumbers: {
        active: 1,
        newTask: 1,
        completed: 0,
        failed: 0,
      },
      tasks: [
        {
          taskTitle: "Design marketing campaign",
          taskDescription: "Conceptualize and design the next marketing campaign for the holiday season.",
          taskDate: "2024-12-03",
          categories: ["Marketing", "Design"],
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
      ],
    },
  ];
  
  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123",
    },
  ];
  
  
  

export const  Setlocalstorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const  Getlocalstorage=()=>{
  const employees =  JSON.parse(localStorage.getItem('employees'))
  const admin =  JSON.parse(localStorage.getItem('admin'))
 return {employees,admin}; 
  
}