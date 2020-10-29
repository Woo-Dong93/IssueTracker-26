const USER = {
  SIGNUP: `INSERT INTO user(userName, password) VALUES(?,?)`,
};

const LABEL = {
  CREATE: `INSERT INTO label(title, description, color) VALUES(?,?,?)`,
};

const MILESTONE = {
  CREATE: `INSERT INTO milestone(title, dueDate, description) VALUES(?,?,?)`,
};

const ISSUE = {
  GETISSUELIST: `SELECT I.ID, I.TITLE, I.CONTENT, I.USER_ID, U.USERNAME, I.CREATEDAT, I.MILESTONE_ID, M.TITLE AS MILESTONENAME 
  FROM ISSUE I LEFT JOIN USER U ON I.USER_ID=U.ID LEFT JOIN MILESTONE M ON I.MILESTONE_ID=M.ID WHERE I.STATE=1`,

  GETISSUELABEL: `SELECT L.ID AS LABELID, L.TITLE, L.COLOR FROM ISSUEHASLABEL IH, LABEL L WHERE IH.ISSUE_ID=? AND IH.LABEL_ID=L.ID`,

  GETISSUEASSIGNEE: `SELECT U.ID, U.USERNAME FROM ASSIGNEE A, USER U WHERE A.ISSUE_ID=? AND U.ID=A.USER_ID`,
};

module.exports = {
  USER,
  LABEL,
  MILESTONE,
  ISSUE,
};