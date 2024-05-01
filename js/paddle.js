"use strict";

export class Paddle {
    context;
    x;
    y;
    width;
    height;
    dx = 0;
    speed;

    constructor(context, x, y, width, height, speed) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }

    // 移動する
    move() {
        // パドルの座標を更新する
        this.x += this.dx;
    }

    // 描画する
    draw() {
        // パドルを描画する
        this.context.beginPath();
        this.context.rect(this.x, this.y, this.width, this.height);
        this.context.fillStyle = "green";
        this.context.fill();
        this.context.closePath();
    }
}