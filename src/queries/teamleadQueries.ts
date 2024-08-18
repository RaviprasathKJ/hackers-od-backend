const sendRequest = (recordCount: number): string => {
  const valuePlaceholders = Array(recordCount)
    .fill(0)
    .map(
      (_, i) =>
        `(uuid_generate_v4(), $${i * 7 + 1}, $${i * 7 + 2}, $${i * 7 + 3}, $${i * 7 + 4}, $${i * 7 + 5}, $${i * 7 + 6}, $${i * 7 + 7})`
    )
    .join(', ');

  return `
    INSERT INTO OD_Details (od_id, user_id, date, reason, request_by, status, from_time, to_time)
    VALUES ${valuePlaceholders}
    RETURNING *;
  `;
};


export default { sendRequest };
