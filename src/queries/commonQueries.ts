const getAllStudents = "select * from users";
const getApprovedStudents = "select * from od_details where status = '1'";
const getRejectedStudents = "select * from od_details where status = '2'";
const getPendingStudents = "select * from od_details where status = '0'";
const getApprovedStudentsToday = "select * from od_details where status = '1' and date = current_date";
const getRejectedStudentsToday = "select * from od_details where status = '2' and date = current_date";
const getPendingStudentsToday = "select * from od_details where status = '0' and date = current_date";

export default { getAllStudents, getApprovedStudents, getRejectedStudents, getPendingStudents, getApprovedStudentsToday, getRejectedStudentsToday, getPendingStudentsToday };

