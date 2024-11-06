const login = "select * from admin where admin_id = $1 and password = $2";
const getAllStudents = "select * from users";
const getApprovedStudents = "select od_details.reason, users.name, users.email, users.dept, users.sec, users.year from od_details join users on od_details.user_id = users.user_id where od_details.status = '1'";
const getRejectedStudents = "select od_details.reason, users.name, users.email, users.dept, users.sec, users.year from od_details join users on od_details.user_id = users.user_id where od_details.status = '-1'";
const getPendingStudents = "select od_details.od_id, od_details.reason, users.name, users.email, users.dept, users.sec, users.year from od_details join users on od_details.user_id = users.user_id where od_details.status = '0'";
const getApprovedStudentsToday = "select od_details.reason, users.name, users.email, users.dept, users.sec, users.year from od_details join users on od_details.user_id = users.user_id where od_details.status = '1' and date = current_date";
const getRejectedStudentsToday = "select od_details.reason, users.name, users.email, users.dept, users.sec, users.year from od_details join users on od_details.user_id = users.user_id where od_details.status = '-1' and date = current_date";
const getPendingStudentsToday = "select od_details.od_id, od_details.reason, users.name, users.email, users.dept, users.sec, users.year from od_details join users on od_details.user_id = users.user_id where od_details.status = '0' and date = current_date";

export default { login, getAllStudents, getApprovedStudents, getRejectedStudents, getPendingStudents, getApprovedStudentsToday, getRejectedStudentsToday, getPendingStudentsToday };

