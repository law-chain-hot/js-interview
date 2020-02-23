import {guide, close} from "./node_modules/mask-guide/dist/index.js";

guide({
    el: ".budget__title",
    type: "step",
    position: "bottomRight",
    onClickNext: () => {
        console.log("点击了下一步");
        close();
    },
    explain: {
        title: "这是title",
        content: "这是内容这是内容这是内容这是内容这是内容这是内容"
    }
});