class Todos {
    id: number;
    text: string;
  
    constructor(todoText: string) {
      this.text = todoText;
      this.id = new Date().getUTCDate();
    }
  }
  
  export default Todos;