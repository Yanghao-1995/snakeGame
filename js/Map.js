function Map(row, col, width, height) {
    this.row = row;
    this.col = col;
    this.width = width;
    this.height = height;
    this.arr = []
}
Map.prototype.init = function() {
    var box = document.createElement('div');
    box.style.width = this.width + 'px';
    box.style.height = this.height + 'px';
    box.className = 'box'
    for (var i = 0; i < this.row; i++) {
        var rowElement = document.createElement('div');
        var rowArr = [];
        // console.log(rowElement);
        rowElement.className = 'row';
        for (var j = 0; j < this.col; j++) {
            var colElement = document.createElement('div');
            colElement.className = 'col';
            colElement.style.width = this.width / this.col + 'px';
            colElement.style.height = this.height / this.row + 'px';
            rowElement.appendChild(colElement);
            rowArr.push(colElement);
        }
        this.arr.push(rowArr);
        box.appendChild(rowElement);
    }
    document.body.appendChild(box)
    // console.log(this.arr);
}