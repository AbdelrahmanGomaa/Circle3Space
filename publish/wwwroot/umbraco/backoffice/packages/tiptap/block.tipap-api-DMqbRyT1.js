import { distinctUntilChanged as u } from "@umbraco-cms/backoffice/external/rxjs";
import { Node as d } from "@umbraco-cms/backoffice/external/tiptap";
import { UmbTiptapExtensionApiBase as p } from "@umbraco-cms/backoffice/tiptap";
import { UMB_BLOCK_RTE_DATA_CONTENT_KEY as i } from "@umbraco-cms/backoffice/rte";
import { UMB_BLOCK_RTE_MANAGER_CONTEXT as k } from "@umbraco-cms/backoffice/block-rte";
const m = d.create({
  name: "umbRteBlock",
  group: "block",
  content: void 0,
  // The block does not have any content, it is just a wrapper.
  atom: !0,
  // The block is an atom, meaning it is a single unit that cannot be split.
  marks: "",
  // We do not allow marks on the block
  draggable: !0,
  selectable: !0,
  addAttributes() {
    return {
      [i]: {
        isRequired: !0
      }
    };
  },
  parseHTML() {
    return [{ tag: `umb-rte-block[${i}]` }];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["umb-rte-block", e];
  },
  addCommands() {
    return {
      setBlock: (e) => ({ commands: r }) => {
        const t = { [i]: e.contentKey };
        return r.insertContent({
          type: this.name,
          attrs: t
        });
      }
    };
  }
}), b = m.extend({
  name: "umbRteBlockInline",
  group: "inline",
  inline: !0,
  parseHTML() {
    return [{ tag: `umb-rte-block-inline[${i}]` }];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["umb-rte-block-inline", e];
  },
  addCommands() {
    return {
      setBlockInline: (e) => ({ commands: r }) => {
        const t = { [i]: e.contentKey };
        return r.insertContent({
          type: this.name,
          attrs: t
        });
      }
    };
  }
});
class C extends p {
  constructor(r) {
    super(r), this.consumeContext(k, (t) => {
      this.observe(
        t.contents.pipe(
          u((n, l) => n.map((s) => s.key).join() === l.map((s) => s.key).join())
        ),
        (n) => {
          this.#e(n, t.getLayouts());
        },
        "contents"
      );
    });
  }
  getTiptapExtensions() {
    return [m, b];
  }
  #e(r, t) {
    const n = this._editor;
    if (!n) return;
    const l = Array.from(n.view.dom.querySelectorAll("umb-rte-block, umb-rte-block-inline")).map(
      (o) => o.getAttribute(i)
    );
    r.filter((o) => !l.find((c) => c === o.key)).forEach((o) => {
      t.find((a) => a.contentKey === o.key)?.displayInline ?? !1 ? n.commands.setBlockInline({ contentKey: o.key }) : n.commands.setBlock({ contentKey: o.key });
    });
  }
}
export {
  C as default
};
//# sourceMappingURL=block.tipap-api-DMqbRyT1.js.map
