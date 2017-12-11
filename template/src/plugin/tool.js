/* common functions */
export default {
    clone(o) { /* copy Object */
        let temp = JSON.stringify(o);
        return JSON.parse(temp);
    },
    O2S(o) { /* Object to String conect by & */
        let a = [];
        for (let i in o) {
            a.push(i + "=" + o[i]);
        }
        return a.join("&");
    }
}