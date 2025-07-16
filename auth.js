function login(username, password) {
// FIXED: handle spaces in username
username = username.trim();
return authenticateUser(username, password);
}
