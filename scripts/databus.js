import Pool from './base/pool'

let instance;

/**
 * 全局状态管理器
 */
export default class DataBus {
    constructor() {
        if (instance)
            return instance;

        instance = this;

        this.pool = new Pool();

        this.reset()
    }

    reset() {
        this.frame = 0;
        this.score = 0;
        this.bullets = [];
        this.enemys = [];
        this.animations = [];
        this.topBreads = [];
        this.lettuces = [];
        this.steaks = [];
        this.viruses = [];
        this.pizzas = [];
        this.foods = [];
        this.gainFoodCount = 0;
        this.gameOver = false
    }

    /**
     * 回收敌人，进入对象池
     * 此后不进入帧循环
     */
    removeEnemey(enemy) {
        let temp = this.enemys.shift()

        temp.visible = false

        this.pool.recover('enemy', enemy)
    }

    /**
     * 回收子弹，进入对象池
     * 此后不进入帧循环
     */
    removeBullets(bullet) {
        let temp = this.bullets.shift();

        temp.visible = false;

        this.pool.recover('bullet', bullet)
    }

    /**
     * 回收子弹，进入对象池
     * 此后不进入帧循环
     */
    removeTopBreads(topBread) {
        let temp = this.topBreads.shift();
        temp.visible = false;
        this.pool.recover('topBread', topBread)
    }

    /**
     * 回收子弹，进入对象池
     * 此后不进入帧循环
     */
    removeLettuces(lettuce) {
        let index = 0;
        for (let i = 0; i < this.lettuces.length; i++) {
            if (this.lettuces[i] === lettuce) {
                index = i;
                break;
            }
        }

        let temp = this.lettuces[index];
        temp.visible = false;
        this.lettuces.splice(index, 1);
        this.pool.recover('lettuce', lettuce)
    }

    /**
     * 回收子弹，进入对象池
     * 此后不进入帧循环
     */
    removeSteak(steak) {
        let index = 0;
        for (let i = 0; i < this.steaks.length; i++) {
            if (this.steaks[i] === steak) {
                index = i;
                break;
            }
        }

        let temp = this.steaks[index];
        temp.visible = false;
        this.steaks.splice(index, 1);
        this.pool.recover('steak', steak)
    }

    /**
     * 回收子弹，进入对象池
     * 此后不进入帧循环
     */
    removeVirus(virus) {
        let index = 0;
        for (let i = 0; i < this.viruses.length; i++) {
            if (this.viruses[i] === virus) {
                index = i;
                break;
            }
        }

        let temp = this.viruses[index];
        temp.visible = false;
        this.viruses.splice(index, 1);
        this.pool.recover('virus', virus)
    }

    /**
     * 回收子弹，进入对象池
     * 此后不进入帧循环
     */
    removePizza(pizza) {
        let index = 0;
        for (let i = 0; i < this.pizzas.length; i++) {
            if (this.pizzas[i] === pizza) {
                index = i;
                break;
            }
        }

        console.log(index);
        let temp = this.pizzas[index];
        temp.visible = false;
        this.pizzas.splice(index, 1);
        this.pool.recover('pizza', pizza)
    }
}
