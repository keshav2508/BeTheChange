const db = require('../util/database');

module.exports = class Assign {
  constructor(ask_id,password) {
    this.ask_id = ask_id;
    this.password = password;
  }

  save() {
    return db.execute('INSERT INTO assigned (ask_id,password) VALUE (?,?)',
     [this.ask_id,this.password]);
  }

  static findByPass(pass) {
    return db.execute('SELECT askId FROM assigned WHERE assigned.password = ?', [pass]);
  }
};
