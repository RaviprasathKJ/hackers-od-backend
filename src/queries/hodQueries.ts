const acceptRequest = "UPDATE OD_Details SET status = '1' WHERE status = '0' AND user_id = ANY($1)";
const rejectRequest = "UPDATE OD_Details SET status = '-1' WHERE status = '0' AND user_id = ANY($1)";

export default { acceptRequest, rejectRequest };

