var bpmnJS = new BpmnJS({
  container: '#canvas',
  additionalModules: [
    // ...
    window['diagram-js-context-pad']
  ],
  contextPad: {
    beauty: true
  }
});

bpmnJS.createDiagram();
