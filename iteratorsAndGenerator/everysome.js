var users = [
    { id: 21, hasSubmitted: true },
    { id: 62, hasSubmitted: false },
    { id: 4, hasSubmitted: true }
];

let result = users.every(function (user) {
    return user.hasSubmitted;
})

console.log('every users hasSubmitted', result)



var requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
];


var status = requests.some(function (request) {
    return request.status === 'pending'
})

console.log('status', status)

