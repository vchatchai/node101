let PersonClass = (function() {
    "use strict";

    const PersonClass2 = function(name) {
        if(typeof new.target === "undefined") {
            throw new Error("Contructor must be called with new.");
        }

        this.name =name;
        
    }

    Object.defineProperty(PersonClass2.prototype, "sayName", {
        value: function() {
            if (typeof new.target !== "undefined") {
                throw new Error("Method cannot be called with new.");
            }
            console.log(this.name)
        },
        enumerable: false,
        writable: true,
        configurable: true

    });
    return PersonClass2;

}());