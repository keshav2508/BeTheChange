const db = require('../util/database');

module.exports = class Volunteer {
  constructor(id, name, age, address, mobile, email, gender,imageUrl,password) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.address = address;
    this.mobile = mobile;
    this.email = email;
    this.gender = gender;
    this.imageUrl = imageUrl;
    this.password = password;
  }

  save() {
    return db.execute('INSERT INTO volunteers (vol_id,vol_name,vol_age,vol_address,vol_mobile,vol_email,vol_gender,vol_imgUrl,vol_pass) VALUE (?,?,?,?,?,?,?,?,?)',
     [this.id,this.name,this.age,this.address,this.mobile,this.email,this.gender,this.imageUrl,this.password]);
  }

  static fetchVolEmails(){
    return db.execute('SELECT vol_email FROM volunteers');
  }


  static deleteById(id) {

  }

  static fetchAll() {
    return db.execute('SELECT * FROM volunteers');
  }

  static fetchLast(){
    return db.execute('SELECT vol_id,vol_pass FROM volunteers WHERE vol_id=(SELECT max(vol_id) FROM volunteers);')
  }

  static findById(id) {

  }
};
