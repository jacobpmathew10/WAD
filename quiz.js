function validate(){
    var sum=0;
    var qn1=document.getElementsByName('qn1');
    var qn2=document.getElementsByName('qn2');
    if(qname.qn1[0].checked==true)
    {
        sum=parseInt(sum)+1;
    }
    if(qname.qn2[1].checked==true){
        sum=parseInt(sum)+1;
    }
    alert("points recieved are:"+sum);
}
function displayans(){
    document.write("qn1.ans:messi||qn2.ans:messi");
}