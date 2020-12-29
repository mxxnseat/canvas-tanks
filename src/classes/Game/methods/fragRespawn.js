import Frag from "../../Frag/";

export default function fragRespawn() {
    this.frags.push(new Frag(this.ctx, this.frags.length));
}