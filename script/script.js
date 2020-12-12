'use strict';

const DomElement = function() {
    this.selector = '#block';
    this.height = '100px';
    this.width = '100px';
    this.bg = 'red';
    this.fontSize = '100px';
    this.position = 'absolute';
    this.element = '';
    this.pos = 0;
    this.pos2 = 0;

}

DomElement.prototype.createElement = function() {
    if (this.selector.charAt(0) === '.') {
        const div = document.createElement('div');
        div.classList.add(this.selector.substr(1));
        document.querySelector('body').append(div);
        div.textContent = 'Любой текст';
        div.style.cssText = `height:${this.height};width:${this.width};background-color:${this.bg};
        position:${this.position}`;
        this.element = div;
    } else if (this.selector.charAt(0) === '#') {
        const p = document.createElement('p');
        p.id = this.selector.substr(1);
        document.querySelector('body').append(p);
        p.textContent = 'Любой текст';
        p.style.cssText = `height:${this.height};width:${this.width};background-color:${this.bg};
         position:${this.position}`;
        this.element = p;
    }
};

DomElement.prototype.move = function() {
    const _this = this;
    document.addEventListener('keydown', function(key) {
        if (key.code === 'ArrowLeft') {
            console.log(key.code);
            _this.pos -= 10;
            _this.element.style.left = _this.pos + 'px';
        } else if (key.code === 'ArrowRight') {
            console.log(key.code);
            _this.pos += 10;
            _this.element.style.left = _this.pos + 'px';
        } else if (key.code === 'ArrowUp') {
            console.log(key.code);
            _this.pos2 -= 10;
            _this.element.style.top = _this.pos2 + 'px';
        } else if (key.code === 'ArrowDown') {
            console.log(key.code);
            _this.pos2 += 10;
            _this.element.style.top = _this.pos2 + 'px';
        }
    });
}

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
});

const domElement = new DomElement();
domElement.createElement();
domElement.move();