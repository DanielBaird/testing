
var defaultOptions = {
    minX = 0;
    minY = 0;
    minZ = 0;

    maxX = 100;
    maxY = 100;
    maxZ = 20;
};

function ScapeField(domElement, options) {
    this._opts = Object.create(defaultOptions);
    this.mergeOptions(options);

    this._minX = this._opts.minX;
    this._minY = this._opts.minY;
    this._minZ = this._opts.minZ;

    this._maxX = this._opts.maxX;
    this._maxY = this._opts.maxY;
    this._maxZ = this._opts.maxZ;
};

ScapeField.prototype.print = function() {
    console.log(
        '(' + this._minX + '-' + this._maxX +
        ', ' + this._minY + '-' + this._maxY +
        ', ' + this._minZ + '-' + this._maxZ +
        ')'
    );
}


