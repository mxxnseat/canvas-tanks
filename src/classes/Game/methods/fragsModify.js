export default function fragsModify({ fragIndex }) {
    this.frags.splice(fragIndex, 1);
    this.frags.forEach((frag, index) => frag.setNewIndex(index));
}