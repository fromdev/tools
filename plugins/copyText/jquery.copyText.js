! function(n) {
  const copyTextAction = (id) => {
    if (!id) return false;
    const copyText = document.getElementById(id);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    return true;
  };
  n.fn.copyText = function(context) {
    if(!context || !context.textElementId) return; //nothing to register
    var u = n(this);
    if(!u) return;
    u.click(function() {
      const val = copyTextAction(context.textElementId);
      if(val && context.confirm) context.confirm();
    });
  }
}(jQuery);
