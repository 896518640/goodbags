function getElementByAttr(tag, dataAttr, reg) {
    var aElements = document.getElementsByTagName(tag);
    var aEle = [];
    for(var i = 0; i < aElements.length; i++) {
      var ele = aElements[i].getAttribute(dataAttr);
      if(reg.test(ele)) {
          aEle.push(aElements[i]);
      }
    }
    return aEle;
  }