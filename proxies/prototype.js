let target = { };
let proxy = new Proxy(target, {
    getPrototypeOf(trapTarget)  {
        return null;
    },
    setPrototypeOf(trapTarget, proto) {
        return false;
    }
});