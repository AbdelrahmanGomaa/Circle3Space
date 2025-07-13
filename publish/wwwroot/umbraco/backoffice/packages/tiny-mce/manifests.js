import { U as i } from "./constants-CCn8jUns.js";
import { UMB_BLOCK_RTE_PROPERTY_EDITOR_SCHEMA_ALIAS as e } from "@umbraco-cms/backoffice/rte";
const o = {
  type: "propertyEditorUi",
  alias: "Umb.PropertyEditorUi.BlockRteTypeConfiguration",
  name: "Block Rte Type Configuration Property Editor UI",
  js: () => import("./property-editor-ui-block-rte-type-configuration.element-DUb6kjTW.js"),
  meta: {
    label: "Block Rte Type Configuration",
    icon: "icon-autofill",
    group: "common"
  }
}, a = [
  {
    type: "propertyEditorUi",
    alias: i,
    name: "Rich Text Editor Property Editor UI",
    element: () => import("./property-editor-ui-tiny-mce.element-DBj-xPkL.js"),
    meta: {
      label: "Rich Text Editor [TinyMCE]",
      propertyEditorSchemaAlias: e,
      icon: "icon-browser-window",
      group: "richContent",
      supportsReadOnly: !0,
      settings: {
        properties: [
          {
            alias: "toolbar",
            label: "Toolbar",
            description: "Pick the toolbar options that should be available when editing",
            propertyEditorUiAlias: "Umb.PropertyEditorUI.TinyMCE.ToolbarConfiguration",
            weight: 10,
            config: [
              {
                alias: "toolbar",
                value: [
                  { alias: "undo", label: "Undo", icon: "undo" },
                  { alias: "redo", label: "Redo", icon: "redo" },
                  { alias: "cut", label: "Cut", icon: "cut" },
                  { alias: "copy", label: "Copy", icon: "copy" },
                  { alias: "paste", label: "Paste", icon: "paste" },
                  { alias: "styles", label: "Style select", icon: "permanent-pen" },
                  { alias: "fontname", label: "Font select", icon: "text-color" },
                  { alias: "fontsize", label: "Font size", icon: "text-color" },
                  { alias: "forecolor", label: "Text color", icon: "text-color" },
                  { alias: "backcolor", label: "Background color", icon: "highlight-bg-color" },
                  { alias: "blockquote", label: "Blockquote", icon: "quote" },
                  { alias: "formatblock", label: "Format block", icon: "format" },
                  { alias: "removeformat", label: "Remove format", icon: "remove-formatting" },
                  { alias: "bold", label: "Bold", icon: "bold" },
                  { alias: "italic", label: "Italic", icon: "italic" },
                  { alias: "underline", label: "Underline", icon: "underline" },
                  { alias: "strikethrough", label: "Strikethrough", icon: "strike-through" },
                  { alias: "alignleft", label: "Align left", icon: "align-left" },
                  { alias: "aligncenter", label: "Align center", icon: "align-center" },
                  { alias: "alignright", label: "Align right", icon: "align-right" },
                  { alias: "alignjustify", label: "Align justify", icon: "align-justify" },
                  { alias: "bullist", label: "Bullet list", icon: "unordered-list" },
                  { alias: "numlist", label: "Numbered list", icon: "ordered-list" },
                  { alias: "outdent", label: "Outdent", icon: "outdent" },
                  { alias: "indent", label: "Indent", icon: "indent" },
                  { alias: "anchor", label: "Anchor", icon: "bookmark" },
                  { alias: "table", label: "Table", icon: "table" },
                  { alias: "hr", label: "Horizontal rule", icon: "horizontal-rule" },
                  { alias: "subscript", label: "Subscript", icon: "subscript" },
                  { alias: "superscript", label: "Superscript", icon: "superscript" },
                  { alias: "charmap", label: "Character map", icon: "insert-character" },
                  { alias: "rtl", label: "Right to left", icon: "rtl" },
                  { alias: "ltr", label: "Left to right", icon: "ltr" }
                ]
              }
            ]
          },
          {
            alias: "stylesheets",
            label: "#treeHeaders_stylesheets",
            description: "Pick the stylesheets whose editor styles should be available when editing",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.StylesheetPicker",
            weight: 20
          },
          {
            alias: "dimensions",
            label: "#general_dimensions",
            description: "Set the editor dimensions",
            propertyEditorUiAlias: "Umb.PropertyEditorUI.TinyMCE.DimensionsConfiguration",
            weight: 30
          },
          {
            alias: "maxImageSize",
            label: "#rte_config_maxImageSize",
            description: "{#rte_config_maxImageSize_description}",
            propertyEditorUiAlias: "Umb.PropertyEditorUI.TinyMCE.MaxImageSizeConfiguration",
            weight: 40
          },
          {
            alias: "mode",
            label: "Mode",
            description: "Select the mode for the editor",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.RadioButtonList",
            config: [{ alias: "items", value: ["Classic", "Inline"] }],
            weight: 50
          },
          {
            alias: "overlaySize",
            label: "#rte_config_overlaySize",
            description: "{#rte_config_overlaySize_description}",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.OverlaySize",
            weight: 81
          },
          {
            alias: "hideLabel",
            label: "Hide Label",
            propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle",
            weight: 82
          }
        ],
        defaultData: [
          {
            alias: "toolbar",
            value: [
              "styles",
              "bold",
              "italic",
              "alignleft",
              "aligncenter",
              "alignright",
              "bullist",
              "numlist",
              "outdent",
              "indent",
              "sourcecode",
              "link",
              "umbmediapicker",
              "umbembeddialog"
            ]
          },
          { alias: "mode", value: "Classic" },
          { alias: "maxImageSize", value: 500 }
        ]
      }
    }
  }
], l = [
  ...a,
  o,
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUI.TinyMCE.ToolbarConfiguration",
    name: "TinyMCE Toolbar Property Editor UI",
    element: () => import("./property-editor-ui-tiny-mce-toolbar-configuration.element-tJNZeBjg.js"),
    meta: {
      label: "TinyMCE Toolbar Configuration",
      icon: "icon-autofill",
      group: "common"
    }
  },
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUI.TinyMCE.StylesheetsConfiguration",
    name: "TinyMCE Stylesheets Property Editor UI",
    element: () => import("./property-editor-ui-tiny-mce-stylesheets-configuration.element-BEayuCQb.js"),
    meta: {
      label: "TinyMCE Stylesheets Configuration",
      icon: "icon-autofill",
      group: "common"
    }
  },
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUI.TinyMCE.DimensionsConfiguration",
    name: "TinyMCE Dimensions Property Editor UI",
    element: () => import("./property-editor-ui-tiny-mce-dimensions-configuration.element-HnX45fvT.js"),
    meta: {
      label: "TinyMCE Dimensions Configuration",
      icon: "icon-autofill",
      group: "common"
    }
  },
  {
    type: "propertyEditorUi",
    alias: "Umb.PropertyEditorUI.TinyMCE.MaxImageSizeConfiguration",
    name: "TinyMCE Max Image Size Property Editor UI",
    element: () => import("./property-editor-ui-tiny-mce-maximagesize.element-Cu1t1WJ8.js"),
    meta: {
      label: "TinyMCE Max Image Size Configuration",
      icon: "icon-autofill",
      group: "common"
    }
  }
], t = [
  {
    type: "tinyMcePlugin",
    alias: "Umb.TinyMcePlugin.CodeEditor",
    name: "Code Editor TinyMCE Plugin",
    js: () => import("./tiny-mce-code-editor.plugin-B6ofbssc.js"),
    meta: {
      toolbar: [
        {
          alias: "sourcecode",
          label: "Source code editor",
          icon: "sourcecode"
        }
      ]
    }
  },
  {
    type: "tinyMcePlugin",
    alias: "Umb.TinyMcePlugin.MediaPicker",
    name: "Media Picker TinyMCE Plugin",
    js: () => import("./tiny-mce-mediapicker.plugin-Bw9830PY.js"),
    meta: {
      toolbar: [
        {
          alias: "umbmediapicker",
          label: "Image",
          icon: "image"
        }
      ]
    }
  },
  {
    type: "tinyMcePlugin",
    alias: "Umb.TinyMcePlugin.EmbeddedMedia",
    name: "Embedded Media TinyMCE Plugin",
    js: () => import("./tiny-mce-embeddedmedia.plugin-gd8U1Z9w.js"),
    meta: {
      toolbar: [
        {
          alias: "umbembeddialog",
          label: "Embed",
          icon: "embed"
        }
      ]
    }
  },
  {
    type: "tinyMcePlugin",
    alias: "Umb.TinyMcePlugin.BlockPicker",
    name: "Block Picker TinyMCE Plugin",
    js: () => import("./tiny-mce-block-picker.plugin-B9rjhi1w.js"),
    meta: {
      toolbar: [
        {
          alias: "umbblockpicker",
          label: "#blockEditor_insertBlock",
          icon: "visualblocks"
        }
      ]
    }
  }
], s = [...l, ...t];
export {
  s as manifests
};
//# sourceMappingURL=manifests.js.map
