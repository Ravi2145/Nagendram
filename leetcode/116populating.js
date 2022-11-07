
var connect = (root)=>{
    if(!root){
        return root;
    }
    let level = root;
    while(level.left){
        let head =level;
        while(head!=null){
            head.left.next = head.right;
            if(head.next){
                head.right.next=head.next.left;;
            }
            head = head.next;
        }
        level =level.left;
    }
    return root;
}
let root = [1,2,3,4,5,6,7]
console.log(connect(root));