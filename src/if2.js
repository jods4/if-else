"use strict";
import { inject } from "aurelia-framework";
import { BoundViewFactory, ViewSlot, templateController } from "aurelia-templating";
import { If } from "aurelia-templating-resources";

export class If2CustomAttribute extends If {  
  valueChanged(newValue) {
    super.valueChanged(newValue);
    if (this.else) this.else.ifChanged(!newValue);
  }
}
templateController(If2CustomAttribute);

export class ElseCustomAttribute extends If {
  constructor(viewFactory, viewSlot) {
    super(viewFactory, viewSlot);
    this.registerInPreviousIf();
  }

  registerInPreviousIf() {
    let previous = this.viewSlot.anchor.previousSibling;
    while (previous && previous.nodeType === 3 /* text */)
      previous = previous.previousSibling;
    if (!previous || previous.nodeType !== 8 /* comment */ || !previous.au.if2)
      throw new Error("Can't find matching If for Else custom attribute.");
    let ifVm = previous.au.if2.viewModel;
    ifVm.else = this;
  }
}
templateController(ElseCustomAttribute);
ElseCustomAttribute.prototype.ifChanged = ElseCustomAttribute.prototype.valueChanged;
ElseCustomAttribute.prototype.valueChanged = function () {};