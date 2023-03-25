export default function isUserNameValid(username) {
  /* 
      Usernames can only have: 
      - Lowercase Letters (a-z) 
      - Numbers (0-9)
      - Dots (.)
      - Underscores (_)
    */
  const res = /^[a-z0-9_.]+$/.exec(username);
  const valid = !!res;
  return valid;
}
