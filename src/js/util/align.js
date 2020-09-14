var scaleDir = 'x'

class Align {

    static setScale(obj) {
        let scalex = game.config.width / obj.width;
        let scaley = game.config.height / obj.height;
        if (scalex > scaley) {
            scaleDir = 'y'
        } else {
            scaleDir = 'x'
        }
    }

    static shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    static getScale(obj, per) {
        obj.displayWidth = game.config.width * per;
        return obj.scaleX;
    }

    static scaleToGameW(obj, per) {
        obj.displayWidth = game.config.width * per;
        return obj.scaleX;
        // obj.displayHeight = game.config.height * per;
        // obj.scaleY = obj.scaleX;
    }
    static scaleToGameH(obj, per) {
        obj.displayHeight = game.config.height * per;
        return obj.scaleY;
        // obj.scaleY = obj.scaleX;
    }
    static scaleToGameWParallel(obj, per) {
        if (scaleDir == 'x') {
            obj.displayWidth = game.config.width * per;
            obj.scaleY = obj.scaleX;
        } else {
            obj.displayHeight = game.config.height * per;
            obj.scaleY = obj.scaleX;
        }
        // obj.displayHeight = game.config.height * per;
        // obj.scaleY = obj.scaleX;
        return obj.scaleX;
    }
    static scaleToGameWH(obj, per) {
        obj.displayWidth = game.config.width * per;
        obj.displayHeight = game.config.height * per;
        // obj.scaleY = obj.scaleX;
    }
    //horizontally center
    static centerH(obj) {
        obj.x = game.config.width / 2 - obj.displayWidth / 2;
    }
    //vertically center
    static centerV(obj) {
        obj.y = game.config.height / 2 - obj.displayHeight / 2;
    }
    static center2(obj) {
        obj.x = game.config.width / 2 - obj.displayWidth / 2;
        obj.y = game.config.height / 2 - obj.displayHeight / 2;
    }
    static center(obj) {
        obj.x = game.config.width / 2;
        obj.y = game.config.height / 2;
    }
}