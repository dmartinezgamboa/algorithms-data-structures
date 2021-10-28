var tracker = 0;
var callMe = function() {
    tracker++
    if (tracker == 3) {
        console.log('loops')
        return 'loops'
    } return callMe('anytime');
}

console.log(callMe());