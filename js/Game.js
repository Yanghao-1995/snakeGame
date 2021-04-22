function Game(food, block, map, snake) {
    this.food = food;
    this.block = block;
    this.map = map;
    this.snake = snake;
    this.init()
}
Game.prototype.init = function() {
    this.renderMap();
    this.renderFood();
    this.renderBlock();
}
Game.prototype.renderMap = function() {
    this.map.init();
}
Game.prototype.renderFood = function() {
    this.map.arr[this.food.y][this.food.x].style.backgroundImage = 'url(' + this.food.img + ')';
    
}
Game.prototype.renderBlock = function() {
    for (var i = 0; i < this.block.arr.length; i++) {
        var x = this.block.arr[i].x;
        var y = this.block.arr[i].y;
        this.map.arr[y][x].style.backgroundImage = 'url(' + this.block.img + ')'
    }
}   