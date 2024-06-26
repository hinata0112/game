"use strict";

export class Ball {
    context;
    x;
    y;
    radius;
    dx;
    dy;

    constructor(context, x, y, radius, dx, dy) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
    }

    // 移動する 
    move() {
        // ボールの座標を更新する
        this.x += this.dx;
        this.y += this.dy;
    }

    draw() {
        // ボールを描画する
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.context.fillStyle = "red";
        this.context.fill();
        this.context.closePath();
    }
}
