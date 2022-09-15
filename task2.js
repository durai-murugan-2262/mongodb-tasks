// use students; switch to students database;

/*inserting users*/

db.users.insertMany([
  {
    userid: 1,
    name: "Hariharan",
    email: "hari@gmail.com",
    mentorid: 1,
  },
  {
    userid: 2,
    name: "Elumalai",
    email: "elu7@gmail.com",
    mentorid: 2,
  },
  {
    userid: 3,
    name: "Manikandan",
    email: "mani@gmail.com",
    mentorid: 3,
  },
  {
    userid: 4,
    name: "Deva",
    email: "deva@gmail.com",
    mentorid: 3,
  },
  {
    userid: 5,
    name: "Krishnan",
    email: "krish24@gmail.com",
    mentorid: 1,
  },
]);
/*.............................................................................................................................................*/
/*codekata*/

db.codekata.insertMany([
  {
    userid: 1,
    problems: 24,
  },
  {
    userid: 2,
    problems: 14,
  },
  {
    userid: 3,
    problems: 34,
  },
  {
    userid: 4,
    problems: 20,
  },
  {
    userid: 5,
    problems: 31,
  },
]);

/*....................................................................................................................................................*/
/*topics*/

db.topics.insertMany([
  {
    topicid: 1,
    topic: "html",
    topic_date: new Date("5-mar-2022"),
  },
  {
    topicid: 2,
    topic: "css",
    topic_date: new Date("10-mar-2022"),
  },
  {
    topicid: 3,
    topic: "Javascript",
    topic_date: new Date("15-mar-2022"),
  },
  {
    topicid: 4,
    topic: "React",
    topic_date: new Date("20-mar-2022"),
  },
  {
    topicid: 5,
    topic: "NodeJs",
    topic_date: new Date("25-mar-2022"),
  },
]);

/*..............................................................................................................................................................*/
/*tasks*/

db.tasks.insertMany([
  {
    taskid: 1,
    topicid: 1,
    userid: 1,
    task: "html task",
    due_date: new Date("5-mar-2022"),
    submitted: true,
  },
  {
    taskid: 2,
    topicid: 2,
    userid: 2,
    task: "css task",
    due_date: new Date("10-mar-2022"),
    submitted: true,
  },
  {
    taskid: 3,
    topicid: 3,
    userid: 3,
    task: "Javascript task",
    due_date: new Date("15-mar-2022"),
    submitted: false,
  },
  {
    taskid: 4,
    topicid: 4,
    userid: 4,
    task: "React task",
    due_date: new Date("20-mar-2022"),
    submitted: false,
  },
  {
    taskid: 5,
    topicid: 5,
    userid: 5,
    task: "Node task",
    due_date: new Date("25-mar-2022"),
    submitted: false,
  },
]);
/*....................................................................................................................................................*/
/*attendance*/

db.attendance.insertMany([
  {
    userid: 1,
    topicid: 1,
    attended: true,
  },
  {
    userid: 2,
    topicid: 2,
    attended: true,
  },
  {
    userid: 3,
    topicid: 3,
    attended: false,
  },
  {
    userid: 4,
    topicid: 4,
    attended: false,
  },
  {
    userid: 5,
    topicid: 5,
    attended: false,
  },
]);

/*...................................................................................................................................................*/
/*mentors*/

db.mentors.insertMany([
  {
    mentorid: 1,
    mentorname: "Kavin",
    mentor_email: "kavin2@gmail.com",
  },
  {
    mentorid: 2,
    mentorname: "Jeeva",
    mentor_email: "jeeva@gmail.com",
  },
  {
    mentorid: 3,
    mentorname: "Swathi",
    mentor_email: "swathi@gmail.com",
  },
  {
    mentorid: 4,
    mentorname: "Janaki",
    mentor_email: "janaki@gmail.com",
  },
  {
    mentorid: 5,
    mentorname: "Manimaran",
    mentor_email: "manimaran@gmail.com",
  },
]);

/*.................................................................................................................................................*/
/*company drives*/

db.comapnydrives.insertMany([
  {
    userid: 1,
    drive_date: new Date("10-oct-2022"),
    company: "Google",
  },
  {
    userid: 1,
    drive_date: new Date("15-oct-2022"),
    company: "Amazon",
  },
  {
    userid: 2,
    drive_date: new Date("20-oct-2022"),
    company: "SAP labs",
  },
  {
    userid: 3,
    drive_date: new Date("25-oct-2022"),
    company: "Mac App studio",
  },
  {
    userid: 4,
    drive_date: new Date("27-oct-2022"),
    company: "Freshworks",
  },
]);

/*.................................................................................................................................................*/
