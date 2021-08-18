const db = require('../util/database');

module.exports = class Request {
  constructor(id, name, age, address, mobile, email, gender,state,status) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.address = address;
    this.mobile = mobile;
    this.email = email;
    this.gender = gender;
    this.state = state;
    this.status = status
  }

  save() {
    return db.execute('INSERT INTO requests (ask_id,ask_name,ask_age,ask_address,ask_mobile,ask_email,ask_gender,ask_state,ask_status) VALUE (?,?,?,?,?,?,?,?,?)',
     [this.id,this.name,this.age,this.address,this.mobile,this.email,this.gender,this.state,this.status]);
  }

  updateStatus(id,status){
    return db.execute('UPDATE requests SET ask_status = status WHERE ask_id=id;');
  }

  static deleteById(id) {

  }

  static fetchAll() {
    return db.execute('SELECT * FROM requests');
  }

  static findById(id) {
    return db.execute('SELECT * FROM requests WHERE requests.ask_id = ?', [id]);
  }
};
