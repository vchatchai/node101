class CustomerHTMLElement {
    constructor(element) {
        this.element = element;
    }

    get html() {
        return this.element.innerHTML;
    }

    set html(value){
        this.element.innerHTML = value
    }
}

var descriptor = Object.getOwnPropertyDescriptor(CustomerHTMLElement.prototype, "html");
console.log(descriptor)
console.log("get" in descriptor);
console.log("set" in descriptor);
console.log(descriptor.enumerable);


