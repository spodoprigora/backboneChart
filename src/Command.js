class Command {

  constructor () {
    this.actions = {};
    this.subscriber = {};

    if(this.instance){
      return this.instance;
    }
    this.instance = this;
  }

  get Actions(){
    return this.actions;
  }

  setActions(event, fn){
    this.actions[event] = fn;
  }

  execute (event, args) {
    const action = this.actions[event];

    if (action !== undefined) {
      action(args);
    }



  };
}