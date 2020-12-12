'use strict';

const DomElement = function() {
    this.selector = '#block';
    this.height = '500px';
    this.width = '500px';
    this.bg = 'red';
    this.fontSize = '100px';

}

DomElement.prototype.createElement = function() {
    if (this.selector.charAt(0) === '.') {
        const div = document.createElement('div');
        div.classList.add(this.selector.substr(1));
        document.querySelector('body').append(div);
        div.textContent = 'Любой текст';
        div.style.cssText = `height:${this.height};width:${this.width};background-color:${this.bg};
        font-size:${this.fontSize}`;
    } else if (this.selector.charAt(0) === '#') {
        const p = document.createElement('p');
        p.id = this.selector.substr(1);
        document.querySelector('body').append(p);
        p.textContent = 'Любой текст';
        p.style.cssText = `height:${this.height};width:${this.width};background-color:${this.bg};
        font-size:${this.fontSize}`;
    }
};

const domElement = new DomElement();
domElement.createElement();