'use babel';

module.exports = {

  config: {
    CodeBlockLanguage: {
      title: "The language of code block",
      type: "string",
      default: "",
    },
  },


  activate() {

    this.subscription = inkdrop.commands.add(document.body, {
      'create-code-block:main': () => {
        var editor_is_active = inkdrop.isEditorActive();
        if (editor_is_active){
          var activeEditor = inkdrop.getActiveEditor();
          var current_str = activeEditor.cm.getSelection()
          var code_lang = inkdrop.config.get(
            "create-code-block.CodeBlockLanguage"
          );
          //var code_lang = 'sql'
          var replace_str =
             '```' + code_lang + '\n' + current_str + '```';
          activeEditor.cm.replaceSelection(replace_str)
          

        }
      }
    })

  },

  deactivate() {
    this.subscription.dispose();
  }

};

