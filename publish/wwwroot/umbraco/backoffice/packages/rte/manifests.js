import { U as i } from "./constants-CCLuR4UJ.js";
import { UmbBlockValueResolver as t } from "@umbraco-cms/backoffice/block";
class r extends t {
  async processValues(a, e) {
    return a.value ? {
      ...a,
      value: {
        ...a.value,
        blocks: await this._processValueBlockData(a.value.blocks, e)
      }
    } : a;
  }
  async processVariants(a, e) {
    return a.value ? {
      ...a,
      value: {
        ...a.value,
        blocks: await this._processVariantBlockData(a.value.blocks, e)
      }
    } : a;
  }
}
const o = {
  type: "propertyValueResolver",
  alias: "Umb.PropertyValueResolver.RichTextBlocks",
  name: "Block Value Resolver",
  api: r,
  forEditorAlias: i
}, s = {
  type: "propertyEditorSchema",
  name: "Rich Text",
  alias: "Umbraco.RichText",
  meta: {
    defaultPropertyEditorUiAlias: "Umb.PropertyEditorUi.Tiptap",
    settings: {
      properties: [
        {
          alias: "blocks",
          label: "#rte_config_blocks",
          description: "{#rte_config_blocks_description}",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.BlockRteTypeConfiguration",
          weight: 80
        },
        {
          alias: "mediaParentId",
          label: "#rte_config_mediaParentId",
          description: "{#rte_config_mediaParentId_description}",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.MediaEntityPicker",
          config: [{ alias: "validationLimit", value: { min: 0, max: 1 } }],
          weight: 90
        },
        {
          alias: "ignoreUserStartNodes",
          label: "#rte_config_ignoreUserStartNodes",
          propertyEditorUiAlias: "Umb.PropertyEditorUi.Toggle",
          weight: 100
        }
      ]
    }
  }
}, l = [
  {
    type: "propertyValidationPathTranslator",
    alias: "Umb.PropertyValidationPathTranslator.RTE",
    name: "Rich Text Property Validation Path Translator",
    forEditorAlias: i,
    api: () => import("./rte-validation-property-path-translator.api-B2SJ42KS.js")
  }
], m = [
  ...l,
  o,
  s
];
export {
  m as manifests
};
//# sourceMappingURL=manifests.js.map
