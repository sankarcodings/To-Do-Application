
class instanceObject{
    
    constructor(){
        this.instance = null;
    }
    static getInstance(){
        if(!instanceObject.instance)
            this.instance = new instanceObject();
        else
            return this.instance;
    }

    hello(){
        console.log("Hello")
    }

}

const obj = new instanceObject.getInstance();
obj.hello()
