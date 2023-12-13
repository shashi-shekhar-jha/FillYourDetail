class Detail {
    constructor(Name,Email) {
      this.Name = Name;
      this.Email=Email;
      this.id = new Date().toISOString();
    }
  }
  
  export default Detail;
  