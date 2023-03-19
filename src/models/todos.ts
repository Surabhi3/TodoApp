class Todos {
    id: number;
    text: string;
  
    constructor(todoText: string) {
      this.text = todoText;
      this.id = new Date().valueOf();
    }
  }
  
  export default Todos;