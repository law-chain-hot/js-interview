import Mask from './MaskClass.js'


// =============
// 
let mask = new Mask()

mask.guides = [
    {
        element: ".budget__title",
        description: "111"
    },
    {
        element: ".add__container",
        description: "222"
    },
]

mask.start()