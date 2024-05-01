"use strict";

export class Block {
    context;
    x;
    y;
    width;
    height;
    status = true;

    static POINT = 10;

    constructor(context, x, y, width, height) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    // 得点を取得する 
    getPoint() {
        return Block.POINT;
    }

    draw() {
        if (this.status === true) {
            // ブロックを描画する
            this.context.fillStyle = "#A47F61";
            this.context.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}

export class HardBlock extends Block {

    static POINT = 50;
    hp = 3;

    constructor(context, x, y, width, height) {
        super(context, x, y, width, height);
    }

    // 得点を取得する 
    getPoint() {
        return HardBlock.POINT;
    }

    draw() {
        if (this.status === true) {
            // ブロックを描画する
            this.context.fillStyle = "#D2691E";
            this.context.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}