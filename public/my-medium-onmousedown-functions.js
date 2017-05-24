$(document).ready(function($) {
var da;
$( ".button-correction" ).mousedown(function() {
da = new Date();
var categoryid=$(this).attr("data-categoryid");
if(categoryid in categoryTypesHash){
[focusOffset,focusNode,anchorOffset,anchorNode]=medium.returnOffset();
var position = $(this).offset();
nowX=position.left;
nowY=position.top;
tagSelectionWithType(categoryid, categoryTypesHash, medium, 'correction', focusOffset, focusNode, [anchorNode, anchorOffset]);
}else{
article.highlight();
medium.invokeElement('correction', {
tagcode: da.getTime().toString()
});
}
return false;
});
});