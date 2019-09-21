// Place your key bindings in this file to override the defaultsauto[]
[
    {
        "key": "ctrl+]",
        "command": "workbench.action.togglePanel"
    },
    {
        "key": "ctrl+\\",
        "command": "workbench.action.toggleSidebarVisibility"
    },
    {
        "key": "cmd+\\",
        "command": "-workbench.action.toggleSidebarVisibility"
    },
    {
        "key": "ctrl+right",
        "command": "workbench.action.focusNextGroup"
    },
    {
        "key": "ctrl+left",
        "command": "workbench.action.focusPreviousGroup"
    },
    {
        "key": "cmd+backspace",
        "command": "-deleteAllLeft",
        "when": "textInputFocus && !editorReadonly"
    },
    {
        "key": "cmd+backspace",
        "command": "editor.action.deleteLines",
        "when": "textInputFocus && !editorReadonly"
    },
    {
        "key": "shift+cmd+k",
        "command": "-editor.action.deleteLines",
        "when": "textInputFocus && !editorReadonly"
    },
    {
        "key": "shift+cmd+backspace",
        "command": "deleteAllLeft"
    },
    {
        "key": "cmd+k cmd+1",
        "command": "editor.foldAll",
        "when": "editorTextFocus"
    },
    {
        "key": "cmd+k cmd+0",
        "command": "-editor.foldAll",
        "when": "editorTextFocus"
    },
    {
        "key": "cmd+k cmd+2",
        "command": "editor.unfoldAll",
        "when": "editorTextFocus"
    },
    {
        "key": "cmd+k cmd+j",
        "command": "-editor.unfoldAll",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+up",
        "command": "workbench.action.focusActiveEditorGroup",
    },
    {
        "key": "ctrl+b",
        "command": "editor.action.jumpToBracket",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+m",
        "command": "-editor.action.jumpToBracket",
        "when": "editorTextFocus"
    },
    {
        "key": "alt+cmd+right",
        "command": "workbench.action.moveEditorToNextGroup"
    },
    {
        "key": "alt+cmd+right",
        "command": "-workbench.action.moveEditorToNextGroup"
    },
    {
        "key": "alt+cmd+right",
        "command": "-workbench.action.terminal.focusNextPane",
        "when": "terminalFocus"
    },
    {
        "key": "alt+cmd+right",
        "command": "-workbench.action.nextEditor"
    },
    {
        "key": "alt+cmd+left",
        "command": "-workbench.action.terminal.focusPreviousPane",
        "when": "terminalFocus"
    },
    {
        "key": "alt+cmd+left",
        "command": "-workbench.action.previousEditor"
    },
    {
        "key": "alt+cmd+left",
        "command": "workbench.action.moveEditorToPreviousGroup"
    },
    {
        "key": "ctrl+cmd+left",
        "command": "-workbench.action.moveEditorToPreviousGroup"
    },
    {
        "key": "ctrl+d",
        "command": "-deleteRight",
        "when": "textInputFocus && !editorReadonly"
    },
    {
        "key": "ctrl+u",
        "command": "scrollPageUp",
        "when": "textInputFocus"
    },
    {
        "key": "cmd+pageup",
        "command": "-scrollPageUp",
        "when": "textInputFocus"
    },
    {
        "key": "ctrl+d",
        "command": "scrollPageDown",
        "when": "textInputFocus"
    },
    {
        "key": "cmd+pagedown",
        "command": "-scrollPageDown",
        "when": "textInputFocus"
    },
    {
        "key": "ctrl+d",
        "command": "cursorPageDown",
        "when": "textInputFocus"
    },
    {
        "key": "pagedown",
        "command": "-cursorPageDown",
        "when": "textInputFocus"
    },
    {
        "key": "ctrl+u",
        "command": "cursorPageUp",
        "when": "textInputFocus"
    },
    {
        "key": "pageup",
        "command": "-cursorPageUp",
        "when": "textInputFocus"
    },
    {
        "key": "ctrl+backspace",
        "command": "-deleteLeft",
        "when": "textInputFocus && !editorReadonly"
    },
    {
        "key": "ctrl+backspace",
        "command": "lastCursorLineSelect"
    },
    {
        "key": "ctrl+enter",
        "command": "editor.action.revealDefinition",
        "when": "editorHasDefinitionProvider && editorTextFocus && !isInEmbeddedEditor"
    },
    {
        "key": "f12",
        "command": "-editor.action.revealDefinition",
        "when": "editorHasDefinitionProvider && editorTextFocus && !isInEmbeddedEditor"
    },
    {
        "key": "ctrl+enter",
        "command": "-python.datascience.runcurrentcell",
        "when": "editorTextFocus && python.datascience.featureenabled && python.datascience.hascodecells && !editorHasSelection"
    },
    {
        "key": "ctrl+enter",
        "command": "-explorer.openToSide",
        "when": "explorerViewletFocus && explorerViewletVisible && !inputFocus"
    },
    {
        "key": "ctrl+enter",
        "command": "-openReferenceToSide",
        "when": "referenceSearchTreeFocused && referenceSearchVisible"
    },
    {
        "key": "ctrl+enter",
        "command": "-problems.action.openToSide",
        "when": "problemFocus"
    },
    {
        "key": "cmd+enter",
        "command": "-breadcrumbs.revealFocused",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "cmd+enter",
        "command": "-breadcrumbs.revealFocused",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "cmd+enter",
        "command": "-breadcrumbs.revealFocusedFromTreeAside",
        "when": "breadcrumbsActive && breadcrumbsVisible && listFocus && !inputFocus"
    },
    {
        "key": "cmd+enter",
        "command": "-debug.openBreakpointToSide",
        "when": "breakpointsFocused"
    },
    {
        "key": "cmd+enter",
        "command": "-editor.action.replaceAll",
        "when": "editorFocus && findWidgetVisible && replaceInputFocussed"
    },
    {
        "key": "cmd+enter",
        "command": "-scm.acceptInput",
        "when": "scmRepository"
    },
    {
        "key": "cmd+enter",
        "command": "-workbench.action.submitComment",
        "when": "commentEditorFocused"
    },
    {
        "key": "ctrl+enter",
        "command": "-search.action.openResultToSide",
        "when": "fileMatchOrMatchFocus && searchViewletVisible"
    },
    {
        "key": "ctrl+enter",
        "command": "explorer.openToSide",
        "when": "filesExplorerFocus && !inputFocus"
    },
    {
        "key": "cmd+1",
        "command": "-explorer.openToSide",
        "when": "filesExplorerFocus && !inputFocus"
    },
    {
        "key": "ctrl+alt+right",
        "command": "-cursorWordPartRight",
        "when": "textInputFocus"
    },
    {
        "key": "ctrl+alt+left",
        "command": "-cursorWordPartLeft",
        "when": "textInputFocus"
    },
    {
        "key": "ctrl+alt+right",
        "command": "workbench.action.nextEditor"
    },
    {
        "key": "ctrl+pagedown",
        "command": "-workbench.action.nextEditor"
    },
    {
        "key": "ctrl+alt+left",
        "command": "workbench.action.previousEditor"
    },
    {
        "key": "shift+cmd+[",
        "command": "-workbench.action.previousEditor"
    }
]

