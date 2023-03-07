AFRAME.registerComponent("car", {
    schema: {
        src: {type:"string", 
        default: "./models/60s_muscle_car_orange/scene.gltf"
       },
       color:{type:"string",
        default: "#ffffff"
       },
       clickCounter:{type:"number", default:0}

    },
    init: function() {
        this.el.setAttribute("gltf-model", this.data.src);
        this.el.setAttribute("position", {x : "0", y: "0", z:"0"})
        this.el.setAttribute("scale", {x:5, y:5, z:5})
        this.el.setAttribute("rotation",{x: "0", y: `90 +${(this.data.clickCounter*20)}`, z:"0"})
        this.el.setAttribute("color", this.data.color)
    },
    update: function() {
        window.addEventListener("click", e => {
            this.data.clickCounter = this.data.clickCounter + 1;

            console.log(this.data.clickCounter)
            const rotation = { x: 0, y: 90 + (this.data.clickCounter*20), z: 0 }; 
            this.el.setAttribute("rotation", rotation);        
        })
    }
})

