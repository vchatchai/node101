
function setCookie(name, value, options){
    options = options || {};
    let {secure, path, domain='www.google.co.th', expires} = options
    // let secure = options.secure,
    // path = options.path,
    // domain = options.domain,
    // expires = options.expires;
    console.log(secure)
    console.log(expires)
    console.log(domain)
    console.log(options)


}

setCookie("type", "js", {secure: true, expires: 60000});
